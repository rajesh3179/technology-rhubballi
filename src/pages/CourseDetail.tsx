
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';

interface CourseData {
  slug: string;
  title: string;
  description: string;
  image: string;
}

const courses: CourseData[] = [
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

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [pdfData, setPdfData] = useState<{name: string, data: string} | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const course = courses.find(c => c.slug === slug);
    if (!course) {
      navigate('/not-found');
      return;
    }
    
    setCourseData(course);
    
    // Get PDF data from localStorage if it exists
    const storedFiles = JSON.parse(localStorage.getItem('courseFiles') || '{}');
    if (storedFiles[slug]) {
      setPdfData(storedFiles[slug]);
    }
  }, [slug, navigate]);
  
  if (!courseData) return null;
  
  return (
    <Layout>
      <div className="min-h-screen bg-tech-light py-20">
        <div className="container mx-auto px-4 pt-16">
          {/* Header */}
          <div className="mb-8">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center text-tech hover:text-tech-secondary transition-colors duration-300 mb-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Courses
            </button>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden">
                <img 
                  src={courseData.image} 
                  alt={courseData.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-tech-secondary mb-2">{courseData.title}</h1>
                <p className="text-gray-600 mb-4">{courseData.description}</p>
              </div>
            </div>
          </div>
          
          {/* PDF Viewer */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-tech-secondary mb-6">Course Materials</h2>
            
            {pdfData ? (
              <div className="pdf-container">
                <iframe 
                  src={pdfData.data} 
                  title={pdfData.name}
                  className="w-full h-full"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-10 bg-gray-50 rounded-lg border border-gray-200">
                <AlertCircle size={48} className="text-tech/50 mb-4" />
                <h3 className="text-xl font-medium text-tech-secondary mb-2">No Materials Available</h3>
                <p className="text-gray-500 text-center mb-4">
                  Course materials haven't been uploaded yet. Please check back later or contact the administrator.
                </p>
                <button
                  onClick={() => navigate('/login')}
                  className="btn-primary"
                >
                  Login to Upload
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetail;
