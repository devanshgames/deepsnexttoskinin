
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    company: "Fashion Point Retail",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=200&ixlib=rb-4.0.3",
    quote: "We've been working with DEEPA HOSIERY for over 5 years. Their products are consistently high quality and their service is excellent. Our customers love their undergarments."
  },
  {
    id: 2,
    name: "Priya Patel",
    company: "Style Hub Stores",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200&ixlib=rb-4.0.3",
    quote: "DEEPA HOSIERY understands our business needs perfectly. Their flexible approach to bulk orders and consistent quality makes them our preferred supplier for all lingerie products."
  },
  {
    id: 3,
    name: "Amit Verma",
    company: "Comfort Wear Distributors",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=200&ixlib=rb-4.0.3",
    quote: "What sets DEEPA HOSIERY apart is their dedication to maintaining quality even for large volume orders. They've been our trusted supplier for over a decade now."
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto mb-12 text-white">
          What Our Clients Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={testimonial.id} className="bg-[#111] shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${0.12 * idx}s`, animationFillMode: "backwards" }}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-6">
                  <Avatar className="w-20 h-20 mb-4 border-2 border-deepa-teal">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-deepa-teal text-black">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg text-white">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <svg className="absolute top-0 left-0 w-8 h-8 text-deepa-teal/20 -translate-x-4 -translate-y-4" 
                      fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-300 relative z-10 py-1">
                    "{testimonial.quote}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
