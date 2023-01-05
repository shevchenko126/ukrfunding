import Header from '../Header';
import Categories from '../contentBlocks/page11Categories';
import Page115Projects from '../contentBlocks/page11Projects';
import BecomeOurPremPartner from '../contentBlocks/BecomeOurPremiumPartner';
import Footer from '../Footer';

export const ProjectCategories_11 = () => { // page 11

    const projects = [
        {
            title: 'Mirror One | Your life at a glance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
            author: 'Gustavo Mango',
            slug: '32fdgfd',
            place: 'New York, London',
            progress: '4',
            raised: '5,345',
            daysLeft: '45',
        },
        {
            title: 'Mirror One | Your life at a glance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
            author: 'Roger Bergson',
            slug: '32fdgfd',
            place: 'New York, London',
            progress: '94',
            raised: '5,345',
            daysLeft: '45',
        },
        {
            title: 'Mirror One | Your life at a glance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
            author: 'James Westervelt',
            slug: '32fdgfd',
            place: 'New York, London',
            progress: '32',
            raised: '5,345',
            daysLeft: '45',
        },
    ];

    return (
        <section>
            <Header />
            <Categories />
            <Page115Projects projects={projects} />
            <BecomeOurPremPartner />
            <Footer />
        </section>
    );
};