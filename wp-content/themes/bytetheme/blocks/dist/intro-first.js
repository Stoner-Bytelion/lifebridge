"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$blockEditor = wp.blockEditor,
      MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
      MediaUpload = _wp$blockEditor.MediaUpload,
      RichText = _wp$blockEditor.RichText;
  registerBlockType('bytetheme/intro-first', {
    title: 'Intro First',
    icon: 'shield',
    category: 'custom',
    attributes: {
      "title": {
        "type": "string"
      },
      "caption": {
        "type": "string"
      },
      "image": {
        "type": "object",
        "default": "http://placehold.it/660x450",
        "selector": "img"
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
      }, "Intro First"), React.createElement("div", {
        className: "editor_item"
      }, React.createElement("label", {
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
      }), React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
        onSelect: function onSelect(value) {
          return handleSingleChange(value, 'image');
        },
        allowedTypes: ['image'],
        render: function render(_ref2) {
          var open = _ref2.open;
          return React.createElement("img", {
            src: typeof attributes.image != 'string' ? attributes.image.sizes.full.url : attributes.image,
            onClick: open
          });
        }
      }))));
    },
    save: function save(_ref3) {
      var attributes = _ref3.attributes;
      return React.createElement("div", {
        className: "intro_first"
      }, React.createElement("div", {
        className: "intro_first_inner"
      }, React.createElement("div", {
        className: "intro_first_body"
      }, React.createElement("div", {
        className: "intro_first_content"
      }, React.createElement(RichText.Content, {
        className: "intro_first_title",
        tagName: "h2",
        value: attributes.title
      }), React.createElement(RichText.Content, {
        className: "intro_first_caption",
        tagName: "p",
        value: attributes.caption
      }))), React.createElement("figure", {
        className: "intro_first_figure"
      }, typeof attributes.image == 'string' ? React.createElement("img", {
        className: "intro_first_image",
        src: attributes.image,
        alt: ""
      }) : React.createElement("img", {
        className: "intro_first_image",
        srcset: attributes.image.sizes.medium.url + ' 300w,' + attributes.image.sizes.full.url + ' 980w',
        src: attributes.image.sizes.thumbnail.url,
        alt: attributes.image.alt
      }))));
    }
  });
})();