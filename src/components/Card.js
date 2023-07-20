import React, { useState } from 'react'


export default function Card({image,info,price,name,removeTour,id}) {

    const[readmore, setReadmore] = useState(false);
    
    const description = readmore ? info : `${info.substring(0,100)}...`;

    function readmorehandler (){
        setReadmore(!readmore);
    }

  return (
    <>
        <div className="box-border flex flex-col max-w-max w-[400px] m-[1rem] p-[1rem] items-center rounded-md shadow-2xl">
            <img className="w-[380px] aspect-square object-cover" src={image} alt="" />
            <div className="my-[20px] mx-[5px]">
                <div className="my-2 font-semibold">
                    <h4 className="text-[#1faa59] text-[1.3rem] ">{price}</h4>
                    <h4 className="text-[1.5rem] ">{name}</h4>
                </div>
                <div className="text-lg">
                    {description}
                    <span className="text-[#12b0e8] cursor-pointer " onClick={readmorehandler} >{readmore ? `Show Less`:`Read More`}</span>
                </div>
            </div>
            <button className=" my-2 py-[10px] px-[80px] bg-[#b4161b21] border-2 border-[#b4161b] rounded-lg cursor-pointer hover:bg-red-600 hover:text-white" onClick={()=> removeTour(id)}>Not Intersted</button>
        </div>
    </>
  )
}
