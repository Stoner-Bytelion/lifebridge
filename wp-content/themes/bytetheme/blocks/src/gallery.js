(function() {
	const { registerBlockType } = wp.blocks;
	const { Button } = wp.components;
	const {
		MediaUploadCheck,
		MediaUpload,
		RichText
	} = wp.blockEditor;

	registerBlockType('bytetheme/gallery', {
		title: 'Gallery Carousel',
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
					img: 'http://placehold.it/980x552',
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
					return (
						<div className="editor_item">
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ (value) => handleItemChange(index, value, 'img') }
									allowedTypes={ ['image'] }
									render={ ({ open }) => {
										return <img src={ typeof item.img == 'string' ? item.img : item.img.sizes.full.url } onClick={ open } />;
									} }
								/>
							</MediaUploadCheck>
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
						</div>
					);
				});
			}

			return [
				<div className="editor_wrapper">
					<h2 className="editor_title">Gallery Carousel</h2>
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
			const items = attributes.items.map((item, index) => {
				return (
					<div className="gallery_item">
						<figure className="gallery_figure" aria-hidden="true">
							{
								typeof item.img == 'string' ?
								<img className="gallery_image" src={ item.img } alt="" /> :
								<img
									className="gallery_image"
									srcset={
										item.img.sizes.medium.url + ' 300w,' +
										item.img.sizes.large.url + ' 740w,' +
										item.img.sizes.full.url + ' 980w'
									}
									src={ item.img.sizes.thumbnail.url }
									alt={ item.img.alt }
								/>
							}
							<figcaption class="gallery_details">
								<span class="gallery_index">
									<span class="gallery_index_number">{ index + 1 }</span>
									<span class="gallery_index_label"> of </span>
									<span class="gallery_index_number">{ attributes.items.length }</span>
								</span>
								{
									item.caption.length > 0 &&
									<RichText.Content
										className="gallery_item_caption"
										tagName="p"
										value={ item.caption }
									/>
								}
							</figcaption>
						</figure>
					</div>
				);
			});

			return (
				<div className="gallery">
					<div className="gallery_inner">
						<div className="gallery_items">
							{ items }
						</div>
					</div>
				</div>
			);
		},
	});
})();