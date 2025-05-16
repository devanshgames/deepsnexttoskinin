
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WhyUs = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the About page with a hash to scroll to the Why Us section
    navigate('/about#why-us', { replace: true });
  }, [navigate]);
  
  return null; // This won't render as we're redirecting
};

export default WhyUs;
