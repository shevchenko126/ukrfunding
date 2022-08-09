import './index.css';
import OneProject from './OneProject';

const AkselNews = () => {
	
	const projects = [
		{
			category: 'health',
			title: 'New vaccine for cattle protects against fetal calf loss from EBA – anatomy of..',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			author: 'Hawkins Junior',
			time_read: '24min read',
			date: 'November 21th, 2020',
		},
		{
			category: 'business',
			title: '4 Things parents learned for they jids in 2020',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			author: 'Hawkins Junior',
			time_read: '24min read',
			date: 'November 21th, 2020',
		},
		{
			category: 'design',
			title: 'He Created the Web. Now He’s Out to Remake the Digital World.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			author: 'Melinda Humbles',
			time_read: '24min read',
			date: 'November 21th, 2020',
		},
	]
	
	return (  
		<div>
			<div className="container aksel_news-header">
				<div className="aksel_news-header__title">Akcel News</div>
				<div className="aksel_news-header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
			</div>
			<div className="container aksel_news-main">
				<div className="row">
					{projects.map((project) => (
						<OneProject project={project} />
					))}
				</div>
			</div>
		</div>
	)
}

export default AkselNews;