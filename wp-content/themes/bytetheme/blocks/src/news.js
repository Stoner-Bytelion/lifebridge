(function() {
    const { registerBlockType } = wp.blocks;
    const { Button } = wp.components;
    const {
        MediaUploadCheck,
        MediaUpload,
        RichText,
		URLInputButton
    } = wp.editor;

    registerBlockType('bytetheme/news', {
        title: 'News',
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
                    img: 'http://placehold.it/430x300',
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

                if (type == "img") {
                    value = value.sizes.full.url;
                }

                items[index][type] = value;
                setAttributes({ items });
            };

            let itemFields;

            if (attributes.items.length) {
                itemFields = attributes.items.map((item, index) => {
                    return (
                        <div className="editor_item">
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={ (value) => handleItemChange(index, value, "img") }
                                    allowedTypes={ ['image'] }
                                    render={ ({ open }) => {
                                        return <img src={ item.img } onClick={open} />;
                                    } }
                                />
                            </MediaUploadCheck>
							<label className="editor_label">Title</label>
                            <RichText
                                value={ item.title }
                                onChange={ (value) => handleItemChange(index, value, "title") }
                            />
							<label className="editor_label">Caption</label>
							<RichText
                                value={ item.label }
                                onChange={ (value) => handleItemChange(index, value, "label") }
                            />
							<URLInputButton
								url={ item.url }
								onChange={ (value) => handleItemChange(index, value, "url") }
							/>
                            <Button
                                className="editor_button"
                                isDefault
                                onClick={ () => handleRemoveItem(index) }
                            >Remove Item</Button>
                        </div>
                    );
                });
            }

            return [
                <div className="editor_wrapper">
                    <h2 className="editor_title">In the news</h2>
                    { itemFields }
                    <Button
                        className="editor_button"
                        isDefault
                        onClick={ handleAddItem }
                    >Add Item</Button>
                </div>
            ];
        },
        save: (props) => {
            const items = props.attributes.items.map((item, index) => {
                return (
                    <div className="news_item">
						<a className="news_item_link" href={ item.url }>
							<figure className="news_item_figure" aria-hidden="true">
								<img className="news_item_image" src={ item.img } alt="" />
								<figcaption class="news_item_details">
									<RichText.Content
										className="news_item_title"
										tagName="h2"
										value={ item.title }
									/>
									<RichText.Content
										className="news_item_label"
										tagName="p"
										value={ item.label }
									/>
									<span className="news_item_faux">Read article</span>
								</figcaption>
							</figure>
						</a>
                    </div>
                );
            });

            return (
                <div className="news">
                    <div className="news_inner">
						<div className="news_header">
							<h2 className="news_title">In the news</h2>
						</div>
                        <div className="news_items">
                            { items }
                        </div>
                    </div>
                </div>
            );
        },
    });
})();