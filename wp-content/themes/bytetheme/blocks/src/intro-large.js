(function() {
    const { registerBlockType } = wp.blocks;
    const { Button } = wp.components;
    const {
        MediaUploadCheck,
        MediaUpload,
        RichText,
        URLInputButton
    } = wp.blockEditor;

    registerBlockType('bytetheme/intro-large', {
        title: 'Intro Large',
        icon: 'shield',
        category: 'custom',
        attributes: {
            "caption": {
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
                    <h2 className="editor_title">Intro Large</h2>
                    <div className="editor_item">
                        <label className="editor_label">Caption</label>
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
                <div className="intro_large">
                    <RichText.Content
                        className="intro_large_caption"
                        tagName="p"
                        value={ attributes.caption }
                    />
                </div>
            );
        },
    });
})();