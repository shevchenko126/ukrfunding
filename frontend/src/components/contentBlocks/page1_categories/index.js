import './index.css';


const Page1Categories = () => {
    return (
        <div className="container main_container">
            <div className="main_container__categories text-uppercase text-center text-success mt-5">categories</div>
            <div className="main_container__explore_our mt-4 text-center">Explore Our Crowdfunding Featured Categories</div>
            <div className="main_container__main_text text-center mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
            <div className="row d-flex justify-content-center">
                <div className="main_container__icons col-lg-2 mt-5">
                    <figure>
                        <img src="../image/page1_categories_technology.svg" />
                        <figcaption className='mt-4'>Technology</figcaption>
                    </figure>
                </div>
                <div className="main_container__icons col-lg-2 mt-5">
                    <figure>
                        <img src="../image/page1_categories_education.svg" />
                        <figcaption className='mt-4'>Education</figcaption>
                    </figure>
                </div>
                <div className="main_container__icons col-lg-2 mt-5">
                    <figure>
                        <img src="../image/page1_categories_videos.svg" />
                        <figcaption className='mt-4'>Videos</figcaption>
                    </figure>
                </div>
                <div className="main_container__icons col-lg-2 mt-5">
                    <figure>
                        <img src="../image/page1_categories_medical.svg" />
                        <figcaption className='mt-4'>Medical</figcaption>
                    </figure>
                </div>
                <div className="main_container__icons col-lg-2 mt-5">
                    <figure>
                        <img src="../image/page1_categories_fashion.svg" />
                        <figcaption className='mt-4'>Fashion</figcaption>
                    </figure>
                </div>
                <div className="main_container__icons col-lg-2 mt-5">
                    <figure>
                        <img src="../image/page1_categories_design_hand.svg" />
                        <figcaption className='mt-4'>Design</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Page1Categories;