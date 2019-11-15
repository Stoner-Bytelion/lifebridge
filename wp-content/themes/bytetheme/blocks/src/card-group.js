(function() {
    const { registerBlockType } = wp.blocks;
    const { Button } = wp.components;
    const {
        MediaUploadCheck,
        MediaUpload,
        RichText,
		URLInputButton
    } = wp.editor;

    registerBlockType('bytetheme/card-group', {
        title: 'Card Group',
        icon: 'shield',
        category: 'custom',
        attributes: {
            title: {
                type: 'string'
            },
            items: {
                type: 'array',
                default: []
            },
			url: {
                type: 'string'
            }
        },
        edit: ({ attributes, setAttributes }) => {
            const handleAddItem = () => {
                const items = [...attributes.items];
                items.push({
                    img: 'http://placehold.it/500x282',
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

                if (type == "img") {
                    value = value.sizes.full.url;
                }

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
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={ (value) => handleItemChange(index, value, "img") }
                                    allowedTypes={ ['image'] }
                                    render={ ({ open }) => {
                                        return <img src={ item.img } onClick={open} />;
                                    } }
                                />
                            </MediaUploadCheck>
                            <label className="editor_label">Title</label>
                            <RichText
                                value={ item.title }
                                onChange={ (value) => handleItemChange(index, value, "title") }
                            />
							<label className="editor_label">Caption</label>
                            <RichText
                                value={ item.caption }
                                onChange={ (value) => handleItemChange(index, value, "caption") }
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
                    <h2 className="editor_title">Card Group</h2>
					<label className="editor_label">Title</label>
                    <RichText
                        value={ attributes.title }
                        onChange={ (value) => handleSingleChange(value, "title") }
                    />
                    { itemFields }
                    <Button
                        className="editor_button"
                        isDefault
                        onClick={ handleAddItem }
                    >Add Item</Button>
                    <URLInputButton
                        url={ attributes.url }
                        onChange={ (value) => handleSingleChange(value, "url") }
                    />
                </div>
            ];
        },
        save: (props) => {
            const items = props.attributes.items.map((item, index) => {
                return (
                    <div className="card_group_item">
                        <figure className="card_group_item_figure" aria-hidden="true">
                            <img className="card_group_item_image" src={ item.img } alt="" />
                            <figcaption class="card_group_item_details">
                                <RichText.Content
                                    className="card_group_item_title"
                                    tagName="h2"
                                    value={ item.title }
                                />
                                <RichText.Content
                                    className="card_group_item_caption"
                                    tagName="p"
                                    value={ item.caption }
                                />
                            </figcaption>
                        </figure>
                    </div>
                );
            });

            return (
                <div className="card_group">
                    <div className="card_group_inner">
                        <div className="card_group_header">
                            <RichText.Content
                                className="card_group_title"
                                tagName="h2"
                                value={ props.attributes.title }
                            />
                        </div>
                        <div className="card_group_items">
                            { items }
                        </div>
                        <div className="card_group_footer">
                            <a className="card_group_link" href={ props.attributes.url }>
                                <span className="card_group_link_label">Get Involved</span>
                                <span className="card_group_link_icon">
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