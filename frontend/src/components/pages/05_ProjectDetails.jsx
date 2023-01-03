import Header from '../Header';
import Details from '../contentBlocks/page5ProjectDetails';
import AboutProject from '../contentBlocks/page5AboutProject';
import Support from '../contentBlocks/page5SupportOtherProjects';
import Page5Projects from '../contentBlocks/page5Projects';
import DontMiss from '../contentBlocks/DontMiss';
import Footer from '../Footer';

export const ProjectDetails_05 = () => { // page 5

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
            <Page5Projects />
            <DontMiss />
            <Footer />
        </section>
    );
};