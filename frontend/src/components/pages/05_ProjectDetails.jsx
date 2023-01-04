import Header from '../Header';
import Details from '../contentBlocks/page5ProjectDetails';
import AboutProject from '../contentBlocks/page5AboutProject';
import Support from '../contentBlocks/page5SupportOtherProjects';
import Page5Projects from '../contentBlocks/page5Projects';
import DontMiss from '../contentBlocks/DontMiss';
import Footer from '../Footer';

export const ProjectDetails_05 = () => { // page 5

    const projects = [
        {
            title: 'Mirror One | Your life at a glance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
            author: 'Gustavo Mango',
            /* rate: '' */
            campaign: '12 Campaign',
            place: 'New York, London',
            progress: 90,
            raised: 'Total Raised $ 5,345',
            daysLeft: '45 Days left',
            slug: '321dsf',
        },
        {
            title: 'Mirror One | Your life at a glance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
            author: 'Roger Bergson',
            /* rate: '' */
            campaign: '12 Campaign',
            place: 'New York, London',
            progress: 10,
            raised: 'Total Raised $ 5,345',
            daysLeft: '45 Days left',
            slug: '321dsf',
        },
        {
            title: 'Mirror One | Your life at a glance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
            author: 'James Westervelt',
            /* rate: '' */
            campaign: '12 Campaign',
            place: 'New York, London',
            progress: 50,
            raised: 'Total Raised $ 5,345',
            daysLeft: '45 Days left',
            slug: '321dsf',
        },
    ];

    return (
        <section>
            <Header />
            <Details />
            <div className='container' style={{ maxWidth: '1620px' }}>
                <div className='row'>
                    <div className='col-lg-8 col-md-12'>
                        <AboutProject />
                    </div>
                    <div className='col-lg-3 col-md-12 support'>
                        <Support />
                    </div>
                </div>
            </div>
            <Page5Projects projects={projects} />
            <DontMiss />
            <Footer />
        </section>
    );
};