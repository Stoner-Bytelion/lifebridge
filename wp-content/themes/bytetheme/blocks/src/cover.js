(function() {
    const { registerBlockType } = wp.blocks;
    const {
        MediaUploadCheck,
        MediaUpload,
        RichText,
		URLInputButton
    } = wp.editor;

    registerBlockType('bytetheme/cover', {
        title: 'Cover',
        icon: 'shield',
        category: 'custom',
        attributes: {
            img: {
                type: 'object',
                default: 'http://placehold.it/1220x686',
                selector: 'img'
			},
			title: {
                type: 'string'
			},
            carefirstLink: {
                type: 'string'
            },
            carefirstImage: {
                type: 'object',
                default: 'http://placehold.it/320x60',
                selector: 'img'
            },
            lifebridgeLink: {
                type: 'string'
            },
            lifebridgeImage: {
                type: 'object',
                default: 'http://placehold.it/320x44',
                selector: 'img'
			},
			caption: {
                type: 'string'
            }
        },
        edit: ({ attributes, setAttributes }) => {
            const handleItemChange = (value, type) => {
                const change = {
                    [type]: value
                };

                setAttributes(change);
            };
            
            return (
                <div className="editor_wrapper">
                    <h2 className="editor_title">Cover</h2>
                    <div className="editor_item">
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ (value) => handleItemChange(value, "img") }
                                allowedTypes={ ['image'] }
                                render={ ({ open }) => {
                                    return <img src={ typeof attributes.img == 'string' ? attributes.img : attributes.img.sizes.full.url } onClick={open} />;
                                } }
                            />
                        </MediaUploadCheck>
                        <label className="editor_label">Title</label>
                        <RichText
                            value={ attributes.title }
                            onChange={ (value) => handleItemChange(value, "title") }
                        />
                        <label className="editor_label">Carefirst Link</label>
                        <URLInputButton
                            url={ attributes.carefirstLink }
                            onChange={ (value) => handleItemChange(value, 'carefirstLink') }
                        />
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ (value) => handleItemChange(value, "carefirstImage") }
                                allowedTypes={ ['image'] }
                                render={ ({ open }) => {
                                    return <img src={ typeof attributes.carefirstImage == 'string' ? attributes.carefirstImage : attributes.carefirstImage.sizes.full.url } onClick={open} />;
                                } }
                            />
                        </MediaUploadCheck>
                        <label className="editor_label">Lifebridge Link</label>
                        <URLInputButton
                            url={ attributes.lifebridgeLink }
                            onChange={ (value) => handleItemChange(value, 'lifebridgeLink') }
                        />
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ (value) => handleItemChange(value, "lifebridgeImage") }
                                allowedTypes={ ['image'] }
                                render={ ({ open }) => {
                                    return <img src={ typeof attributes.lifebridgeImage == 'string' ? attributes.lifebridgeImage : attributes.lifebridgeImage.sizes.full.url } onClick={open} />;
                                } }
                            />
                        </MediaUploadCheck>
                        <label className="editor_label">Caption</label>
                        <RichText
                            value={ attributes.caption }
                            onChange={ (value) => handleItemChange(value, "caption") }
                        />
                    </div>
                </div>
            );
        },
        save: ({ attributes }) => {
            console.log(attributes);
            return (
                <div className="cover">
                    <figure className="cover_figure">
                        {
                            typeof attributes.img == "string" ?
                            <img className="cover_background" src={ attributes.img } alt="" /> :
                            <img
                                className="cover_background"
                                srcset={
                                    attributes.img.sizes.medium.url + ' 300w,' +
                                    attributes.img.sizes.large.url + ' 740w,' +
                                    attributes.img.sizes.full.url + ' 980w'
                                }
                                src={ attributes.img.sizes.thumbnail.url }
                                alt={ attributes.img.alt }
                            />
                        }
                    </figure>
                    <div className="cover_inner">
                        <div className="cover_body">
                            <RichText.Content
                                className="cover_title"
                                tagName="h2"
                                value={ attributes.title }
                            />
                            <div className="cover_intro">
                                <div className="cover_links">
                                    <a className="cover_link" href={ attributes.carefirstLink }>
                                        {
                                            typeof attributes.carefirstImage == "string" ?
                                            <img className="cover_logo" src={ attributes.carefirstImage } alt="" /> :
                                            <img
                                                className="cover_logo"
                                                srcset={
                                                    attributes.carefirstImage.sizes.medium.url + ' 300w,' +
                                                    attributes.carefirstImage.sizes.full.url + ' 980w'
                                                }
                                                src={ attributes.carefirstImage.sizes.thumbnail.url }
                                                alt={ attributes.carefirstImage.alt }
                                            />
                                        }
                                    </a>
                                    <a className="cover_link" href={ attributes.lifebridgeLink }>
                                        {
                                            typeof attributes.lifebridgeImage == "string" ?
                                            <img className="cover_logo" src={ attributes.lifebridgeImage } alt="" /> :
                                            <img
                                                className="cover_logo"
                                                srcset={
                                                    attributes.lifebridgeImage.sizes.medium.url + ' 300w,' +
                                                    attributes.lifebridgeImage.sizes.full.url + ' 980w'
                                                }
                                                src={ attributes.lifebridgeImage.sizes.thumbnail.url }
                                                alt={ attributes.lifebridgeImage.alt }
                                            />
                                        }
                                    </a>
                                </div>
                                <RichText.Content
                                    className="cover_caption"
                                    tagName="p"
                                    value={ attributes.caption }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    });
})();