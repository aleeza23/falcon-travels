import React from "react";
import workImg01 from '../../assets/workImg01.webp'
import TextOutline from "../../constant/TextOutline";

const WorkCard = ({currElm}) => {
  return <div className='work-card__box xl:w-[85%]   rounded-r-none rounded-bl'>
    <div className="work-card__content rounded h-[100%] bg-white border border-dark-blue  ">
    <div className="work-card__img rounded">
        <img src={currElm.image} className="rounded h-52 bg-cover w-full" alt="w-01" />
    </div>

    <div className="work-card__text px-12 ">
        <h1 className="text-center mt-5 text-2xl px-3">{currElm.title}</h1>
        <TextOutline />

        <div className="flex justify-around my-5">
            <div className="flex justify-around border gap-2 border-black px-3 py-1 ">
                <span>☑</span>
                <span>{currElm.passengers}</span>
                <span>👩🏿‍🤝‍👩🏼</span>
            </div>

            <div className="flex justify-around border gap-2 border-black px-3 py-1 ">
                <span>☑</span>
                <span>{currElm.total}</span>
                <span>👩🏿‍🤝‍👩🏼</span>
            </div>
        </div>
    </div>
        
    </div>
  </div>;
};

export default WorkCard;
