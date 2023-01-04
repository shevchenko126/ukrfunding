import Header from '../Header';
import AkcelNews_page7 from '../contentBlocks/page7_akcel_news';
import OurPartnership from '../contentBlocks/OurPartnership';
import DontMiss from '../contentBlocks/DontMiss';
import Footer from '../Footer';

export const LatestNews_07 = () => { // page 7
    return (
        <section>
            <Header />
            <AkcelNews_page7 />
            <OurPartnership />
            <DontMiss />
            <Footer />
        </section>
    );
};