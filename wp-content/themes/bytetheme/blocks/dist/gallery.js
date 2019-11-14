(function () {
  const {
    registerBlockType
  } = wp.blocks;
  const {
    Button
  } = wp.components;
  const {
    MediaUploadCheck,
    MediaUpload,
    RichText
  } = wp.editor;
  registerBlockType('bytetheme/gallery', {
    title: 'Gallery Carousel',
    icon: 'shield',
    category: 'custom',
    attributes: {
      items: {
        type: 'array',
        default: []
      }
    },
    edit: ({
      attributes,
      setAttributes
    }) => {
      const handleAddItem = () => {
        const items = [...attributes.items];
        items.push({
          img: 'http://placehold.it/980x552',
          caption: ''
        });
        setAttributes({
          items
        });
      };

      const handleRemoveItem = index => {
        const items = [...attributes.items];
        items.splice(index, 1);
        setAttributes({
          items
        });
      };

      const handleItemChange = (index, value, type) => {
        const items = [...attributes.items];
        items[index][type] = value;
        setAttributes({
          items
        });
      };

      let itemFields;

      if (attributes.items.length) {
        itemFields = attributes.items.map((item, index) => {
          return React.createElement("div", {
            className: "editor_item"
          }, React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
            onSelect: value => handleItemChange(index, value, "img"),
            allowedTypes: ['image'],
            render: ({
              open
            }) => {
              return React.createElement("img", {
                src: typeof item.img == 'string' ? item.img : item.img.sizes.full.url,
                onClick: open
              });
            }
          })), React.createElement("label", {
            className: "editor_label"
          }, "Caption"), React.createElement(RichText, {
            value: item.caption,
            onChange: value => handleItemChange(index, value, "caption")
          }), React.createElement(Button, {
            className: "editor_button",
            isDefault: true,
            onClick: () => handleRemoveItem(index)
          }, "Remove Item"));
        });
      }

      return [React.createElement("div", {
        className: "editor_wrapper"
      }, React.createElement("h2", {
        className: "editor_title"
      }, "Gallery Carousel"), itemFields, React.createElement(Button, {
        className: "editor_button",
        isDefault: true,
        onClick: handleAddItem
      }, "Add Item"))];
    },
    save: props => {
      const items = props.attributes.items.map((item, index) => {
        return React.createElement("div", {
          className: "gallery_item"
        }, React.createElement("figure", {
          className: "gallery_figure",
          "aria-hidden": "true"
        }, typeof item.img == "string" ? React.createElement("img", {
          className: "gallery_image",
          src: item.img,
          alt: ""
        }) : React.createElement("img", {
          className: "gallery_image",
          srcset: item.img.sizes.medium.url + ' 300w,' + item.img.sizes.large.url + ' 740w,' + item.img.sizes.full.url + ' 980w',
          src: item.img.sizes.thumbnail.url,
          alt: item.img.alt
        }), React.createElement("figcaption", {
          "class": "gallery_details"
        }, React.createElement("span", {
          "class": "gallery_index"
        }, React.createElement("span", {
          "class": "gallery_index_number"
        }, index + 1), React.createElement("span", {
          "class": "gallery_index_label"
        }, " of "), React.createElement("span", {
          "class": "gallery_index_number"
        }, props.attributes.items.length)), item.caption.length > 0 && React.createElement(RichText.Content, {
          className: "gallery_item_caption",
          tagName: "p",
          value: item.caption
        }))));
      });
      return React.createElement("div", {
        className: "gallery"
      }, React.createElement("div", {
        className: "gallery_inner"
      }, React.createElement("div", {
        className: "gallery_items"
      }, items)));
    }
  });
})();