(function() {
    const { registerBlockType } = wp.blocks;
    const { Button } = wp.components;
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
            },
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
                    { itemFields }
                    <Button
                        className="editor_button"
                        isDefault
                        onClick={ handleAddItem }
                    >Add Item</Button>
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
                                {
                                    item.caption.length > 0 &&
                                    <RichText.Content
                                        className="card_group_item_caption"
                                        tagName="p"
                                        value={ item.caption }
                                    />
                                }
                            </figcaption>
                        </figure>
                    </div>
                );
            });

            return (
                <div className="card_group">
                    <div className="card_group_inner">
                        <div className="card_group_items">
                            { items }
                        </div>
                    </div>
                </div>
            );
        },
    });
})();