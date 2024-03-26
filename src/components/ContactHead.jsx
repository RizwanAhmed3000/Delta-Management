import React from 'react'

const ContactHead = ({text , heading}) => {
  return (
    <div>

        <div className='flex flex-col items-center justify-center mb-[3rem]'>
            <h1 className='text-6xl mb-[2rem] font-bold'>
          {heading}
            </h1>
            <p className='text-normal  font-medium text-slate-500 text-center '>
            {text}
            </p>
        </div>
    </div>
  )
}

export default ContactHead;