import { FaHome, FaUser, FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NavLink} from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import './sidebar.scss';
import Loader from 'react-loaders';
import React from "react";
import refreshPage from '../Refresh/refresh'




const SideBar = () => {
  
  return (
    <div>
      <div className="custom-width absolute top-0 left-0 h-screen m-0 flex flex-col bg-primary  shadow-lg">
        <div className='absolute my-auto top-1/4 translate-y-1/8 text-center self-center justify-center items-center'>
          <NavLink exact="true" activateclassname="active" to="/" onClick={() => refreshPage('/')} >
            <SideBarIcon icon={<FaHome size='28' />} text='Home' />
          </NavLink>
      
          <NavLink exact="true" activateclassname="active" className="about-link" to="/about" onClick={() => refreshPage('/about')}>
            <SideBarIcon icon={<FaUser size='28' />} text='About' />
          </NavLink>

          <NavLink exact="true" activateclassname="active" className="contact-link" to="/contact" onClick={() => refreshPage('/contact')}>
            <SideBarIcon icon={<FaEnvelope size='28' />} text='Contact' />
          </NavLink>
        </div>
        <div className='flex bottom-10 absolute p-0 m-0 list-none self-center text-center justify-evenly'>
            <ul>
              <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/atodorov284'>
                        <ReferIcon icon={<FaGithub size='18' />} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/aleksandar-todorov-26b756213/'>
                        <ReferIcon icon={<FaLinkedin size='18' />} />
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.instagram.com/atodorov.km/'>
                        <ReferIcon icon={<FaInstagram size='18' />} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.facebook.com/alexander.todorov.03/'>
                        <ReferIcon icon={<FaFacebook size='18' />} />
                    </a>
                </li>
            </ul>
          </div>
      </div>
      <Loader type="ball-rotate" />
        <div>
          <span className='tags top-tags'>public static void <mark class="bolded-white">Aleksandars_Portfolio</mark>(string[] <mark class="bolded-white">args</mark>) <br/> &#123; </span>
          <Outlet></Outlet>
          <span className='tags bottom-tags'>&#125;</span>
        </div>
    </div>
  );
};

const SideBarIcon = ({icon, text = 'tooltip'}) => (
  <div className='sidebar-icon group'>
    {icon}
    <span className='sidebar-tooltip group-hover:scale-100'>
      {text}
    </span>
  </div>
);

const ReferIcon = ({icon}) => (
  <div className='refer-icon'>
    {icon}
  </div>
);

export default SideBar;