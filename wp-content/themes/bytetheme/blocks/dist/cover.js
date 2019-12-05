"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$editor = wp.editor,
      MediaUploadCheck = _wp$editor.MediaUploadCheck,
      MediaUpload = _wp$editor.MediaUpload,
      RichText = _wp$editor.RichText,
      URLInputButton = _wp$editor.URLInputButton;
  registerBlockType('bytetheme/cover', {
    title: 'Cover',
    icon: 'shield',
    category: 'custom',
    attributes: {
      img: {
        type: 'object',
        "default": 'http://placehold.it/1220x686',
        selector: 'img'
      },
      title: {
        type: 'string'
      },
      carefirstLink: {
        type: 'string'
      },
      carefirstImage: {
        type: 'object',
        "default": 'http://placehold.it/320x60',
        selector: 'img'
      },
      lifebridgeLink: {
        type: 'string'
      },
      lifebridgeImage: {
        type: 'object',
        "default": 'http://placehold.it/320x44',
        selector: 'img'
      },
      caption: {
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
          return handleItemChange(value, "img");
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
      }, "Title"), React.createElement(RichText, {
        value: attributes.title,
        onChange: function onChange(value) {
          return handleItemChange(value, "title");
        }
      }), React.createElement("label", {
        className: "editor_label"
      }, "Carefirst Link"), React.createElement(URLInputButton, {
        url: attributes.carefirstLink,
        onChange: function onChange(value) {
          return handleItemChange(value, 'carefirstLink');
        }
      }), React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
        onSelect: function onSelect(value) {
          return handleItemChange(value, "carefirstImage");
        },
        allowedTypes: ['image'],
        render: function render(_ref3) {
          var open = _ref3.open;
          return React.createElement("img", {
            src: typeof attributes.carefirstImage == 'string' ? attributes.carefirstImage : attributes.carefirstImage.sizes.full.url,
            onClick: open
          });
        }
      })), React.createElement("label", {
        className: "editor_label"
      }, "Lifebridge Link"), React.createElement(URLInputButton, {
        url: attributes.lifebridgeLink,
        onChange: function onChange(value) {
          return handleItemChange(value, 'lifebridgeLink');
        }
      }), React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
        onSelect: function onSelect(value) {
          return handleItemChange(value, "lifebridgeImage");
        },
        allowedTypes: ['image'],
        render: function render(_ref4) {
          var open = _ref4.open;
          return React.createElement("img", {
            src: typeof attributes.lifebridgeImage == 'string' ? attributes.lifebridgeImage : attributes.lifebridgeImage.sizes.full.url,
            onClick: open
          });
        }
      })), React.createElement("label", {
        className: "editor_label"
      }, "Caption"), React.createElement(RichText, {
        value: attributes.caption,
        onChange: function onChange(value) {
          return handleItemChange(value, "caption");
        }
      })));
    },
    save: function save(_ref5) {
      var attributes = _ref5.attributes;
      console.log(attributes);
      return React.createElement("div", {
        className: "cover"
      }, React.createElement("figure", {
        className: "cover_figure"
      }, typeof attributes.img == "string" ? React.createElement("img", {
        className: "cover_background",
        src: attributes.img,
        alt: ""
      }) : React.createElement("img", {
        className: "cover_background",
        srcset: attributes.img.sizes.medium.url + ' 300w,' + attributes.img.sizes.large.url + ' 740w,' + attributes.img.sizes.full.url + ' 980w',
        src: attributes.img.sizes.thumbnail.url,
        alt: attributes.img.alt
      })), React.createElement("div", {
        className: "cover_inner"
      }, React.createElement("div", {
        className: "cover_body"
      }, React.createElement(RichText.Content, {
        className: "cover_title",
        tagName: "h2",
        value: attributes.title
      }), React.createElement("div", {
        className: "cover_intro"
      }, React.createElement("div", {
        className: "cover_links"
      }, React.createElement("a", {
        className: "cover_link",
        href: attributes.carefirstLink
      }, typeof attributes.carefirstImage == "string" ? React.createElement("img", {
        className: "cover_logo",
        src: attributes.carefirstImage,
        alt: ""
      }) : React.createElement("img", {
        className: "cover_logo",
        srcset: attributes.carefirstImage.sizes.medium.url + ' 300w,' + attributes.carefirstImage.sizes.full.url + ' 980w',
        src: attributes.carefirstImage.sizes.thumbnail.url,
        alt: attributes.carefirstImage.alt
      })), React.createElement("a", {
        className: "cover_link",
        href: attributes.lifebridgeLink
      }, typeof attributes.lifebridgeImage == "string" ? React.createElement("img", {
        className: "cover_logo",
        src: attributes.lifebridgeImage,
        alt: ""
      }) : React.createElement("img", {
        className: "cover_logo",
        srcset: attributes.lifebridgeImage.sizes.medium.url + ' 300w,' + attributes.lifebridgeImage.sizes.full.url + ' 980w',
        src: attributes.lifebridgeImage.sizes.thumbnail.url,
        alt: attributes.lifebridgeImage.alt
      }))), React.createElement(RichText.Content, {
        className: "cover_caption",
        tagName: "p",
        value: attributes.caption
      })))));
    }
  });
})();