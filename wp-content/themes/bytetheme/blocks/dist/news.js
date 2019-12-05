"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(function () {
  var registerBlockType = wp.blocks.registerBlockType;
  var Button = wp.components.Button;
  var _wp$editor = wp.editor,
      MediaUploadCheck = _wp$editor.MediaUploadCheck,
      MediaUpload = _wp$editor.MediaUpload,
      RichText = _wp$editor.RichText,
      URLInputButton = _wp$editor.URLInputButton;
  registerBlockType('bytetheme/news', {
    title: 'News',
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
          img: 'http://placehold.it/500x282',
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

        if (type == "img") {
          value = value.sizes.full.url;
        }

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
              return handleItemChange(index, value, "img");
            },
            allowedTypes: ['image'],
            render: function render(_ref2) {
              var open = _ref2.open;
              return React.createElement("img", {
                src: item.img,
                onClick: open
              });
            }
          })), React.createElement("label", {
            className: "editor_label"
          }, "Title"), React.createElement(RichText, {
            value: item.title,
            onChange: function onChange(value) {
              return handleItemChange(index, value, "title");
            }
          }), React.createElement("label", {
            className: "editor_label"
          }, "Caption"), React.createElement(RichText, {
            value: item.label,
            onChange: function onChange(value) {
              return handleItemChange(index, value, "label");
            }
          }), React.createElement(URLInputButton, {
            url: item.url,
            onChange: function onChange(value) {
              return handleItemChange(index, value, "url");
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
      }, "In the news"), itemFields, React.createElement(Button, {
        className: "editor_button",
        isDefault: true,
        onClick: handleAddItem
      }, "Add Item"))];
    },
    save: function save(props) {
      var items = props.attributes.items.map(function (item, index) {
        return React.createElement("div", {
          className: "news_item"
        }, React.createElement("a", {
          className: "news_item_link",
          href: item.url
        }, React.createElement("figure", {
          className: "news_item_figure",
          "aria-hidden": "true"
        }, React.createElement("img", {
          className: "news_item_image",
          src: item.img,
          alt: ""
        }), React.createElement("figcaption", {
          "class": "news_item_details"
        }, React.createElement(RichText.Content, {
          className: "news_item_title",
          tagName: "h2",
          value: item.title
        }), React.createElement(RichText.Content, {
          className: "news_item_label",
          tagName: "p",
          value: item.label
        }), React.createElement("span", {
          className: "news_item_faux"
        }, "Read article")))));
      });
      return React.createElement("div", {
        className: "news"
      }, React.createElement("div", {
        className: "news_inner"
      }, React.createElement("div", {
        className: "news_header"
      }, React.createElement("h2", {
        className: "news_title"
      }, "In the news")), React.createElement("div", {
        className: "news_items"
      }, items)));
    }
  });
})();