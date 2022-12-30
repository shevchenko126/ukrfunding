import './index.css';

const OneTeamMember = ({ teamMember }) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 text-center mx-auto mt-4">
            <img alt="profile" src={teamMember.img} className="team_members__main__profile" />
            <div className='team-member-name mt-4'>{teamMember.name}</div>
            <p className="team-member-job">{teamMember.job}</p>
        </div>
    );
};

export default OneTeamMember;