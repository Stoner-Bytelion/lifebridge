(function () {
  const {
    registerBlockType
  } = wp.blocks;
  const {
    MediaUploadCheck,
    MediaUpload,
    RichText
  } = wp.editor;
  registerBlockType('bytetheme/cover', {
    title: 'Cover',
    icon: 'shield',
    category: 'custom',
    attributes: {
      img: {
        type: 'object',
        default: 'http://placehold.it/1220x686',
        selector: 'img'
      },
      title: {
        type: 'string'
      },
      caption: {
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
      }, "Cover"), React.createElement("div", {
        className: "editor_item"
      }, React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
        onSelect: value => handleItemChange(value, "img"),
        allowedTypes: ['image'],
        render: ({
          open
        }) => {
          return React.createElement("img", {
            src: typeof attributes.img == 'string' ? attributes.img : attributes.img.sizes.full.url,
            onClick: open
          });
        }
      })), React.createElement("label", {
        className: "editor_label"
      }, "Title"), React.createElement(RichText, {
        value: attributes.title,
        onChange: value => handleItemChange(value, "title")
      }), React.createElement("label", {
        className: "editor_label"
      }, "Caption"), React.createElement(RichText, {
        value: attributes.caption,
        onChange: value => handleItemChange(value, "caption")
      })));
    },
    save: ({
      attributes
    }) => {
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
      }), React.createElement(RichText.Content, {
        className: "cover_caption",
        tagName: "p",
        value: attributes.caption
      }))));
    }
  });
})();