
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen bg-tech-light py-20">
        <div className="container mx-auto px-4 pt-16">
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-24 h-24 bg-tech/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={40} className="text-tech" />
            </div>
            <h1 className="text-4xl font-bold text-tech-secondary mb-4">404</h1>
            <h2 className="text-2xl font-medium text-tech-secondary mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <button
              onClick={() => navigate('/')}
              className="btn-primary flex items-center justify-center mx-auto"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
