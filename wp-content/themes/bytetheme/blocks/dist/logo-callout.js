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
  registerBlockType('bytetheme/logo-callout', {
    title: 'Logo Callout',
    icon: 'shield',
    category: 'custom',
    attributes: {
      "carefirstImage": {
        "type": "object",
        "default": "http://placehold.it/320x60",
        "selector": "img"
      },
      "carefirstCaption": {
        "type": "string"
      },
      "lifebridgeImage": {
        "type": "object",
        "default": "http://placehold.it/320x44",
        "selector": "img"
      },
      "lifebridgeCaption": {
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
      }), React.createElement("div", {
        className: "editor_item"
      }, React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
        onSelect: function onSelect(value) {
          return handleSingleChange(value, 'carefirstImage');
        },
        allowedTypes: ['image'],
        render: function render(_ref2) {
          var open = _ref2.open;
          return React.createElement("img", {
            src: typeof attributes.carefirstImage == 'string' ? attributes.carefirstImage : attributes.carefirstImage.sizes.full.url,
            onClick: open
          });
        }
      })), React.createElement("label", {
        className: "editor_label"
      }, "Carefirst Caption"), React.createElement(RichText, {
        value: attributes.carefirstCaption,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'carefirstCaption');
        }
      }), React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
        onSelect: function onSelect(value) {
          return handleSingleChange(value, 'lifebridgeImage');
        },
        allowedTypes: ['image'],
        render: function render(_ref3) {
          var open = _ref3.open;
          return React.createElement("img", {
            src: typeof attributes.lifebridgeImage == 'string' ? attributes.lifebridgeImage : attributes.lifebridgeImage.sizes.full.url,
            onClick: open
          });
        }
      })), React.createElement("label", {
        className: "editor_label"
      }, "Lifebridge Caption"), React.createElement(RichText, {
        value: attributes.lifebridgeCaption,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'lifebridgeCaption');
        }
      })));
    },
    save: function save(_ref4) {
      var attributes = _ref4.attributes;
      return React.createElement("div", {
        className: "logo_callout"
      }, React.createElement("div", {
        className: "logo_callout_inner"
      }, React.createElement("figure", {
        className: "logo_callout_figure"
      }, typeof attributes.carefirstImage == 'string' ? React.createElement("img", {
        className: "logo_callout_image",
        src: attributes.carefirstImage,
        alt: ""
      }) : React.createElement("img", {
        className: "logo_callout_image",
        srcset: attributes.carefirstImage.sizes.medium.url + ' 300w,' + attributes.carefirstImage.sizes.full.url + ' 980w',
        src: attributes.carefirstImage.sizes.thumbnail.url,
        alt: attributes.carefirstImage.alt
      }), React.createElement("figcaption", {
        className: "logo_callout_caption"
      }, attributes.carefirstCaption)), React.createElement("figure", {
        className: "logo_callout_figure"
      }, typeof attributes.lifebridgeImage == 'string' ? React.createElement("img", {
        className: "logo_callout_image",
        src: attributes.lifebridgeImage,
        alt: ""
      }) : React.createElement("img", {
        className: "logo_callout_image",
        srcset: attributes.lifebridgeImage.sizes.medium.url + ' 300w,' + attributes.lifebridgeImage.sizes.full.url + ' 980w',
        src: attributes.lifebridgeImage.sizes.thumbnail.url,
        alt: attributes.lifebridgeImage.alt
      }), React.createElement("figcaption", {
        className: "logo_callout_caption"
      }, attributes.lifebridgeCaption))));
    }
  });
})();