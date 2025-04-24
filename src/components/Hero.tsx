
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-tech-dark/90 to-tech-secondary/70"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 ${
            isVisible ? 'opacity-100 animate-text-focus' : 'opacity-0'
          } transition-opacity duration-700`}
        >
         SS TECHNOLOGIES
        </h1>
        <p 
          className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${
            isVisible ? 'opacity-100 animate-slide-in' : 'opacity-0'
          } transition-opacity duration-700 delay-300`}
          style={{ animationDelay: '0.3s' }}
        >
          Transform your skills and advance your career today!
        </p>
        <div 
          className={`${
            isVisible ? 'opacity-100 animate-slide-in' : 'opacity-0'
          } transition-opacity duration-700 delay-500`}
          style={{ animationDelay: '0.6s' }}
        >
          <Link 
            to="/courses" 
            className="btn-primary animate-pulse-light"
          >
            Explore Courses
          </Link>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection('courses')}
      >
        <ChevronDown className="text-white" size={32} />
      </div>
    </div>
  );
};

export default Hero;
