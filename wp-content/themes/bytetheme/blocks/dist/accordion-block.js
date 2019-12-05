"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(function () {
  var registerBlockType = wp.blocks.registerBlockType;
  var Button = wp.components.Button;
  var RichText = wp.blockEditor.RichText;
  registerBlockType('bytetheme/accordion-block', {
    title: 'Accordion',
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
          title: '',
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
          }, React.createElement("label", {
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
      }, "Accordion"), itemFields, React.createElement(Button, {
        className: "editor_button",
        isDefault: true,
        onClick: handleAddItem
      }, "Add Item"))];
    },
    save: function save(_ref2) {
      var attributes = _ref2.attributes;
      var items = attributes.items.map(function (item) {
        return React.createElement("li", {
          className: "accordion"
        }, React.createElement("button", {
          className: "accordion_trigger"
        }, React.createElement(RichText.Content, {
          className: "accordion_title",
          tagName: "span",
          value: item.title
        }), React.createElement("span", {
          className: "accordion_icon"
        }, React.createElement("svg", {
          width: "14px",
          height: "14px",
          viewBox: "0 0 14 14",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        }, React.createElement("polygon", {
          points: "6 6 6 0 8 0 8 6 14 6 14 8 8 8 8 14 6 14 6 8 0 8 0 6"
        })))), React.createElement("div", {
          className: "accordion_content"
        }, React.createElement(RichText.Content, {
          className: "accordion_caption",
          tagName: "p",
          value: item.caption
        })));
      });
      return React.createElement("div", {
        className: "accordion_block"
      }, React.createElement("div", {
        className: "accordion_block_inner"
      }, React.createElement("ul", {
        className: "accordion_items"
      }, items)));
    }
  });
})();