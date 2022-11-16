import React from 'react'
import images from '../assets';

const Introductions = () => (

  <section className="intro">

    <div className="h-screen flex flex-row items-center justify-center overflow-hidden">

      <div className="flex-3">
        <h1 className="text-softBlack text-[60vw] font-bold select-none">Hi</h1>
      </div>

      <div className="flex-1">
        <img src={images.person} alt="" className="w-full" />
      </div>

    </div>


    <div className="h-screen bg-purple-700">
      <h1>I'm taiseen</h1>
    </div>

  </section>
)

export default Introductions