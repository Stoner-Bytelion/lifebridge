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
  registerBlockType('bytetheme/events', {
    title: 'Events',
    icon: 'shield',
    category: 'custom',
    attributes: {
      "title": {
        "type": "string"
      },
      "items": {
        "type": "array",
        "default": []
      }
    },
    edit: function edit(_ref) {
      var attributes = _ref.attributes,
          setAttributes = _ref.setAttributes;

      var handleAddItem = function handleAddItem() {
        var items = _toConsumableArray(attributes.items);

        items.push({
          month: '',
          year: '',
          title: '',
          caption: '',
          url: ''
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
          }, React.createElement("label", {
            className: "editor_label"
          }, "Month"), React.createElement(RichText, {
            value: item.month,
            onChange: function onChange(value) {
              return handleItemChange(index, value, 'month');
            }
          }), React.createElement("label", {
            className: "editor_label"
          }, "Year"), React.createElement(RichText, {
            value: item.year,
            onChange: function onChange(value) {
              return handleItemChange(index, value, 'year');
            }
          }), React.createElement("label", {
            className: "editor_label"
          }, "Title"), React.createElement(RichText, {
            value: item.title,
            onChange: function onChange(value) {
              return handleItemChange(index, value, 'title');
            }
          }), React.createElement("label", {
            className: "editor_label"
          }, "Caption"), React.createElement(RichText, {
            value: item.caption,
            onChange: function onChange(value) {
              return handleItemChange(index, value, 'caption');
            }
          }), React.createElement("label", {
            className: "editor_label"
          }, "Url"), React.createElement(URLInputButton, {
            url: item.url,
            onChange: function onChange(value) {
              return handleItemChange(index, value, 'url');
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
      }, "Events"), React.createElement("label", {
        className: "editor_label"
      }, "Title"), React.createElement(RichText, {
        value: attributes.title,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'title');
        }
      }), itemFields, React.createElement(Button, {
        className: "editor_button",
        isDefault: true,
        onClick: handleAddItem
      }, "Add Item"))];
    },
    save: function save(_ref2) {
      var attributes = _ref2.attributes;
      var items = attributes.items.map(function (item) {
        return React.createElement("li", {
          className: "event"
        }, React.createElement("time", {
          className: "event_date"
        }, React.createElement(RichText.Content, {
          className: "event_month",
          tagName: "div",
          value: item.month
        }), React.createElement(RichText.Content, {
          className: "event_year",
          tagName: "div",
          value: item.year
        })), React.createElement("div", {
          className: "event_body"
        }, React.createElement("div", {
          className: "event_group"
        }, React.createElement(RichText.Content, {
          className: "event_title",
          tagName: "h2",
          value: item.title
        }), React.createElement(RichText.Content, {
          className: "event_caption",
          tagName: "p",
          value: item.caption
        })), React.createElement("div", {
          className: "event_group"
        }, item.url !== '' ? React.createElement("a", {
          className: "event_link",
          href: item.url
        }, React.createElement("span", {
          className: "event_link_label"
        }, "Sign Up"), React.createElement("span", {
          className: "event_link_icon"
        }, React.createElement("svg", {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          width: "32",
          height: "32",
          viewBox: "0 0 32 32"
        }, React.createElement("path", {
          d: "M15.057 7.609l7.057 7.057h-15.448c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333h15.448l-7.057 7.057c-0.521 0.521-0.521 1.365 0 1.885s1.365 0.521 1.885 0l9.333-9.333c0.128-0.128 0.224-0.276 0.289-0.433 0.065-0.16 0.1-0.329 0.101-0.499 0.001-0.177-0.032-0.355-0.101-0.52-0.065-0.157-0.161-0.305-0.289-0.433l-9.333-9.333c-0.521-0.521-1.365-0.521-1.885 0s-0.521 1.365 0 1.885z"
        })))) : React.createElement("span", {
          className: "event_hint"
        }, "coming soon"))));
      });
      return React.createElement("div", {
        className: "events_block"
      }, React.createElement("div", {
        className: "events_block_inner"
      }, React.createElement("div", {
        className: "events_block_header"
      }, React.createElement(RichText.Content, {
        className: "events_block_title",
        tagName: "h2",
        value: attributes.title
      })), React.createElement("ul", {
        className: "events"
      }, items)));
    }
  });
})();