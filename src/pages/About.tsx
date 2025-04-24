
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { User, Award, Book, Clock } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      <div className="min-h-screen bg-tech-light py-20">
        <div className="container mx-auto px-4 pt-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-tech-secondary mb-4 animate-text-focus">About Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto animate-slide-in">
              Learn more about SS Technologies and our mission to provide quality tech education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="opacity-0 animate-slide-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <h2 className="text-2xl font-bold text-tech-secondary mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At SS Technologies, we are dedicated to empowering individuals with the knowledge and skills they need to excel in the ever-evolving tech industry. Our comprehensive courses are designed to provide practical, hands-on experience in the most in-demand technologies.
              </p>
              <p className="text-gray-600">
                We believe that quality education should be accessible, engaging, and relevant to today's job market. That's why our courses focus on real-world applications and industry best practices.
              </p>
            </div>
            
            <div className="opacity-0 animate-slide-in-right" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Team Meeting" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/80 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">Expert Instructors</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    Our instructors bring years of industry experience to the classroom, ensuring that you learn from professionals who understand the challenges and opportunities in today's tech landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md text-center opacity-0 animate-slide-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <div className="w-16 h-16 bg-tech/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={24} className="text-tech" />
              </div>
              <h3 className="text-3xl font-bold text-tech-secondary mb-2">1000+</h3>
              <p className="text-gray-600">Students Taught</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center opacity-0 animate-slide-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <div className="w-16 h-16 bg-tech/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-tech" />
              </div>
              <h3 className="text-3xl font-bold text-tech-secondary mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center opacity-0 animate-slide-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <div className="w-16 h-16 bg-tech/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book size={24} className="text-tech" />
              </div>
              <h3 className="text-3xl font-bold text-tech-secondary mb-2">15+</h3>
              <p className="text-gray-600">Specialized Courses</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center opacity-0 animate-slide-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
              <div className="w-16 h-16 bg-tech/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-tech" />
              </div>
              <h3 className="text-3xl font-bold text-tech-secondary mb-2">7</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
          </div>
          
          {/* Instructor Section */}
          <div className="mb-16 opacity-0 animate-slide-in" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
            <h2 className="text-3xl font-bold text-tech-secondary mb-8 text-center">Meet Our Lead Instructor</h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                  alt="Sai Kiran" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-tech-secondary mb-2">MUTHYALA SAI KIRAN</h3>
                <p className="text-tech mb-4">Senior DevOps Engineer & Technical Educator</p>
                <p className="text-gray-600 mb-4">
                  With over 8 years of experience in DevOps, cloud computing, and software development, Sai Kiran brings a wealth of practical knowledge to his teaching. He has worked with numerous Fortune 500 companies, helping them implement robust DevOps practices and cloud solutions.
                </p>
                <p className="text-gray-600 mb-6">
                  His teaching philosophy revolves around practical, hands-on learning that prepares students for real-world challenges. Sai Kiran is passionate about helping individuals build rewarding careers in technology.
                </p>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-tech-secondary hover:text-tech transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-tech-secondary hover:text-tech transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center opacity-0 animate-slide-in" style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>
            <h2 className="text-2xl font-bold text-tech-secondary mb-4">Ready to Start Learning?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Explore our courses and take the first step towards advancing your tech career.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/courses" className="btn-primary">View Courses</a>
              <a href="/contact" className="bg-tech-secondary text-white hover:bg-tech-secondary/90 font-medium py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
