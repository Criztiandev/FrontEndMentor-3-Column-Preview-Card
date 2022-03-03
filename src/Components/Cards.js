import React from 'react'



export default function Cards(props) {


    const container = `p-12 bg-${props.color}`;
    const btn = `bg-white text-${props.color} font-bold px-8 py-4 border-2 border-white rounded-full hover:bg-transparent hover:text-neutral-trans-white ease-in-out`
 

  return (
    <div className={container}>
        <img src={props.img} alt="sedan-icon" className='mb-8' />
        <h1 className='font-big-sholder font-bold text-3xl mb-8'>{props.title}</h1>
        <p className='text-neutral-trans-white mb-8'>{props.desc}</p>
        <button className={btn}>Learn More</button>
</div>
  )
}
