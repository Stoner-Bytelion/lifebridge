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
      RichText = _wp$blockEditor.RichText;
  registerBlockType('bytetheme/facts-callout', {
    title: 'Facts Callout',
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
        "default": "http://placehold.it/500",
        "selector": "img"
      },
      "imageCaption": {
        "type": "string"
      },
      "background": {
        "type": "object",
        "default": "http://placehold.it/500",
        "selector": "img"
      },
      "items": {
        "type": "array",
        "default": []
      }
    },
    edit: function edit(_ref) {
      var attributes = _ref.attributes,
          setAttributes = _ref.setAttributes;

      var handleAddItem = function handleAddItem() {
        var items = _toConsumableArray(attributes.items);

        items.push({
          quantity: '',
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

      var itemFields;

      if (attributes.items.length) {
        itemFields = attributes.items.map(function (item, index) {
          return React.createElement("div", {
            className: "editor_item"
          }, React.createElement("label", {
            className: "editor_label"
          }, "Quantity"), React.createElement(RichText, {
            value: item.quantity,
            onChange: function onChange(value) {
              return handleItemChange(index, value, 'quantity');
            }
          }), React.createElement("label", {
            className: "editor_label"
          }, "Caption"), React.createElement(RichText, {
            value: item.caption,
            onChange: function onChange(value) {
              return handleItemChange(index, value, 'caption');
            }
          }), React.createElement(Button, {
            className: "editor_button",
            isDefault: true,
            onClick: function onClick() {
              return handleRemoveItem(index);
            }
          }, "Remove Item"));
        });
      }

      return React.createElement("div", {
        className: "editor_wrapper"
      }, React.createElement("h2", {
        className: "editor_title"
      }, "Facts Callout"), React.createElement("div", {
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
      }, "Image"), React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
        onSelect: function onSelect(value) {
          return handleSingleChange(value, 'image');
        },
        allowedTypes: ['image'],
        render: function render(_ref2) {
          var open = _ref2.open;
          return React.createElement("img", {
            src: typeof attributes.image == 'string' ? attributes.image : attributes.image.sizes.full.url,
            onClick: open
          });
        }
      })), React.createElement("label", {
        className: "editor_label"
      }, "Image Caption"), React.createElement(RichText, {
        value: attributes.imageCaption,
        onChange: function onChange(value) {
          return handleSingleChange(value, 'imageCaption');
        }
      }), React.createElement("label", {
        className: "editor_label"
      }, "Background"), React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
        onSelect: function onSelect(value) {
          return handleSingleChange(value, 'background');
        },
        allowedTypes: ['image'],
        render: function render(_ref3) {
          var open = _ref3.open;
          return React.createElement("img", {
            src: typeof attributes.background == 'string' ? attributes.background : attributes.background.sizes.full.url,
            onClick: open
          });
        }
      })), itemFields, React.createElement(Button, {
        className: "editor_button",
        isDefault: true,
        onClick: handleAddItem
      }, "Add Item")));
    },
    save: function save(_ref4) {
      var attributes = _ref4.attributes;
      var items = attributes.items.map(function (item) {
        return React.createElement("li", {
          className: "fact"
        }, React.createElement(RichText.Content, {
          className: "fact_quantity",
          tagName: "div",
          value: item.quantity
        }), React.createElement(RichText.Content, {
          className: "fact_caption",
          tagName: "div",
          value: item.caption
        }));
      });
      return React.createElement("div", {
        className: "facts_callout"
      }, React.createElement("div", {
        className: "facts_callout_inner"
      }, React.createElement("div", {
        className: "facts_callout_body"
      }, React.createElement("div", {
        className: "facts_callout_content"
      }, React.createElement("div", {
        className: "facts_callout_header"
      }, React.createElement(RichText.Content, {
        className: "facts_callout_title",
        tagName: "h2",
        value: attributes.title
      }), React.createElement(RichText.Content, {
        className: "facts_callout_caption",
        tagName: "p",
        value: attributes.caption
      })), React.createElement("figure", {
        className: "facts_callout_figure"
      }, typeof attributes.image == 'string' ? React.createElement("img", {
        className: "facts_callout_image",
        src: attributes.image,
        alt: ""
      }) : React.createElement("img", {
        className: "facts_callout_image",
        srcset: attributes.image.sizes.medium.url + ' 300w,' + attributes.image.sizes.full.url + ' 980w',
        src: attributes.image.sizes.thumbnail.url,
        alt: attributes.image.alt
      }), React.createElement(RichText.Content, {
        className: "facts_callout_figcaption",
        tagName: "figcaption",
        value: attributes.imageCaption
      })))), React.createElement("div", {
        className: "facts_callout_aside"
      }, typeof attributes.background == 'string' ? React.createElement("img", {
        className: "facts_callout_background",
        src: attributes.background,
        alt: ""
      }) : React.createElement("img", {
        className: "facts_callout_background",
        srcset: attributes.background.sizes.medium.url + ' 300w,' + attributes.background.sizes.full.url + ' 980w',
        src: attributes.background.sizes.thumbnail.url,
        alt: attributes.background.alt
      }), React.createElement("ul", {
        className: "facts"
      }, items))));
    }
  });
})();