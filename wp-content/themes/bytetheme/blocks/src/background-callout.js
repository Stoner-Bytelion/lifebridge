(function() {
    const { registerBlockType } = wp.blocks;
    const {
        MediaUploadCheck,
        MediaUpload,
        RichText,
        URLInputButton
    } = wp.blockEditor;

    registerBlockType('bytetheme/background-callout', {
        title: 'Background Callout',
        icon: 'shield',
        category: 'custom',
        attributes: {
            "title": {
                "type": "string"
            },
            "caption": {
                "type": "string"
            },
            "linkLabel": {
                "type": "string"
            },
            "linkUrl": {
                "type": "string"
            },
            "background": {
                "type": "object",
                "default": "http://placehold.it/1400x700",
                "selector": "img"
            }
        },
        edit: ({ attributes, setAttributes }) => {
            const handleSingleChange = (value, type) => {
                const change = {
                    [type]: value
                };

                setAttributes(change);
            };

            return (
                <div className="editor_wrapper">
                    <h2 className="editor_title">Background Callout</h2>
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
                        <label className="editor_label">Link Label</label>
                        <RichText
                            value={ attributes.linkLabel }
                            onChange={ (value) => handleSingleChange(value, 'linkLabel') }
                        />
                        <label className="editor_label">Link Url</label>
                        <URLInputButton
                            url={ attributes.url }
                            onChange={ (value) => handleSingleChange(value, 'url') }
                        />
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ (value) => handleSingleChange(value, 'background') }
                                allowedTypes={ ['image'] }
                                render={ ({ open }) => {
                                    return <img src={ typeof attributes.background == 'string' ? attributes.background : attributes.background.sizes.full.url } onClick={ open } />;
                                } }
                            />
                        </MediaUploadCheck>
                    </div>
                </div>
            );
        },
        save: ({ attributes }) => {
            return (
                <div className="background_callout">
                    <figure className="background_callout_figure">
                        {
                            typeof attributes.background == "string" ?
                            <img className="background_callout_image" src={ attributes.background } alt="" /> :
                            <img
                                className="background_callout_image"
                                srcset={
                                    attributes.background.sizes.medium.url + ' 300w,' +
                                    attributes.background.sizes.large.url + ' 740w,' +
                                    attributes.background.sizes.full.url + ' 980w'
                                }
                                src={ attributes.background.sizes.thumbnail.url }
                                alt={ attributes.background.alt }
                            />
                        }
                    </figure>
                    <div className="background_callout_inner">
                        <div className="background_callout_body">
                            <RichText.Content
                                className="background_callout_title"
                                tagName="h2"
                                value={ attributes.title }
                            />
                            <RichText.Content
                                className="background_callout_caption"
                                tagName="p"
                                value={ attributes.caption }
                            />
                            <a className="background_callout_link" href={ attributes.linkUrl }>
                                <span className="background_callout_link_label">{ attributes.linkLabel }</span>
                                <span className="background_callout_link_icon">
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