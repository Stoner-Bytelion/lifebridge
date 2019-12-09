(function() {
    const { registerBlockType } = wp.blocks;
    const {
        MediaUploadCheck,
        MediaUpload,
        RichText
    } = wp.blockEditor;

    registerBlockType('bytetheme/intro-last', {
        title: 'Intro Last',
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
                "default": "http://placehold.it/590x400",
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
                    <h2 className="editor_title">Intro Last</h2>
                    <div className="editor_item">
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ (value) => handleSingleChange(value, 'image') }
                                allowedTypes={ ['image'] }
                                render={ ({ open }) => {
                                    return <img src={ typeof attributes.image != 'string' ? attributes.image.sizes.full.url : attributes.image } onClick={ open } />;
                                } }
                            />
                        </MediaUploadCheck>
                        <label className="editor_label">Title</label>
                        <RichText
                            value={ attributes.title }
                            onChange={ (value) => handleSingleChange(value, 'title') }
                        /><label className="editor_label">Caption</label>
                        <RichText
                            value={ attributes.caption }
                            onChange={ (value) => handleSingleChange(value, 'caption') }
                        />
                    </div>
                </div>
            );
        },
        save: ({ attributes }) => {
            return (
                <div className="intro_last">
                    <div className="intro_last_inner">
                        <div className="intro_last_row">
                            <figure className="intro_last_figure">
                                {
                                    typeof attributes.image == 'string' ?
                                    <img className="intro_last_image" src={ attributes.image } alt="" /> :
                                    <img
                                        className="intro_last_image"
                                        srcset={
                                            attributes.image.sizes.medium.url + ' 300w,' +
                                            attributes.image.sizes.full.url + ' 980w'
                                        }
                                        src={ attributes.image.sizes.thumbnail.url }
                                        alt={ attributes.image.alt }
                                    />
                                }
                            </figure>
                            <div className="intro_last_body">
                                <RichText.Content
                                    className="intro_last_title"
                                    tagName="h2"
                                    value={ attributes.title }
                                />
                                <RichText.Content
                                    className="intro_last_caption"
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