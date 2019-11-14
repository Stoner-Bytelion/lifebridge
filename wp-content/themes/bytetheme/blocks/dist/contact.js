(function () {
  const {
    registerBlockType
  } = wp.blocks;
  const {
    MediaUploadCheck,
    MediaUpload,
    RichText
  } = wp.editor;
  registerBlockType('bytetheme/contact', {
    title: 'Contact',
    icon: 'shield',
    category: 'custom',
    attributes: {
      img: {
        type: 'string',
        default: 'http://placehold.it/500',
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
    edit: ({
      attributes,
      setAttributes
    }) => {
      const handleItemChange = (value, type) => {
        if (type == "img") {
          value = value.sizes.full.url;
        }

        const change = {
          [type]: value
        };
        setAttributes(change);
      };

      return React.createElement("div", {
        className: "editor_wrapper"
      }, React.createElement("h2", {
        className: "editor_title"
      }, "Cover"), React.createElement("div", {
        className: "editor_item"
      }, React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
        onSelect: value => handleItemChange(value, "img"),
        allowedTypes: ['image'],
        render: ({
          open
        }) => {
          return React.createElement("img", {
            src: attributes.img,
            onClick: open
          });
        }
      })), React.createElement("label", {
        className: "editor_label"
      }, "Name"), React.createElement(RichText, {
        value: attributes.name,
        onChange: value => handleItemChange(value, "name")
      }), React.createElement("label", {
        className: "editor_label"
      }, "Title"), React.createElement(RichText, {
        value: attributes.title,
        onChange: value => handleItemChange(value, "title")
      }), React.createElement("label", {
        className: "editor_label"
      }, "Email"), React.createElement(RichText, {
        value: attributes.email,
        onChange: value => handleItemChange(value, "email")
      }), React.createElement("label", {
        className: "editor_label"
      }, "Phone"), React.createElement(RichText, {
        value: attributes.phone,
        onChange: value => handleItemChange(value, "phone")
      })));
    },
    save: ({
      attributes
    }) => {
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
      }, React.createElement("img", {
        className: "contact_image",
        src: attributes.img,
        alt: ""
      }))), React.createElement("div", {
        className: "contact_details"
      }, React.createElement("div", {
        className: "contact_detail"
      }, React.createElement("span", {
        className: "contact_detail_hint"
      }, "Phone: "), React.createElement("a", {
        className: "contact_detail_info",
        href: "tel:" + attributes.phone
      }, attributes.phone)), React.createElement("div", {
        className: "contact_detail"
      }, React.createElement("span", {
        className: "contact_detail_hint"
      }, "Email: "), React.createElement("a", {
        className: "contact_detail_info",
        href: "mailto:" + attributes.email
      }, attributes.email))))));
    }
  });
})();