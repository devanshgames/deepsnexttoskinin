
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3" 
              alt="DEEPA HOSIERY Facility" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="section-title">About DEEPA HOSIERY</h2>
            <p className="text-gray-700 mb-6">
              For over three decades, DEEPA HOSIERY has been a trusted name in the wholesale 
              undergarment and lingerie industry. Based in India, we specialize in manufacturing 
              and supplying high-quality hosiery products for retailers and businesses across the country.
            </p>
            <p className="text-gray-700 mb-6">
              Our commitment to quality, fair dealing, and customer satisfaction has earned us 
              a reputation as a reliable partner for businesses of all sizes. We pride ourselves 
              on our flexible approach to working with clients, understanding that each business 
              has unique needs and requirements.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="text-4xl font-bold text-deepa-teal block mb-2">30+</span>
                <span className="text-gray-600">Years Experience</span>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="text-4xl font-bold text-deepa-teal block mb-2">1000+</span>
                <span className="text-gray-600">Business Clients</span>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="text-4xl font-bold text-deepa-teal block mb-2">50+</span>
                <span className="text-gray-600">Product Varieties</span>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="text-4xl font-bold text-deepa-teal block mb-2">12</span>
                <span className="text-gray-600">States Covered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
