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
		<div className='team_members container'>
			<div className='team_members__text text-center mx-auto'>
				<h4 className="mt-4 text-uppercase text-success">team member</h4>
				<h2>Meet Our Great Member</h2>
				<p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
			</div>
			<div>
				<div className="row">
					{team.map(({ img, name, job }) =>
						<div className="col-lg-3 col-md-6 col-sm-12 text-center mx-auto mt-4">
							<img alt="profile" src={img} className="team_members__main__profile" />
							<div className='team-member-name mt-4'>{name}</div>
							<p className="team-member-job">{job}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default TeamMember;