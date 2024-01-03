import React from 'react';

export default function Accordion({open, question, answer}) {
  return (
    <>
    {
        open ? <details open className='px-[1.5rem]'>
                <summary className='font-work flex items-center justify-between gap-[0.5rem] font-bold py-[1.5rem] text-[1.1rem] text-font-col hover:cursor-pointer hover:text-purple-600'>
                    {question}
                </summary>
                <p className="text-font-accent font-work">
                    {answer}
                </p>
            </details>
        : <details  className='px-[1.5rem]'>
                <summary className='font-work flex items-center justify-between gap-[0.5rem] font-bold py-[1.5rem] text-[1.1rem] text-font-col hover:cursor-pointer hover:text-purple-600'>
                    {question}
                </summary>
                <p className="text-font-accent font-work">
                    {answer}
                </p>
            </details>
    }
    </>
  )
}
