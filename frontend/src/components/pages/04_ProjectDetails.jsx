import { useState } from 'react';
import PopupDonate from '../contentBlocks/page5ProjectDetails/PopupDonate';
import Header from '../Header';
import Details from '../contentBlocks/page5ProjectDetails';
import Page5Projects from '../contentBlocks/page5Projects';
import DontMiss from '../contentBlocks/DontMiss';
import Footer from '../Footer';

export const ProjectDetails = () => { // page 4

    const projects = [
        {
            title: 'Mirror One | Your life at a glance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
            author: 'Gustavo Mango',
            place: 'New York, London',
            progress: 90,
            raised: '5,345',
            daysLeft: '45',
            slug: '321dsf',
        },
        {
            title: 'Mirror One | Your life at a glance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
            author: 'Roger Bergson',
            place: 'New York, London',
            progress: 10,
            raised: '5,345',
            daysLeft: '45',
            slug: '321dsf',
        },
        {
            title: 'Mirror One | Your life at a glance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
            author: 'James Westervelt',
            place: 'New York, London',
            progress: 50,
            raised: '5,345',
            daysLeft: '45',
            slug: '321dsf',
        },
    ];

    const [popupState, setPopupState] = useState(false);

    return (
        <section className={`${popupState ? 'bg-gray' : ''}`}>
            {popupState ? <PopupDonate donateTo={'Samcung Okulus Rivt PC - Powered VR Gaming Headset'} closePopup={() => setPopupState(false)} /> : ''}
            <Header />
            <Details openPopup={() => setPopupState(true)} />
            <Page5Projects projects={projects} />
            <DontMiss />
            <Footer />
        </section>
    );
};