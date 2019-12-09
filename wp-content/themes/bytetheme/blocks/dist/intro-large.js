"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var registerBlockType = wp.blocks.registerBlockType;
  var RichText = wp.blockEditor.RichText;
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