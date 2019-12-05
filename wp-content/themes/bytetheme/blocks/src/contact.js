(function() {
	const { registerBlockType } = wp.blocks;
	const {
		MediaUploadCheck,
		MediaUpload,
		RichText
	} = wp.blockEditor;

	registerBlockType('bytetheme/contact', {
		title: 'Contact',
		icon: 'shield',
		category: 'custom',
		attributes: {
			img: {
				type: 'string',
				default: 'http://placehold.it/500',
				selector: 'img'
			},
			name: {
				type: 'string'
			},
			title: {
				type: 'string'
			},
			email: {
				type: 'string'
			},
			phone: {
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
					<h2 className="editor_title">Cover</h2>
					<div className="editor_item">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ (value) => handleItemChange(value, 'img') }
								allowedTypes={ ['image'] }
								render={ ({ open }) => {
									return <img src={ typeof attributes.img == 'string' ? attributes.img : attributes.img.sizes.full.url } onClick={ open } />;
								} }
							/>
						</MediaUploadCheck>
						<label className="editor_label">Name</label>
						<RichText
							value={ attributes.name }
							onChange={ (value) => handleItemChange(value, 'name') }
						/>
						<label className="editor_label">Title</label>
						<RichText
							value={ attributes.title }
							onChange={ (value) => handleItemChange(value, 'title') }
						/>
						<label className="editor_label">Email</label>
						<RichText
							value={ attributes.email }
							onChange={ (value) => handleItemChange(value, 'email') }
						/>
						<label className="editor_label">Phone</label>
						<RichText
							value={ attributes.phone }
							onChange={ (value) => handleItemChange(value, 'phone') }
						/>
					</div>
				</div>
			);
		},
		save: ({ attributes }) => {
			return (
				<div className="contact_block">
					<div className="contact_block_inner">
						<div className="contact">
							<div className="contact_header">
								<div className="contact_info">
									<RichText.Content
										className="contact_name"
										tagName="h2"
										value={ attributes.name }
									/>
									<RichText.Content
										className="contact_title"
										tagName="p"
										value={ attributes.title }
									/>
								</div>
								<figure className="contact_figure">
									{
										typeof attributes.img == 'string' ?
										<img className="contact_image" src={ attributes.img } alt="" /> :
										<img
											className="contact_image"
											srcset={
												attributes.img.sizes.medium.url + ' 300w,' +
												attributes.img.sizes.large.url + ' 740w,' +
												attributes.img.sizes.full.url + ' 980w'
											}
											src={ attributes.img.sizes.thumbnail.url }
											alt={ attributes.img.alt }
										/>
									}
								</figure>
							</div>
							<div className="contact_details">
								<div className="contact_detail">
									<span className="contact_detail_hint">Phone: </span>
									<a className="contact_detail_info" href={'tel:' + attributes.phone }>{ attributes.phone }</a>
								</div>
								<div className="contact_detail">
									<span className="contact_detail_hint">Email: </span>
									<a className="contact_detail_info" href={'mailto:' + attributes.email }>{ attributes.email }</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		},
	});
})();