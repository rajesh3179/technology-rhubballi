
import React, { useState, useEffect } from 'react';
import { Menu, X, Home as HomeIcon, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className={`text-2xl md:text-3xl font-bold ${isScrolled ? 'text-tech' : 'text-white'} transition-colors duration-300`}
        >
          SS TECHNOLOGIES
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <button 
              onClick={toggleDropdown} 
              className={`flex items-center ${isScrolled ? 'text-tech-secondary' : 'text-white'} hover:text-tech transition-colors duration-300`}
            >
              <Menu className="mr-2" size={20} />
              Menu
              <ChevronDown className="ml-1" size={16} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 animate-slide-in">
                <Link 
                  to="/courses" 
                  className="block px-4 py-2 text-sm text-tech-secondary hover:bg-gray-100 hover:text-tech"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  All Courses
                </Link>
                <Link 
                  to="/login" 
                  className="block px-4 py-2 text-sm text-tech-secondary hover:bg-gray-100 hover:text-tech"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/about" 
                  className="block px-4 py-2 text-sm text-tech-secondary hover:bg-gray-100 hover:text-tech"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  About Us
                </Link>
              </div>
            )}
          </div>
          
          <Link 
            to="/" 
            className={`flex items-center ${isScrolled ? 'text-tech-secondary' : 'text-white'} hover:text-tech transition-colors duration-300`}
          >
            <HomeIcon className="mr-2" size={20} />
            Home
          </Link>
          
          <Link 
            to="/login" 
            className="btn-primary"
          >
            Login
          </Link>
        </div>
        
        <button 
          className="md:hidden text-tech-dark"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X size={24} className={`${isScrolled ? 'text-tech-secondary' : 'text-white'}`} />
          ) : (
            <Menu size={24} className={`${isScrolled ? 'text-tech-secondary' : 'text-white'}`} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-tech-secondary hover:text-tech flex items-center"
                onClick={toggleMenu}
              >
                <HomeIcon className="mr-2" size={20} />
                Home
              </Link>
              <Link 
                to="/courses" 
                className="text-tech-secondary hover:text-tech"
                onClick={toggleMenu}
              >
                All Courses
              </Link>
              <Link 
                to="/login" 
                className="text-tech-secondary hover:text-tech"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link 
                to="/about" 
                className="text-tech-secondary hover:text-tech"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link 
                to="/login" 
                className="btn-primary w-full text-center"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
