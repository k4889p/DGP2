
// import React, { useState } from 'react';
// import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
// import FadeIn from './FadeIn';
// import { useToast } from '@/hooks/use-toast';

// const Contact: React.FC = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//     propertyType: 'residential'
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     // Simulate form submission
//     setTimeout(() => {
//       setLoading(false);
//       toast({
//         title: "Message Sent",
//         description: "Thank you for your inquiry. We'll get back to you soon!",
//       });
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         message: '',
//         propertyType: 'residential'
//       });
//     }, 1500);
//   };

//   const contactInfo = [
//     {
//       icon: <Phone className="w-5 h-5" />,
//       title: 'Call Us',
//       info: '+91 90762 52228',
//       link: 'tel:+919076252228'
//     },
//     {
//       icon: <Mail className="w-5 h-5" />,
//       title: 'Email Us',
//       info: 'dpmproperties20@gmail.com',
//       link: 'mailto:dpmproperties20@gmail.com'
//     },
//     {
//       icon: <MapPin className="w-5 h-5" />,
//       title: 'Visit Us',
//       info: (
//         <>
//           G/061, Shagun Arcade, Opp.HDFC Bank,
//           Before Dindoshi Bus Depot, Filmcity Road,
//           Malad (E), Mumbai-400097
//         </>
//       ),
//       link: 'https://maps.app.goo.gl/dZAezwocQ4RBxpbq9'
//     }

//   ];

//   return (
//     <section id="contact" className="section-padding bg-gray-50">
//       <div className="container mx-auto">
//         <FadeIn>
//           <div className="text-center mb-16">
//             <span className="text-yellow-500 font-medium text-sm uppercase tracking-wider">Get In Touch</span>
//             <h2 className="section-title mt-2">Contact Us</h2>
//             <p className="section-subtitle">
//               Have questions about a property or need personalized assistance? We're here to help you at every step of your property journey.
//             </p>
//           </div>
//         </FadeIn>

//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-10">
//             <FadeIn direction="left" className="lg:col-span-2">
//               <div className="bg-white rounded-xl shadow-elegant p-6 md:p-8">
//                 <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                   <Mail className="mr-2 text-yellow-500" size={20} />
//                   Contact Information
//                 </h3>

//                 <div className="space-y-8 text-center">
//                   {contactInfo.map((item, index) => (
//                     <a
//                       key={index}
//                       href={item.link}
//                       target={item.title === 'Visit Us' ? '_blank' : undefined}
//                       rel={item.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
//                       className="flex flex-col items-center group"
//                     >
//                       <div className="w-12 h-12 rounded-full yellow-gradient flex items-center justify-center text-yello-600 mb-2 group-hover:scale-110 transition-transform">
//                         {item.icon}
//                       </div>
//                       <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
//                       <p className="text-gray-600 group-hover:text-yellow-500 transition-colors text-sm text-center">
//                         {item.info}
//                       </p>
//                     </a>
//                   ))}
//                 </div>


//                 <div className="mt-10">
//                   <h4 className="font-medium text-gray-900 mb-4 flex items-center">
//                     <Clock className="mr-2 text-yellow-500" size={18} />
//                     Business Hours
//                   </h4>
//                   <div className="space-y-2 text-gray-600 pl-6">
//                     <p>Monday - Sunday: 10:00 AM - 7:00 PM</p>
//                   </div>
//                 </div>
//               </div>
//             </FadeIn>

//             <FadeIn direction="right" delay={200} className="lg:col-span-3">
//               <div className="bg-white rounded-xl shadow-elegant p-6 md:p-8">
//                 <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                   <Send className="mr-2 text-yellow-500" size={20} />
//                   Send Us a Message
//                 </h3>

//                 <form onSubmit={handleSubmit} className="space-y-6 text-left">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                         Full Name <span className="text-yellow-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none transition-colors"
//                         placeholder="Your name"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                         Email Address <span className="text-yellow-500">*</span>
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full rounded-lg border border-yellow-200 px-4 py-3 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none transition-colors"
//                         placeholder="Your email"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                         Phone Number
//                       </label>
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none transition-colors"
//                         placeholder="Your phone number"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
//                         Property Interest
//                       </label>
//                       <select
//                         id="propertyType"
//                         name="propertyType"
//                         value={formData.propertyType}
//                         onChange={handleChange}
//                         className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none transition-colors"
//                       >
//                         <option value="residential">Residential</option>
//                         <option value="commercial">Commercial</option>
//                         <option value="industrial">Industrial</option>
//                         <option value="other">Other</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                       Message <span className="text-yellow-500">*</span>
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={4}
//                       className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none transition-colors"
//                       placeholder="Tell us about your requirements..."
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="yellow-gradient text-white font-medium px-8 py-3 rounded-full hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
//                   >
//                     {loading ? (
//                       <span className="flex items-center">
//                         <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Sending...
//                       </span>
//                     ) : (
//                       <span className="flex items-center">
//                         Send Message
//                         <Send size={16} className="ml-2" />
//                       </span>
//                     )}
//                   </button>
//                 </form>
//               </div>
//             </FadeIn>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
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
      icon: <Phone className="w-5 h-5" />,
      title: 'Call Us',
      info: '+91 90762 52228',
      link: 'tel:+919076252228'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email Us',
      info: 'dpmproperties20@gmail.com',
      link: 'mailto:dpmproperties20@gmail.com'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Visit Us',
      info: (
        <>
          G/061, Shagun Arcade, Opp.HDFC Bank,<br />
          Before Dindoshi Bus Depot, Filmcity Road,<br />
          Malad (E), Mumbai-400097
        </>
      ),
      link: 'https://maps.app.goo.gl/dZAezwocQ4RBxpbq9'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-yellow-600 font-medium text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="section-title mt-2">Contact Us</h2>
            <p className="section-subtitle text-gray-700">
              Have questions about a property or need personalized assistance? We're here to help you at every step of your property journey.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-10">
            <FadeIn direction="left" className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-elegant p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Mail className="mr-2 text-yellow-600" size={20} />
                  Contact Information
                </h3>

                <div className="space-y-8 text-center">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target={item.title === 'Visit Us' ? '_blank' : undefined}
                      rel={item.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
                      className="flex flex-col items-center group"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 group-hover:text-yellow-600 transition-colors text-sm text-center">
                        {item.info}
                      </p>
                    </a>
                  ))}
                </div>

                <div className="mt-10">
                  <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                    <Clock className="mr-2 text-yellow-600" size={18} />
                    Business Hours
                  </h4>
                  <div className="space-y-2 text-gray-600 pl-6">
                    <p>Monday - Sunday: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200} className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-elegant p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Send className="mr-2 text-yellow-600" size={20} />
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-yellow-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-yellow-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 focus:outline-none transition-colors"
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
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 focus:outline-none transition-colors"
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
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 focus:outline-none transition-colors"
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
                      Message <span className="text-yellow-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 focus:outline-none transition-colors"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-medium px-8 py-3 rounded-full hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
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
