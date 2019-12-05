"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$editor = wp.editor,
      RichText = _wp$editor.RichText,
      URLInputButton = _wp$editor.URLInputButton;
  registerBlockType('bytetheme/call-to-action', {
    title: 'Call to Action',
    icon: 'shield',
    category: 'custom',
    attributes: {
      title: {
        type: 'string'
      },
      caption: {
        type: 'string'
      },
      url: {
        type: 'string'
      }
    },
    edit: function edit(_ref) {
      var attributes = _ref.attributes,
          setAttributes = _ref.setAttributes;

      var handleItemChange = function handleItemChange(value, type) {
        var change = _defineProperty({}, type, value);

        setAttributes(change);
      };

      return React.createElement("div", {
        className: "editor_wrapper"
      }, React.createElement("h2", {
        className: "editor_title"
      }, "Call to Action"), React.createElement("div", {
        className: "editor_item"
      }, React.createElement("label", {
        className: "editor_label"
      }, "Title"), React.createElement(RichText, {
        placeholder: "Title",
        value: attributes.title,
        onChange: function onChange(value) {
          return handleItemChange(value, "title");
        }
      }), React.createElement("label", {
        className: "editor_label"
      }, "Caption"), React.createElement(RichText, {
        value: attributes.caption,
        onChange: function onChange(value) {
          return handleItemChange(value, "caption");
        }
      }), React.createElement(URLInputButton, {
        url: attributes.url,
        onChange: function onChange(value) {
          return handleItemChange(value, "url");
        }
      })));
    },
    save: function save(_ref2) {
      var attributes = _ref2.attributes;
      return React.createElement("div", {
        className: "cta_block"
      }, React.createElement("div", {
        className: "cta_block_inner"
      }, React.createElement("div", {
        className: "cta"
      }, React.createElement(RichText.Content, {
        className: "cta_title",
        tagName: "h2",
        value: attributes.title
      }), React.createElement(RichText.Content, {
        className: "cta_caption",
        tagName: "p",
        value: attributes.caption
      }), React.createElement("a", {
        className: "cta_link",
        href: attributes.url
      }, "Read More"))));
    }
  });
})();