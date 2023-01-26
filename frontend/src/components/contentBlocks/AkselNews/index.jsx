import './index.css';
import OneNews from '../Items/OneNews';

const AkselNews = (props) => {
	
	return (  
		<div className='container news'>
			<div className='text-center mx-auto'>
				<h2>Akcel News</h2>
				<p className="news-text mx-auto mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
			</div>
			<div className="aksel_news-main">
				<div className="row">
					{props.news.map((news) => (
						<OneNews news={news} />
					))}
				</div>
			</div>
		</div>
	)
}

export default AkselNews;