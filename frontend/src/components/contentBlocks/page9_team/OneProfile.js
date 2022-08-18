const OneProfile = ({ object }) => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" >
            <div>
                <img src="../image/page_1_team_member_profile.svg" className="team_members__main__profile" />
            </div>
            <div className="team_members__main__name">{object.name}</div>
            <div className="team_members__main__job">{object.job}</div>
        </div>
    )
}

export default OneProfile;