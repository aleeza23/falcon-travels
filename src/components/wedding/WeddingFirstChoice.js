import React from "react";
import Container from "../../constant/Container";
import coupleImg from '../../assets/wedding-first-choice.webp'

const WeddingFirstChoice = () => {
  return (
    <>
      <Container>
        <div className='grid lg:grid-cols-2  lg:mt-32 mb-14 gap-14'>
          <div className="mt-auto">
            <h1 className='text-4xl mb-6'>The 1st Choice Wedding <br /> Transportation</h1>
            <p>
              For Falcon Tour Travel, the satisfaction and comfort of our
              customers are a top priority. That is why, our wedding limousine
              service includes features like plush interiors, trendy lighting,
              splendid audio-visual, a mini limo bar, and much more to make the
              commute to the wedding exemplary and exciting.
            </p>
            <p className='mt-6'>
              At Exotic Limo Bus, our clients for wedding limo rentals are
              treated just like celebrities, that is why we make sure that our
              wedding limos meet our customer’s expectations in the best way
              possible!
            </p>
          </div>

          <div>
            <img src={coupleImg} alt="couple-img"  className="h-96"/>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WeddingFirstChoice;
