import './index.css';

const Filtres = () => {
    return (
        <div className='container mt-5 filtres'>
            <div className='row text-center'>
                <div className='col-lg-7 col-md-12 row'>
                    <div className='col p-0'>
                        <button className='mt-3 text-white filtres__btn_all_projects'>All Projects</button>
                    </div>
                    <div className='col p-0'>
                        <button className='mt-3 color1 filtres__btn_categories'>Technology</button>
                    </div>
                    <div className='col p-0'>
                        <button className='mt-3 color1 filtres__btn_categories'>Medical</button>
                    </div>
                    <div className='col p-0'>
                        <button className='mt-3 color1 filtres__btn_categories'>Business</button>
                    </div>
                    <div className='col p-0'>
                        <button className='mt-3 color1 filtres__btn_categories'>Fashion</button>
                    </div>
                </div>
                <div className='mt-3 col-lg-5 col-md-12 d-flex align-items-center filtres__btn_newest'>
                    <button className='d-flex justify-content-center align-items-center filtres__btn_newest__btn'>
                        <div>Newest</div>
                        <img src='../image/header_down_arrow.svg' style={{marginLeft: '20px'}} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filtres;