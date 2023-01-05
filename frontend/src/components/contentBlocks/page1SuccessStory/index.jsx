import './index.css';

const SuccessStory = () => {

    const data = {
        title: 'Samcung Okulus Rivt PC - Powered VR Gaming Headset',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit au',
        totalFounded: '24,553,852.24',
        author: {
            name: 'Hendric Anderson',
            campaign: 12,
            city: 'New York, London'
        }
    }

    return (
        <div className="container success_story">
            <div className="row pb-5">
                <div className="col-lg-6 col-md-12">
                    <div className='title-title'>
                        <h4 className="text-uppercase text-success">Success story</h4>
                        <h2 className="mt-4 title-title">Read The Story With Akcel</h2>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 d-flex align-items-center success_story__button-col">
                    <button className="mt-5 button-bg-green-text-white">
                        <span className="d-flex">
                            <div className="text-white">View More</div>
                            <img src="../image/page1_success_story_arrow.svg" style={{ paddingLeft: '20px' }} alt=">" />
                        </span>
                    </button>
                </div>
            </div>
            <div className="row mt-5 d-flex align-items-center">
                <div className="col-lg-6 col-md-12">
                    <img src="../image/page1_success_story_placeholder.svg" style={{ width: '100%' }} alt="#" />
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className='title-title'>
                        <h3 className="">{data.title}</h3>
                        <p className="mt-4">{data.description}</p>
                        <h2 className="mt-4 text-success success-story-founded">{data.totalFounded}</h2>
                        <h5 className="mt-2">Total funded</h5>
                    </div>
                    <div className="mt-5">
                        <div className="d-flex title">
                            <div className=''>
                                <img src="./image/page1_success_story_user.svg" alt="user" />
                            </div>
                            <div className='mx-2'>
                                <div>
                                    <h5>{data.author.name}</h5>
                                </div>
                                <div className="author-city">{data.author.city}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SuccessStory;