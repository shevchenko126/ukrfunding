import Header from '../Header';
import TeamMembers_09 from '../contentBlocks/page9Team';
import DontMiss from '../contentBlocks/DontMiss';
import Footer from '../Footer';

export const TeamMember_09 = () => { // page 9
    return (
        <section>
            <Header />
            <TeamMembers_09 /> {/* create hover effect ( show facebbok, twitter ) */}
            <DontMiss />
            <Footer />
        </section>
    );
};