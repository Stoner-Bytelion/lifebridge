"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$blockEditor = wp.blockEditor,
      MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
      MediaUpload = _wp$blockEditor.MediaUpload,
      RichText = _wp$blockEditor.RichText,
      URLInputButton = _wp$blockEditor.URLInputButton;
  registerBlockType('bytetheme/background-callout', {
    title: 'Background Callout',
    icon: 'shield',
    category: 'custom',
    attributes: {
      "title": {
        "type": "string"
      },
      "caption": {
        "type": "string"
      },
      "linkLabel": {
        "type": "string"
      },
      "linkUrl": {
        "type": "string"
      },
      "background": {
        "type": "object",
        "default": "http://placehold.it/1400x700",
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
      }, "Background Callout"), React.createElement("div", {
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
      }), React.createElement("label", {
        className: "editor_label"
      }, "Link Label"), React.createElement(RichText, {
        value: attributes.linkLabel,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'linkLabel');
        }
      }), React.createElement("label", {
        className: "editor_label"
      }, "Link Url"), React.createElement(URLInputButton, {
        url: attributes.url,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'url');
        }
      }), React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
        onSelect: function onSelect(value) {
          return handleSingleChange(value, 'background');
        },
        allowedTypes: ['image'],
        render: function render(_ref2) {
          var open = _ref2.open;
          return React.createElement("img", {
            src: typeof attributes.background == 'string' ? attributes.background : attributes.background.sizes.full.url,
            onClick: open
          });
        }
      }))));
    },
    save: function save(_ref3) {
      var attributes = _ref3.attributes;
      return React.createElement("div", {
        className: "background_callout"
      }, React.createElement("figure", {
        className: "background_callout_figure"
      }, typeof attributes.background == "string" ? React.createElement("img", {
        className: "background_callout_image",
        src: attributes.background,
        alt: ""
      }) : React.createElement("img", {
        className: "background_callout_image",
        srcset: attributes.background.sizes.medium.url + ' 300w,' + attributes.background.sizes.large.url + ' 740w,' + attributes.background.sizes.full.url + ' 980w',
        src: attributes.background.sizes.thumbnail.url,
        alt: attributes.background.alt
      })), React.createElement("div", {
        className: "background_callout_inner"
      }, React.createElement("div", {
        className: "background_callout_body"
      }, React.createElement(RichText.Content, {
        className: "background_callout_title",
        tagName: "h2",
        value: attributes.title
      }), React.createElement(RichText.Content, {
        className: "background_callout_caption",
        tagName: "p",
        value: attributes.caption
      }), React.createElement("a", {
        className: "background_callout_link",
        href: attributes.linkUrl
      }, React.createElement("span", {
        className: "background_callout_link_label"
      }, attributes.linkLabel), React.createElement("span", {
        className: "background_callout_link_icon"
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