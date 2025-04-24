
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  image: string;
  description: string;
  slug: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, image, description, slug }) => {
  return (
    <div className="course-card group">
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/80 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{title}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={`/course/${slug}`}
          className="flex items-center justify-between text-tech font-medium hover:text-tech-secondary transition-colors duration-300"
        >
          <span>View Course</span>
          <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
