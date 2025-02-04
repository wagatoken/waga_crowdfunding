import React from 'react'
import { ArrowDown, Send } from 'lucide-react';
import telegramLogo from '../assets/images/Vector.png';
import twitterLogo from '../assets/images/Vector (1).png';
import discordLogo from '../assets/images/Link → SVG.png';

const Footer = () => {
  return (
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
  )
}

export default Footer