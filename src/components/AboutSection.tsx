import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Clock, ThumbsUp, RefreshCw, Shield } from 'lucide-react';
const reasons = [{
  id: 1,
  title: "30+ Years Experience",
  description: "Benefit from our three decades of industry knowledge and expertise in hosiery manufacturing.",
  icon: Clock
}, {
  id: 2,
  title: "Quality Assurance",
  description: "Every product undergoes rigorous quality checks before shipping to ensure the best for your customers.",
  icon: CheckCircle
}, {
  id: 3,
  title: "Fair Business Practices",
  description: "We believe in transparent pricing and honest business dealings with all our partners.",
  icon: ThumbsUp
}, {
  id: 4,
  title: "Flexible Approach",
  description: "We adapt to your business needs with customized solutions and flexible ordering options.",
  icon: RefreshCw
}, {
  id: 5,
  title: "Premium Materials",
  description: "Our products are made with high-quality materials for comfort, durability, and customer satisfaction.",
  icon: Award
}, {
  id: 6,
  title: "Reliable Partner",
  description: "Count on us for consistent supply, timely delivery, and long-term business partnership.",
  icon: Shield
}];
const AboutSection = () => {
  return <>
      <section id="about" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img alt="DEEPA HOSIERY Facility" className="rounded-lg shadow-lg w-full h-auto" src="/lovable-uploads/547fb491-4b7b-49ba-9ed4-d4209c194d4e.jpg" />
            </div>
            
            <div className="md:w-1/2">
              <h2 className="section-title text-white">About DEEPA HOSIERY</h2>
              <p className="mb-6 text-emerald-600">
                For over three decades, DEEPA HOSIERY has been a trusted name in the wholesale 
                undergarment and lingerie industry. Based in India, we specialize in manufacturing 
                and supplying high-quality hosiery products for retailers and businesses across the country.
              </p>
              <p className="mb-6 text-emerald-600">
                Our commitment to quality, fair dealing, and customer satisfaction has earned us 
                a reputation as a reliable partner for businesses of all sizes. We pride ourselves 
                on our flexible approach to working with clients, understanding that each business 
                has unique needs and requirements.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <span className="text-4xl font-bold text-deepa-teal block mb-2">30+</span>
                  <span className="text-gray-300">Years Experience</span>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <span className="text-4xl font-bold text-deepa-teal block mb-2">1000+</span>
                  <span className="text-gray-300">Business Clients</span>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <span className="text-4xl font-bold text-deepa-teal block mb-2">50+</span>
                  <span className="text-gray-300">Product Varieties</span>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <span className="text-4xl font-bold text-deepa-teal block mb-2">12</span>
                  <span className="text-gray-300">States Covered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-4 text-white">
            Why Choose DEEPA HOSIERY
          </h2>
          <p className="text-center text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            When you partner with us, you're choosing experience, quality, and reliability for your business.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, idx) => <Card key={reason.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-deepa-teal bg-[#111] animate-fade-in" style={{
            animationDelay: `${0.12 * idx}s`,
            animationFillMode: "backwards"
          }}>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 text-deepa-teal">
                      <reason.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-white">{reason.title}</h3>
                      <p className="text-gray-400">{reason.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>
    </>;
};
export default AboutSection;