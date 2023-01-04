import './index.css';

const NewsDetails = () => {
	return (
		<div>
			<div className="container-fluid news_details_background"></div>
			<div className="container p-5">
				<h2 className="mb-4">4 Things Parents Learned From Their Kids in 2020</h2>
				<div className="row">
					<div className="d-flex col-lg-4 col-sm-12 mt-5">
						<img src="/image/page_8_icon.svg" />
						<div style={{ marginLeft: '20px' }}>
							<h5>Jean Kapoor</h5>
							<div className="d-flex mt-4">
								<div>24min read</div>
								<img src="../image/page_8_dot.svg" className='mx-2' />
								<div>November 21th, 2020</div>
							</div>
						</div>
					</div>
					<div className="col-lg-8 col-sm-12 mt-5 row">
						<div className='col-lg-3 col-sm-12 btn-share-col'>
							<button className="btn-share">
								<img src="/image/page_8_logo_in.svg" style={{ paddingLeft: '20px', marginTop: '-8px' }} />
								<h6 className="">2,4k Shares</h6>
							</button>
						</div>
						<div className='col-lg-3 col-sm-12 btn-share-col'>
							<button className="btn-share">
								<img src="/image/page_8_logo_facebook.svg" style={{ paddingLeft: '20px', marginTop: '-4px' }} />
								<h6 className="">13k Shares</h6>
							</button>
						</div>
						<div className='col-lg-3 col-sm-12 btn-share-col'>
							<button className="btn-share">
								<img src="/image/page_8_logo_twitter.svg" style={{ paddingLeft: '20px' }} />
								<h6 className="">13k Shares</h6>
							</button>
						</div>
						<div className='col-lg-3 col-sm-12 btn-share-col'>
							<button className="share-viber">
								<img src="/image/page_8_logo_whatsapp.svg" />
							</button>
						</div>
					</div>
				</div>
				<h4 className="mt-5 pt-5">The standard Lorem Ipsum passage, used since the 1500s</h4>
				<p className="mt-3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
				<h4 className="mt-5">The standard Lorem Ipsum passageSection 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BCused since the 1500s</h4>
				<p className="mt-3">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
				<div className="d-flex comment-comment">
					<img src="/image/page_8_line.svg" />
					<div className="comment">
						<div className="comment-title">1914 translation by H. Rackham</div>
						<div className="comment-text">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </div>
					</div>
				</div>
				<h4 className="mt-5 pt-5">The standard Lorem Ipsum passage, used since the 1500s</h4>
				<p className="mt-3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
				<div className="row">
					<div className="col-lg-4 col-sm-12 share-title">Share this article :</div>
					<div className="col-lg-8 col-sm-12 mt-5 row">
						<div className='col-lg-3 col-sm-12 btn-share-col'>
							<button className="btn-share">
								<img src="/image/page_8_logo_in.svg" style={{ paddingLeft: '20px', marginTop: '-8px' }} />
								<h6 className="">2,4k Shares</h6>
							</button>
						</div>
						<div className='col-lg-3 col-sm-12 btn-share-col'>
							<button className="btn-share">
								<img src="/image/page_8_logo_facebook.svg" style={{ paddingLeft: '20px', marginTop: '-4px' }} />
								<h6 className="">13k Shares</h6>
							</button>
						</div>
						<div className='col-lg-3 col-sm-12 btn-share-col'>
							<button className="btn-share">
								<img src="/image/page_8_logo_twitter.svg" style={{ paddingLeft: '20px' }} />
								<h6 className="">13k Shares</h6>
							</button>
						</div>
						<div className='col-lg-3 col-sm-12 btn-share-col'>
							<button className="share-viber">
								<img src="/image/page_8_logo_whatsapp.svg" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default NewsDetails;