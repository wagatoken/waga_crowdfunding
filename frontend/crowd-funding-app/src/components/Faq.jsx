import {useState} from 'react'
import { Plus, Minus } from 'lucide-react';

const Faq = () => {
    const [openFaqs, setOpenFaqs] = useState(new Array(6).fill(false));

    const faqData = [
      {
        question: "What is WAGA Token?",
        answer: "WAGA Token is a revolutionary cryptocurrency designed specifically for the coffee industry, enabling seamless transactions and rewards across the global coffee supply chain."
      },
      {
        question: "How can I purchase WAGA Tokens?",
        answer: "WAGA Tokens can be purchased through our official platform during the public sale, or through partnered cryptocurrency exchanges after the listing."
      },
      {
        question: "What are the benefits for token holders?",
        answer: "Token holders enjoy various benefits including discounts on coffee purchases, participation in governance decisions, and access to exclusive coffee industry events and offerings."
      },
      {
        question: "Is WAGA Token secure?",
        answer: "Yes, WAGA Token is built on secure blockchain technology with regular security audits and implements industry-standard safety measures to protect holders."
      },
      {
        question: "How does the reward system work?",
        answer: "Our reward system distributes tokens based on participation in the ecosystem, including purchases, contributions to the network, and staking activities."
      },
      {
        question: "What's the token's utility in the coffee industry?",
        answer: "WAGA Token facilitates direct trade between farmers and buyers, enables transparent supply chain tracking, and provides a reward mechanism for sustainable coffee practices."
      }
    ];
  
    const toggleFaq = (index) => {
        setOpenFaqs(openFaqs.map((item, i) => i === index ? !item : item));
    };
  return (
    <>
        <section className="bg-coffeegreen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-footerYellow mb-16 tracking-wide">
            FAQ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
            {/* Connector Lines (visible on desktop) */}
            <div className="absolute inset-0 md:grid grid-cols-2 gap-8 hidden pointer-events-none">
              {/* Horizontal connectors */}
              <div className="col-span-2 grid grid-rows-3 h-full">
                <div className="relative">
                  {/* First row connector */}
                  <div className="absolute w-4 h-4 bg-footerYellow rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="relative">
                  {/* Second row connector */}
                  <div className="absolute w-4 h-4 bg-footerYellow rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="relative">
                  {/* Third row connector */}
                  <div className="absolute w-4 h-4 bg-footerYellow rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>

            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`
                  bg-white transform transition-all duration-300 ease-in-out
                  hover:shadow-xl relative group
                  ${openFaqs[index] ? 'shadow-xl' : 'shadow-md'}
                  ${index % 2 === 1 ? 'md:translate-x-4' : 'md:-translate-x-4'}
                `}
                style={{
                  clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
                }}
              >
                <div
                  className="p-8 cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {openFaqs[index] ? (
                        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                          <Minus className="w-4 h-4 text-white" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                          <Plus className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-black mb-2">
                        {faq.question}
                      </h3>
                      <div
                        className={`
                          transition-all duration-300 ease-in-out overflow-hidden
                          ${openFaqs[index] ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}
                        `}
                      >
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Connectors */}
                <div className="absolute -left-4 top-1/2 w-4 h-4 bg-footerYellow rounded-full transform -translate-y-1/2 opacity-0 md:group-hover:opacity-100 transition-opacity hidden md:block"></div>
                <div className="absolute -right-4 top-1/2 w-4 h-4 bg-footerYellow rounded-full transform -translate-y-1/2 opacity-0 md:group-hover:opacity-100 transition-opacity hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq
