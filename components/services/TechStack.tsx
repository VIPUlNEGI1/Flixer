import React from 'react';

interface TechItemProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  gradient: string;
}


interface TechStackProps {
  category: string;
  title: string;
  description: string;
  technologies: TechItemProps[];
}

const TechItem: React.FC<TechItemProps> = ({ icon, name, description, gradient }) => (
  <div className="group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div className={`absolute inset-0 rounded-2xl ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
    
    <div className="relative space-y-4">
      <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur p-3">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  </div>
);

const TechStack: React.FC<TechStackProps> = ({
  category,
  title,
  description,
  technologies
}) => {
  return (
    <div className="relative py-24 bg-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-20 -right-20 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-3xl rounded-full"></div>
        <div className="absolute w-[400px] h-[400px] -bottom-20 -left-20 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 backdrop-blur-lg text-white">
              {category}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300">
            {description}
          </p>
        </div>

        {/* Tech stack grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <TechItem key={index} {...tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
