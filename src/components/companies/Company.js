import React from "react";
import companyImg01 from "../../assets/company01.webp";
import companyImg02 from "../../assets/company02.webp";
import Container from "../../constant/Container";

const Company = () => {
  return (
    <>
      <Container>
        <div className='mx-auto my-8'>
          <img src={companyImg01} className="mx-auto" alt='c-one' />
          <img src={companyImg02} className="mx-auto mt-6" alt='c-one' />

        </div>
      </Container>
    </>
  );
};

export default Company;
