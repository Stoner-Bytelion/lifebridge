(function() {
    const { registerBlockType } = wp.blocks;
	const { Button } = wp.components;
    const {
        MediaUploadCheck,
        MediaUpload,
        RichText,
        URLInputButton
    } = wp.blockEditor;

    registerBlockType('bytetheme/intro-callout', {
        title: 'Intro Callout',
        icon: 'shield',
        category: 'custom',
        attributes: {
            "title": {
                "type": "string"
            },
            "caption": {
                "type": "string"
            },
			"items": {
				"type": 'array',
				"default": []
			},
            "image": {
                "type": "object",
                "default": "http://placehold.it/960",
                "selector": "img"
            }
        },
        edit: ({ attributes, setAttributes }) => {
            const handleAddItem = () => {
                const items = [...attributes.items];
                items.push({
                    label: '',
                    url: ''
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
                            <label className="editor_label">Button Label</label>
                            <RichText
                                value={ item.label }
                                onChange={ (value) => handleItemChange(index, value, 'label') }
                            />
                            <URLInputButton
							    url={ item.url }
                                onChange={ (value) => handleItemChange(index, value, "url") }
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
                    <h2 className="editor_title">Intro Callout</h2>
                    <label className="editor_label">title</label>
                    <RichText
                        value={ attributes.title }
                        onChange={ (value) => handleSingleChange(value, 'title') }
                    />
                    <label className="editor_label">caption</label>
                    <RichText
                        value={ attributes.caption }
                        onChange={ (value) => handleSingleChange(value, 'caption') }
                    />
                    { itemFields }
                    <Button
                        className="editor_button"
                        isDefault
                        onClick={ handleAddItem }
                    >Add Item</Button>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ (value) => handleSingleChange(value, 'image') }
                            allowedTypes={ ['image'] }
                            render={ ({ open }) => {
                                return <img src={ typeof attributes.image != 'string' ? attributes.image.sizes.full.url : attributes.image } onClick={ open } />;
                            } }
                        />
                    </MediaUploadCheck>
                </div>
            );
        },
        save: ({ attributes }) => {
            const items = attributes.items.map((item, index) => {
                return (
                    <a className="intro_callout_link" href={ item.url }>
                        <span className="intro_callout_link_label">{ item.label }</span>
                        <span className="intro_callout_link_icon">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <path d="M15.057 7.609l7.057 7.057h-15.448c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333h15.448l-7.057 7.057c-0.521 0.521-0.521 1.365 0 1.885s1.365 0.521 1.885 0l9.333-9.333c0.128-0.128 0.224-0.276 0.289-0.433 0.065-0.16 0.1-0.329 0.101-0.499 0.001-0.177-0.032-0.355-0.101-0.52-0.065-0.157-0.161-0.305-0.289-0.433l-9.333-9.333c-0.521-0.521-1.365-0.521-1.885 0s-0.521 1.365 0 1.885z"></path>
                            </svg>
                        </span>
                    </a>
                );
            });

            return (
                <div className="intro_callout">
                    <div className="intro_callout_inner">
                        <div className="intro_callout_row">
                            <figure className="intro_callout_figure">
                                {
                                    typeof attributes.image == 'string' ?
                                    <img className="intro_callout_image" src={ attributes.image } alt="" /> :
                                    <img
                                        className="intro_callout_image"
                                        srcset={
                                            attributes.image.sizes.medium.url + ' 300w,' +
                                            attributes.image.sizes.full.url + ' 980w'
                                        }
                                        src={ attributes.image.sizes.thumbnail.url }
                                        alt={ attributes.image.alt }
                                    />
                                }
                            </figure>
                            <div className="intro_callout_body">
                                <div className="intro_callout_content">
                                    <RichText.Content
                                        className="intro_callout_title"
                                        tagName="h2"
                                        value={ attributes.title }
                                    />
                                    <RichText.Content
                                        className="intro_callout_caption"
                                        tagName="p"
                                        value={ attributes.caption }
                                    />
                                </div>
                                <div className="intro_callout_links">{ items }</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    });
})();