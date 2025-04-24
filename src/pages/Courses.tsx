
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
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

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      <div className="min-h-screen bg-tech-light py-20">
        <div className="container mx-auto px-4 pt-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-tech-secondary mb-4 animate-text-focus">Our Courses</h1>
            <p className="text-gray-600 max-w-2xl mx-auto animate-slide-in">
              Explore our specialized courses designed to help you master the latest technologies and advance your career
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
          
          <div className="mt-16 text-center opacity-0 animate-slide-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <h2 className="text-2xl font-bold text-tech-secondary mb-4">Need Custom Training?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              We offer customized training solutions for individuals and teams. Contact us to discuss your specific needs.
            </p>
            <button className="btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
