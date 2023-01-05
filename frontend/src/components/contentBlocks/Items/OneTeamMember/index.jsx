import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import './index.css';

const OneTeamMember = ({ teamMember }) => {
    return (
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 text-center mx-auto mt-5 team-item">
            <div>
                <img src={teamMember.img} className="team_members__main__profile" />
                <div className='team-icons d-flex'>
                    <button className='team-btn'>
                        <a href={teamMember.twitter}>
                            <BsTwitter className='team-icon' />
                        </a>
                    </button>
                    <button className='team-btn' style={{ marginLeft: '10px' }}>
                        <a href={teamMember.facebook}>
                            <FaFacebookF className='team-icon' />
                        </a>
                    </button>
                </div>
            </div>
            <div className='team-member-name mt-4'>{teamMember.name}</div>
            <p className="team-member-job">{teamMember.job}</p>
        </div>
    );
};

export default OneTeamMember;