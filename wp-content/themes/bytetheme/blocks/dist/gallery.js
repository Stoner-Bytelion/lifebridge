"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      RichText = _wp$blockEditor.RichText,
      URLInputButton = _wp$blockEditor.URLInputButton;
  registerBlockType('bytetheme/gallery', {
    title: 'Gallery Carousel',
    icon: 'shield',
    category: 'custom',
    attributes: {
      title: {
        type: 'string'
      },
      caption: {
        type: 'string'
      },
      items: {
        type: 'array',
        "default": []
      },
      url: {
        type: 'string'
      }
    },
    edit: function edit(_ref) {
      var attributes = _ref.attributes,
          setAttributes = _ref.setAttributes;

      var handleAddItem = function handleAddItem() {
        var items = _toConsumableArray(attributes.items);

        items.push({
          img: 'http://placehold.it/380x380',
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

      var handleSingleChange = function handleSingleChange(value, type) {
        var change = _defineProperty({}, type, value);

        setAttributes(change);
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
          })), React.createElement(Button, {
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
      }, "Gallery Carousel"), React.createElement("label", {
        className: "editor_label"
      }, "Title"), React.createElement(RichText, {
        value: attributes.title,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'title');
        }
      }), React.createElement("label", {
        className: "editor_label"
      }, "Caption"), React.createElement(RichText, {
        value: attributes.caption,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'caption');
        }
      }), itemFields, React.createElement("label", {
        className: "editor_label"
      }, "Learn More Link"), React.createElement(URLInputButton, {
        url: attributes.url,
        onChange: function onChange(value) {
          return handleSingleChange(value, "url");
        }
      }), React.createElement(Button, {
        className: "editor_button",
        isDefault: true,
        onClick: handleAddItem
      }, "Add Item"))];
    },
    save: function save(_ref3) {
      var attributes = _ref3.attributes;
      var items = attributes.items.map(function (item, index) {
        return React.createElement("div", {
          className: "gallery_item",
          "data-index": index
        }, React.createElement("figure", {
          className: "gallery_figure",
          "aria-hidden": "true"
        }, typeof item.img == 'string' ? React.createElement("img", {
          className: "gallery_image",
          src: item.img,
          alt: ""
        }) : React.createElement("img", {
          className: "gallery_image",
          src: item.img.sizes.medium.url,
          alt: item.img.alt
        })));
      });
      var boxes = attributes.items.map(function (item, index) {
        return React.createElement("div", {
          className: "gallery_box_item",
          "data-index": index
        }, React.createElement("figure", {
          className: "gallery_box_figure",
          "aria-hidden": "true"
        }, typeof item.img == 'string' ? React.createElement("img", {
          className: "gallery_box_image",
          src: item.img,
          alt: ""
        }) : React.createElement("img", {
          className: "gallery_box_image",
          srcset: item.img.sizes.medium.url + ' 300w,' + item.img.sizes.large.url + ' 740w,' + item.img.sizes.full.url + ' 980w',
          src: item.img.sizes.medium.url,
          alt: item.img.alt
        })));
      });
      return React.createElement("div", {
        className: "gallery"
      }, React.createElement("div", {
        className: "gallery_inner"
      }, React.createElement("div", {
        className: "gallery_header"
      }, React.createElement(RichText.Content, {
        className: "gallery_title",
        tagName: "h2",
        value: attributes.title
      }), React.createElement(RichText.Content, {
        className: "gallery_caption",
        tagName: "p",
        value: attributes.caption
      })), React.createElement("div", {
        className: "gallery_items"
      }, items), React.createElement("div", {
        className: "gallery_box"
      }, React.createElement("div", {
        className: "gallery_box_items"
      }, boxes), React.createElement("button", {
        className: "gallery_box_close"
      }, "Close"))));
    }
  });
})();