import './index.css';

const DontMiss = () => {
    return (
		<div className="container-fluid py-3 dont_miss">
            <h2 className="text-white text-center mt-5 pb-5 dont-miss-text mx-auto">Don’t miss our weekly updates about donations</h2>
            <div className="row">
                <div className="col-lg-6 col-md-12 mt-5 text-white dont_miss__left_column">
                    <input type='email' className='dont_miss__input' placeholder="Enter your email address..." max="40" min="5" />
                </div>
                <div className="col-lg-6 col-md-12 mt-5 pb-5 dont_miss__right_column">
                    <button className="dont_miss__button">SUSBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default DontMiss;