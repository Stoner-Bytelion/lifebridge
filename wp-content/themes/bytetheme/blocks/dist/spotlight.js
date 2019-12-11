"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$blockEditor = wp.blockEditor,
      MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
      MediaUpload = _wp$blockEditor.MediaUpload,
      RichText = _wp$blockEditor.RichText;
  registerBlockType('bytetheme/spotlight', {
    title: 'Spotlight',
    icon: 'shield',
    category: 'custom',
    attributes: {
      "subtitle": {
        "type": "string"
      },
      "title": {
        "type": "string"
      },
      "caption": {
        "type": "string"
      },
      "quoteText": {
        "type": "string"
      },
      "quoteName": {
        "type": "string"
      },
      "quoteImage": {
        "type": "object",
        "default": "http://placehold.it/110",
        "selector": "img"
      },
      "featureImage": {
        "type": "object",
        "default": "http://placehold.it/540x385",
        "selector": "img"
      },
      "featureCaption": {
        "type": "string"
      },
      "miscText": {
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
      }, "Spotlight"), React.createElement("div", {
        className: "editor_item"
      }, React.createElement("label", {
        className: "editor_label"
      }, "subtitle"), React.createElement(RichText, {
        value: attributes.subtitle,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'subtitle');
        }
      }), React.createElement("label", {
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
      }, "Quote Text"), React.createElement(RichText, {
        value: attributes.quoteText,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'quoteText');
        }
      }), React.createElement("label", {
        className: "editor_label"
      }, "Quote Name"), React.createElement(RichText, {
        value: attributes.quoteName,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'quoteName');
        }
      }), React.createElement("label", {
        className: "editor_label"
      }, "Quote Image"), React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
        onSelect: function onSelect(value) {
          return handleSingleChange(value, 'quoteImage');
        },
        allowedTypes: ['image'],
        render: function render(_ref2) {
          var open = _ref2.open;
          return React.createElement("img", {
            src: typeof attributes.quoteImage == 'string' ? attributes.quoteImage : attributes.quoteImage.sizes.full.url,
            onClick: open
          });
        }
      })), React.createElement("label", {
        className: "editor_label"
      }, "Feature Image"), React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
        onSelect: function onSelect(value) {
          return handleSingleChange(value, 'featureImage');
        },
        allowedTypes: ['image'],
        render: function render(_ref3) {
          var open = _ref3.open;
          return React.createElement("img", {
            src: typeof attributes.featureImage == 'string' ? attributes.featureImage : attributes.featureImage.sizes.full.url,
            onClick: open
          });
        }
      })), React.createElement("label", {
        className: "editor_label"
      }, "Feature Caption"), React.createElement(RichText, {
        value: attributes.featureCaption,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'featureCaption');
        }
      }), React.createElement("label", {
        className: "editor_label"
      }, "miscText"), React.createElement(RichText, {
        value: attributes.miscText,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'miscText');
        }
      })));
    },
    save: function save(_ref4) {
      var attributes = _ref4.attributes;
      return React.createElement("div", {
        className: "spotlight"
      }, React.createElement("div", {
        className: "spotlight_inner"
      }, React.createElement("div", {
        className: "spotlight_body"
      }, React.createElement("div", {
        className: "spotlight_header"
      }, React.createElement(RichText.Content, {
        className: "spotlight_title",
        tagName: "h2",
        value: attributes.title
      }), React.createElement(RichText.Content, {
        className: "spotlight_subtitle",
        tagName: "p",
        value: attributes.subtitle
      })), React.createElement(RichText.Content, {
        className: "spotlight_caption",
        tagName: "p",
        value: attributes.caption
      }), React.createElement("blockquote", {
        className: "spotlight_quote"
      }, React.createElement("span", {
        className: "spotlight_quote_mark"
      }, React.createElement("svg", {
        width: "88",
        height: "98",
        viewBox: "0 0 88 98",
        fill: "",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        d: "M0 48.912V97.824H39V48.912H13C13 30.932 24.664 16.304 39 16.304V0.00399835C17.494 -1.6506e-06 0 21.94 0 48.912Z",
        fill: ""
      }), React.createElement("path", {
        d: "M49 48.912V97.824H88V48.912H62C62 30.932 73.664 16.304 88 16.304V0.00399835C66.494 -1.6506e-06 49 21.94 49 48.912Z",
        fill: ""
      }))), React.createElement(RichText.Content, {
        className: "spotlight_quote_text",
        tagName: "p",
        value: attributes.quoteText
      }), React.createElement("div", {
        className: "spotlight_quote_details"
      }, React.createElement(RichText.Content, {
        className: "spotlight_quote_name",
        tagName: "p",
        value: attributes.quoteName
      }), typeof attributes.quoteImage == 'string' ? React.createElement("img", {
        className: "spotlight_quote_image",
        src: attributes.quoteImage,
        alt: ""
      }) : React.createElement("img", {
        className: "spotlight_quote_image",
        src: attributes.quoteImage.sizes.medium.url,
        alt: attributes.quoteImage.alt
      })), React.createElement("span", {
        className: "spotlight_quote_mark"
      }, React.createElement("svg", {
        width: "88",
        height: "98",
        viewBox: "0 0 88 98",
        fill: "",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        d: "M88 48.9123V0.000585132H49.0002V48.9123H75.0001C75.0001 66.8922 63.3361 81.5202 49.0002 81.5202V97.8201C70.5061 97.8241 88 75.8842 88 48.9123Z",
        fill: ""
      }), React.createElement("path", {
        d: "M39 48.9123V0.000585132H0.000195265V48.9123H26.0001C26.0001 66.8922 14.3361 81.5202 0.000195265 81.5202V97.8201C21.5061 97.8241 39 75.8842 39 48.9123Z",
        fill: ""
      }))))), React.createElement("div", {
        className: "spotlight_aside"
      }, React.createElement("figure", {
        className: "spotlight_feature_figure"
      }, typeof attributes.featureImage == 'string' ? React.createElement("img", {
        className: "spotlight_aside_image",
        src: attributes.featureImage,
        alt: ""
      }) : React.createElement("img", {
        className: "spotlight_aside_image",
        srcset: attributes.featureImage.sizes.medium.url + ' 300w,' + attributes.featureImage.sizes.large.url + ' 740w,' + attributes.featureImage.sizes.full.url + ' 980w',
        src: attributes.featureImage.sizes.medium.url,
        alt: attributes.featureImage.alt
      }), React.createElement(RichText.Content, {
        className: "spotlight_feature_figcaption",
        tagName: "figcaption",
        value: attributes.featureCaption
      })))), React.createElement("div", {
        "class": "spotlight_footer"
      }, React.createElement(RichText.Content, {
        className: "spotlight_misc_text",
        tagName: "p",
        value: attributes.miscText
      })));
    }
  });
})();