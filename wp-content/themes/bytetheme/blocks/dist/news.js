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
  registerBlockType('bytetheme/news', {
    title: 'News',
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
          }, "Title"), React.createElement(RichText, {
            value: item.title,
            onChange: value => handleItemChange(index, value, "title")
          }), React.createElement("label", {
            className: "editor_label"
          }, "Caption"), React.createElement(RichText, {
            value: item.label,
            onChange: value => handleItemChange(index, value, "label")
          }), React.createElement(URLInputButton, {
            url: item.url,
            onChange: value => handleItemChange(index, value, "url")
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
      }, "In the news"), itemFields, React.createElement(Button, {
        className: "editor_button",
        isDefault: true,
        onClick: handleAddItem
      }, "Add Item"))];
    },
    save: props => {
      const items = props.attributes.items.map((item, index) => {
        return React.createElement("div", {
          className: "news_item"
        }, React.createElement("a", {
          className: "news_item_link",
          href: item.url
        }, React.createElement("figure", {
          className: "news_item_figure",
          "aria-hidden": "true"
        }, React.createElement("img", {
          className: "news_item_image",
          src: item.img,
          alt: ""
        }), React.createElement("figcaption", {
          "class": "news_item_details"
        }, React.createElement(RichText.Content, {
          className: "news_item_title",
          tagName: "h2",
          value: item.title
        }), React.createElement(RichText.Content, {
          className: "news_item_label",
          tagName: "p",
          value: item.label
        }), React.createElement("span", {
          className: "news_item_faux"
        }, "Read article")))));
      });
      return React.createElement("div", {
        className: "news"
      }, React.createElement("div", {
        className: "news_inner"
      }, React.createElement("div", {
        className: "news_header"
      }, React.createElement("h2", {
        className: "news_title"
      }, "In the news")), React.createElement("div", {
        className: "news_items"
      }, items)));
    }
  });
})();