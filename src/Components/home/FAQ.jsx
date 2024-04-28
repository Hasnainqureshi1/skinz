import React, { useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
const faqs = [
  {
    question: "What is SkinSwap?",
    answer: "Skin Swap is the premier skin marketplace where you can sell, trade, or buy both CS2 and Rust skins..."
  },
  {
    question: "How do I sell skins?",
    answer: "You can sell your skins by listing them on our platform... You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform..."
  },
  {
    question: "How do I sell skins?",
    answer: "You can sell your skins by listing them on our platform... You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform..."
  },
  {
    question: "How do I sell skins?",
    answer: "You can sell your skins by listing them on our platform... You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform..."
  },
  {
    question: "How do I sell skins?",
    answer: "You can sell your skins by listing them on our platform... You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform..."
  },
  {
    question: "How do I sell skins?",
    answer: "You can sell your skins by listing them on our platform... You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform..."
  },
  {
    question: "How do I sell skins?",
    answer: "You can sell your skins by listing them on our platform... You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform...You can sell your skins by listing them on our platform..."
  },
  // More FAQs...
];
const FAQ = () => {
  const [openFAQs, setOpenFAQs] = useState({});

  useEffect(() => {
    // Initialize all FAQs to open
    const initialOpenFAQs = {};
    faqs.forEach((_, index) => {
      initialOpenFAQs[index] = true;
    });
    setOpenFAQs(initialOpenFAQs);
  }, [faqs]);

 

  return (
    <div>
    
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="overflow-hidden w-full pl-6 pr-4 rounded-6 transition-height duration-500 ease-in-out"
               style={{
                 background: 'radial-gradient(72.27% 72.27% at 50% 27.73%, rgba(54, 53, 73, 0.2) 0%, rgba(41, 40, 56, 0.2) 100%), rgba(41, 40, 56, 0.5)',
                 backdropFilter: 'blur(25px)'
               }}>
            <div className="w-full h-16 flex justify-between items-center cursor-pointer" onClick={() => setOpenFAQs({ ...openFAQs, [index]: !openFAQs[index] })}>
              <p className="text-14 sm:text-18 transition-all duration-200 text-main font-medium text-white">{faq.question}</p>
              <div className="w-10 h-10 rounded-6 center relative"
                   style={{
                     background: 'radial-gradient(72.27% 72.27% at 50% 27.73%, rgba(54, 53, 73, 0.2) 0%, rgba(41, 40, 56, 0.2) 100%), rgb(44, 42, 59)',
                     backdropFilter: 'blur(25px)'
                   }}>
                {openFAQs[index] ? <AiOutlineMinus size={24} color="#626179" /> : <AiOutlinePlus size={24} color="#626179" />}
              </div>
            </div>
            {openFAQs[index] && (
              <div className="w-11/12 -mt-2 mb-4 px-4 py-2" style={{ transition: 'height 0.5s ease-in-out', overflow: 'hidden' }}>
                <p className="text-12 sm:text-14 text-gray font-normal text-gray-400">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
