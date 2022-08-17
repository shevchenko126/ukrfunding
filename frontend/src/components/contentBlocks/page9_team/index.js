import './index.css';
import OneProfile from './OneProfile';

const TeamMember_09 = () => {

    const objects = [
        {
            name: 'Jason Krash',
            job: 'Managing Director'
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director'
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director'
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director'
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director'
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director'
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director'
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director'
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director'
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director'
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director'
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director'
        },
    ]

    return (
        <section>
            <article>
                <div className='container-fluid text-white text-center team'>
                    <div className='pt-4 team__title'>Team Member</div>
                    <div className='py-4 team__tetxt'>Aut neque sed libero reiciendis repellendus laboriosam dolore omnis. Eligendi perspiciatis voluptate et est. Cumque aut aut et repellendus a delectus ipsum tempore excepturi. Distinctio dignissimos unde.</div>
                </div>
            </article>
            <article>
                <div className='team_members'>
                    <div className="container team_members__header">
                        <div className="team_members__header__header">TEAMWORK</div>
                        <div className="team_members__header__title">Let’s Meet Our Great Team</div>
                    </div>
                    <div className="container team_members__main">
                        <div className="row">
                            {objects.map((object) => (
                                <OneProfile object={object} />
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default TeamMember_09;