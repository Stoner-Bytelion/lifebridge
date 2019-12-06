(function() {
    const { registerBlockType } = wp.blocks;
    const { Button } = wp.components;
    const {
        MediaUploadCheck,
        MediaUpload,
        RichText,
        URLInputButton
    } = wp.blockEditor;

    registerBlockType('bytetheme/logo-callout', {
        title: 'Logo Callout',
        icon: 'shield',
        category: 'custom',
        attributes: {
            "carefirstImage": {
                "type": "object",
                "default": "http://placehold.it/320x60",
                "selector": "img"
            },
            "carefirstCaption": {
                "type": "string"
            },
            "lifebridgeImage": {
                "type": "object",
                "default": "http://placehold.it/320x44",
                "selector": "img"
            },
            "lifebridgeCaption": {
                "type": "string"
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
                items[index][type] = value;
                setAttributes({ items });
            };

            const handleSingleChange = (value, type) => {
                const change = {
                    [type]: value
                };

                setAttributes(change);
            };

            return (
                <div className="editor_wrapper">
                    <h2 className="editor_title"></h2>
                    <div className="editor_item">
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ (value) => handleSingleChange(value, 'carefirstImage') }
                                allowedTypes={ ['image'] }
                                render={ ({ open }) => {
                                    return <img src={ typeof attributes.carefirstImage == 'string' ? attributes.carefirstImage : attributes.carefirstImage.sizes.full.url } onClick={ open } />;
                                } }
                            />
                        </MediaUploadCheck>
                        <label className="editor_label">carefirstCaption</label>
                        <RichText
                            value={ attributes.carefirstCaption }
                            onChange={ (value) => handleSingleChange(value, 'carefirstCaption') }
                        /><MediaUploadCheck>
                            <MediaUpload
                                onSelect={ (value) => handleSingleChange(value, 'lifebridgeImage') }
                                allowedTypes={ ['image'] }
                                render={ ({ open }) => {
                                    return <img src={ typeof attributes.lifebridgeImage == 'string' ? attributes.lifebridgeImage : attributes.lifebridgeImage.sizes.full.url } onClick={ open } />;
                                } }
                            />
                        </MediaUploadCheck>
                        <label className="editor_label">lifebridgeCaption</label>
                        <RichText
                            value={ attributes.lifebridgeCaption }
                            onChange={ (value) => handleSingleChange(value, 'lifebridgeCaption') }
                        />
                    </div>
                </div>
            );
        },
        save: ({ attributes }) => {
            return (
                <div className="logo_callout">
                   <div className="logo_callout_inner">
                        <figure className="logo_callout_figure">
                            {
                                typeof attributes.carefirstImage == 'string' ?
                                <img className="logo_callout_image" src={ attributes.carefirstImage } alt="" /> :
                                <img
                                    className="logo_callout_image"
                                    srcset={
                                        attributes.carefirstImage.sizes.medium.url + ' 300w,' +
                                        attributes.carefirstImage.sizes.full.url + ' 980w'
                                    }
                                    src={ attributes.carefirstImage.sizes.thumbnail.url }
                                    alt={ attributes.carefirstImage.alt }
                                />
                            }
                            <figcaption className="logo_callout_caption">{ attributes.carefirstCaption }</figcaption>
                        </figure>
                        <figure className="logo_callout_figure">
                            {
                                typeof attributes.lifebridgeImage == 'string' ?
                                <img className="logo_callout_image" src={ attributes.lifebridgeImage } alt="" /> :
                                <img
                                    className="logo_callout_image"
                                    srcset={
                                        attributes.lifebridgeImage.sizes.medium.url + ' 300w,' +
                                        attributes.lifebridgeImage.sizes.full.url + ' 980w'
                                    }
                                    src={ attributes.lifebridgeImage.sizes.thumbnail.url }
                                    alt={ attributes.lifebridgeImage.alt }
                                />
                            }
                            <figcaption className="logo_callout_caption">{ attributes.lifebridgeCaption }</figcaption>
                        </figure>
                    </div> 
                </div>
            );
        },
    });
})();