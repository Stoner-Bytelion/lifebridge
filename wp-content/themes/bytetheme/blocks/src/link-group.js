(function() {
	const { registerBlockType } = wp.blocks;
	const { Button } = wp.components;
	const {
		RichText,
		URLInputButton
	} = wp.editor;

	registerBlockType('bytetheme/link-group', {
		title: 'Link Group',
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
					label: '',
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

			let itemFields;

			if (attributes.items.length) {
				itemFields = attributes.items.map((item, index) => {
					return (
						<div className="editor_item">
							<label className="editor_label">Label</label>
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
					<h2 className="editor_title">Link Group</h2>
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
					<li className="link_group_item">
						<a className="link_group_link" href={ item.url }>
							<RichText.Content
								className="link_group_label"
								tagName="span"
								value={ item.label }
							/>
							<span className="link_group_icon">
								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
									<path d="M15.057 7.609l7.057 7.057h-15.448c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333h15.448l-7.057 7.057c-0.521 0.521-0.521 1.365 0 1.885s1.365 0.521 1.885 0l9.333-9.333c0.128-0.128 0.224-0.276 0.289-0.433 0.065-0.16 0.1-0.329 0.101-0.499 0.001-0.177-0.032-0.355-0.101-0.52-0.065-0.157-0.161-0.305-0.289-0.433l-9.333-9.333c-0.521-0.521-1.365-0.521-1.885 0s-0.521 1.365 0 1.885z"></path>
								</svg>
							</span>
						</a>
					</li>
				);
			});

			return (
				<div className="link_group">
					<div className="link_group_inner">
						<ul className="link_group_items">
							{ items }
						</ul>
					</div>
				</div>
			);
		},
	});
})();