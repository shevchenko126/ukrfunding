import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

export const PageNotFound = () => { // page 16
    return (
        <section>
            <Header />
            <div className="container row my-5 mx-auto align-items-center">
                <div className="col-lg-6 col-md-12">
                    <h2>Sorry...</h2>
                    <h3 className='mt-2'>This page doesn`t exist...</h3>
                </div>
                <div className="col-lg-6 col-md-12 d-flex btn-col">
                    <Link to={'/'}>
                        <button className='button-bg-pink-text-white d-flex align-items-center justify-content-center btn-back'>Back</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </section>
    );
};