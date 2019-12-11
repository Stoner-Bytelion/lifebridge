(function() {
    const { registerBlockType } = wp.blocks;
    const {
        MediaUploadCheck,
        MediaUpload,
        RichText
    } = wp.blockEditor;

    registerBlockType('bytetheme/spotlight', {
        title: 'Spotlight',
        icon: 'shield',
        category: 'custom',
        attributes: {
            "subtitle": {
                "type": "string"
            },
            "title": {
                "type": "string"
            },
            "caption": {
                "type": "string"
            },
            "quoteText": {
                "type": "string"
            },
            "quoteName": {
                "type": "string"
            },
            "quoteImage": {
                "type": "object",
                "default": "http://placehold.it/110",
                "selector": "img"
            },
            "featureImage": {
                "type": "object",
                "default": "http://placehold.it/540x385",
                "selector": "img"
            },
            "featureCaption": {
                "type": "string"
            },
            "miscText": {
                "type": "string"
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
                    <h2 className="editor_title">Spotlight</h2>
                    <div className="editor_item">
                        
                        <label className="editor_label">subtitle</label>
                        <RichText
                            value={ attributes.subtitle }
                            onChange={ (value) => handleSingleChange(value, 'subtitle') }
                        />
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
                        <label className="editor_label">Quote Text</label>
                        <RichText
                            value={ attributes.quoteText }
                            onChange={ (value) => handleSingleChange(value, 'quoteText') }
                        />
                        <label className="editor_label">Quote Name</label>
                        <RichText
                            value={ attributes.quoteName }
                            onChange={ (value) => handleSingleChange(value, 'quoteName') }
                        />
                        <label className="editor_label">Quote Image</label>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ (value) => handleSingleChange(value, 'quoteImage') }
                                allowedTypes={ ['image'] }
                                render={ ({ open }) => {
                                    return <img src={ typeof attributes.quoteImage == 'string' ? attributes.quoteImage : attributes.quoteImage.sizes.full.url } onClick={ open } />;
                                } }
                            />
                        </MediaUploadCheck>
                        <label className="editor_label">Feature Image</label>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ (value) => handleSingleChange(value, 'featureImage') }
                                allowedTypes={ ['image'] }
                                render={ ({ open }) => {
                                    return <img src={ typeof attributes.featureImage == 'string' ? attributes.featureImage : attributes.featureImage.sizes.full.url } onClick={ open } />;
                                } }
                            />
                        </MediaUploadCheck>
                        <label className="editor_label">Feature Caption</label>
                        <RichText
                            value={ attributes.featureCaption }
                            onChange={ (value) => handleSingleChange(value, 'featureCaption') }
                        />
                        <label className="editor_label">miscText</label>
                        <RichText
                            value={ attributes.miscText }
                            onChange={ (value) => handleSingleChange(value, 'miscText') }
                        />
                    </div>
                </div>
            );
        },
        save: ({ attributes }) => {
            return (
                <div className="spotlight">
                    <div className="spotlight_inner">
                        <div className="spotlight_body">
                            <div className="spotlight_header">
                                <RichText.Content
                                    className="spotlight_title"
                                    tagName="h2"
                                    value={ attributes.title }
                                />
                                <RichText.Content
                                    className="spotlight_subtitle"
                                    tagName="p"
                                    value={ attributes.subtitle }
                                />
                            </div>
                            <RichText.Content
                                className="spotlight_caption"
                                tagName="p"
                                value={ attributes.caption }
                            />
                            <blockquote className="spotlight_quote">
                                <span className="spotlight_quote_mark">
                                    <svg width="88" height="98" viewBox="0 0 88 98" fill="" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 48.912V97.824H39V48.912H13C13 30.932 24.664 16.304 39 16.304V0.00399835C17.494 -1.6506e-06 0 21.94 0 48.912Z" fill=""/>
                                        <path d="M49 48.912V97.824H88V48.912H62C62 30.932 73.664 16.304 88 16.304V0.00399835C66.494 -1.6506e-06 49 21.94 49 48.912Z" fill=""/>
                                    </svg>
                                </span>
                                <RichText.Content
                                    className="spotlight_quote_text"
                                    tagName="p"
                                    value={ attributes.quoteText }
                                />
                                <div className="spotlight_quote_details">
                                    <RichText.Content
                                        className="spotlight_quote_name"
                                        tagName="p"
                                        value={ attributes.quoteName }
                                    />
                                    {
                                        typeof attributes.quoteImage == 'string' ?
                                        <img className="spotlight_quote_image" src={ attributes.quoteImage } alt="" /> :
                                        <img
                                            className="spotlight_quote_image"
                                            src={ attributes.quoteImage.sizes.medium.url }
                                            alt={ attributes.quoteImage.alt }
                                        />
                                    }
                                </div>
                                <span className="spotlight_quote_mark">
                                    <svg width="88" height="98" viewBox="0 0 88 98" fill="" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M88 48.9123V0.000585132H49.0002V48.9123H75.0001C75.0001 66.8922 63.3361 81.5202 49.0002 81.5202V97.8201C70.5061 97.8241 88 75.8842 88 48.9123Z" fill=""/>
                                        <path d="M39 48.9123V0.000585132H0.000195265V48.9123H26.0001C26.0001 66.8922 14.3361 81.5202 0.000195265 81.5202V97.8201C21.5061 97.8241 39 75.8842 39 48.9123Z" fill=""/>
                                    </svg>
                                </span>
                            </blockquote>
                        </div>
                        <div className="spotlight_aside">
                            <figure className="spotlight_feature_figure">
                                {
                                    typeof attributes.featureImage == 'string' ?
                                    <img className="spotlight_aside_image" src={ attributes.featureImage } alt="" /> :
                                    <img
                                        className="spotlight_aside_image"
                                        srcset={
                                            attributes.featureImage.sizes.medium.url + ' 300w,' +
                                            attributes.featureImage.sizes.large.url + ' 740w,' +
                                            attributes.featureImage.sizes.full.url + ' 980w'
                                        }
                                        src={ attributes.featureImage.sizes.medium.url }
                                        alt={ attributes.featureImage.alt }
                                    />
                                }
                                <RichText.Content
                                    className="spotlight_feature_figcaption"
                                    tagName="figcaption"
                                    value={ attributes.featureCaption }
                                />
                            </figure>
                        </div>
                    </div>
                    <div class="spotlight_footer">
                        <RichText.Content
                            className="spotlight_misc_text"
                            tagName="p"
                            value={ attributes.miscText }
                        />
                    </div>
                </div>
            );
        },
    });
})();