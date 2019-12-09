(function() {
    const { registerBlockType } = wp.blocks;
    const { Button } = wp.components;
    const {
        MediaUploadCheck,
        MediaUpload,
        RichText
    } = wp.blockEditor;

    registerBlockType('bytetheme/facts-callout', {
        title: 'Facts Callout',
        icon: 'shield',
        category: 'custom',
        attributes: {
            "title": {
                "type": "string"
            },
            "caption": {
                "type": "string"
            },
            "image": {
                "type": "object",
                "default": "http://placehold.it/500",
                "selector": "img"
            },
            "imageCaption": {
                "type": "string"
            },
            "background": {
                "type": "object",
                "default": "http://placehold.it/500",
                "selector": "img"
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
                    quantity: '',
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
                            <label className="editor_label">Quantity</label>
                            <RichText
                                value={ item.quantity }
                                onChange={ (value) => handleItemChange(index, value, 'quantity') }
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

            return (
                <div className="editor_wrapper">
                    <h2 className="editor_title">Facts Callout</h2>
                    <div className="editor_item">
                        <label className="editor_label">Title</label>
                        <RichText
                            value={ attributes.title }
                            onChange={ (value) => handleSingleChange(value, 'title') }
                        />
                        <label className="editor_label">Caption</label>
                        <RichText
                            value={ attributes.caption }
                            onChange={ (value) => handleSingleChange(value, 'caption') }
                        />
                        <label className="editor_label">Image</label>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ (value) => handleSingleChange(value, 'image') }
                                allowedTypes={ ['image'] }
                                render={ ({ open }) => {
                                    return <img src={ typeof attributes.image == 'string' ? attributes.image : attributes.image.sizes.full.url } onClick={ open } />;
                                } }
                            />
                        </MediaUploadCheck>
                        <label className="editor_label">Image Caption</label>
                        <RichText
                            value={ attributes.imageCaption }
                            onChange={ (value) => handleSingleChange(value, 'imageCaption') }
                        />
                        <label className="editor_label">Background</label>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ (value) => handleSingleChange(value, 'background') }
                                allowedTypes={ ['image'] }
                                render={ ({ open }) => {
                                    return <img src={ typeof attributes.background == 'string' ? attributes.background : attributes.background.sizes.full.url } onClick={ open } />;
                                } }
                            />
                        </MediaUploadCheck>
                        { itemFields }
                        <Button
                            className="editor_button"
                            isDefault
                            onClick={ handleAddItem }
                        >Add Item</Button>
                    </div>
                </div>
            );
        },
        save: ({ attributes }) => {
            const items = attributes.items.map((item) => {
                return (
                  <li className="fact">
                        <RichText.Content
                            className="fact_quantity"
                            tagName="div"
                            value={ item.quantity }
                        />
                        <RichText.Content
                            className="fact_caption"
                            tagName="div"
                            value={ item.caption }
                        />
                  </li>
                );
            } );
            
            return (
                <div className="facts_callout">
                    <div className="facts_callout_inner">
                        <div className="facts_callout_body">
                            <div className="facts_callout_content">
                                <div className="facts_callout_header">
                                    <RichText.Content
                                        className="facts_callout_title"
                                        tagName="h2"
                                        value={ attributes.title }
                                    />
                                    <RichText.Content
                                        className="facts_callout_caption"
                                        tagName="p"
                                        value={ attributes.caption }
                                    />
                                </div>
                                <figure className="facts_callout_figure">
                                    {
                                        typeof attributes.image == 'string' ?
                                        <img className="facts_callout_image" src={ attributes.image } alt="" /> :
                                        <img
                                            className="facts_callout_image"
                                            srcset={
                                                attributes.image.sizes.medium.url + ' 300w,' +
                                                attributes.image.sizes.full.url + ' 980w'
                                            }
                                            src={ attributes.image.sizes.thumbnail.url }
                                            alt={ attributes.image.alt }
                                        />
                                    }
                                    <RichText.Content
                                        className="facts_callout_figcaption"
                                        tagName="figcaption"
                                        value={ attributes.imageCaption }
                                    />
                                </figure>
                            </div>
                        </div>
                        <div className="facts_callout_aside">
                            {
                                typeof attributes.background == 'string' ?
                                <img className="facts_callout_background" src={ attributes.background } alt="" /> :
                                <img
                                    className="facts_callout_background"
                                    srcset={
                                        attributes.background.sizes.medium.url + ' 300w,' +
                                        attributes.background.sizes.full.url + ' 980w'
                                    }
                                    src={ attributes.background.sizes.thumbnail.url }
                                    alt={ attributes.background.alt }
                                />
                            }
                            <ul className="facts">
                                { items }
                            </ul>
                        </div>
                    </div>
                </div>
            );
        },
    });
})();