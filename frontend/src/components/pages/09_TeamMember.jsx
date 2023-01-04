import Header from '../Header';
import TeamMembers_09 from '../contentBlocks/page9_team';
import DontMiss from '../contentBlocks/DontMiss';
import Footer from '../Footer';

export const TeamMember_09 = () => { // page 9
    return (
        <secion>
            <Header />
            <TeamMembers_09 /> {/* create hover effect ( show facebbok, twitter ) */}
            <DontMiss />
            <Footer />
        </secion>
    );
};