import './index.css';
import OneTeamMember from '../Items/OneTeamMember';

const TeamMember_09 = () => {

    const teamMembers = [
        {
            name: 'Jason Krash',
            job: 'Managing Director',
            img: '/image/page_1_team_member_profile.svg',
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director',
            img: '/image/page_1_team_member_profile.svg',
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director',
            img: '/image/page_1_team_member_profile.svg',
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director',
            img: '/image/page_1_team_member_profile.svg',
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director',
            img: '/image/page_1_team_member_profile.svg',
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director',
            img: '/image/page_1_team_member_profile.svg',
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director',
            img: '/image/page_1_team_member_profile.svg',
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director',
            img: '/image/page_1_team_member_profile.svg',
        },
    ];

    return (
        <div>
            <div>
                <div className='container-fluid text-white text-center team'>
                    <h2 className='pt-4 text-white'>Team Member</h2>
                    <p className='pb-4 team-text mx-auto'>Aut neque sed libero reiciendis repellendus laboriosam dolore omnis. Eligendi perspiciatis voluptate et est. Cumque aut aut et repellendus a delectus ipsum tempore excepturi. Distinctio dignissimos unde.</p>
                </div>
            </div>
            <div className='text-center pt-5'>
                <div className="mt-5">
                    <h4 className="text-success">TEAMWORK</h4>
                    <h2 className="mt-5">Let’s Meet Our Great Team</h2>
                </div>
                <div className="container team_members__main">
                    <section className="row d-flex">
                        {teamMembers.map((teamMember) => (
                            <OneTeamMember teamMember={teamMember} />
                        ))}
                    </section>
                </div>
            </div>
        </div>
    )
}

export default TeamMember_09;