(function() {
    const { registerBlockType } = wp.blocks;
    const { Button } = wp.components;
    const {
        MediaUploadCheck,
        MediaUpload,
        RichText,
        URLInputButton
    } = wp.editor;

    registerBlockType('bytetheme/topic-row', {
        title: 'Topic Row',
        icon: 'shield',
        category: 'custom',
        attributes: {
            items: {
                type: 'array',
                default: []
            },
        },
        edit: ({ attributes, setAttributes }) => {
            const handleAddItem = () => {
                const items = [...attributes.items];
                items.push({
                    img: 'http://placehold.it/200',
                    title: '',
                    caption: '',
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

                if (type == "img") {
                    value = value.sizes.full.url;
                }

                items[index][type] = value;
                setAttributes({ items });
            };

            let itemFields;

            if (attributes.items.length) {
                itemFields = attributes.items.map((item, index) => {
                    return <div className="editor_item">
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ (value) => handleItemChange(index, value, "img") }
                                allowedTypes={ ['image'] }
                                render={ ({ open }) => {
                                    return <img src={ item.img } onClick={open} />;
                                }}
                            />
                        </MediaUploadCheck>
                        <label className="editor_label">Title</label>
                        <RichText
                            value={ item.title }
                            onChange={ (value) => handleItemChange(index, value, "title") }
                        />
                        <label className="editor_label">Caption</label>
                        <RichText
                            value={ item.caption }
                            onChange={ (value) => handleItemChange(index, value, "caption") }
                        />
                        <Button
                            className="editor_button"
                            isDefault
                            onClick={ () => handleRemoveItem(index) }
                        >Remove Item</Button>
                    </div>;
                } );
            }

            return [
                <div className="editor_wrapper">
                    <h2 className="editor_title">Topic Row</h2>
                    { itemFields }
                    <Button
                        className="editor_button"
                        isDefault
                        onClick={ handleAddItem }
                    >Add Item</Button>
                </div>,
            ];
        },
        save: (props) => {
            const items = props.attributes.items.map((item, index) => {
                return (
                    <li className="topic_row">
                        {
                            item.img != "http://placehold.it/100" &&
                            <figure className="topic_figure" aria-hidden="true">
                                <img className="topic_image" src={ item.img } alt="" />
                            </figure>
                        }
                        <div className="topic_wrapper">
                            <RichText.Content
                                className="topic_title"
                                tagName="h2"
                                value={ item.title }
                            />
                            <RichText.Content
                                className="topic_caption"
                                tagName="p"
                                value={ item.caption }
                            />
                            {
                                item.url.length > 0 &&
                                <a className="topic_link" href={ item.url }>Read More</a>
                            }
                        </div>
                    </li>
                );
            } );

            return (
                <div className="topic_block">
                    <div className="topic_block_inner">
                        <ul className="topic_rows">
                            { items }
                        </ul>
                    </div>
                </div>
            );
        },
    });
})();