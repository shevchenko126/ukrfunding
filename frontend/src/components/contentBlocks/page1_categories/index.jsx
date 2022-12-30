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
        <div className="container">
            <div className='text-center mx-auto container-text'>
                <h4 className="text-uppercase text-success mt-5">categories</h4>
                <h2 className="mt-4">Explore Our Crowdfunding Featured Categories</h2>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            </div>
            <div className="row d-flex justify-content-center">
                {categories.map(({ img, title }) =>
                    <section className="main_container__icon item col-lg-2 mt-5">
                        <figure>
                            <img src={img} alt="icon" />
                            <h5 className='mt-4'>{title}</h5>
                        </figure>
                    </section>
                )}
            </div>
        </div>
    )
}

export default Page1Categories;