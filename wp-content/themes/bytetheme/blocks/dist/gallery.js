"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(function () {
  var registerBlockType = wp.blocks.registerBlockType;
  var Button = wp.components.Button;
  var _wp$blockEditor = wp.blockEditor,
      MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
      MediaUpload = _wp$blockEditor.MediaUpload,
      RichText = _wp$blockEditor.RichText;
  registerBlockType('bytetheme/gallery', {
    title: 'Gallery Carousel',
    icon: 'shield',
    category: 'custom',
    attributes: {
      items: {
        type: 'array',
        "default": []
      }
    },
    edit: function edit(_ref) {
      var attributes = _ref.attributes,
          setAttributes = _ref.setAttributes;

      var handleAddItem = function handleAddItem() {
        var items = _toConsumableArray(attributes.items);

        items.push({
          img: 'http://placehold.it/980x552',
          caption: ''
        });
        setAttributes({
          items: items
        });
      };

      var handleRemoveItem = function handleRemoveItem(index) {
        var items = _toConsumableArray(attributes.items);

        items.splice(index, 1);
        setAttributes({
          items: items
        });
      };

      var handleItemChange = function handleItemChange(index, value, type) {
        var items = _toConsumableArray(attributes.items);

        items[index][type] = value;
        setAttributes({
          items: items
        });
      };

      var itemFields;

      if (attributes.items.length) {
        itemFields = attributes.items.map(function (item, index) {
          return React.createElement("div", {
            className: "editor_item"
          }, React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
            onSelect: function onSelect(value) {
              return handleItemChange(index, value, 'img');
            },
            allowedTypes: ['image'],
            render: function render(_ref2) {
              var open = _ref2.open;
              return React.createElement("img", {
                src: typeof item.img == 'string' ? item.img : item.img.sizes.full.url,
                onClick: open
              });
            }
          })), React.createElement("label", {
            className: "editor_label"
          }, "Caption"), React.createElement(RichText, {
            value: item.caption,
            onChange: function onChange(value) {
              return handleItemChange(index, value, 'caption');
            }
          }), React.createElement(Button, {
            className: "editor_button",
            isDefault: true,
            onClick: function onClick() {
              return handleRemoveItem(index);
            }
          }, "Remove Item"));
        });
      }

      return [React.createElement("div", {
        className: "editor_wrapper"
      }, React.createElement("h2", {
        className: "editor_title"
      }, "Gallery Carousel"), itemFields, React.createElement(Button, {
        className: "editor_button",
        isDefault: true,
        onClick: handleAddItem
      }, "Add Item"))];
    },
    save: function save(_ref3) {
      var attributes = _ref3.attributes;
      var items = attributes.items.map(function (item, index) {
        return React.createElement("div", {
          className: "gallery_item"
        }, React.createElement("figure", {
          className: "gallery_figure",
          "aria-hidden": "true"
        }, typeof item.img == 'string' ? React.createElement("img", {
          className: "gallery_image",
          src: item.img,
          alt: ""
        }) : React.createElement("img", {
          className: "gallery_image",
          srcset: item.img.sizes.medium.url + ' 300w,' + item.img.sizes.large.url + ' 740w,' + item.img.sizes.full.url + ' 980w',
          src: item.img.sizes.thumbnail.url,
          alt: item.img.alt
        }), React.createElement("figcaption", {
          "class": "gallery_details"
        }, React.createElement("span", {
          "class": "gallery_index"
        }, React.createElement("span", {
          "class": "gallery_index_number"
        }, index + 1), React.createElement("span", {
          "class": "gallery_index_label"
        }, " of "), React.createElement("span", {
          "class": "gallery_index_number"
        }, attributes.items.length)), item.caption.length > 0 && React.createElement(RichText.Content, {
          className: "gallery_item_caption",
          tagName: "p",
          value: item.caption
        }))));
      });
      return React.createElement("div", {
        className: "gallery"
      }, React.createElement("div", {
        className: "gallery_inner"
      }, React.createElement("div", {
        className: "gallery_items"
      }, items)));
    }
  });
})();