(function() {
    const { registerBlockType } = wp.blocks;
    const {
        MediaUploadCheck,
        MediaUpload,
        RichText
    } = wp.blockEditor;

    registerBlockType('bytetheme/quotes', {
        title: 'Quotes',
        icon: 'shield',
        category: 'custom',
        attributes: {
            "title": {
                "type": "string"
            },
            "leftImage": {
                "type": "object",
                "default": "http://placehold.it/205x340",
                "selector": "img"
            },
            "leftQuote": {
                "type": "string"
            },
            "leftAuthor": {
                "type": "string"
            },
            "rightImage": {
                "type": "object",
                "default": "http://placehold.it/205x340",
                "selector": "img"
            },
            "rightQuote": {
                "type": "string"
            },
            "rightAuthor": {
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
                    <h2 className="editor_title">Quotes</h2>
                    <div className="editor_item">
                        <label className="editor_label">Title</label>
                        <RichText
                            value={ attributes.title }
                            onChange={ (value) => handleSingleChange(value, 'title') }
                        />
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ (value) => handleSingleChange(value, 'leftImage') }
                                allowedTypes={ ['image'] }
                                render={ ({ open }) => {
                                    return <img src={ typeof attributes.leftImage == 'string' ? attributes.leftImage : attributes.leftImage.sizes.full.url } onClick={ open } />;
                                } }
                            />
                        </MediaUploadCheck>
                        <label className="editor_label">Left Quote</label>
                        <RichText
                            value={ attributes.leftQuote }
                            onChange={ (value) => handleSingleChange(value, 'leftQuote') }
                        />
                        <label className="editor_label">Left Author</label>
                        <RichText
                            value={ attributes.leftAuthor }
                            onChange={ (value) => handleSingleChange(value, 'leftAuthor') }
                        />
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ (value) => handleSingleChange(value, 'rightImage') }
                                allowedTypes={ ['image'] }
                                render={ ({ open }) => {
                                    return <img src={ typeof attributes.rightImage == 'string' ? attributes.rightImage : attributes.rightImage.sizes.full.url } onClick={ open } />;
                                } }
                            />
                        </MediaUploadCheck>
                        <label className="editor_label">Right Quote</label>
                        <RichText
                            value={ attributes.rightQuote }
                            onChange={ (value) => handleSingleChange(value, 'rightQuote') }
                        />
                        <label className="editor_label">Right Author</label>
                        <RichText
                            value={ attributes.rightAuthor }
                            onChange={ (value) => handleSingleChange(value, 'rightAuthor') }
                        />
                    </div>
                </div>
            );
        },
        save: ({ attributes }) => {
            return (
                <div className="quotes_block">
                    <div className="quotes_block_inner">
                        <div className="quotes_block_header">
                            <RichText.Content
                                className="quotes_block_title"
                                tagName="h2"
                                value={ attributes.title }
                            />
                        </div>
                        <div className="quotes">
                            <blockquote className="quote">
                                <figure className="quote_figure">
                                    {
                                        typeof attributes.leftImage == 'string' ?
                                        <img className="quote_image" src={ attributes.leftImage } alt="" /> :
                                        <img
                                            className="quote_image"
                                            srcset={
                                                attributes.leftImage.sizes.medium.url + ' 300w,' +
                                                attributes.leftImage.sizes.full.url + ' 980w'
                                            }
                                            src={ attributes.leftImage.sizes.thumbnail.url }
                                            alt={ attributes.leftImage.alt }
                                        />
                                    }
                                    <figcaption className="quote_caption">
                                        <span className="quote_caption_mark">
                                            <svg width="88" height="98" viewBox="0 0 88 98" fill="" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 48.912V97.824H39V48.912H13C13 30.932 24.664 16.304 39 16.304V0.00399835C17.494 -1.6506e-06 0 21.94 0 48.912Z" fill=""/>
                                                <path d="M49 48.912V97.824H88V48.912H62C62 30.932 73.664 16.304 88 16.304V0.00399835C66.494 -1.6506e-06 49 21.94 49 48.912Z" fill=""/>
                                            </svg>
                                        </span>
                                        <p className="quote_text">{ attributes.leftQuote }</p>
                                        <span className="quote_author">{ attributes.leftAuthor }</span>
                                        <span className="quote_caption_mark">
                                            <svg width="88" height="98" viewBox="0 0 88 98" fill="" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M88 48.9123V0.000585132H49.0002V48.9123H75.0001C75.0001 66.8922 63.3361 81.5202 49.0002 81.5202V97.8201C70.5061 97.8241 88 75.8842 88 48.9123Z" fill=""/>
                                                <path d="M39 48.9123V0.000585132H0.000195265V48.9123H26.0001C26.0001 66.8922 14.3361 81.5202 0.000195265 81.5202V97.8201C21.5061 97.8241 39 75.8842 39 48.9123Z" fill=""/>
                                            </svg>
                                        </span>
                                    </figcaption>
                                </figure>
                            </blockquote>
                            <blockquote className="quote">
                                <figure className="quote_figure">
                                    {
                                        typeof attributes.rightImage == 'string' ?
                                        <img className="quote_image" src={ attributes.rightImage } alt="" /> :
                                        <img
                                            className="quote_image"
                                            srcset={
                                                attributes.rightImage.sizes.medium.url + ' 300w,' +
                                                attributes.rightImage.sizes.full.url + ' 980w'
                                            }
                                            src={ attributes.rightImage.sizes.thumbnail.url }
                                            alt={ attributes.rightImage.alt }
                                        />
                                    }
                                    <figcaption className="quote_caption">
                                        <p className="quote_text">{ attributes.rightQuote }</p>
                                        <span className="quote_author">{ attributes.rightAuthor }</span>
                                    </figcaption>
                                </figure>
                            </blockquote>
                        </div>
                    </div>
                </div>
            );
        },
    });
})();