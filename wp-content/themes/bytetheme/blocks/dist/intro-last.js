"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$blockEditor = wp.blockEditor,
      MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
      MediaUpload = _wp$blockEditor.MediaUpload,
      RichText = _wp$blockEditor.RichText;
  registerBlockType('bytetheme/intro-last', {
    title: 'Intro Last',
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
        "default": "http://placehold.it/590x400",
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
      }, "Intro Last"), React.createElement("div", {
        className: "editor_item"
      }, React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
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
      })), React.createElement("label", {
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
      })));
    },
    save: function save(_ref3) {
      var attributes = _ref3.attributes;
      return React.createElement("div", {
        className: "intro_last"
      }, React.createElement("div", {
        className: "intro_last_inner"
      }, React.createElement("div", {
        className: "intro_last_row"
      }, React.createElement("figure", {
        className: "intro_last_figure"
      }, typeof attributes.image == 'string' ? React.createElement("img", {
        className: "intro_last_image",
        src: attributes.image,
        alt: ""
      }) : React.createElement("img", {
        className: "intro_last_image",
        srcset: attributes.image.sizes.medium.url + ' 300w,' + attributes.image.sizes.full.url + ' 980w',
        src: attributes.image.sizes.thumbnail.url,
        alt: attributes.image.alt
      })), React.createElement("div", {
        className: "intro_last_body"
      }, React.createElement(RichText.Content, {
        className: "intro_last_title",
        tagName: "h2",
        value: attributes.title
      }), React.createElement(RichText.Content, {
        className: "intro_last_caption",
        tagName: "p",
        value: attributes.caption
      })))));
    }
  });
})();