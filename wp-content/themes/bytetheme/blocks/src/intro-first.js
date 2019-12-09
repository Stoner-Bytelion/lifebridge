(function() {
    const { registerBlockType } = wp.blocks;
    const {
        MediaUploadCheck,
        MediaUpload,
        RichText
    } = wp.blockEditor;

    registerBlockType('bytetheme/intro-first', {
        title: 'Intro First',
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
                "default": "http://placehold.it/960",
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
                    <h2 className="editor_title">Intro First</h2>
                    <div className="editor_item">
                        <label className="editor_label">Title</label>
                        <RichText
                            value={ attributes.title }
                            onChange={ (value) => handleSingleChange(value, 'title') }
                        /><label className="editor_label">Caption</label>
                        <RichText
                            value={ attributes.caption }
                            onChange={ (value) => handleSingleChange(value, 'caption') }
                        />
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
                </div>
            );
        },
        save: ({ attributes }) => {
            return (
                <div className="intro_first">
                    <div className="intro_first_inner">
                        <div className="intro_first_body">
                            <div className="intro_first_content">
                                <RichText.Content
                                    className="intro_first_title"
                                    tagName="h2"
                                    value={ attributes.title }
                                />
                                <RichText.Content
                                    className="intro_first_caption"
                                    tagName="p"
                                    value={ attributes.caption }
                                />
                            </div>
                        </div>
                        <figure className="intro_first_figure">
                            {
                                typeof attributes.image == 'string' ?
                                <img className="intro_first_image" src={ attributes.image } alt="" /> :
                                <img
                                    className="intro_first_image"
                                    srcset={
                                        attributes.image.sizes.medium.url + ' 300w,' +
                                        attributes.image.sizes.full.url + ' 980w'
                                    }
                                    src={ attributes.image.sizes.thumbnail.url }
                                    alt={ attributes.image.alt }
                                />
                            }
                        </figure>
                    </div>
                </div>
            );
        },
    });
})();