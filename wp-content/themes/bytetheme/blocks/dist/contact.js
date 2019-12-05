"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$blockEditor = wp.blockEditor,
      MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
      MediaUpload = _wp$blockEditor.MediaUpload,
      RichText = _wp$blockEditor.RichText;
  registerBlockType('bytetheme/contact', {
    title: 'Contact',
    icon: 'shield',
    category: 'custom',
    attributes: {
      img: {
        type: 'string',
        "default": 'http://placehold.it/500',
        selector: 'img'
      },
      name: {
        type: 'string'
      },
      title: {
        type: 'string'
      },
      email: {
        type: 'string'
      },
      phone: {
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
      }, "Cover"), React.createElement("div", {
        className: "editor_item"
      }, React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
        onSelect: function onSelect(value) {
          return handleItemChange(value, 'img');
        },
        allowedTypes: ['image'],
        render: function render(_ref2) {
          var open = _ref2.open;
          return React.createElement("img", {
            src: typeof attributes.img == 'string' ? attributes.img : attributes.img.sizes.full.url,
            onClick: open
          });
        }
      })), React.createElement("label", {
        className: "editor_label"
      }, "Name"), React.createElement(RichText, {
        value: attributes.name,
        onChange: function onChange(value) {
          return handleItemChange(value, 'name');
        }
      }), React.createElement("label", {
        className: "editor_label"
      }, "Title"), React.createElement(RichText, {
        value: attributes.title,
        onChange: function onChange(value) {
          return handleItemChange(value, 'title');
        }
      }), React.createElement("label", {
        className: "editor_label"
      }, "Email"), React.createElement(RichText, {
        value: attributes.email,
        onChange: function onChange(value) {
          return handleItemChange(value, 'email');
        }
      }), React.createElement("label", {
        className: "editor_label"
      }, "Phone"), React.createElement(RichText, {
        value: attributes.phone,
        onChange: function onChange(value) {
          return handleItemChange(value, 'phone');
        }
      })));
    },
    save: function save(_ref3) {
      var attributes = _ref3.attributes;
      return React.createElement("div", {
        className: "contact_block"
      }, React.createElement("div", {
        className: "contact_block_inner"
      }, React.createElement("div", {
        className: "contact"
      }, React.createElement("div", {
        className: "contact_header"
      }, React.createElement("div", {
        className: "contact_info"
      }, React.createElement(RichText.Content, {
        className: "contact_name",
        tagName: "h2",
        value: attributes.name
      }), React.createElement(RichText.Content, {
        className: "contact_title",
        tagName: "p",
        value: attributes.title
      })), React.createElement("figure", {
        className: "contact_figure"
      }, typeof attributes.img == 'string' ? React.createElement("img", {
        className: "contact_image",
        src: attributes.img,
        alt: ""
      }) : React.createElement("img", {
        className: "contact_image",
        srcset: attributes.img.sizes.medium.url + ' 300w,' + attributes.img.sizes.large.url + ' 740w,' + attributes.img.sizes.full.url + ' 980w',
        src: attributes.img.sizes.thumbnail.url,
        alt: attributes.img.alt
      }))), React.createElement("div", {
        className: "contact_details"
      }, React.createElement("div", {
        className: "contact_detail"
      }, React.createElement("span", {
        className: "contact_detail_hint"
      }, "Phone: "), React.createElement("a", {
        className: "contact_detail_info",
        href: 'tel:' + attributes.phone
      }, attributes.phone)), React.createElement("div", {
        className: "contact_detail"
      }, React.createElement("span", {
        className: "contact_detail_hint"
      }, "Email: "), React.createElement("a", {
        className: "contact_detail_info",
        href: 'mailto:' + attributes.email
      }, attributes.email))))));
    }
  });
})();