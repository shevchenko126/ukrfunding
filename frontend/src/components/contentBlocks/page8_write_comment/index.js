import './index.css';

const WriteComment = () => {
	return (
		<div>
			<div className="container write_comment">
				<div className="write_comment__title">Write Comment</div>
				<form>
					<div className="d-flex row write_comment__inputes">
						<div className='col-lg-6 col-md-12'>
							<label for="name"></label>
							<input placeholder="Write Your name..." id="name" name="name" maxlength="200" min="5" className="mt-2 write_comment__inputes__input" type="text" />
						</div>
						<div className='col-lg-6 col-md-12'>
							<label for="yemail"></label>
							<input placeholder="Write Your email..." id="email" name="email" maxlength="50" min="5" className="mt-2 write_comment__inputes__input" type="email" />
						</div>
					</div>
					<label for="text"></label>
					<textarea id="text" className='write_comment__textarea' name="text" placeholder="Write Your text here..."></textarea>
					<button className="write_comment__button-post" type="button">POST A COMMENT</button>
				</form>

				<div className="row">
					<div className='col-lg-6 col-md-12 mt-5'>
						<span className="write_comment__comments-title">4 Comments found</span>
					</div>
					<div className='col-lg-6 col-md-12 mt-5 write_comment-right_col'>
						<span>
							<select className="write_comment__time-list">
								<option>Latest</option>
								<option>All</option>
							</select>
						</span>
					</div>
				</div>

				<div className="d-flex write_comment__comments">
					<div>{/*  */}
						<img src="../image/page8_write_comment_icon-profile.svg" />
					</div>
					<div style={{ marginLeft: '45px' }}>
						<div className="write_comment__comments__name">Angela Moss</div>
						<div className="write_comment__comments__comment">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est el"</div>
					</div>
				</div>
				<button className="write_comment__button-reply" type="button">REPLY</button>
				<div className="d-flex write_comment__comments">
					<div>
						<img src="../image/page8_write_comment_icon-profile.svg" />
					</div>
					<div style={{ marginLeft: '45px' }}>
						<div className="write_comment__comments__name">Geovanny William</div>
						<div className="write_comment__comments__comment">Officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias cons</div>
					</div>
				</div>
				<button className="write_comment__button-reply" type="button">REPLY</button>
				<div style={{ marginLeft: '10%' }}>
					<div className="d-flex write_comment__comments">
						<div>
							<img src="../image/page8_write_comment_icon-profile.svg" />
						</div>
						<div style={{ marginLeft: '45px' }}>
							<div className="write_comment__comments__name">Andrew Simatupang</div>
							<div className="write_comment__comments__comment">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima venia</div>
						</div>
					</div>
				</div>
				<div style={{ marginLeft: '10%' }}>
					<div className="d-flex write_comment__comments">
						<div>
							<img src="../image/page8_write_comment_icon-profile.svg" />
						</div>
						<div style={{ marginLeft: '45px' }}>
							<div className="write_comment__comments__name">Olivier James</div>
							<div className="write_comment__comments__comment">Enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse</div>
						</div>
					</div>
				</div>
			</div>
			<hr id='hr' />
		</div>
	)
}

export default WriteComment;