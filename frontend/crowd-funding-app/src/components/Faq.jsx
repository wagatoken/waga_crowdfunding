import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Faq = () => {
  const [openFaqs, setOpenFaqs] = useState(new Array(6).fill(false));

  const faqData = [
    {
      question: "What is WAGA Token?",
      answer:
        "WAGA Token is a revolutionary cryptocurrency designed specifically for the coffee industry, enabling seamless transactions and rewards across the global coffee supply chain.",
    },
    {
      question: "How can I purchase WAGA Tokens?",
      answer:
        "WAGA Tokens can be purchased through our official platform during the public sale, or through partnered cryptocurrency exchanges after the listing.",
    },
    {
      question: "What are the benefits for token holders?",
      answer:
        "Token holders enjoy various benefits including discounts on coffee purchases, participation in governance decisions, and access to exclusive coffee industry events and offerings.",
    },
    {
      question: "Is WAGA Token secure?",
      answer:
        "Yes, WAGA Token is built on secure blockchain technology with regular security audits and implements industry-standard safety measures to protect holders.",
    },
    {
      question: "How does the reward system work?",
      answer:
        "Our reward system distributes tokens based on participation in the ecosystem, including purchases, contributions to the network, and staking activities.",
    },
    {
      question: "What's the token's utility in the coffee industry?",
      answer:
        "WAGA Token facilitates direct trade between farmers and buyers, enables transparent supply chain tracking, and provides a reward mechanism for sustainable coffee practices.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqs(openFaqs.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <section className="bg-coffeegreen py-20 px-4 sm:px-6 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-footerYellow mb-12 tracking-wide">
          FAQ
        </h2>

        <div className="flex flex-col space-y-2 max-w-5xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-white transform transition-all duration-300 ease-in-out
                hover:shadow-xl relative group rounded-lg p-6 sm:p-8 cursor-pointer
                ${openFaqs[index] ? "shadow-xl" : "shadow-md"}
                ${index % 2 === 1 ? "md:translate-x-2" : "md:-translate-x-2"}
              `}
              onClick={() => toggleFaq(index)}
            >
              <div className="flex items-start gap-4">
                {/* Expand/Collapse Icon */}
                <div className="w-8 h-8 flex items-center justify-center bg-black rounded-full">
                  {openFaqs[index] ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>

                {/* FAQ Question & Answer */}
                <div className="flex-1">
                  <h3 className="font-bold text-lg sm:text-xl text-black mb-2">
                    {faq.question}
                  </h3>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden
                      ${
                        openFaqs[index]
                          ? "max-h-48 opacity-100 mt-3"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
