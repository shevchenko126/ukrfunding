import Select from 'react-select'

const AddProjectBlock = () => {
    return (
        <div className="container">
            <form className='register' onSubmit={(event) => {
                event.preventDefault();
                alert("successfuly logined");
            }}>
                <h3>Add Project</h3>

                <h5 className="register-text" for="name">Project Name</h5>
                <input className="input-login-register" id="name" name="name" placeholder="Write Your Project Name" />

                <h5 className="register-text" for="category">Project Category</h5>
                <Select
                    options={[
                        { value: 'technology', label: 'Technology' },
                        { value: 'education', label: 'Education' },
                        { value: 'videos', label: 'Videos' },
                        { value: 'medical', label: 'Medical' },
                    ]}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            border: 'none',
                            background: 'rgba(163, 163, 163, 0.15)',
                            width: '100%',
                            paddingLeft: '10px',
                            height: '56px',
                            marginTop: '20px',
                            cursor: 'pointer',
                            backgroundColor: 'rgb(251, 251, 251)'
                        }),
                    }}
                />

                <h5 className="register-text" for="category">Project Description</h5>
                <textarea className="input-login-register" id="description" name="description" placeholder="Write Your Project Description" />

                <h5 className="register-text" for="found">Project Found</h5>
                <input className="input-login-register" id="found" name="found" placeholder="Write Number to Found" type="number" />

                <h5 className="register-text" for="about">About Project</h5>
                <textarea className="input-login-register" id="about" name="about" placeholder="Write All Information About Project" />

                <h5 className="register-text" for="mainPhoto">Project Main Photo (max 1)</h5>
                <input className="input-login-register" id="mainPhoto" name="found" type="file" max="1" />

                <h5 className="register-text" for="additionalsPhoto">Project Additional Photos (max 4)</h5>
                <input className="input-login-register" id="additionalsPhoto" name="additionalsPhoto" type="file" max="4" />

                <div className="row register__bottom">
                    <div className="col-lg-6 col-sm-12 mt-5 d-flex align-items-center">
                        <input type="checkbox" className="register-checkbox" />
                        <a href="#">Accept terms & conditions</a>
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-5 d-flex btn-col">
                        <button className="button-bg-pink-text-white">Confirm</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProjectBlock;