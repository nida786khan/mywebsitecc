import React from 'react';

const Contact = () => {
  return (
    <div data-aos="flip-up"
      id="contact" 
      className="container mx-auto py-12 px-4 bg-cover bg-center" 
      style={{ backgroundImage: "url('/')" }} 
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg"> 
        <h2 className='text-4xl md:text-5xl font-bold text-white text-center mb-8'>Get in Touch</h2>
        <p className='text-gray-300 text-center mb-12'>Feel free to reach out for collaborations or just a friendly chat!</p>
        
        <form className='max-w-2xl mx-auto'>
          <div className='mb-6'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Your name'
            />
          </div>
          
          <div className='mb-6'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Your email'
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>Message</label>
            <textarea
              id='message'
              name='message'
              rows={5}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Your message'
            ></textarea>
          </div>
          
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

