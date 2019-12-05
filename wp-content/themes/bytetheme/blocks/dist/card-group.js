"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  registerBlockType('bytetheme/card-group', {
    title: 'Card Group',
    icon: 'shield',
    category: 'custom',
    attributes: {
      title: {
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
            value: item.caption,
            onChange: function onChange(value) {
              return handleItemChange(index, value, "caption");
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
      }, "Card Group"), React.createElement("label", {
        className: "editor_label"
      }, "Title"), React.createElement(RichText, {
        value: attributes.title,
        onChange: function onChange(value) {
          return handleSingleChange(value, "title");
        }
      }), itemFields, React.createElement(Button, {
        className: "editor_button",
        isDefault: true,
        onClick: handleAddItem
      }, "Add Item"), React.createElement(URLInputButton, {
        url: attributes.url,
        onChange: function onChange(value) {
          return handleSingleChange(value, "url");
        }
      }))];
    },
    save: function save(props) {
      var items = props.attributes.items.map(function (item, index) {
        return React.createElement("div", {
          className: "card_group_item"
        }, React.createElement("figure", {
          className: "card_group_item_figure",
          "aria-hidden": "true"
        }, React.createElement("img", {
          className: "card_group_item_image",
          src: item.img,
          alt: ""
        }), React.createElement("figcaption", {
          "class": "card_group_item_details"
        }, React.createElement(RichText.Content, {
          className: "card_group_item_title",
          tagName: "h2",
          value: item.title
        }), React.createElement(RichText.Content, {
          className: "card_group_item_caption",
          tagName: "p",
          value: item.caption
        }))));
      });
      return React.createElement("div", {
        className: "card_group"
      }, React.createElement("div", {
        className: "card_group_inner"
      }, React.createElement("div", {
        className: "card_group_header"
      }, React.createElement(RichText.Content, {
        className: "card_group_title",
        tagName: "h2",
        value: props.attributes.title
      })), React.createElement("div", {
        className: "card_group_items"
      }, items), React.createElement("div", {
        className: "card_group_footer"
      }, React.createElement("a", {
        className: "card_group_link",
        href: props.attributes.url
      }, React.createElement("span", {
        className: "card_group_link_label"
      }, "Get Involved"), React.createElement("span", {
        className: "card_group_link_icon"
      }, React.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, React.createElement("path", {
        d: "M15.057 7.609l7.057 7.057h-15.448c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333h15.448l-7.057 7.057c-0.521 0.521-0.521 1.365 0 1.885s1.365 0.521 1.885 0l9.333-9.333c0.128-0.128 0.224-0.276 0.289-0.433 0.065-0.16 0.1-0.329 0.101-0.499 0.001-0.177-0.032-0.355-0.101-0.52-0.065-0.157-0.161-0.305-0.289-0.433l-9.333-9.333c-0.521-0.521-1.365-0.521-1.885 0s-0.521 1.365 0 1.885z"
      })))))));
    }
  });
})();