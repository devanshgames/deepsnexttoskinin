
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Clock, ThumbsUp, RefreshCw, Shield } from 'lucide-react';

const reasons = [
  {
    id: 1,
    title: "30+ Years Experience",
    description: "Benefit from our three decades of industry knowledge and expertise in hosiery manufacturing.",
    icon: Clock
  },
  {
    id: 2,
    title: "Quality Assurance",
    description: "Every product undergoes rigorous quality checks before shipping to ensure the best for your customers.",
    icon: CheckCircle
  },
  {
    id: 3,
    title: "Fair Business Practices",
    description: "We believe in transparent pricing and honest business dealings with all our partners.",
    icon: ThumbsUp
  },
  {
    id: 4,
    title: "Flexible Approach",
    description: "We adapt to your business needs with customized solutions and flexible ordering options.",
    icon: RefreshCw
  },
  {
    id: 5,
    title: "Premium Materials",
    description: "Our products are made with high-quality materials for comfort, durability, and customer satisfaction.",
    icon: Award
  },
  {
    id: 6,
    title: "Reliable Partner",
    description: "Count on us for consistent supply, timely delivery, and long-term business partnership.",
    icon: Shield
  }
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto mb-4 text-black">
          Why Choose DEEPA HOSIERY
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          When you partner with us, you're choosing experience, quality, and reliability for your business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <Card key={reason.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-deepa-teal">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-deepa-teal">
                    <reason.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-display font-semibold text-deepa-teal mb-4">
            Ready to experience the DEEPA HOSIERY difference?
          </h3>
          <a 
            href="#contact" 
            className="inline-block bg-deepa-teal hover:bg-deepa-dark-teal text-black px-8 py-3 rounded-md transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
