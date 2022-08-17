const OneProfile = ({ object }) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
            <img src="../image/page_1_team_member_profile.svg" className="team_members__main__profile" />
            <div className="team_members__main__name">{object.name}</div>
            <div className="team_members__main__job">{object.job}</div>
        </div>
    )
}

export default OneProfile;