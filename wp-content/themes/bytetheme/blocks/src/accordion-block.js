(function() {
	const { registerBlockType } = wp.blocks;
	const { Button } = wp.components;
	const { RichText } = wp.blockEditor;

	registerBlockType('bytetheme/accordion-block', {
		title: 'Accordion',
		icon: 'shield',
		category: 'custom',
		attributes: {
			items: {
				type: 'array',
				default: []
			}
		},
		edit: ({ attributes, setAttributes }) => {
			const handleAddItem = () => {
				const items = [...attributes.items];
				items.push({
					title: '',
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

			let itemFields;

			if (attributes.items.length) {
				itemFields = attributes.items.map((item, index) => {
					return <div className="editor_item">
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
					<h2 className="editor_title">Accordion</h2>
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
					<li className="accordion">
						<button className="accordion_trigger">
							<RichText.Content
								className="accordion_title"
								tagName="span"
								value={ item.title }
							/>
							<span className="accordion_icon">
								<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
									<polygon points="6 6 6 0 8 0 8 6 14 6 14 8 8 8 8 14 6 14 6 8 0 8 0 6"></polygon>
								</svg>
							</span>
						</button>
						<div className="accordion_content">
							<RichText.Content
								className="accordion_caption"
								tagName="p"
								value={ item.caption }
							/>
						</div>
					</li>
				);
			} );

			return (
				<div className="accordion_block">
					<div className="accordion_block_inner">
						<ul className="accordion_items">
							{ items }
						</ul>
					</div>
				</div>
			);
		},
	});
})();