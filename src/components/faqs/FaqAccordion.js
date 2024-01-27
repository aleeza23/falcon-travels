import React from "react";

const FaqAccordion = ({openAcc, setopenAcc}) => {
  return <>
    {[1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18].map((currElm, i) => {
              return (
                <div className='w-full border my-5 bg-white/70 rounded ' key={i}>
                  <div className='  py-4 px-5  flex  justify-between items-center  mx-auto cursor-pointer transition-all duration-1000 ease-in-out ' onClick={() => setopenAcc(prev => !prev)} onMouseEnter={() => setopenAcc(i)} style={{backgroundColor : "#f0f0f0" }}>
                    <p className="font-bold text-xl">◻ Brauche ich Vorkenntnisse in React Native?</p>
                   
                  </div>

                  {openAcc === i && (
                    <>
                      <hr />
                      <div className=' py-4 px-5 transition-all duration-1000 ease-in-out  '>
                        <p className="text-gray-500 font-text-font font-text-weight">
                          Dieser Kurs eignet sich ideal für Personen mit
                          grundlegendem Programmierverständnis, insbesondere in
                          JavaScript. Ob du neu bei React Native bist oder
                          bereits etwas Erfahrung in der Webentwicklung hast,
                          dieser kompakte Kurs hilft dir, eine solide Grundlage
                          in der Entwicklung mobiler Apps aufzubauen.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
  </>;
};

export default FaqAccordion;
