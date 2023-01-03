import './index.css';
import OneNews from '../Items/OneNews';

const AkselNews = (props) => {
	
	return (  
		<div>
			<div className="container aksel_news-header">
				<div className="aksel_news-header__title">Akcel News</div>
				<div className="aksel_news-header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
			</div>
			<div className="container aksel_news-main">
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