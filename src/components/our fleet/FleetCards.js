import React from "react";
import Container from "../../constant/Container";
import img01 from "../../assets/fleet01.webp";
import img02 from "../../assets/fleet02.webp";
import img03 from "../../assets/fleet03.webp";
import img04 from "../../assets/fleet04.webp";
import img05 from "../../assets/fleet05.webp";


const FleetCards = () => {
  return (
    <>
      <Container>
        <div className='grid lg:grid-cols-2 gap-10 my-10'>
          <div className='border rounded-tr-3xl rounded-bl-3xl p-7'>
            <h1 className='text-center text-3xl mb-5'>SUV & Regular Sedan</h1>
            <img src={img01} alt='fleet-one' className='w-full shadow-2xl' />
          </div>

          {/* card 02 */}
          <div className='border rounded-tr-3xl rounded-bl-3xl p-7'>
            <h1 className='text-center text-3xl mb-5'>SClassic Car & Luxury Sedan</h1>
            <img src={img02} alt='fleet-one' className='w-full shadow-2xl' />
          </div>

          {/* card 03 */}
          <div className='border rounded-tr-3xl rounded-bl-3xl p-7'>
            <h1 className='text-center text-3xl mb-5'>Stretch Limousine</h1>
            <img src={img03} alt='fleet-one' className='w-full shadow-2xl' />
          </div>

          {/* card 04 */}
          <div className='border rounded-tr-3xl rounded-bl-3xl p-7'>
            <h1 className='text-center text-3xl mb-5'>Party Bus</h1>
            <img src={img04} alt='fleet-one' className='w-full shadow-2xl' />
          </div>

          {/* card 05 */}
          <div className='border rounded-tr-3xl rounded-bl-3xl p-7 lg:col-span-2'>
            <h1 className='text-center text-3xl mb-5'>Charter Bus & Van</h1>
            <img src={img05} alt='fleet-one' className='mx-auto shadow-2xl' />
          </div>
        </div>
      </Container>
    </>
  );
};

export default FleetCards;
