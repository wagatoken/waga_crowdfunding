import React, { useState } from 'react';
import { ArrowDown, Send } from 'lucide-react';
import telegramLogo from '../assets/images/Vector.png';
import twitterLogo from '../assets/images/Vector (1).png';
import discordLogo from '../assets/images/Link → SVG.png';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const [input, setInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false); 
  const [error, setError] = useState(false); 

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const subscribe = (e) => {
    e.preventDefault(); 
    const service_id = 'service_ebp4gkt';
    const template_id = 'template_r6mfitt';
    const public_key = 'Xvs2-2U4QjBw-qlNJ';

    // Send the email using EmailJS
    emailjs.sendForm(service_id, template_id, e.target, public_key)
      .then((result) => {
        console.log("Email successfully sent:", result.text);
        
        setInput('');
        
        setIsSubscribed(true);

        setTimeout(() => {
          setIsSubscribed(false);
        }, 3000);
      })
      .catch((error) => {
        console.log("Error sending email:", error.text);
        setError(true);

        setTimeout(() => {
          setError(false);
        }, 3000);
      });
  };

  return (
    <footer className="bg-coffeegreen">
      {/* Cards Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Newsletter Card */}
          <div className="bg-footerYellow rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Be a part of the future of coffee business
            </h3>
            <p className="text-black mb-6 text-sm md:text-base">
              Stay up to date with Waga Token. Only important insights, updates & rollouts.
            </p>
            <form onSubmit={subscribe}>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  value={input}
                  onChange={handleInputChange}
                  name="email" // Add name attribute for emailjs
                  placeholder="Your email goes here"
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-black/10 focus:outline-none focus:border-black text-sm"
                />
                <button 
                  type="submit" // Ensure it's a submit button for the form
                  className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-black/90 transition-colors">
                  Subscribe
                  <Send className="w-4 h-4"/>
                </button>
              </div>
            </form>

            {/* Success or Error Message */}
            {isSubscribed && (
              <div className="mt-4 text-green-500 text-sm font-semibold">
                Thank you for subscribing! 🎉
              </div>
            )}

            {error && (
              <div className="mt-4 text-red-500 text-sm font-semibold">
                Oops! Something went wrong. Please try again later. 😞
              </div>
            )}
          </div>

          {/* Download Card */}
          <a
            href="https://hackmd.io/@yl2u-hpeQU-iSu-PwJJHUw/r1HuiikM1g"
            target="_blank"
            rel="noopener noreferrer"
            className="block flex flex-col items-center justify-center text-center bg-footerGray rounded-2xl p-6 md:p-8  transition-all hover:brightness-110 active:scale-95"
          >
            <ArrowDown className="w-10 md:w-12 h-10 md:h-12 mb-4" />
            <h3 className="text-lg md:text-2xl font-bold">
              DOWNLOAD WAGA TOKEN WHITEPAPER
            </h3>
          </a>

        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            {/* Brand */}
            <div className="text-footerYellow text-3xl md:text-4xl font-bold">
              WAGA
            </div>

            {/* Navigation */}
            <nav>
              <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-white text-sm md:text-base">
                <li><a href="#" className="hover:text-footerYellow transition-colors">Roadmap</a></li>
                <li><a href="#" className="hover:text-footerYellow transition-colors">Tokenomics</a></li>
                <li><a href="#" className="hover:text-footerYellow transition-colors">Our Process</a></li>
              </ul>
            </nav>

            {/* Social Links */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-white text-sm">
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
  );
};

export default Footer;
