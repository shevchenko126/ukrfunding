import './index.css';

const TeamMember = () => {
	return (
		<div>
			<div className="container team_members__header">
				<div className="team_members__header__header">TEAM MEMBER</div>
				<div className="team_members__header__title">Meet Our Great Member</div>
				<div className="team_members__header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
			</div>
			<div className="container team_members__main">
				<div className="row">
					<div className="col">
						<img src="../image/page_1_team_member_profile.svg" className="team_members__main__profile"/>
						<div className="team_members__main__name">Kaylynn Donin</div>
						<div className="team_members__main__job">Managing Director</div>
					</div>
					<div className="col">
						<img src="../image/page_1_team_member_profile.svg" className="team_members__main__profile" />
						<div className="team_members__main__name">Lindsey Botosh</div>
						<div className="team_members__main__job">National Web Assistant</div>
					</div>
					<div className="col">
						<img src="../image/page_1_team_member_profile.svg" className="team_members__main__profile" />
						<div className="team_members__main__name">Phillip Schleifer</div>
						<div className="team_members__main__job">National Intranet Specialist</div>
					</div>
					<div className="col">
						<img src="../image/page_1_team_member_profile.svg" className="team_members__main__profile" />
						<div className="team_members__main__name">Jakob Ekstrom Bothman</div>
						<div className="team_members__main__job">District Accounts Analyst</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TeamMember;