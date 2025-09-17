"use client";

import React, { useState } from 'react';
import { Sun, Moon, Play, ExternalLink, Star, Eye, GitFork, Grid3X3, List, Search, Filter } from 'lucide-react';

const ResponsiveFrontendWebsite = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const tools = [
    {
      name: "Image Resizer",
      description: "Resize images to any dimension with high quality output",
      category: "Image",
      icon: "🖼️",
      status: "Open",
      color: "blue"
    },
    {
      name: "QR Generator", 
      description: "Generate QR codes for URLs, text, and more",
      category: "Generate",
      icon: "📱",
      status: "Open",
      color: "orange"
    },
    {
      name: "Password Gen",
      description: "Create secure passwords with custom settings",
      category: "Security", 
      icon: "🔒",
      status: "Open",
      color: "blue"
    },
    {
      name: "Base64 Tool",
      description: "Encode and decode base64 strings easily",
      category: "Encode",
      icon: "🔤",
      status: "New",
      color: "green"
    },
    {
      name: "JSON Validator",
      description: "Validate and format JSON data structures",
      category: "Format",
      icon: "📋",
      status: "Open",
      color: "blue"
    },
    {
      name: "Hash Generator",
      description: "Generate MD5, SHA-1, SHA-256 hashes",
      category: "Security",
      icon: "🔐",
      status: "Open",
      color: "green"
    },
    {
      name: "Color Palette",
      description: "Extract colors from images and create palettes",
      category: "Design",
      icon: "🎨",
      status: "Open",
      color: "blue"
    },
    {
      name: "Text Analyzer",
      description: "Analyze text for readability and SEO metrics",
      category: "Text",
      icon: "📝",
      status: "New",
      color: "orange"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${isDark ? 'bg-gray-800/95 border-gray-700' : 'bg-white/95 border-gray-200'} border-b backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className={`text-2xl font-bold bg-gradient-to-r ${isDark ? 'from-blue-400 to-purple-500' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
                  Frontend
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors font-medium`}>
                Home
              </a>
              <a href="#tools" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors font-medium`}>
                Tools
              </a>
              <a href="#gallery" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors font-medium`}>
                Gallery
              </a>
              <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors font-medium`}>
                About
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-xl ${isDark ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-all duration-200 hover:scale-105`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className={`md:hidden p-2 rounded-xl ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              >
                <div className="space-y-1">
                  <div className={`w-5 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'} transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                  <div className={`w-5 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'} transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-5 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'} transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                </div>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`md:hidden py-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <nav className="space-y-2">
                <a href="#" className={`block px-4 py-2 ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Home</a>
                <a href="#tools" className={`block px-4 py-2 ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Tools</a>
                <a href="#gallery" className={`block px-4 py-2 ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Gallery</a>
                <a href="#" className={`block px-4 py-2 ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>About</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* WAN 2.2 Card */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-orange-400 via-pink-500 to-pink-600 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="relative z-10">
                  <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">WAN 2.2</h2>
                  <p className="text-base lg:text-lg mb-6 lg:mb-8 opacity-95 leading-relaxed">
                    WAN 2.2 Image generation<br />
                    <span className="text-sm lg:text-base opacity-80">
                      Generating images from the art of any girl character<br />
                      without multiple prompts and train<br />
                      multiple features.
                    </span>
                  </p>
                  <button className="bg-white/90 hover:bg-white text-gray-900 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 hover:scale-105 shadow-lg">
                    <Play size={18} />
                    Try WAN 2.2
                  </button>
                </div>
                
                {/* 🔄 REPLACE WITH YOUR OWN IMAGE */}
                <div className="absolute right-4 lg:right-6 top-1/2 transform -translate-y-1/2">
                  <div className="w-20 lg:w-28 h-28 lg:h-40 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                    {/* Add your character image here */}
                    <img src="https://mcdn.wallpapersafari.com/medium/72/12/73yFoh.png" alt="Character" className="w-full h-full object-cover rounded-xl" />
                    <div className="w-full h-full flex items-center justify-center text-2xl lg:text-4xl">
                      {/*🎨*/}
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10"></div>
              </div>
            </div>

            {/* Open Source Card */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="relative z-10">
                  <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">Open Source</h2>
                  <p className="text-base lg:text-lg mb-6 lg:mb-8 opacity-95 leading-relaxed">
                    FLUX.1 Krea<br />
                    <span className="text-sm lg:text-base opacity-80">
                      The most open source AI from krea AI Open sourced diffusion<br />
                      transformer & API real-time generat at AI Krea Fridge.
                    </span>
                  </p>
                  <button className="bg-white/90 hover:bg-white text-gray-900 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 hover:scale-105 shadow-lg">
                    <ExternalLink size={18} />
                    Open
                  </button>
                </div>
                
                {/* 🔄 REPLACE WITH YOUR OWN IMAGE */}
                <div className="absolute right-4 lg:right-6 top-6 lg:top-8">
                  <div className="w-16 lg:w-20 h-20 lg:h-24 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                    {/* Add your tech/AI related image here */}
                    <img src="https://mcdn.wallpapersafari.com/medium/94/14/bf9pz6.jpg" alt="AI Tech" className="w-full h-full object-contain p-2" />
                    <div className="w-full h-full flex items-center justify-center text-xl lg:text-2xl">
                      {/*🚀*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 lg:mb-12 gap-4">
            <h3 className={`text-2xl lg:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Generate
            </h3>
            <div className="flex items-center gap-4">
              <button className={`text-sm ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors font-medium`}>
                View all
              </button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="text"
                placeholder="Search tools..."
                className={`w-full pl-10 pr-4 py-3 rounded-xl ${
                  isDark 
                    ? 'bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:border-blue-500' 
                    : 'bg-white text-gray-900 placeholder-gray-500 border-gray-300 focus:border-blue-500'
                } border focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
              />
            </div>
            <button className={`px-4 py-3 rounded-xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-300'} transition-colors flex items-center gap-2`}>
              <Filter size={18} />
              <span className="hidden sm:inline">Filter</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`p-4 lg:p-6 rounded-xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-all duration-200 cursor-pointer group border ${isDark ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300'} hover:scale-105 hover:shadow-lg`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-2xl lg:text-3xl">{tool.icon}</div>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    tool.status === 'New' 
                      ? (isDark ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700')
                      : (isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700')
                  }`}>
                    {tool.status}
                  </span>
                </div>
                <h4 className={`font-semibold mb-2 lg:mb-3 ${isDark ? 'text-white' : 'text-gray-900'} text-base lg:text-lg`}>
                  {tool.name}
                </h4>
                <p className={`text-sm lg:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4 leading-relaxed`}>
                  {tool.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-lg font-medium ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                    {tool.category}
                  </span>
                  <ExternalLink className={`w-4 h-4 ${isDark ? 'text-gray-400 group-hover:text-white' : 'text-gray-400 group-hover:text-gray-600'} transition-colors`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 lg:mb-12 gap-4">
            <h3 className={`text-2xl lg:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Gallery
            </h3>
            <div className="flex items-center gap-4">
              <button className={`p-2 rounded-lg ${isDark ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} transition-colors`}>
                <Grid3X3 size={18} />
              </button>
              <button className={`p-2 rounded-lg ${isDark ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} transition-colors`}>
                <List size={18} />
              </button>
            </div>
          </div>

          <div className={`rounded-xl lg:rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} p-4 lg:p-6 border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 lg:gap-4">
                {/* 🔄 REPLACE WITH YOUR OWN BRAND LOGO */}
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl lg:rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl">K</span>
                </div>
                <div>
                  <h4 className={`font-semibold text-base lg:text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Krea AI
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    AI-powered creative tools
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>curated by</span>
                <div className="flex items-center gap-2">
                  {/* 🔄 REPLACE WITH YOUR OWN CURATOR LOGO */}
                  <div className="w-6 h-6 lg:w-7 lg:h-7 bg-gray-600 rounded-lg"></div>
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Mobbin
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 lg:py-16 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="col-span-2 lg:col-span-1">
              <span className={`text-xl lg:text-2xl font-bold bg-gradient-to-r ${isDark ? 'from-blue-400 to-purple-500' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
                Frontend
              </span>
              <p className={`mt-3 text-sm lg:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                Modern tools and resources for developers and creators.
              </p>
            </div>
            
            <div>
              <h5 className={`font-semibold mb-3 lg:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Tools</h5>
              <div className="space-y-2">
                <a href="#" className={`block text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Image Tools</a>
                <a href="#" className={`block text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Generators</a>
                <a href="#" className={`block text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Converters</a>
              </div>
            </div>
            
            <div>
              <h5 className={`font-semibold mb-3 lg:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Company</h5>
              <div className="space-y-2">
                <a href="#" className={`block text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>About</a>
                <a href="#" className={`block text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Contact</a>
                <a href="#" className={`block text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Privacy</a>
              </div>
            </div>
            
            <div>
              <h5 className={`font-semibold mb-3 lg:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Connect</h5>
              <div className="space-y-2">
                <a href="#" className={`block text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>GitHub</a>
                <a href="#" className={`block text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Twitter</a>
                <a href="#" className={`block text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Discord</a>
              </div>
            </div>
          </div>
          
          <div className={`mt-8 lg:mt-12 pt-6 lg:pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <p className={`text-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 Frontend. All rights reserved. Built with Next.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResponsiveFrontendWebsite;