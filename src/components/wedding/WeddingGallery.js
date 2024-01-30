import React, {useState} from "react";
import img01 from "../../assets/galleryimg-01.jpg";
import img02 from "../../assets/galleryimg-02.jpg";
import img03 from "../../assets/galleryimg-03.jpg";
import Carousel from "react-multi-carousel";

const WeddingGallery = () => {
  const [currentImg, setcurrentImg] = useState(0);

  const imgArray = [img01, img02, img03];
  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 1,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

 
  return (
    <>
      <div className='lg:w-[60%] pt-10 my-20 container mx-auto bg-gray-100'>
        <div class='grid gap-4'>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
          >
            <div>
              <img
                class={`h-[30%] ${imgArray.length -1 === currentImg  && 'w-full'}  object-cover mx-auto`}
                src={imgArray[currentImg]}
                alt=''
              />
            </div>
            
          </Carousel>

          <div class='grid grid-cols-3 gap-1  mx-auto'>
            {imgArray.map((img, i) => {
              return (
                <div>
                  <img
                    onClick={() => setcurrentImg(i)}
                    class='lg:h-28 h-full w-full cursor-pointer '
                    src={img}
                    alt=''
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeddingGallery;
