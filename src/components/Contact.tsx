
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import FadeIn from './FadeIn';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: 'residential'
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your inquiry. We'll get back to you soon!",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        propertyType: 'residential'
      });
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: 'Call Us',
      info: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: <Mail size={20} />,
      title: 'Email Us',
      info: 'contact@dpmproperties.com',
      link: 'mailto:contact@dpmproperties.com'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Visit Us',
      info: 'Mumbai, Maharashtra, India',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-cherry-500 font-medium text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="section-title mt-2">Contact Us</h2>
            <p className="section-subtitle">
              Have questions about a property or need personalized assistance? We're here to help you at every step of your property journey.
            </p>
          </div>
        </FadeIn>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <FadeIn direction="left" className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-elegant p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a 
                      key={index}
                      href={item.link}
                      target={item.title === 'Visit Us' ? '_blank' : undefined}
                      rel={item.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-full cherry-gradient flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 group-hover:text-cherry-500 transition-colors">
                          {item.info}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                
                <div className="mt-10">
                  <h4 className="font-medium text-gray-900 mb-4">Business Hours</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="right" delay={200} className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-elegant p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-cherry-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-cherry-500 focus:ring-1 focus:ring-cherry-500 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-cherry-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-cherry-500 focus:ring-1 focus:ring-cherry-500 focus:outline-none transition-colors"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-cherry-500 focus:ring-1 focus:ring-cherry-500 focus:outline-none transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                        Property Interest
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-cherry-500 focus:ring-1 focus:ring-cherry-500 focus:outline-none transition-colors"
                      >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-cherry-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-cherry-500 focus:ring-1 focus:ring-cherry-500 focus:outline-none transition-colors"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="cherry-gradient text-white font-medium px-8 py-3 rounded-full hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send size={16} className="ml-2" />
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
