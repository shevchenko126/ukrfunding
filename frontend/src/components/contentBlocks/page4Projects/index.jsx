import './index.css';
import OneProject from '../Items/OneProject';

const Page4Projects = (props) => {
    return (
        <section>
            <div className='row'>
                {props.projects.map((project) => (
                    <OneProject col='col-4' project={project} />
                ))}
            </div>
            <div className='text-center'>
                <button className='mt-5 text-uppercase text-white filter_category__btnn'>load more</button>
            </div>
        </section>
    )
}

export default Page4Projects;