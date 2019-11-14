(function() {
    const { registerBlockType } = wp.blocks;
    const {
        MediaUploadCheck,
        MediaUpload,
        RichText
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
                            <RichText.Content
                                className="cover_caption"
                                tagName="p"
                                value={ attributes.caption }
                            />
                        </div>
                    </div>
                </div>
            );
        },
    });
})();