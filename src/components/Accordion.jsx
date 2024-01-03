import React from 'react';

export default function Accordion({open, question, answer}) {
  return (
    <>
    {
        open ? <details open className='px-[1.5rem]'>
                <summary className='text-header flex items-center justify-between gap-[0.5rem] font-bold py-[1.5rem] text-[1.2rem] text-font-col hover:cursor-pointer hover:text-purple-600'>
                    {question}
                </summary>
                <p className="text-font-accent text-header text-[1.1rem]">
                    {answer}
                </p>
            </details>
        : <details  className='px-[1.5rem]'>
                <summary className='text-header flex items-center justify-between gap-[0.5rem] font-bold py-[1.5rem] text-[1.2rem] text-font-col hover:cursor-pointer hover:text-purple-600'>
                    {question}
                </summary>
                <p className="text-font-accent text-header text-[1.1rem]">
                    {answer}
                </p>
            </details>
    }
    </>
  )
}
