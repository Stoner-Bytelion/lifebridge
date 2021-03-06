(function() {
    const { registerBlockType } = wp.blocks;
    const { Button } = wp.components;
    const {
        RichText,
        URLInputButton
    } = wp.blockEditor;

    registerBlockType('bytetheme/events', {
        title: 'Events',
        icon: 'shield',
        category: 'custom',
        attributes: {
            "title": {
                "type": "string"
            },
            "items": {
                "type": "array",
                "default": []
            }
        },
        edit: ({ attributes, setAttributes }) => {
            const handleAddItem = () => {
                const items = [...attributes.items];
                items.push({
                    month: '',
                    year: '',
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
                items[index][type] = value;
                setAttributes({ items });
            };

            const handleSingleChange = (value, type) => {
                const change = {
                    [type]: value
                };

                setAttributes(change);
            };

            let itemFields;

            if (attributes.items.length) {
                itemFields = attributes.items.map((item, index) => {
                    return (
                        <div className="editor_item">
                            <label className="editor_label">Month</label>
                            <RichText
                                value={ item.month }
                                onChange={ (value) => handleItemChange(index, value, 'month') }
                            />
                            <label className="editor_label">Year</label>
                            <RichText
                                value={ item.year }
                                onChange={ (value) => handleItemChange(index, value, 'year') }
                            />
                            <label className="editor_label">Title</label>
                            <RichText
                                value={ item.title }
                                onChange={ (value) => handleItemChange(index, value, 'title') }
                            />
                            <label className="editor_label">Caption</label>
                            <RichText
                                value={ item.caption }
                                onChange={ (value) => handleItemChange(index, value, 'caption') }
                            />
                            <label className="editor_label">Url</label>
                            <URLInputButton
                                url={ item.url }
                                onChange={ (value) => handleItemChange(index, value, 'url') }
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
                    <h2 className="editor_title">Events</h2>
                    <label className="editor_label">Title</label>
                    <RichText
                        value={ attributes.title }
                        onChange={ (value) => handleSingleChange(value, 'title') }
                    />
                    { itemFields } 
                    <Button
                        className="editor_button"
                        isDefault
                        onClick={ handleAddItem }
                    >Add Item</Button>
                </div>
            ];
        },
        save: ({ attributes }) => {
            const items = attributes.items.map((item) => {
                return (
                    <li className="event">
                        <time className="event_date">
                            <RichText.Content
                                className="event_month"
                                tagName="div"
                                value={ item.month }
                            />
                            <RichText.Content
                                className="event_year"
                                tagName="div"
                                value={ item.year }
                            />
                        </time>
                        <div className="event_body">
                            <div className="event_group">
                                <RichText.Content
                                    className="event_title"
                                    tagName="h2"
                                    value={ item.title }
                                />
                                <RichText.Content
                                    className="event_caption"
                                    tagName="p"
                                    value={ item.caption }
                                />
                            </div>
                            <div className="event_group">
                                {
                                    item.url !== '' ?
                                    <a className="event_link" href={ item.url }>
                                        <span className="event_link_label">Sign Up</span>
                                        <span className="event_link_icon">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                <path d="M15.057 7.609l7.057 7.057h-15.448c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333h15.448l-7.057 7.057c-0.521 0.521-0.521 1.365 0 1.885s1.365 0.521 1.885 0l9.333-9.333c0.128-0.128 0.224-0.276 0.289-0.433 0.065-0.16 0.1-0.329 0.101-0.499 0.001-0.177-0.032-0.355-0.101-0.52-0.065-0.157-0.161-0.305-0.289-0.433l-9.333-9.333c-0.521-0.521-1.365-0.521-1.885 0s-0.521 1.365 0 1.885z"></path>
                                            </svg>
                                        </span>
                                    </a> : 
                                    <span className="event_hint">coming soon</span>
                                }
                            </div>
                        </div>
                    </li>
                );
            } );
            
            return (
                <div className="events_block">
                    <div className="events_block_inner">
                        <div className="events_block_header">
                            <RichText.Content
                                className="events_block_title"
                                tagName="h2"
                                value={ attributes.title }
                            />
                        </div>
                        <ul className="events">
                            { items }
                        </ul>
                    </div>
                </div>
            );
        },
    });
})();