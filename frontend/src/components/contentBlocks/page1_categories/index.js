import './index.css';


const Page1Categories = () => {

    const categories = [
        {
            img: '../image/page1_categories_technology.svg',
            title: 'Technology'
        },
        {
            img: '../image/page1_categories_education.svg',
            title: 'Education'
        },
        {
            img: '../image/page1_categories_videos.svg',
            title: 'Videos'
        },
        {
            img: '../image/page1_categories_medical.svg',
            title: 'Medical'
        },
        {
            img: '../image/page1_categories_fashion.svg',
            title: 'Fashion'
        },
        {
            img: '../image/page1_categories_design_hand.svg',
            title: 'Design'
        },
    ]

    return (
        <div className="container main_container">
            <div className="main_container__categories text-uppercase text-center text-success mt-5">categories</div>
            <div className="main_container__explore_our mt-4 text-center">Explore Our Crowdfunding Featured Categories</div>
            <div className="main_container__main_text text-center mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
            <div className="row d-flex justify-content-center">
                {categories.map(({ img, title }) =>
                    <div className="main_container__icons col-lg-2 mt-5">
                        <figure>
                            <img src={img} />
                            <figcaption className='mt-4'>{title}</figcaption>
                        </figure>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Page1Categories;