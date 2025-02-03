import React, { useState } from 'react';
import { Brain, ArrowDown, Send, Plus, Minus } from 'lucide-react';
import partnerImage from './assets/images/image 6.png';
import telegramLogo from './assets/images/Vector.png';
import twitterLogo from './assets/images/Vector (1).png';
import discordLogo from './assets/images/Link → SVG.png';

function App() {
  const partners = Array(5).fill(partnerImage);
  const roadmapSteps = [
    { number: 1, title: 'MVP Development', position: 'bottom' },
    { number: 2, title: 'Pilot Study', position: 'top' },
    { number: 3, title: 'Regional Expansion', position: 'bottom' },
    { number: 4, title: 'Continuous Improvement', position: 'top' }
  ];

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
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="bg-heroBackground relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80"
            alt="Coffee beans background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-coffeegreen py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-left mb-12">
            OUR PARTNERS
          </h2>
          <div className="flex justify-between items-center flex-wrap gap-8">
            {partners.map((partner, index) => (
              <div key={index}>
                <img 
                  src={partner} 
                  alt="Partner logo" 
                  className="w-48 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-canaryYellow py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-black mb-28">
            Our Roadmap
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 w-full h-1 bg-black -translate-y-1/2" />
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-black -translate-x-1/2" />

            {/* Timeline Steps */}
            <div className="relative flex md:flex-row flex-col md:justify-between md:items-center items-start md:space-y-0 space-y-24">
              {roadmapSteps.map((step, index) => (
                <div key={index} className="relative md:w-auto w-full">
                  {/* Step Title */}
                  <div
                    className={`
                      md:absolute relative md:w-48 w-full whitespace-nowrap
                      ${step.position === 'top'
                        ? 'md:bottom-full md:mb-8 mb-4 order-first'
                        : 'md:top-full md:mt-8 mt-4 order-last'
                      }
                      md:left-1/2 md:-translate-x-1/2 md:text-center
                      ${index % 2 === 0 ? 'md:text-center text-right pr-16' : 'md:text-center text-left pl-16'}
                    `}
                  >
                    <p className="font-bold text-black text-xl">{step.title}</p>
                  </div>

                  {/* Step Node */}
                  <div className="relative z-10 w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-extrabold">{step.number}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* Footer Section */}
      <footer className="bg-coffeegreen">
        {/* Cards Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Newsletter Card */}
            <div className="bg-footerYellow rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-black mb-4">
                Be a part of the future of coffee business
              </h3>
              <p className="text-black mb-6">
                Stay up to date with Waga Token. Only important insight, updated & rollouts
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Your email goes here"
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-black/10 focus:outline-none focus:border-black"
                />
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-black/90 transition-colors">
                  Subscribe
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Download Card */}
            <div className="bg-footerGray rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <ArrowDown className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold">
                DOWNLOAD WAGA TOKEN WHITEPAPER
              </h3>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Brand */}
              <div className="text-footerYellow text-4xl font-bold">
                WAGA
              </div>

              {/* Navigation */}
              <nav>
                <ul className="flex items-center gap-8 text-white">
                  <li><a href="#" className="hover:text-footerYellow transition-colors">Roadmap</a></li>
                  <li><a href="#" className="hover:text-footerYellow transition-colors">Tokenomics</a></li>
                  <li><a href="#" className="hover:text-footerYellow transition-colors">Our Process</a></li>
                </ul>
              </nav>

              {/* Social Links */}
              <div className="flex items-center gap-6 text-white">
                <span>Team</span>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-footerYellow transition-colors">
                    <img src={telegramLogo} alt="Telegram" className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-footerYellow transition-colors">
                    <img src={twitterLogo} alt="Twitter" className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-footerYellow transition-colors">
                    <img src={discordLogo} alt="Discord" className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;