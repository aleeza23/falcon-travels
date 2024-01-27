import React from "react";
import Container from "../../constant/Container";
import TextOutline from "../../constant/TextOutline";
import imageOne from "../../assets/footerImg01.webp";
import imageTwo from "../../assets/footerImg02.webp";
import imageFive from "../../assets/footerImg05.webp";
import {IoCall} from "react-icons/io5";
import {MdEmail} from "react-icons/md";
import {FaFacebookF, FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import {LiaTripadvisor} from "react-icons/lia";
const Footer = () => {
  return (
    <>
      <section className='bg-nav-bg pt-10 text-white'>
        <Container>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='lg:col-span-2'>
              <h1>ABOUT US</h1>
              <TextOutline />
              <p className='my-8 text-xl'>
                ABOUT US We provide nationwide chauffeured services with the
                latest and greatest high tech, luxury vehicles. Falcon Tour and
                Travel are committed to bringing you the excellence you deserve.
                Our skillful staff is highly capable of dealing with the
                complexities and intricacies of luxury travel, you can trust us
                with your needs and know that we will deliver! We are adept in
                planning and executing state of the art travel experiences,
                providing transportation, lodging, and tours to incredible
                destinations nationwide.
              </p>
              <hr />

              <h1 className='mt-6'>RECOGNITIONS</h1>
              <TextOutline />

              <div className='flex flex-col gap-5 lg:flex-row justify-around mt-6 items-center'>
                <img src={imageOne} alt='one' />
                <img src={imageTwo} alt='two' />
              </div>
            </div>

            <div className=''>
              <h1 className=''>ACHIEVEMENTS</h1>
              <TextOutline />
              <div className='flex flex-col justify-center items-center gap-6 mt-8'>
                <img
                  src='https://www.xoedge.com/myaccount/2019/website-share/VendorBadge_AsSeenOnWeb.png'
                  alt='three'
                  className='w-3/5'
                />
                <img
                  src='https://falcontourtravel.com/wp-content/uploads/2023/02/gold_badge.svg'
                  alt='four'
                  className='w-1/2'
                />
              </div>
            </div>
            <div className=''>
              <h1 className=''>ACHIEVEMENTS</h1>
              <TextOutline />

              <div className='flex items-center gap-4 mt-4'>
                <span className='text-3xl'>
                  <IoCall />
                </span>
                <div>
                  <p>(800) 579 6911</p>
                  <p>Mon - Sun, 24 HRS</p>
                </div>
              </div>

              <div className='flex items-center gap-4 mt-4'>
                <span className='text-3xl'>
                  <MdEmail />
                </span>
                <div>
                  <p>sales@falcontourtravel.com</p>
                  <p>We reply within few minutes</p>
                </div>
              </div>

              <img src={imageFive} alt='five' className='mt-7' />
            </div>
          </div>
        </Container>

        <hr className='border-black mt-14' />
        <Container>
          <div className=' flex flex-col gap-6 py-8 justify-center items-center'>
            <div className='flex gap-7'>
              <span>
                <FaFacebookF className='text-2xl' />
              </span>
              <span>
                <FaInstagram className='text-2xl' />
              </span>
              <span>
                <LiaTripadvisor className='text-2xl' />
              </span>
              <span>
                <FaTwitter className='text-2xl' />
              </span>
              <span>
                <FaYoutube className='text-2xl' />
              </span>
            </div>

            <h1 className="text-xl">© 2023 Falcon Tour Travel Corp. All Rights Reserved</h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
