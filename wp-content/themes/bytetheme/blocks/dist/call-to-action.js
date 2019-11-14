(function () {
  const {
    registerBlockType
  } = wp.blocks;
  const {
    RichText,
    URLInputButton
  } = wp.editor;
  registerBlockType('bytetheme/call-to-action', {
    title: 'Call to Action',
    icon: 'shield',
    category: 'custom',
    attributes: {
      title: {
        type: 'string'
      },
      caption: {
        type: 'string'
      },
      url: {
        type: 'string'
      }
    },
    edit: ({
      attributes,
      setAttributes
    }) => {
      const handleItemChange = (value, type) => {
        const change = {
          [type]: value
        };
        setAttributes(change);
      };

      return React.createElement("div", {
        className: "editor_wrapper"
      }, React.createElement("h2", {
        className: "editor_title"
      }, "Call to Action"), React.createElement("div", {
        className: "editor_item"
      }, React.createElement("label", {
        className: "editor_label"
      }, "Title"), React.createElement(RichText, {
        placeholder: "Title",
        value: attributes.title,
        onChange: value => handleItemChange(value, "title")
      }), React.createElement("label", {
        className: "editor_label"
      }, "Caption"), React.createElement(RichText, {
        value: attributes.caption,
        onChange: value => handleItemChange(value, "caption")
      }), React.createElement(URLInputButton, {
        url: attributes.url,
        onChange: value => handleItemChange(value, "url")
      })));
    },
    save: ({
      attributes
    }) => {
      return React.createElement("div", {
        className: "cta_block"
      }, React.createElement("div", {
        className: "cta_block_inner"
      }, React.createElement("div", {
        className: "cta"
      }, React.createElement(RichText.Content, {
        className: "cta_title",
        tagName: "h2",
        value: attributes.title
      }), React.createElement(RichText.Content, {
        className: "cta_caption",
        tagName: "p",
        value: attributes.caption
      }), React.createElement("a", {
        className: "cta_link",
        href: attributes.url
      }, "Read More"))));
    }
  });
})();