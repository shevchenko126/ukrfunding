import HeaderModed from '../contentBlocks/HeaderModed';
import FilterCategory from '../contentBlocks/page4FilterCategory';
import Donate from '../contentBlocks/page4Donate';
import Page4Projects from '../contentBlocks/page4Projects';
import OurPartnership from '../contentBlocks/OurPartnership';
import DontMiss from '../contentBlocks/DontMiss';
import Footer from '../Footer';

export const Project3Col_04 = () => { // page 4

    const projects = [
        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: 'Total Raised $ 5,345',
            daysLeft: '45 Days left',
            author: 'Cheyenne Curtis',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'design',
            title: 'Notebook for your creative observation',
            progress: '30%',
            raised: 'Total Raised $ 5,345',
            daysLeft: '45 Days left',
            author: 'Ahmad Schleifer',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'technnology',
            title: 'VR Ears | Hear Off-World Listen Off-Ear',
            progress: '90%',
            raised: 'Total Raised $ 5,345',
            daysLeft: '45 Days left',
            author: 'Skylar Gouse',
            campaign: '12 Campaign',
            location: 'New York, London',
        },

        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: 'Total Raised $ 5,345',
            daysLeft: '45 Days left',
            author: 'Cheyenne Curtis',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'design',
            title: 'Notebook for your creative observation',
            progress: '30%',
            raised: 'Total Raised $ 5,345',
            daysLeft: '45 Days left',
            author: 'Ahmad Schleifer',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'technnology',
            title: 'VR Ears | Hear Off-World Listen Off-Ear',
            progress: '90%',
            raised: 'Total Raised $ 5,345',
            daysLeft: '45 Days left',
            author: 'Skylar Gouse',
            campaign: '12 Campaign',
            location: 'New York, London',
        },

        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: 'Total Raised $ 5,345',
            daysLeft: '45 Days left',
            author: 'Cheyenne Curtis',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'design',
            title: 'Notebook for your creative observation',
            progress: '30%',
            raised: 'Total Raised $ 5,345',
            daysLeft: '45 Days left',
            author: 'Ahmad Schleifer',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'technnology',
            title: 'VR Ears | Hear Off-World Listen Off-Ear',
            progress: '90%',
            raised: 'Total Raised $ 5,345',
            daysLeft: '45 Days left',
            author: 'Skylar Gouse',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
    ];

    return (
        <section>
            <HeaderModed />
            <div className='container' style={{ maxWidth: '1620px' }}>
                <div className='row'>
                    <div className='col-xxl-3 col-lg-6 col-md-12'>
                        <FilterCategory />
                        <Donate />
                    </div>
                    <div className='col-xxl-9 col-lg-6 col-md-12 px-5'>
                        <Page4Projects projects={projects} />
                    </div>
                </div>
            </div>
            <OurPartnership />
            <DontMiss />
            <Footer />
        </section>
    )
}