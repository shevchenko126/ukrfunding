import './index.css';

const Page3block1 = () => {
    return (
        <div className="page3block1">
            <div className="main__content">
                <div className="main__content_text">
                    <p>Let's find a crowdfunding projects</p>
                    <p>around the world</p>
                </div>
            </div>
            <div className="block1__search d-flex justify-content align-items-center" >

                <div className="block1__search_left">
                    All Category </div>
                <div className="arrow"></div>

                <div className="block1__search_right">
                    <input type="text" placeholder="Find Projects" />
                    <div className="search"></div>
                </div>
            </div>
            <div className="popular_search">
                Popular Search:
            </div>
            <div className="technology">
                Technology Projects
            </div>
            <div className="cancer">
                Cancer Charity Programs
            </div>
            <div className="design">
                Design Interior
            </div>
        </div>
    )
}

export default Page3block1;