'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    { src: '/assets/Spicy_CornPuff.jpg', title: 'Corn Puff', description: 'Puffy snacks made of corn' },
    { src: '/assets/Spicy_Jungle.jpg', title: 'Jungle', description: 'Jungle inspired chips' },
    { src: '/assets/Spicy_Mixture.jpg', title: 'Mixture', description: 'Spicy mix' },
    { src: '/assets/Spicy_Stix.jpg', title: 'Stix', description: 'Stick shaped chips' },
    { src: '/assets/Spicy_Pasta.jpg', title: 'Pasta', description: 'Pasta shaped chips' },
    { src: '/assets/Spicy_Pola.jpg', title: 'Product Name 6', description: 'Short description here' },
    { src: '/assets/Spicy_Stax.jpg', title: 'Stax', description: 'Short description here' },
    { src: '/assets/Spicy_Ogee.jpg', title: 'Ogee', description: 'Short description here' }
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.floor(products.length / 2) - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Math.floor(products.length / 2) - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className="bg-orange-50 min-h-screen font-sans text-gray-800">
      {/* Navbar */}
      <header className="bg-red-600 text-white py-4 shadow-md rounded-b-3xl">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="mb-2 md:mb-0">
            <Image src="/assets/Spicy_Logo.png" alt="Spicy Logo" width={120} height={50} />
          </div>
          <nav>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 font-bold">
              <li className='hover:text-black'><Link href="#landing">Home</Link></li>
              <li className='hover:text-black'><Link href="#about">About Us</Link></li>
              <li className='hover:text-black'><Link href="#products">Our Products</Link></li>
              <li className='hover:text-black'><Link href="#contact">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Landing Section */}
      <section id="landing" className="h-screen bg-cover bg-center flex items-center justify-center text-center text-white p-4" style={{ backgroundImage: 'url(/assets/Spicy_Hero.png)',  }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-2xl">
          <h2 className="text-5xl font-bold mb-4">Welcome to <span className='text-[#E8801B] [text-shadow:_2px_2px_0_rgb(0_0_0_/_100%)]'>Spicy</span></h2>
          <p className="text-xl mb-6">Where flavor meets crunch! Explore our range of chips and snacks.</p>
          <Link href="#products" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg">Explore Now</Link>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center gap-8">
            <Image src="/assets/Spicy_Logo.jpg" alt="Spicy Logo" width={150} height={150} className="rounded-lg" />
            <Image src="/assets/Sajal.jpg" alt="Sajal" width={150} height={150} className="rounded-lg" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg max-w-2xl">Launched since 21st February 2004, Spicy has been dedicated to deliver bold flavors and crispy snacks. Our mission is to spice up your day with every bite! With a variety of unique recipes and a passion for taste, we ensure every snack is crafted with care and creativity.</p>
            <p className="text-lg max-w-2xl mt-4">Our factory is setup in Mansa, Punjab and all the products are loved by children of that region. Now we wish to expand more...</p>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section id="products" className="py-20 bg-orange-100 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Products</h2>
          <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {products.map((product, index) => (
                <div key={index} className="w-1/2 flex-shrink-0 p-4">
                  <Image src={product.src} alt={product.title} width={600} height={400} className="w-full h-64 object-cover rounded-md" />
                  <h3 className="text-2xl font-semibold mt-4">{product.title}</h3>
                  <p className="text-lg">{product.description}</p>
                </div>
              ))}
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full">&#10094;</button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full">&#10095;</button>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-white px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg">Phone: +91 8264238033</p>
            <p className="text-lg">Email: contact@spicy.com</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.453434617935!2d75.3871233!3d30.0238467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39111f005ed0b607%3A0x1064eaa42a228f70!2sSpicy%20mansa!5e0!3m2!1sen!2sin!4v1740230733471!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" required />
              <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" required />
              <textarea placeholder="Your Message" rows="5" className="w-full p-3 border rounded-lg" required></textarea>
              <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded-lg">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white text-center py-4 px-4">
        <p>&copy; {new Date().getFullYear()} Spicy. All rights reserved.</p>
      </footer>
    </div>
  );
}
