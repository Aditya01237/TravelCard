import React from 'react'
import Card from './Card'

export default function Tours({tours,removeTour}) {
  return (
    <div className="flex flex-col justify-center items-center">
        <div>
            <h2 className="text-[3rem] m-[6vh] border-dashed border-[7px] border-blue-950 py-[1vh] px-[5vw] rounded-2xl">Plan With Love</h2>
        </div>
        <div className="flex justify-center flex-wrap max-w-[1300px] my-0 mx-auto">
            {
                tours.map((tour) => {
                    return <Card {...tour} removeTour={removeTour}/>;
                })
            }
        </div>
    </div>
  )
}
