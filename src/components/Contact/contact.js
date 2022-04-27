import './contact.scss'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(
            'service_zprdoel',
            'template_wyhlmli',
             refForm.current,
            '2GC_BFQCl6JA-92V7'
          )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
              window.location.reload(false)
            }
          )
      }


    return (
        <div className='contact-page'>
            <div className='antialiased'>
                <div className='flex w-full min-h-screen justify-right items-center absolute left-72 text-gray-300' >
                    <div className='flex w-5/12 flex-row space-y-6 max-w-7xl p-10 rounded-xl shadow-lg'>
                        <div className='flex flex-col space-y-8 w-3/4 justify-between p-8'>
                            <div>
                                <h1 className='font-bold text-5xl tracking-wide'>Get in Touch</h1>
                                <p className='w-3/4 text-3xl py-8'>Feel free to contact me regarding any enquiries you might have, I will typically respond in a matter of a day or two. </p>
                            </div>
                            <div className='inline-flex space-x-2 items-center text-3xl'>
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                <span>atodorov.rs@gmail.com</span>
                            </div>
                            <div className='flex space-x-4 text-5xl text-gray-50'>
                                <a target="_blank" rel='noreferrer' href='https://github.com/atodorov284'>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/aleksandar-todorov-26b756213/'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/atodorov.km/'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a target="_blank" rel='noreferrer' href='https://www.facebook.com/alexander.todorov.03/'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </div>
                        </div>
                        <div className='custom-bg bg-gray-200 rounded-xl text-2xl shadow-lg p-8 text-gray-600 font-bold w-2/3'>
                            <form id='form' ref={refForm} onSubmit={sendEmail} className='flex flex-col space-y-4'>
                                    <label for='Name'>
                                        Name:
                                    </label>
                                    <input type='text' id="name" name='name' placeholder='Name' maxlength='25' required className='mt-2 ring-1 ring-gray-400 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500'>
                                    </input>
                                    <label for='Email'>
                                        Email:
                                    </label>
                                    <input type='email' id="email" name='email' placeholder='Email' maxlength='25' required className='mt-2 ring-1 ring-gray-400 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500'>
                                    </input>
                                    <label for='Message'>
                                        Message:
                                    </label>
                                    <textarea id='message' name='message' placeholder='Message' maxlength="215" required rows='4' className='mt-2 resize-y max-h-72 h-72 ring-1 ring-gray-400 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500' />
                                <button type='submit' className='inline-block self-end bg-gray-500 text-gray-100 font-bold rounded-lg px-6 py-2 uppercase'>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                
            </div>
            <div className='w-1/6 absolute right-96 bottom-80'>
                <div class="fall">
                    <div class="walls">
                        <div class="wall"><div class="top"></div><div class="bottom"></div><div class="left"></div><div class="right"></div><div class="ceil"></div></div>
                        <div class="wall"><div class="top"></div><div class="bottom"></div><div class="left"></div><div class="right"></div><div class="ceil"></div></div>
                        <div class="wall"><div class="top"></div><div class="bottom"></div><div class="left"></div><div class="right"></div><div class="ceil"></div></div>
                        <div class="wall"><div class="top"></div><div class="bottom"></div><div class="left"></div><div class="right"></div><div class="ceil"></div></div>
                        <div class="wall"><div class="top"></div><div class="bottom"></div><div class="left"></div><div class="right"></div><div class="ceil"></div></div>
                        <div class="wall"><div class="top"></div><div class="bottom"></div><div class="left"></div><div class="right"></div><div class="ceil"></div></div>
                        <div class="wall"><div class="top"></div><div class="bottom"></div><div class="left"></div><div class="right"></div><div class="ceil"></div></div>
                        <div class="wall"><div class="top"></div><div class="bottom"></div><div class="left"></div><div class="right"></div><div class="ceil"></div></div>
                        <div class="wall"><div class="top"></div><div class="bottom"></div><div class="left"></div><div class="right"></div><div class="ceil"></div></div>
                        <div class="wall"><div class="top"></div><div class="bottom"></div><div class="left"></div><div class="right"></div><div class="ceil"></div></div>
                    </div>
                    <div class="ballArm">
                        <div class="ball"></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact