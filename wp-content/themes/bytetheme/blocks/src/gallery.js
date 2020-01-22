(function() {
	const { registerBlockType } = wp.blocks;
	const { Button } = wp.components;
	const {
		MediaUploadCheck,
		MediaUpload,
		RichText,
        URLInputButton
	} = wp.blockEditor;

	registerBlockType('bytetheme/gallery', {
		title: 'Gallery Carousel',
		icon: 'shield',
		category: 'custom',
		attributes: {
			title: {
                type: 'string'
			},
            caption: {
                type: 'string'
            },
			items: {
				type: 'array',
				default: []
			},
			url: {
                type: 'string'
            }
		},
		edit: ({ attributes, setAttributes }) => {
			const handleAddItem = () => {
				const items = [...attributes.items];
				items.push({
					img: 'http://placehold.it/380x380',
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
					{ itemFields }
					<label className="editor_label">Learn More Link</label>
					<URLInputButton
						url={ attributes.url }
						onChange={ (value) => handleSingleChange(value, "url") }
					/>
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
					<div className="gallery_item" data-index={ index }>
						<figure className="gallery_figure" aria-hidden="true">
							{
								typeof item.img == 'string' ?
								<img className="gallery_image" src={ item.img } alt="" /> :
								<img
									className="gallery_image"
									src={ item.img.sizes.medium.url }
									alt={ item.img.alt }
								/>
							}
						</figure>
					</div>
				);
			});

			const boxes = attributes.items.map((item, index) => {
				return (
					<div className="gallery_box_item" data-index={ index }>
						<figure className="gallery_box_figure" aria-hidden="true">
							{
								typeof item.img == 'string' ?
								<img className="gallery_box_image" src={ item.img } alt="" /> :
								<img
									className="gallery_box_image"
									srcset={
										item.img.sizes.medium.url + ' 300w,' +
										item.img.sizes.large.url + ' 740w,' +
										item.img.sizes.full.url + ' 980w'
									}
									src={ item.img.sizes.medium.url }
									alt={ item.img.alt }
								/>
							}
						</figure>
					</div>
				);
			});

			return (
				<div className="gallery">
					<div className="gallery_inner">
						<div className="gallery_header">
							<RichText.Content
								className="gallery_title"
								tagName="h2"
								value={ attributes.title }
							/>
							<RichText.Content
								className="gallery_caption"
								tagName="p"
								value={ attributes.caption }
							/>
						</div>
						<div className="gallery_items">
							{ items }
						</div>
						<div className="gallery_box">
							<div className="gallery_box_items">
								{ boxes }
							</div>
							<button className="gallery_box_close">Close</button>
						</div>
					</div>
				</div>
			);
		},
	});
})();