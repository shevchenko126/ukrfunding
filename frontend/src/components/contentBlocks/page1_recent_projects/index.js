import './index.css';
import OneProject from './OneProject';

const RecentProjects = () => {

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
    ]

    return (
        <div className="container recent_projects" style={{marginTop: '100px'}}>
            <div className="text-center recent_projects__title">Recent Projects</div>
            <div className="mt-4 text-center recent_projects__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
            <div className="row mt-5 mb-5">
                {projects.map((project) => (
                    <OneProject project={project} />
                ))}
            </div>
        </div>
    )
}

export default RecentProjects;