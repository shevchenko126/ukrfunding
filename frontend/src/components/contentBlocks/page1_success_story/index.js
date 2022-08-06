import './index.css';

const SuccessStory = () => {
    return (
        <div className="container border my-5 success_story">
            <div className="row pb-5">
                <div className="col-lg-6 col-md-12">
                    <div className="text-uppercase text-success success_story__title">Success story</div>
                    <div className="mt-4 success_story__theme">Read They Story With Akcel</div>
                    <div className="mt-4 success_story__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
                </div>                    
                <div className="col-lg-6 col-md-12 mt-5 text-center">
                      <button className="mt-5 success_story__button">
                        <div className="d-flex">
                            <div className="text-white px-3 mx-2 success_story__button__text">View More</div>
                            <img src="./page1_success_story_images/arrow.svg" className="mx-5" />
                        </div>
                    </button>
                </div>
            </div>
            <div className="row mt-5 border success_story__main">
                <div className="col-lg-6 col-md-12 success_story__main__column">
                    <img src="./page1_success_story_images/placeholder.svg" className="success_story__main__column__photo" />
                </div>                    
                <div className="col-lg-6 col-md-12">
                    <div className="mt-5 success_story__main__title">Samcung Okulus Rivt PC - Powered VR  Gaming Headset</div>
                    <div className="mt-4 success_story__main__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit au</div>
                    <div className="mt-4 text-success success_story__main__number">$ 24,553,852.24</div>
                    <div className="mt-2 success_story__main__number-text">Total funded</div>
                    <div className="mt-5 success_story__main__author">
                        <div className="d-flex">
                            <img src="./page1_success_story_images/user.svg" />
                            <div>
                                <div className="d-flex">
                                    <div className="mx-3 success_story__main__author__author">Hendric Anderson</div>
                                    <img src="./page1_success_story_images/Vector.svg" className="mx-1" />
                                    <img src="./page1_success_story_images/Vector.svg" className="mx-1" />
                                    <img src="./page1_success_story_images/Vector.svg" className="mx-1" />
                                </div>
                                <div className="mx-3 mt-2 d-flex">
                                     <div className="text-success success_story__main__author__campaign">12 Campaign</div>
                                     <img src="./page1_success_story_images/dot.svg" className="mx-3"/>
                                     <div className="success_story__main__author__city">New York, London</div>
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