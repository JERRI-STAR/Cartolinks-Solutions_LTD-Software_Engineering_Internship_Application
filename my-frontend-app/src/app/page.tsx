"use client"; 
import React, { useState } from 'react';
import { Sun, Moon, Play, ExternalLink, Star, Eye, GitFork } from 'lucide-react';

const FrontendReplica = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const tools = [
    {
      name: "Image Resizer",
      description: "Resize images to any dimension",
      category: "Image",
      icon: "🖼️",
      isOpen: true
    },
    {
      name: "QR Code Generator", 
      description: "Generate QR codes for URLs, text",
      category: "Generate",
      icon: "📱",
      isOpen: true
    },
    {
      name: "Password Generator",
      description: "Generate secure passwords",
      category: "Generate", 
      icon: "🔒",
      isOpen: true
    },
    {
      name: "Base64 Encoder",
      description: "Encode/decode base64 strings",
      category: "Encode",
      icon: "🔤",
      isOpen: true
    },
    {
      name: "JSON Formatter",
      description: "Format and validate JSON",
      category: "Format",
      icon: "📋",
      isOpen: true
    },
    {
      name: "Color Picker",
      description: "Pick colors and get hex codes",
      category: "Design",
      icon: "🎨",
      isOpen: true
    },
    {
      name: "Video Trimmer",
      description: "Trim videos online",
      category: "Video",
      icon: "🎬",
      isOpen: true
    },
    {
      name: "Hash Generator",
      description: "Generate MD5, SHA hashes",
      category: "Generate",
      icon: "🔐",
      isOpen: true
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Frontend
                </span>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                Home
              </a>
              <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                Tools
              </a>
              <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                About
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${isDark ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* WAN 2.2 Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <img src="/my-frontend-app/public/images/yu.jpg" alt="YU-gi-oh GX" />
                  <h2 className="text-4xl font-bold mb-4">WAN 2.2</h2>
                  <p className="text-lg mb-6 opacity-90">
                    WAN 2.2 Image generation<br />
                    Generating images from the art of any girl character<br />
                    without multiple prompts and train<br />
                    multiple features.
                  </p>
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                    <Play size={18} />
                    Try WAN 2.2
                  </button>
                </div>
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent"></div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-24 h-32 bg-white/10 rounded-lg backdrop-blur-sm"></div>
                </div>
              </div>
            </div>

            {/* Open Source Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-4xl font-bold mb-4">Open Source</h2>
                  <p className="text-lg mb-6 opacity-90">
                    FLUX.1 Krea<br />
                    The most open source AI from krea AI Open sourced diffusion<br />
                    transformer & API real-time generat at AI Krea Fridge.
                  </p>
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                    <ExternalLink size={18} />
                    Open
                  </button>
                </div>
                <div className="absolute right-4 top-4">
                  <div className="w-16 h-20 bg-white/10 rounded-lg backdrop-blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generate Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Generate
            </h3>
            <button className={`text-sm ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors`}>
              View all
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.slice(0, 4).map((tool, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} transition-colors cursor-pointer group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-2xl">{tool.icon}</div>
                  <span className={`px-2 py-1 text-xs rounded-full ${isDark ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700'}`}>
                    Open
                  </span>
                </div>
                <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {tool.name}
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {tool.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
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
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Gallery
            </h3>
            <div className="flex items-center gap-4">
              <button className={`text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                Grid
              </button>
              <button className={`text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                List view
              </button>
            </div>
          </div>
          
          {/*Footer Card 
          <div className={`rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'} p-6`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <div>
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Krea AI
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>curated by</span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-600 rounded"></div>
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Mobbin
                  </span>
                </div>
              </div>
            </div>
          </div>*/}
        </div>
      </section>

      {/* Footer Section */}
      <div className={`rounded-xl mt-12 ${isDark ? 'bg-gray-800 border-t border-gray-700 shadow-lg' : 'bg-gray-50 border-t border-gray-200 shadow'} p-6`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <div>
              <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Krea AI
              </h4>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Empowering creativity with AI tools</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>curated by</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-600 rounded"></div>
              <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Mobbin
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Krea AI. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default FrontendReplica;
