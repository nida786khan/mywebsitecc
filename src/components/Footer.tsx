import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-sm'>&copy; {new Date().getFullYear()} Portfolio. All Rights Reserved.</div>
        <div className='flex space-x-4'>
          <a href='https://github.com/your-profile' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>
            GitHub
          </a>
          <a href='https://linkedin.com/in/your-profile' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>
            LinkedIn
          </a>
          <a href='mailto:your-email@example.com' className='hover:text-gray-400'>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
