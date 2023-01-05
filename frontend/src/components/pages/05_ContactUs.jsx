import Header from '../Header';
import Contact from '../contentBlocks/ContactUs';
import OurPartnership from '../contentBlocks/OurPartnership';
import BecomeOurPremPartner from '../contentBlocks/BecomeOurPremiumPartner';
import Footer from '../Footer';

export const ContactUs = () => { // page 5
    return (
        <section>
            <Header />
            <Contact />
            <OurPartnership />
            <BecomeOurPremPartner />
            <Footer />
        </section>
    );
};