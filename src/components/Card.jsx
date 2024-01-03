import React from 'react';
import iconStar from '../assets/images/icon-star.svg';
import Accordion from './Accordion';
export default function Card() {
  const faq = [
    {
      "question": "What is Frontend Mentor, and how will it help me?",
      "answer": "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
      "question": "Is Frontend Mentor free?",
      "answer": "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
      "question": "Can I use Frontend Mentor projects in my portfolio?",
      "answer": "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
      "question": "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      "answer": "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
  ];
  return (
    <section className='z-50 w-full max-w-[37.5rem] rounded-[1rem] bg-white p-[2rem] pb-[1rem] shadow-lg'>
      <div className='flex gap-[2rem] text-[3rem] font-bold'>
        <img src={iconStar} alt="" />
        <h1 className='text-header'>FAQs</h1>
      </div>
      {faq.map((item,index)=>(
        (index === 0)? <Accordion open key={index} question={item.question} answer={item.answer} />: <Accordion key={index} question={item.question} answer={item.answer} />
      ))}
    </section>
  )
}
