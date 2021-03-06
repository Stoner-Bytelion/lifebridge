"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$blockEditor = wp.blockEditor,
      MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
      MediaUpload = _wp$blockEditor.MediaUpload,
      RichText = _wp$blockEditor.RichText;
  registerBlockType('bytetheme/quotes', {
    title: 'Quotes',
    icon: 'shield',
    category: 'custom',
    attributes: {
      "title": {
        "type": "string"
      },
      "leftImage": {
        "type": "object",
        "default": "http://placehold.it/205x340",
        "selector": "img"
      },
      "leftQuote": {
        "type": "string"
      },
      "leftAuthor": {
        "type": "string"
      },
      "rightImage": {
        "type": "object",
        "default": "http://placehold.it/205x340",
        "selector": "img"
      },
      "rightQuote": {
        "type": "string"
      },
      "rightAuthor": {
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
      }, "Quotes"), React.createElement("div", {
        className: "editor_item"
      }, React.createElement("label", {
        className: "editor_label"
      }, "Title"), React.createElement(RichText, {
        value: attributes.title,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'title');
        }
      }), React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
        onSelect: function onSelect(value) {
          return handleSingleChange(value, 'leftImage');
        },
        allowedTypes: ['image'],
        render: function render(_ref2) {
          var open = _ref2.open;
          return React.createElement("img", {
            src: typeof attributes.leftImage == 'string' ? attributes.leftImage : attributes.leftImage.sizes.full.url,
            onClick: open
          });
        }
      })), React.createElement("label", {
        className: "editor_label"
      }, "Left Quote"), React.createElement(RichText, {
        value: attributes.leftQuote,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'leftQuote');
        }
      }), React.createElement("label", {
        className: "editor_label"
      }, "Left Author"), React.createElement(RichText, {
        value: attributes.leftAuthor,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'leftAuthor');
        }
      }), React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
        onSelect: function onSelect(value) {
          return handleSingleChange(value, 'rightImage');
        },
        allowedTypes: ['image'],
        render: function render(_ref3) {
          var open = _ref3.open;
          return React.createElement("img", {
            src: typeof attributes.rightImage == 'string' ? attributes.rightImage : attributes.rightImage.sizes.full.url,
            onClick: open
          });
        }
      })), React.createElement("label", {
        className: "editor_label"
      }, "Right Quote"), React.createElement(RichText, {
        value: attributes.rightQuote,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'rightQuote');
        }
      }), React.createElement("label", {
        className: "editor_label"
      }, "Right Author"), React.createElement(RichText, {
        value: attributes.rightAuthor,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'rightAuthor');
        }
      })));
    },
    save: function save(_ref4) {
      var attributes = _ref4.attributes;
      return React.createElement("div", {
        className: "quotes_block"
      }, React.createElement("div", {
        className: "quotes_block_inner"
      }, React.createElement("div", {
        className: "quotes_block_header"
      }, React.createElement(RichText.Content, {
        className: "quotes_block_title",
        tagName: "h2",
        value: attributes.title
      })), React.createElement("div", {
        className: "quotes"
      }, React.createElement("blockquote", {
        className: "quote"
      }, React.createElement("figure", {
        className: "quote_figure"
      }, typeof attributes.leftImage == 'string' ? React.createElement("img", {
        className: "quote_image",
        src: attributes.leftImage,
        alt: ""
      }) : React.createElement("img", {
        className: "quote_image",
        srcset: attributes.leftImage.sizes.medium.url + ' 300w,' + attributes.leftImage.sizes.full.url + ' 980w',
        src: attributes.leftImage.sizes.thumbnail.url,
        alt: attributes.leftImage.alt
      }), React.createElement("figcaption", {
        className: "quote_caption"
      }, React.createElement("span", {
        className: "quote_caption_mark"
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
      }))), React.createElement("p", {
        className: "quote_text"
      }, attributes.leftQuote), React.createElement("span", {
        className: "quote_author"
      }, attributes.leftAuthor), React.createElement("span", {
        className: "quote_caption_mark"
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
      })))))), React.createElement("blockquote", {
        className: "quote"
      }, React.createElement("figure", {
        className: "quote_figure"
      }, typeof attributes.rightImage == 'string' ? React.createElement("img", {
        className: "quote_image",
        src: attributes.rightImage,
        alt: ""
      }) : React.createElement("img", {
        className: "quote_image",
        srcset: attributes.rightImage.sizes.medium.url + ' 300w,' + attributes.rightImage.sizes.full.url + ' 980w',
        src: attributes.rightImage.sizes.thumbnail.url,
        alt: attributes.rightImage.alt
      }), React.createElement("figcaption", {
        className: "quote_caption"
      }, React.createElement("p", {
        className: "quote_text"
      }, attributes.rightQuote), React.createElement("span", {
        className: "quote_author"
      }, attributes.rightAuthor)))))));
    }
  });
})();