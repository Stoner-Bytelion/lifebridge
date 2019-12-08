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
  registerBlockType('bytetheme/intro-large', {
    title: 'Intro Large',
    icon: 'shield',
    category: 'custom',
    attributes: {
      "caption": {
        "type": "string"
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

        items[index][type] = value;
        setAttributes({
          items: items
        });
      };

      var handleSingleChange = function handleSingleChange(value, type) {
        var change = _defineProperty({}, type, value);

        setAttributes(change);
      };

      return React.createElement("div", {
        className: "editor_wrapper"
      }, React.createElement("h2", {
        className: "editor_title"
      }, "Intro Large"), React.createElement("div", {
        className: "editor_item"
      }, React.createElement("label", {
        className: "editor_label"
      }, "Caption"), React.createElement(RichText, {
        value: attributes.caption,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'caption');
        }
      })));
    },
    save: function save(_ref2) {
      var attributes = _ref2.attributes;
      return React.createElement("div", {
        className: "intro_large"
      }, React.createElement(RichText.Content, {
        className: "intro_large_caption",
        tagName: "p",
        value: attributes.caption
      }));
    }
  });
})();