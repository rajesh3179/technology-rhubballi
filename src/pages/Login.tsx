
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();
  
  const toggleMode = () => {
    setIsLogin(!isLogin);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password || (!isLogin && !name)) {
      toast.error('Please fill in all fields');
      return;
    }
    
    // Mock authentication
    if (isLogin) {
      // For demo purposes, accept any valid email format
      if (email.includes('@') && password.length >= 6) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', email.split('@')[0]);
        
        // Store user role in localStorage
        const existingUsers = JSON.parse(localStorage.getItem('users') || '{}');
        const userRole = existingUsers[email]?.role || role;
        localStorage.setItem('userRole', userRole);
        
        toast.success('Login successful!');
        
        // Redirect based on role
        if (userRole === 'trainer') {
          navigate('/admin');
        } else {
          navigate('/student');
        }
      } else {
        toast.error('Invalid credentials');
      }
    } else {
      // Mock registration - store user data with role
      const existingUsers = JSON.parse(localStorage.getItem('users') || '{}');
      existingUsers[email] = {
        name,
        role,
        password  // In a real app, you would NEVER store plain passwords
      };
      localStorage.setItem('users', JSON.stringify(existingUsers));
      
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', name);
      localStorage.setItem('userRole', role);
      
      toast.success('Registration successful!');
      
      // Redirect based on role
      if (role === 'trainer') {
        navigate('/admin');
      } else {
        navigate('/student');
      }
    }
  };
  
  return (
    <Layout>
      <div className="min-h-screen bg-tech-light py-20">
        <div className="container mx-auto px-4 pt-16">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-tech-secondary text-white py-4 text-center">
              <h2 className="text-2xl font-bold">{isLogin ? 'Login' : 'Create Account'}</h2>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <div className="mb-4">
                    <Label htmlFor="name" className="block text-gray-700 mb-2">Full Name</Label>
                    <Input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full"
                      placeholder="Enter your full name"
                    />
                  </div>
                )}
                
                <div className="mb-4">
                  <Label htmlFor="email" className="block text-gray-700 mb-2">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="password" className="block text-gray-700 mb-2">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full"
                    placeholder="Enter your password"
                  />
                </div>
                
                {!isLogin && (
                  <div className="mb-6">
                    <Label className="block text-gray-700 mb-2">Account Type</Label>
                    <div className="flex gap-4">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="student"
                          name="role"
                          value="student"
                          checked={role === 'student'}
                          onChange={() => setRole('student')}
                          className="mr-2"
                        />
                        <Label htmlFor="student">Student</Label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="trainer"
                          name="role"
                          value="trainer"
                          checked={role === 'trainer'}
                          onChange={() => setRole('trainer')}
                          className="mr-2"
                        />
                        <Label htmlFor="trainer">Trainer</Label>
                      </div>
                    </div>
                  </div>
                )}
                
                <Button
                  type="submit"
                  className="w-full mb-4 bg-tech hover:bg-tech-secondary"
                >
                  {isLogin ? 'Login' : 'Register'}
                </Button>
                
                <p className="text-center text-gray-600">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="text-tech hover:text-tech-secondary font-medium"
                  >
                    {isLogin ? 'Register' : 'Login'}
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
