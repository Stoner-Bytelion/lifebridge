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

      var handleAddItem = function handleAddItem() {
        var items = _toConsumableArray(attributes.items);

        items.push({
          img: 'http://placehold.it/205x340',
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
      }, React.createElement("p", {
        className: "quote_text"
      }, attributes.leftQuote), React.createElement("span", {
        className: "quote_author"
      }, attributes.leftAuthor)))), React.createElement("blockquote", {
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