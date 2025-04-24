
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-tech-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">MUTHYALA SAI KIRAN</h3>
            <p className="mb-2 flex items-center">
              <Phone size={18} className="mr-2 text-tech" />
              +91 6301235450
            </p>
            <p className="mb-4 flex items-center">
              <Mail size={18} className="mr-2 text-tech" />
              muthyalasaikiran1999@gmail.com
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-tech transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-tech transition-colors duration-300"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <Link to="/" className="mb-2 hover:text-tech transition-colors duration-300">Home</Link>
            <Link to="/courses" className="mb-2 hover:text-tech transition-colors duration-300">Courses</Link>
            <Link to="/login" className="mb-2 hover:text-tech transition-colors duration-300">Login</Link>
            <Link to="/about" className="mb-2 hover:text-tech transition-colors duration-300">About Us</Link>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">SS TECHNOLOGIES</h3>
            <p className="mb-4">Transform your skills and advance your career with our specialized courses in DevOps, AWS, and Azure.</p>
            <div className="mt-2">
              <Link to="/contact" className="btn-primary">Contact Us</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} SS Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
