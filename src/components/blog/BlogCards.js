import React from "react";
import Container from "../../constant/Container";
import Card from "./Card";
import { BlogData } from "../../data/BlogData";

const BlogCards = () => {
  return (
    <>
      <Container>
        <div className='grid lg:grid-cols-3 gap-10 my-10 text-black'>
       {BlogData.map((currElm, i) => <Card key={i} currElm={currElm} />)}  
        </div>
      </Container>
    </>
  );
};

export default BlogCards;
