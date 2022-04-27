import { Link } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCode, faDumbbell, faSchool, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import refreshPage from '../Refresh/refresh'

const Home = () => 
{
    return(
        <div className='homepage container'>
            
            <div className='text'>
                <h1>Aleksandar Todorov</h1>
                <Link to="/contact" onClick={() => refreshPage('/contact')}><div className='button'>
                        <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                </div></Link>
                <h2>Full-Stack Developer / Artificial Intelligence Engineer</h2>
                
                <div class='end'>
                    <ul>
                        <li>
                            <a href="/about">
                                <FontAwesomeIcon icon={faSchool}></FontAwesomeIcon>
                                <p className='refer-about'>Education</p>
                            </a>
                        </li>
                        <li>
                            <a href="/about">
                                <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                                <p className='refer-about'>Career</p>
                            </a>
                        </li>
                        <li>
                            <a href="/about">
                                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                <p className='refer-about'>Projects</p>
                            </a>
                        </li>
                        <li>
                            <a href="/about">
                                <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                                <p className='refer-about'>Activities</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Home