(function() {
    const { registerBlockType } = wp.blocks;
    const { Button } = wp.components;
    const {
        MediaUploadCheck,
        MediaUpload,
        RichText,
        URLInputButton
    } = wp.blockEditor;

    registerBlockType('bytetheme/card-grid', {
        title: 'Card Grid',
        icon: 'shield',
        category: 'custom',
        attributes: {
            "title": {
                "type": "string"
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
                    img: 'http://placehold.it/500x282',
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
                            <MediaUploadCheck>
								<MediaUpload
									onSelect={ (value) => handleItemChange(index, value, 'img') }
									allowedTypes={ ['image'] }
									render={ ({ open }) => {
										return <img src={ typeof item.img == 'string' ? item.img : item.img.sizes.full.url } onClick={ open } />;
									} }
								/>
							</MediaUploadCheck>
                            <label className="editor_label">title</label>
                            <RichText
                                value={ item.title }
                                onChange={ (value) => handleItemChange(index, value, 'title') }
                            />
                            <label className="editor_label">caption</label>
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
                    <h2 className="editor_title">Card Grid</h2>
                    <label className="editor_label">title</label>
                    <RichText
                        value={ attributes.title }
                        onChange={ (value) => handleSingleChange(value, 'title') }
                    />
                    { itemFields } 
                    <Button
                        className="editor_button"
                        isDefault
                        onClick={ handleAddItem }
                    >Add Item</Button>
                </div>
            ];
        },
        save: ({ attributes }) => {
            const items = attributes.items.map((item) => {
                return (
                    <div className="card_grid_item">
                        <figure className="card_grid_item_figure" aria-hidden="true">
							{
								typeof item.img == 'string' ?
								<img className="card_grid_item_image" src={ item.img } alt="" /> :
								<img
									className="card_grid_item_image"
									src={ item.img.sizes.full.url }
									alt={ item.img.alt }
								/>
							}
                            <figcaption className="card_grid_item_caption">
                                <div className="card_grid_item_title">{ item.title }</div>
                                <p className="card_grid_item_text">{ item.caption }</p>
                            </figcaption>
						</figure>
                    </div>
                );
            } );
            
            return (
                <div className="card_grid">
                    <div className="card_grid_inner">
                        <div className="card_grid_items">
                            <div className="card_grid_item">
                                <h2 className="card_grid_item_intro">{ attributes.title }</h2>
                            </div>
                            { items }
                        </div>
                    </div>
                </div>
            );
        },
    });
})();