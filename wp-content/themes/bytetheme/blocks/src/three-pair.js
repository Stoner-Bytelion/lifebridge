(function() {
    const { registerBlockType } = wp.blocks;
    const { Button } = wp.components;
    const {
        RichText,
        URLInputButton
    } = wp.blockEditor;

    registerBlockType('bytetheme/three-pair', {
        title: 'Three Pair',
        icon: 'shield',
        category: 'custom',
        attributes: {
            url: {
                type: "string"
            },
            label: {
                type: "string"
            },
            "items": {
                "type": "array",
                "default": []
            }
        },
        edit: ({ attributes, setAttributes }) => {
            const handleAddItem = () => {
                const items = [...attributes.items];
                items.push({
                    title: '',
                    caption: ''
                });
                setAttributes({ items });
            };

            const handleRemoveItem = (index) => {
                const items = [...attributes.items];
                items.splice(index, 1);
                setAttributes({ items });
            };

            const handleItemChange = (index, value, type) => {
                const items = [...attributes.items];
                items[index][type] = value;
                setAttributes({ items });
            };

            const handleSingleChange = (value, type) => {
                const change = {
                    [type]: value
                };

                setAttributes(change);
            };

            let itemFields;

            if (attributes.items.length) {
                itemFields = attributes.items.map((item, index) => {
                    return (
                        <div className="editor_item">
                            <label className="editor_label">Title</label>
                            <RichText
                                value={ item.title }
                                onChange={ (value) => handleItemChange(index, value, 'title') }
                            />
                            <label className="editor_label">Caption</label>
                            <RichText
                                value={ item.caption }
                                onChange={ (value) => handleItemChange(index, value, 'caption') }
                            />
                            <Button
                                className="editor_button"
                                isDefault
                                onClick={ () => handleRemoveItem(index) }
                            >Remove Item</Button>
                        </div>
                    );
                });
            }
  
            return [
                <div className="editor_wrapper">
                    <h2 className="editor_title">Three Pair</h2>
                    { itemFields } 
                    <Button
                        className="editor_button"
                        isDefault
                        onClick={ handleAddItem }
                    >Add Item</Button>
                    <label className="editor_label">Button Label</label>
                    <RichText
                        value={ attributes.label }
                        onChange={ (value) => handleSingleChange(value, 'label') }
                    />
                    <label className="editor_label">Button URL</label>
                    <URLInputButton
							url={ attributes.url }
							onChange={ (value) => handleItemChange(value, "url") }
						/>
                </div>
            ];
        },
        save: ({ attributes }) => {
            const items = attributes.items.map((item) => {
                return (
                    <li className="three_pair_item">
                        <RichText.Content
                            className="three_pair_item_title"
                            tagName="h2"
                            value={ item.title }
                        />
                        <RichText.Content
                            className="three_pair_item_caption"
                            tagName="p"
                            value={ item.caption }
                        />
                    </li>
                );
            } );
            
            return (
                <div className="three_pair">
                    <div className="three_pair_inner">
                        <ul className="three_pair_items">
                            { items }
                        </ul>
                        <div class="three_pair_footer">
                            <a className="three_pair_link" href={ attributes.url }>
                                <span className="three_pair_link_label">{ attributes.label }</span>
                                <span className="three_pair_link_icon">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <path d="M15.057 7.609l7.057 7.057h-15.448c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333h15.448l-7.057 7.057c-0.521 0.521-0.521 1.365 0 1.885s1.365 0.521 1.885 0l9.333-9.333c0.128-0.128 0.224-0.276 0.289-0.433 0.065-0.16 0.1-0.329 0.101-0.499 0.001-0.177-0.032-0.355-0.101-0.52-0.065-0.157-0.161-0.305-0.289-0.433l-9.333-9.333c-0.521-0.521-1.365-0.521-1.885 0s-0.521 1.365 0 1.885z"></path>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            );
        },
    });
})();