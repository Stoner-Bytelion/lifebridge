"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(function () {
  var registerBlockType = wp.blocks.registerBlockType;
  var Button = wp.components.Button;
  var _wp$editor = wp.editor,
      MediaUploadCheck = _wp$editor.MediaUploadCheck,
      MediaUpload = _wp$editor.MediaUpload,
      RichText = _wp$editor.RichText,
      URLInputButton = _wp$editor.URLInputButton;
  registerBlockType('bytetheme/topic-row', {
    title: 'Topic Row',
    icon: 'shield',
    category: 'custom',
    attributes: {
      items: {
        type: 'array',
        "default": []
      }
    },
    edit: function edit(_ref) {
      var attributes = _ref.attributes,
          setAttributes = _ref.setAttributes;

      var handleAddItem = function handleAddItem() {
        var items = _toConsumableArray(attributes.items);

        items.push({
          img: 'http://placehold.it/200',
          title: '',
          caption: '',
          url: ''
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

        if (type == "img") {
          value = value.sizes.full.url;
        }

        items[index][type] = value;
        setAttributes({
          items: items
        });
      };

      var itemFields;

      if (attributes.items.length) {
        itemFields = attributes.items.map(function (item, index) {
          return React.createElement("div", {
            className: "editor_item"
          }, React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
            onSelect: function onSelect(value) {
              return handleItemChange(index, value, "img");
            },
            allowedTypes: ['image'],
            render: function render(_ref2) {
              var open = _ref2.open;
              return React.createElement("img", {
                src: item.img,
                onClick: open
              });
            }
          })), React.createElement("label", {
            className: "editor_label"
          }, "Title"), React.createElement(RichText, {
            value: item.title,
            onChange: function onChange(value) {
              return handleItemChange(index, value, "title");
            }
          }), React.createElement("label", {
            className: "editor_label"
          }, "Caption"), React.createElement(RichText, {
            value: item.caption,
            onChange: function onChange(value) {
              return handleItemChange(index, value, "caption");
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

      return [React.createElement("div", {
        className: "editor_wrapper"
      }, React.createElement("h2", {
        className: "editor_title"
      }, "Topic Row"), itemFields, React.createElement(Button, {
        className: "editor_button",
        isDefault: true,
        onClick: handleAddItem
      }, "Add Item"))];
    },
    save: function save(props) {
      var items = props.attributes.items.map(function (item, index) {
        return React.createElement("li", {
          className: "topic_row"
        }, item.img != "http://placehold.it/100" && React.createElement("figure", {
          className: "topic_figure",
          "aria-hidden": "true"
        }, React.createElement("img", {
          className: "topic_image",
          src: item.img,
          alt: ""
        })), React.createElement("div", {
          className: "topic_wrapper"
        }, React.createElement(RichText.Content, {
          className: "topic_title",
          tagName: "h2",
          value: item.title
        }), React.createElement(RichText.Content, {
          className: "topic_caption",
          tagName: "p",
          value: item.caption
        }), item.url.length > 0 && React.createElement("a", {
          className: "topic_link",
          href: item.url
        }, "Read More")));
      });
      return React.createElement("div", {
        className: "topic_block"
      }, React.createElement("div", {
        className: "topic_block_inner"
      }, React.createElement("ul", {
        className: "topic_rows"
      }, items)));
    }
  });
})();