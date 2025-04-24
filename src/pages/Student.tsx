
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import CourseCard from '../components/CourseCard';
import { toast } from 'sonner';

interface Course {
  slug: string;
  title: string;
  description: string;
  image: string;
}

const Student = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  
  const courses: Course[] = [
    {
      slug: 'devops',
      title: 'DevOps',
      description: 'Master DevOps tools and practices for continuous integration and delivery.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      slug: 'aws',
      title: 'AWS',
      description: 'Learn cloud computing with Amazon Web Services (AWS) and build scalable applications.',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      slug: 'azure',
      title: 'Azure',
      description: 'Explore Microsoft Azure cloud services and solutions for your enterprise needs.',
      image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];
  
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const name = localStorage.getItem('userName') || '';
    
    if (!loggedIn) {
      navigate('/login');
      return;
    }
    
    setIsLoggedIn(true);
    setUserName(name);
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    navigate('/login');
    toast.success('Logged out successfully');
  };
  
  if (!isLoggedIn) return null;
  
  return (
    <Layout>
      <div className="min-h-screen bg-tech-light py-20">
        <div className="container mx-auto px-4 pt-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="bg-tech-secondary text-white py-4 px-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Student Dashboard</h2>
              <div className="flex items-center space-x-4">
                <span>Welcome, {userName}</span>
                <button 
                  onClick={handleLogout}
                  className="bg-white text-tech-secondary px-4 py-1 rounded-md hover:bg-gray-100 transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-tech-secondary mb-6">Available Courses</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard
                key={course.slug}
                title={course.title}
                image={course.image}
                description={course.description}
                slug={course.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Student;
