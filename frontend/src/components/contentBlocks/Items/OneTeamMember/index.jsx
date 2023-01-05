import './index.css';

const OneTeamMember = ({ teamMember }) => {
    return (
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 text-center mx-auto mt-5">
            <div>
                <img src={teamMember.img} className="team_members__main__profile" />
            </div>
            <div className='team-member-name mt-4'>{teamMember.name}</div>
            <p className="team-member-job">{teamMember.job}</p>
        </div>
    );
};

export default OneTeamMember;