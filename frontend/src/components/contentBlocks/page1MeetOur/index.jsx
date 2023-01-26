import './index.css';
import OneTeamMember from '../Items/OneTeamMember';

const TeamMember = (props) => {

	return (
		<div className='team_members container'>
			<div className='team_members__text text-center mx-auto'>
				<h4 className="mt-4 text-uppercase text-success">team member</h4>
				<h2>Meet Our Great Member</h2>
				<p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
			</div>
			<div>
				<div className="row">
					{props.team.map((teamMember) =>
						<OneTeamMember teamMember={teamMember} />
					)}
				</div>
			</div>
		</div>
	)
}

export default TeamMember;