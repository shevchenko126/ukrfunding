import Select from 'react-select';
import './index.css';

const WriteComment = () => {
	return (
		<div>
			<div className="container write_comment">
				<h3 className="mt-5">Write Comment</h3>
				<form>
					<div className="d-flex row mt-3">
						<div className='col-lg-6 col-md-12'>
							<label for="name"></label>
							<input placeholder="Write Your name..." id="name" name="name" maxlength="50" min="5" className="mt-2 comment-input" type="text" />
						</div>
						<div className='col-lg-6 col-md-12'>
							<label for="yemail"></label>
							<input placeholder="Write Your email..." id="email" name="email" maxlength="50" min="5" className="mt-2 comment-input" type="email" />
						</div>
					</div>
					<label for="text"></label>
					<textarea id="text" className='write_comment__textarea' name="text" placeholder="Write Your text here..."></textarea>
					<button className="button-bg-pink-text-white mt-3" type="button">POST A COMMENT</button>
				</form>

				<div className="row">
					<div className='col-lg-6 col-md-12 mt-5'>
						<h3 className="">4 Comments found</h3>
					</div>
					<div className='col-lg-6 col-md-12 mt-5 write_comment-right_col'>
						<Select
							options={[
								{ value: 'latest', label: 'Latest' },
								{ value: 'newest', label: 'Newest' },
							]}
							defaultValue={{ value: 'latest', label: 'Latest' }}
							styles={{
								control: (baseStyles, state) => ({
									...baseStyles,
									border: 'none',
									background: 'rgba(163, 163, 163, 0.15)',
									width: '175px',
									paddingLeft: '10px'
								}),
							}}
						/>
					</div>
				</div>

				<div className="d-flex mt-5">
					<div>
						<img src="/image/page8_write_comment_icon-profile.svg" />
					</div>
					<div style={{ marginLeft: '45px' }}>
						<h4 className="">Angela Moss</h4>
						<p className='mt-3'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est el"</p>
					</div>
				</div>
				<button className="reply-btn" type="button">REPLY</button>
				<div className="d-flex mt-5">
					<div>
						<img src="/image/page8_write_comment_icon-profile.svg" />
					</div>
					<div style={{ marginLeft: '45px' }}>
						<h4 className="">Angela Moss</h4>
						<p className='mt-3'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est el"</p>
					</div>
				</div>
				<button className="reply-btn" type="button">REPLY</button>
				<div style={{ marginLeft: '10%' }}>
					<div className="d-flex mt-5">
						<div>
							<img src="/image/page8_write_comment_icon-profile.svg" />
						</div>
						<div style={{ marginLeft: '45px' }}>
							<h4 className="">Angela Moss</h4>
							<p className='mt-3'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est el"</p>
						</div>
					</div>
				</div>
				<div style={{ marginLeft: '10%' }}>
					<div className="d-flex mt-5">
						<div>
							<img src="/image/page8_write_comment_icon-profile.svg" />
						</div>
						<div style={{ marginLeft: '45px' }}>
							<h4 className="">Angela Moss</h4>
							<p className='mt-3'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est el"</p>
						</div>
					</div>
				</div>
			</div>
			<hr className='hr' />
		</div>
	)
}

export default WriteComment;