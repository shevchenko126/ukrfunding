import HeaderModed from '../contentBlocks/HeaderModed';
import Filters from '../contentBlocks/Filters';
import Page3Projects from '../contentBlocks/page3Projects';
import OurPartnership from '../contentBlocks/OurPartnership';
import DontMiss from '../contentBlocks/DontMiss';
import Footer from '../Footer';

export const Project4Col_03 = () => { // page 3

    const projects = [
        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Cheyenne Curtis',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'design',
            title: 'Notebook for your creative observation',
            progress: '30%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Ahmad Schleifer',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'technnology',
            title: 'VR Ears | Hear Off-World Listen Off-Ear',
            progress: '90%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Skylar Gouse',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'technnology',
            title: 'Self Driving Robot for Target Shooting Game',
            progress: '7%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Maren George',
            campaign: '12 Campaign',
            location: 'New York, London',
        },

        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Cheyenne Curtis',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'design',
            title: 'Notebook for your creative observation',
            progress: '30%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Ahmad Schleifer',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'technnology',
            title: 'VR Ears | Hear Off-World Listen Off-Ear',
            progress: '90%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Skylar Gouse',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'technnology',
            title: 'Self Driving Robot for Target Shooting Game',
            progress: '7%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Maren George',
            campaign: '12 Campaign',
            location: 'New York, London',
        },

        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Cheyenne Curtis',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'design',
            title: 'Notebook for your creative observation',
            progress: '30%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Ahmad Schleifer',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'technnology',
            title: 'VR Ears | Hear Off-World Listen Off-Ear',
            progress: '90%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Skylar Gouse',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'technnology',
            title: 'Self Driving Robot for Target Shooting Game',
            progress: '7%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Maren George',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
    ];

    return (
        <section>
            <HeaderModed />
            <Filters />
            <Page3Projects projects={projects} />
            <OurPartnership />
            <DontMiss />
            <Footer />
        </section>
    )
}