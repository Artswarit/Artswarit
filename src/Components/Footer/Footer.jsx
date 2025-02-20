// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Instagram, Twitter, Facebook, Linkedin, Music2, Newspaper, 
  Headphones, Calendar, Radio, User, Heart, Phone, Mail, 
  MapPin, Play, Mic2, Music, ListMusic, MessageCircle, 
  HelpCircle, Settings, Book, Award, ChevronDown, ChevronUp
} from 'lucide-react';
import BlogCarousel from '../Blog/BlogCarousel';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [expandedSection, setExpandedSection] = useState('');

  const socialLinks = [
    { icon: <Instagram size={24} />, url: 'https://instagram.com/artswarit', label: 'Instagram' },
    { icon: <Twitter size={24} />, url: 'https://twitter.com/artswarit', label: 'Twitter' },
    { icon: <Facebook size={24} />, url: 'https://facebook.com/artswarit', label: 'Facebook' },
    { icon: <Linkedin size={24} />, url: 'https://linkedin.com/company/artswarit', label: 'LinkedIn' }
  ];

  const FooterSection = ({ title, icon, children, id }) => {
    const isExpanded = expandedSection === id;
    
    return (
      <div className="border-b md:border-none border-white/20 last:border-b-0">
        <div 
          className="flex items-center justify-between cursor-pointer md:cursor-default py-4 md:py-0"
          onClick={() => setExpandedSection(isExpanded ? '' : id)}
        >
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            {icon}
            {title}
          </h3>
          <button className="md:hidden text-white">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        <div className={`${isExpanded ? 'max-h-96' : 'max-h-0 md:max-h-none'} overflow-hidden transition-all duration-300 ease-in-out md:block md:mt-4`}>
          {children}
        </div>
      </div>
    );
  };

  return (
    <footer className="relative py-8  overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 opacity-90"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="mb-12">
          <BlogCarousel />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-8">
          <FooterSection 
            title="About Artswarit" 
            icon={<Music size={20} />}
            id="about"
          >
            <p className="text-white/90 mb-4 text-sm md:text-base">
              Bringing the best music experience to our listeners since 2020. 
              We believe in the power of music to connect and inspire.
            </p>
            <div className="flex justify-start space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/90 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </FooterSection>

          {/* Music & Content */}
          <FooterSection 
            title="Music & Content" 
            icon={<Headphones size={20} />}
            id="music"
          >
            <nav className="flex flex-col space-y-3">
              {[
                { icon: <Music2 size={16} />, label: 'Music Library', path: '/music-library' },
                { icon: <ListMusic size={16} />, label: 'Playlists', path: '/playlists' },
                { icon: <Radio size={16} />, label: 'Live Radio', path: '/radio' },
                { icon: <Mic2 size={16} />, label: 'Podcasts', path: '/podcasts' },
                { icon: <Book size={16} />, label: 'Blog', path: '/blog' }
              ].map((item, index) => (
                <NavLink 
                  key={index}
                  to={item.path} 
                  className="text-white/90 hover:text-white flex items-center gap-2 text-sm md:text-base
                           hover:bg-white/10 p-2 rounded-lg transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </FooterSection>

          {/* Community & Support */}
          <FooterSection 
            title="Community" 
            icon={<MessageCircle size={20} />}
            id="community"
          >
            <nav className="flex flex-col space-y-3">
              {[
                { icon: <User size={16} />, label: 'My Account', path: '/account' },
                { icon: <Heart size={16} />, label: 'My Favorites', path: '/favorites' },
                { icon: <HelpCircle size={16} />, label: 'Help Center', path: '/help' },
                { icon: <Settings size={16} />, label: 'Settings', path: '/settings' },
                { icon: <Award size={16} />, label: 'For Artists', path: '/artists' }
              ].map((item, index) => (
                <NavLink 
                  key={index}
                  to={item.path} 
                  className="text-white/90 hover:text-white flex items-center gap-2 text-sm md:text-base
                           hover:bg-white/10 p-2 rounded-lg transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </FooterSection>

          {/* Contact & Newsletter */}
          <FooterSection 
            title="Stay Connected" 
            icon={<Mail size={20} />}
            id="contact"
          >
            <div className="space-y-4">
              <div className="flex flex-col space-y-3">
                {[
                  { icon: <Mail size={16} />, text: 'contact@artswarit.com' },
                  { icon: <Phone size={16} />, text: '+1 (555) 123-4567' },
                  { icon: <MapPin size={16} />, text: '123 Music Street, Nashville' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-white/90 gap-2 text-sm md:text-base">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 
                           focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base
                           hover:bg-white/20 transition-colors"
                />
                <button className="px-6 py-2 bg-white text-purple-600 rounded-lg hover:bg-white/90 
                                 transition-colors font-semibold flex items-center justify-center gap-2
                                 text-sm md:text-base">
                  <Play size={16} />
                  Subscribe
                </button>
              </div>
            </div>
          </FooterSection>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/90 text-sm md:text-base text-center md:text-left">
              © {currentYear} Artswarit. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              {[
                { label: 'Privacy Policy', path: '/privacy' },
                { label: 'Terms of Service', path: '/terms' },
                { label: 'Cookie Policy', path: '/cookie-policy' }
              ].map((item, index) => (
                <NavLink 
                  key={index}
                  to={item.path} 
                  className="text-white/90 hover:text-white hover:underline"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

