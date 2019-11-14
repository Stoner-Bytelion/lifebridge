(function() {
    const { registerBlockType } = wp.blocks;
    const {
        RichText,
        URLInputButton
    } = wp.editor;

    registerBlockType('bytetheme/call-to-action', {
        title: 'Call to Action',
        icon: 'shield',
        category: 'custom',
        attributes: {
			title: {
                type: 'string'
			},
			caption: {
                type: 'string'
            },
			url: {
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
                    <h2 className="editor_title">Call to Action</h2>
                    <div className="editor_item">
                        <label className="editor_label">Title</label>
                        <RichText
                            placeholder="Title"
                            value={ attributes.title }
                            onChange={ (value) => handleItemChange(value, "title") }
                        />
                        <label className="editor_label">Caption</label>
                        <RichText
                            value={ attributes.caption }
                            onChange={ (value) => handleItemChange(value, "caption") }
                        />
                        <URLInputButton
							url={ attributes.url }
							onChange={ (value) => handleItemChange(value, "url") }
						/>
                    </div>
                </div>
            );
        },
        save: ({ attributes }) => {
            return (
                <div className="cta_block">
                    <div className="cta_block_inner">
                        <div className="cta">
                            <RichText.Content
                                className="cta_title"
                                tagName="h2"
                                value={ attributes.title }
                            />
                            <RichText.Content
                                className="cta_caption"
                                tagName="p"
                                value={ attributes.caption }
                            />
                            <a className="cta_link" href={ attributes.url }>Read More</a>
                        </div>
                    </div>
                </div>
            );
        },
    });
})();