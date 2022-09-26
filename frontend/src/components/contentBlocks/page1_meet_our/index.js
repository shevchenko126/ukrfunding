import { CgFacebook } from 'react-icons/cg';

import './index.css';

const TeamMember = () => {

	const team = [
		{
			img: '../image/page_1_team_member_profile.svg',
			name: 'Kaylynn Donin',
			job: 'Managing Director'
		},
		{
			img: '../image/page_1_team_member_profile.svg',
			name: 'Lindsey Botosh',
			job: 'National Web Assistant'
		},
		{
			img: '../image/page_1_team_member_profile.svg',
			name: 'Phillip Schleifer',
			job: 'National Intranet Specialist'
		},
		{
			img: '../image/page_1_team_member_profile.svg',
			name: 'Jakob Ekstrom Bothman',
			job: 'District Accounts Analyst'
		},
	]

	return (
		<div className='team_members'>
			<div className="container team_members__header">
				<div className="text-uppercase team_members__header__header">team member</div>
				<div className="team_members__header__title">Meet Our Great Member</div>
				<div className="team_members__header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
			</div>
			<div className="container team_members__main">
				<div className="row">
					{team.map(({ img, name, job }) =>
						<div className="col-lg-3 col-md-6 col-sm-12" style={{ position: 'relative' }}>
							<img src={img} className="team_members__main__profile" />
							<div className="team_members__main__name">{name}</div>
							<div className="team_members__main__job">{job}</div>
							{/* <div className='team_members__main__links'>
								<CgFacebook />
							</div> */}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default TeamMember;