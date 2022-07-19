import "./index.css";

const TestimonialCard = (props) => {
    return (
        <div className="card d-flex mx-auto text-start testimonial">
            <a
                className="btn testimonial-button"
                href={props.link}
                role="button"
            >
                {props.linkTitle}
            </a>
            <div className="card-image ratio ratio-16x9">
                <img className="card-img-top" src={props.image} />
            </div>
            <div className="card-body px-4 pt-4">
                <div className="card-title fw-bold">{props.header}</div>
                <div className="card-text">{props.children}</div>
            </div>
            <div className="footer d-flex px-4 pb-4">
                <div className="flex-shrink-0">
                    <img
                        className="testimonial__authorlogo"
                        src={props.authorLogo}
                    ></img>
                </div>
                <div className="ms-3">
                    <div className="testimonial__authorname">
                        {props.author}
                    </div>
                    <div className="testimonial__date">
                        <span className="testimonial__readtime me-2">
                            {props.readTime}
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="#544E5D"
                            className="bi bi-dot"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                        </svg>
                        <span className="testimonial__date ms-2">
                            {props.date}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
