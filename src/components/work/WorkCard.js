import React from "react";
import workImg01 from '../../assets/workImg01.webp'
import TextOutline from "../../constant/TextOutline";

const WorkCard = () => {
  return <div className='work-card__box xl:w-[85%]  rounded-r-none rounded-bl'>
    <div className="work-card__content rounded bg-white border border-dark-blue  ">
    <div className="work-card__img rounded">
        <img src={workImg01} className="rounded h-52 bg-cover w-full" alt="w-01" />
    </div>

    <div className="work-card__text px-12 ">
        <h1 className="text-center mt-5 text-2xl px-3">Limo Party Bus for 26 THE TIFFANY</h1>
        <TextOutline />

        <div className="flex justify-around my-5">
            <div className="flex justify-around border gap-2 border-black px-3 py-1 ">
                <span>☑</span>
                <span>25</span>
                <span>👩🏿‍🤝‍👩🏼</span>
            </div>

            <div className="flex justify-around border gap-2 border-black px-3 py-1 ">
                <span>☑</span>
                <span>25</span>
                <span>👩🏿‍🤝‍👩🏼</span>
            </div>
        </div>
    </div>
        
    </div>
  </div>;
};

export default WorkCard;
