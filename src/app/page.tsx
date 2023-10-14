'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: '/slide1.jpg', caption: 'Slide 1' },
    { image: '/slide2.jpg', caption: 'Slide 2' },
    { image: '/slide3.jpg', caption: 'Slide 3' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide === slides.length - 1 ? 0 : currentSlide + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero">
      <Image src={slides[currentSlide].image} alt={slides[currentSlide].caption} layout="fill" objectFit="cover" />
    </div>
  );
}
