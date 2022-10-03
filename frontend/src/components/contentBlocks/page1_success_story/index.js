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
                    <div className="text-uppercase text-success success_story__title">Success story</div>
                    <div className="mt-4 success_story__theme">Read The Story With Akcel</div>
                    <div className="mt-4 success_story__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
                </div>
                <div className="col-lg-6 col-md-12 d-flex align-items-center success_story__button-col">
                    <button className="mt-5 success_story__button">
                        <div className="d-flex">
                            <div className="text-white px-3 mx-2 success_story__button__text">View More</div>
                            <img src="../image/page1_success_story_arrow.svg" className="mx-5" alt="" />
                        </div>
                    </button>
                </div>
            </div>
            <div className="row mt-5 success_story__main">
                <div className="col-lg-6 col-md-12 success_story__main__column">
                    <img src="../image/page1_success_story_placeholder.svg" className="success_story__main__column__photo" alt="" />
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="success_story__main__title">{data.title}</div>
                    <div className="mt-4 success_story__main__text">{data.description}</div>
                    <div className="mt-4 text-success success_story__main__number">{data.totalFounded}</div>
                    <div className="mt-2 success_story__main__number-text">Total funded</div>
                    <div className="mt-5 success_story__main__author">
                        <div className="row d-flex">
                            <div className='col-lg-1 col-sm-12'>
                                <img src="../image/page1_success_story_user.svg" alt="" />
                            </div>
                            <div className='col-lg-11 col-sm-12 success_story__main__author-author'>
                                <div className="d-flex">
                                    <div className="success_story__main__author__author">{data.author.name}</div>
                                    <img src="../image/page1_success_story_Vector.svg" alt="" className="mx-1" />
                                    <img src="../image/page1_success_story_Vector.svg" alt="" className="mx-1" />
                                    <img src="../image/page1_success_story_Vector.svg" alt="" className="mx-1" />
                                </div>
                                <div className="mt-2 d-flex">
                                    <div className="text-success success_story__main__author__campaign">{data.author.campaign} Campaign</div>
                                    <img src="/image/page1_success_story_dot.svg" className="mx-3" alt="" />
                                    <div className="success_story__main__author__city">{data.author.city}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SuccessStory;