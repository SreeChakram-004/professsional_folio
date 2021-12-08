import React, {Component} from 'react';
import "./aboutme.css";

class AboutMe extends Component {
    render(){
        return(
            <div>
            <section className='about-me' id='about'>
              <div className='container'>
                <div className='row'>
                  <div className='section-title'>
                    <h1>About Me</h1>
                  </div>
                </div>
                <div className='row'>
                  <div className='about-content'>
                    <div className='row'>
                      <div className='img'>
                        <img
                          src={require('../components/assets/images/me.jpeg')}
                          alt='about-me'
                        />
                      </div>
                      <div className='text'>
                        <h4>Sree Chakram</h4>
                        <h6>
                          <span>Mern Stack Web Developer</span>{' '}
                        </h6>
                        <p>
                          Hi, my name is Sree Chakram. I am a Graduate in B.Tech(ECE) at Jain University,Banglore and completed 
                          my Mern Stalk Development Course at Guvi Geek Pvt Ltd,IIT MADRAS.
                        </p>
                        <p>
                          I am passionate about learning new
                          things and developing beautiful applications with a focus on
                          UX/UI design and development. Am Excited to leverage skills and
                          provide fresh ideas as part of a passionate, continually
                          learning to build better experiences on the web.
                        </p>
                        <div className='info'>
                          <div className='list'>
                            <label>Email: </label>
                            <p> chakramsree@gmail.com</p>
                          </div>
                          <div className='list'>
                            <label>Phone:</label>
                            <p>+91 9739318371</p>
                          </div>
                          <div className='list'>
                            <label>Residence:</label>
                            <p>INDIA</p>
                          </div>
                          <div className='list'>
                            <label>Address:</label>
                            <p>18-36-s9-1534,3rd floor,Shanti Nagar,Beside More Super Market,KT Road,Annaro Circle,Tirupati-517501</p>
                          </div>
                        </div>
                        <div className='info'>
                          <lable>Skills & Technologies:</lable>
                          <p>
                            Html, CSS, JavaScript, ReactJS, Bootstrap, Material UI, CSS Flex, NodeJS, ExpressJS, MongoDB, Git, Heroku, Netlify, C Language
                          </p>
                        </div>
      
                        <div className='social-links'>
                          <a
                            href='https://www.linkedin.com/in/sree-chakram-g-07926a225/'
                            target='_blank' rel='noopener noreferrer'
                          >
                            <i className='fa fa-linkedin'></i>
                          </a>
                          <a href='https://github.com/SreeChakram-004' target='_blank' rel='noopener noreferrer'>
                            {' '}
                            <i className='fa fa-github'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
    }
}

export default AboutMe;