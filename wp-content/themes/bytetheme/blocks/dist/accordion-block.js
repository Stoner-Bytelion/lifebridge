(function () {
  const {
    registerBlockType
  } = wp.blocks;
  const {
    Button
  } = wp.components;
  const {
    RichText
  } = wp.editor;
  registerBlockType('bytetheme/accordion-block', {
    title: 'Accordion',
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
          title: '',
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
          }, React.createElement("label", {
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
      }, "Accordion"), itemFields, React.createElement(Button, {
        className: "editor_button",
        isDefault: true,
        onClick: handleAddItem
      }, "Add Item"))];
    },
    save: props => {
      const items = props.attributes.items.map((item, index) => {
        return React.createElement("li", {
          className: "accordion"
        }, React.createElement("button", {
          className: "accordion_trigger"
        }, React.createElement(RichText.Content, {
          className: "accordion_title",
          tagName: "span",
          value: item.title
        }), React.createElement("span", {
          className: "accordion_icon"
        }, React.createElement("svg", {
          width: "14px",
          height: "14px",
          viewBox: "0 0 14 14",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        }, React.createElement("polygon", {
          points: "6 6 6 0 8 0 8 6 14 6 14 8 8 8 8 14 6 14 6 8 0 8 0 6"
        })))), React.createElement("div", {
          className: "accordion_content"
        }, React.createElement(RichText.Content, {
          className: "accordion_caption",
          tagName: "p",
          value: item.caption
        })));
      });
      return React.createElement("div", {
        className: "accordion_block"
      }, React.createElement("div", {
        className: "accordion_block_inner"
      }, React.createElement("ul", {
        className: "accordion_items"
      }, items)));
    }
  });
})();