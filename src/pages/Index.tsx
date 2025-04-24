
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';

// Course images
const devopsImage = "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
const awsImage = "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
const azureImage = "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

// Course data
const courses = [
  {
    id: 1,
    title: "DevOps",
    slug: "devops",
    image: devopsImage,
    description: "Master DevOps tools and practices for continuous integration and delivery."
  },
  {
    id: 2,
    title: "AWS",
    slug: "aws",
    image: awsImage,
    description: "Learn cloud computing with Amazon Web Services (AWS) and build scalable applications."
  },
  {
    id: 3,
    title: "Azure",
    slug: "azure",
    image: azureImage,
    description: "Explore Microsoft Azure cloud services and solutions for your enterprise needs."
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      <Hero />
      
      {/* Courses Section */}
      <section id="courses" className="py-20 bg-tech-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">COURSES</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Expand your knowledge and skills with our industry-relevant tech courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="opacity-0 animate-slide-in"
                style={{ animationDelay: `${0.2 * course.id}s`, animationFillMode: 'forwards' }}
              >
                <CourseCard
                  title={course.title}
                  image={course.image}
                  description={course.description}
                  slug={course.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">WHY CHOOSE US</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-tech-light p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 opacity-0 animate-slide-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="w-16 h-16 rounded-full bg-tech flex items-center justify-center text-white mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-tech-secondary text-center mb-2">Industry Expert Instructors</h3>
              <p className="text-gray-600 text-center">Learn from professionals with years of industry experience who share practical knowledge.</p>
            </div>
            
            <div className="bg-tech-light p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 opacity-0 animate-slide-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <div className="w-16 h-16 rounded-full bg-tech flex items-center justify-center text-white mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-tech-secondary text-center mb-2">Hands-on Projects</h3>
              <p className="text-gray-600 text-center">Apply your learning with practical projects that simulate real-world scenarios.</p>
            </div>
            
            <div className="bg-tech-light p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 opacity-0 animate-slide-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <div className="w-16 h-16 rounded-full bg-tech flex items-center justify-center text-white mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-tech-secondary text-center mb-2">Job-Ready Skills</h3>
              <p className="text-gray-600 text-center">Gain skills that employers are actively seeking in today's technology landscape.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-tech-secondary to-tech-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Tech Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Join our specialized courses and gain the skills you need to advance your career in the tech industry.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#courses" className="btn-primary">View Courses</a>
            <a href="/login" className="bg-white text-tech-secondary hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md">Sign Up Now</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
