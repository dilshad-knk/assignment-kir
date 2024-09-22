import React from 'react';

const Tag = ({ children }) => (
  <span className="inline-block bg-zinc-800 text-zinc-400 text-xs px-2 py-1 rounded-full mr-2 mb-2">
    {children}
  </span>
);

const ProjectCard = ({ title, tags }) => (
  <div className="bg-zinc-900 rounded-lg p-4 mb-4">
    <div className="h-48 bg-zinc-800 rounded-lg mb-4 group">
  <div className="bg-zinc-900 rounded-lg p-6 mb-4 hidden group-hover:block">
    <button className="bg-zinc-800 text-white px-4 py-2 rounded-full inline-flex items-center">
      View project <span className="ml-2">→</span>
    </button>
  </div>
</div>
    <div>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </div>
    <h3 className="text-white text-lg mt-2">{title}</h3>
  </div>
);

const ProjectShowcase = () => {
  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-3">

        <div className="lg:w-1/2  lg:pl-8">
      <p className="text-4xl text-center mb-3 font-bold">Featured Works</p>
            
        <h2 className="hidden md:block text-2xl text-center mb-4">
 " Take a look at our <br></br> <span className="">Projects "</span>
</h2>

            
            <ProjectCard
              title="Poppin App Design"
              tags={['UI/UX', 'Illustration']}
            />
            <ProjectCard
              title="Helvetica Branding"
              tags={['Branding', 'UI/UX']}
            />
          </div>
        
          <div className="lg:w-1/2  mb-8 lg:mb-0">
            <ProjectCard
              title="Roboto Landing page"
              tags={['Development', 'UI/UX', 'Illustration']}
            />
            <ProjectCard
              title="Groteck Website"
              tags={['Development', 'UI/UX', 'Illustration']}
            />
          </div>
          
         
         
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;