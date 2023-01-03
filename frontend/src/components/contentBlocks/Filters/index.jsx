import { useState } from 'react';
import './index.css';

const Filtres = () => {

    const [activeBtn, setActiveBtn] = useState('all');

    return (
        <div className='container mt-5 filtres'>
            <div className='row text-center'>
                <div className='col-lg-7 col-md-12 row'>
                    <div className='col p-0'>
                        <button onClick={() => setActiveBtn('all')} className={`mt-3 ${activeBtn === 'all' ? 'filter-active' : 'filter-unactive'}`}>All Projects</button>
                    </div>
                    <div className='col p-0'>
                        <button onClick={() => setActiveBtn('technology')} className={`mt-3 ${activeBtn === 'technology' ? 'filter-active' : 'filter-unactive'}`}>Technology</button>
                    </div>
                    <div className='col p-0'>
                        <button onClick={() => setActiveBtn('medical')} className={`mt-3 ${activeBtn === 'medical' ? 'filter-active' : 'filter-unactive'}`}>Medical</button>
                    </div>
                    <div className='col p-0'>
                        <button onClick={() => setActiveBtn('business')} className={`mt-3 ${activeBtn === 'business' ? 'filter-active' : 'filter-unactive'}`}>Business</button>
                    </div>
                    <div className='col p-0'>
                        <button onClick={() => setActiveBtn('fashion')} className={`mt-3 ${activeBtn === 'fashion' ? 'filter-active' : 'filter-unactive'}`}>Fashion</button>
                    </div>
                </div>
                <div className='mt-3 col-lg-5 col-md-12 d-flex align-items-center justify-content-end'>
                    {/* <button className='d-flex justify-content-center align-items-center filtres__btn_newest__btn'>
                        <div>Newest</div>
                        <img src='../image/header_down_arrow.svg' style={{marginLeft: '20px'}} />
                    </button> */}
                    <select></select>
                </div>
            </div>
        </div>
    );
};

export default Filtres;