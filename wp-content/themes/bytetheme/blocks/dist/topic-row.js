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
    RichText,
    URLInputButton
  } = wp.editor;
  registerBlockType('bytetheme/topic-row', {
    title: 'Topic Row',
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
          img: 'http://placehold.it/200',
          title: '',
          caption: '',
          url: ''
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
          }, "Title"), React.createElement(RichText, {
            value: item.title,
            onChange: value => handleItemChange(index, value, "title")
          }), React.createElement("label", {
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
      }, "Topic Row"), itemFields, React.createElement(Button, {
        className: "editor_button",
        isDefault: true,
        onClick: handleAddItem
      }, "Add Item"))];
    },
    save: props => {
      const items = props.attributes.items.map((item, index) => {
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