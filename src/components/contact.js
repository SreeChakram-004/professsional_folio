import React, {Component} from 'react';
import "./contact.css";
import { FaEnvelope, FaPhone } from 'react-icons/fa';

class Contact extends Component {
    render(){
        return(
            <section className='contact-us' id='contact'>
      <div style={{minHeight: '350px'}}>
      <div className='container'>
      <div className='text-center mt-5'>
        {/* <h2>Contact Me</h2>   */}
        <div className='details'>
          <div>
            <div className='contact-text'>
              <p>
                Thanks for spending time on my folio.I will be glad if I hear back from you. Contact details are provided below
              </p>
            </div>
            <FaPhone />
            {'  '}
            <span className='number'>+91 9739318371</span>
          </div>
          <FaEnvelope />
          {'  '}
          <span className='email'>chakramsree@gmail.com</span>
        </div>
        </div>
      </div>
      </div>
    </section>
        )
    }
}

export default Contact;