
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Upload, X, Check, FileText } from 'lucide-react';
import { toast } from 'sonner';

interface CourseFile {
  name: string;
  course: string;
  file: File | null;
  uploaded: boolean;
}

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isTrainer, setIsTrainer] = useState(false);
  const [courseFiles, setCourseFiles] = useState<CourseFile[]>([
    { name: '', course: 'devops', file: null, uploaded: false },
    { name: '', course: 'aws', file: null, uploaded: false },
    { name: '', course: 'azure', file: null, uploaded: false }
  ]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const name = localStorage.getItem('userName') || '';
    const role = localStorage.getItem('userRole') || '';
    
    if (!loggedIn) {
      navigate('/login');
      return;
    }
    
    // Check if user is a trainer
    if (role !== 'trainer') {
      toast.error('You do not have permission to access this page');
      navigate('/student');
      return;
    }
    
    setIsLoggedIn(true);
    setIsTrainer(role === 'trainer');
    setUserName(name);
    
    // Check for existing uploads
    const existingUploads = JSON.parse(localStorage.getItem('courseFiles') || '{}');
    if (Object.keys(existingUploads).length > 0) {
      const updatedFiles = courseFiles.map(file => {
        if (existingUploads[file.course]) {
          return {
            ...file,
            name: existingUploads[file.course].name,
            uploaded: true
          };
        }
        return file;
      });
      setCourseFiles(updatedFiles);
    }
  }, [navigate]);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const updatedFiles = [...courseFiles];
      updatedFiles[index] = {
        ...updatedFiles[index],
        name: file.name,
        file: file
      };
      setCourseFiles(updatedFiles);
    }
  };
  
  const handleUpload = (index: number) => {
    const file = courseFiles[index];
    
    if (!file.file || !file.name) {
      toast.error('Please select a file first');
      return;
    }
    
    // In a real app, you would upload to a server
    // For this demo, we'll store in localStorage
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && e.target.result) {
        const existingFiles = JSON.parse(localStorage.getItem('courseFiles') || '{}');
        
        existingFiles[file.course] = {
          name: file.name,
          data: e.target.result
        };
        
        localStorage.setItem('courseFiles', JSON.stringify(existingFiles));
        
        // Update state
        const updatedFiles = [...courseFiles];
        updatedFiles[index] = {
          ...updatedFiles[index],
          uploaded: true
        };
        setCourseFiles(updatedFiles);
        
        toast.success(`${file.name} uploaded successfully`);
      }
    };
    reader.readAsDataURL(file.file);
  };
  
  const handleRemove = (index: number) => {
    const file = courseFiles[index];
    
    // Remove from localStorage
    const existingFiles = JSON.parse(localStorage.getItem('courseFiles') || '{}');
    delete existingFiles[file.course];
    localStorage.setItem('courseFiles', JSON.stringify(existingFiles));
    
    // Update state
    const updatedFiles = [...courseFiles];
    updatedFiles[index] = {
      ...updatedFiles[index],
      name: '',
      file: null,
      uploaded: false
    };
    setCourseFiles(updatedFiles);
    
    toast.success(`File removed successfully`);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    navigate('/login');
  };
  
  const courseNames = {
    devops: 'DevOps',
    aws: 'AWS',
    azure: 'Azure'
  };
  
  if (!isLoggedIn || !isTrainer) return null;
  
  return (
    <Layout>
      <div className="min-h-screen bg-tech-light py-20">
        <div className="container mx-auto px-4 pt-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-tech-secondary text-white py-4 px-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Trainer Dashboard</h2>
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
            
            <div className="p-8">
              <h3 className="text-xl font-bold text-tech-secondary mb-6">Upload Course Materials</h3>
              
              <div className="space-y-6">
                {courseFiles.map((file, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-medium text-tech-secondary mb-2">
                          {courseNames[file.course as keyof typeof courseNames]}
                        </h4>
                        <div className="flex items-center">
                          <FileText size={20} className="text-gray-500 mr-2" />
                          <span className="text-gray-500">
                            {file.name ? file.name : 'No file selected'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2">
                        {!file.uploaded ? (
                          <>
                            <label className="btn-secondary flex items-center justify-center cursor-pointer">
                              <Upload size={16} className="mr-2" />
                              Select File
                              <input
                                type="file"
                                accept=".pdf"
                                onChange={(e) => handleFileChange(e, index)}
                                className="hidden"
                              />
                            </label>
                            <button
                              onClick={() => handleUpload(index)}
                              disabled={!file.file}
                              className={`flex items-center justify-center ${
                                file.file 
                                  ? 'bg-tech hover:bg-tech/90 text-white' 
                                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                              } font-medium py-2 px-6 rounded-md transition-all duration-300`}
                            >
                              <Check size={16} className="mr-2" />
                              Upload
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() => handleRemove(index)}
                            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 flex items-center justify-center"
                          >
                            <X size={16} className="mr-2" />
                            Remove
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
