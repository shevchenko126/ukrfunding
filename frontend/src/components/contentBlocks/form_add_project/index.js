import './index.css';

const FormAddProject = () => {
    return (
        <div className="container__form_add_project">
            <h1> Your project </h1>
            <div className="form">
                <form method="get" action="#">
                    <div className="row mb-4">
                        <div class="col-lg-4 col-sm-12 mt-3">
                            <input type="text" placeholder="Name of project" />
                        </div>
                        <div className="col-lg-4 col-sm-12 mt-3">
                            <input class="input_image" type="file" placeholder="Image" />
                        </div>
                        <div className="col-lg-4 col-sm-12 mt-3">
                            <input type="number" placeholder="How much funding?" />
                        </div>
                    </div>
                    <textarea name="textarea" placeholder="Description"></textarea>
                </form>
            </div>
            <div className="button_add">
                <button className="button">Add project</button></div>
        </div>
    )
}

export default FormAddProject