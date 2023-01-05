import { useState } from 'react';
import HeaderModed from '../contentBlocks/HeaderModed';
import FilterCategory from '../contentBlocks/page4FilterCategory';
import Donate from '../contentBlocks/page4Donate';
import PageProjects from '../contentBlocks/page4Projects';
import OurPartnership from '../contentBlocks/OurPartnership';
import DontMiss from '../contentBlocks/DontMiss';
import Footer from '../Footer';
import { useEffect } from 'react';

export const Projects = () => { // page 3

    const projectsAll = [
        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: '5,345',
            daysLeft: '45',
            author: 'Cheyenne Curtis',
            location: 'New York, London',
            slug: '123fs',
        },
        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: '5,345',
            daysLeft: '45',
            author: 'Cheyenne Curtis',
            location: 'New York, London',
            slug: '123fs',
        },
        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: '5,345',
            daysLeft: '45',
            author: 'Cheyenne Curtis',
            location: 'New York, London',
            slug: '123fs',
        },
        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: '5,345',
            daysLeft: '45',
            author: 'Cheyenne Curtis',
            location: 'New York, London',
            slug: '123fs',
        },
        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: '5,345',
            daysLeft: '45',
            author: 'Cheyenne Curtis',
            location: 'New York, London',
            slug: '123fs',
        },
        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: '5,345',
            daysLeft: '45',
            author: 'Cheyenne Curtis',
            location: 'New York, London',
            slug: '123fs',
        },
    ];

    const [inputValue, setInputValue] = useState('');
    const [projects, setProjects] = useState(projectsAll);
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        let data = projects;

        if (inputValue) {
            data = data.filter((project) => project.title.toLowerCase().includes(inputValue.toLowerCase()));
        };

        setFilteredProjects(data)
    }, [inputValue]);

    return (
        <section>
            <HeaderModed value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <div className='container' style={{ maxWidth: '1620px' }}>
                <div className='row'>
                    <div className='col-xxl-3 col-lg-6 col-md-12'>
                        <FilterCategory />
                        <Donate />
                    </div>
                    <div className='col-xxl-9 col-lg-6 col-md-12 px-5'>
                        <PageProjects projects={filteredProjects} />
                    </div>
                </div>
            </div>
            <OurPartnership />
            <DontMiss />
            <Footer />
        </section>
    )
}