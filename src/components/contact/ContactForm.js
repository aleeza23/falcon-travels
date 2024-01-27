import React from "react";
import Container from "../../constant/Container";
import TextOutline from "../../constant/TextOutline";
import {IoCall} from "react-icons/io5";
import {MdEmail} from "react-icons/md";
import fb from '../../assets/form-fb.webp'
import insta from '../../assets/form-insta.webp'
import Form from "./Form";


const ContactForm = () => {
  return (
    <>
      <Container>
        <div className='grid lg:grid-cols-2 my-10 gap-10'>
          {/* contact information */}
          <div className=''>
            <h1 className='text-2xl '>Get In Touch</h1>
            <TextOutline />
            <p className='text-xl mt-6'>
              Feel free to contact us at any time and discuss your trip with us.
            </p>
            <p className='text-xl mb-8'>
              We are happy to assists our valuable clients
            </p>

            <h1 className='text-2xl  '>Contact Details</h1>
            <TextOutline />

            <hr className='my-7' />
            <div className='flex items-center gap-4 mt-4 ps-5'>
              <span className='text-3xl'>
                <IoCall className='text-icons-color' />
              </span>
              <p>(800) 579 6911</p>
            </div>

            <hr className='my-7' />
            <div className='flex items-center gap-4 mt-4 ps-5'>
              <span className='text-3xl'>
                <MdEmail className='text-icons-color' />
              </span>
              <p>info@falcontourtravel.com</p>
            </div>

            <hr className='my-7' />

            <img src={fb} alt="fb" className="inline me-6" />
            <img src={insta} alt="insta" className="inline " />

          </div>

          {/* contact form */}
          <div className=''>
            <Form />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactForm;
