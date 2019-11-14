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
  registerBlockType('bytetheme/card-group', {
    title: 'Card Group',
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
          img: 'http://placehold.it/500x282',
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

        if (type == "img") {
          value = value.sizes.full.url;
        }

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
                src: item.img,
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
      }, "Card Group"), itemFields, React.createElement(Button, {
        className: "editor_button",
        isDefault: true,
        onClick: handleAddItem
      }, "Add Item"))];
    },
    save: props => {
      const items = props.attributes.items.map((item, index) => {
        return React.createElement("div", {
          className: "card_group_item"
        }, React.createElement("figure", {
          className: "card_group_item_figure",
          "aria-hidden": "true"
        }, React.createElement("img", {
          className: "card_group_item_image",
          src: item.img,
          alt: ""
        }), React.createElement("figcaption", {
          "class": "card_group_item_details"
        }, item.caption.length > 0 && React.createElement(RichText.Content, {
          className: "card_group_item_caption",
          tagName: "p",
          value: item.caption
        }))));
      });
      return React.createElement("div", {
        className: "card_group"
      }, React.createElement("div", {
        className: "card_group_inner"
      }, React.createElement("div", {
        className: "card_group_items"
      }, items)));
    }
  });
})();