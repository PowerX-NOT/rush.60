import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Truck,
  HeadphonesIcon,
  CheckCircle
} from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { fadeIn, slideUp } from '../utils/animations';
import ChatWidget from '../components/chat/ChatWidget';
import toast from 'react-hot-toast';
import { sendContactMessage } from '../services/telegramService';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send message to Telegram
      const success = await sendContactMessage(formData);
      
      if (success) {
        // Show success message
        toast.success('Message sent successfully! We\'ll get back to you within 24 hours.', {
          duration: 4000,
          position: 'top-right',
        });

        // Reset form and show success state
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        setIsSubmitted(true);
        
        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again or contact us directly.', {
        duration: 4000,
        position: 'top-right',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-terracotta to-dark-terracotta py-16 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Have questions about our construction materials or delivery service? 
              We're here to help you 24/7.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1"
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold font-poppins mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={20} className="text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+91 9876543210</p>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={20} className="text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">support@60minutedelivery.com</p>
                    <p className="text-sm text-gray-500">Response within 1 hour</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={20} className="text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">123 Construction Road</p>
                    <p className="text-gray-600">Building City, 400001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock size={20} className="text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Open 24/7</p>
                    <p className="text-sm text-gray-500">Including weekends & holidays</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    fullWidth
                    icon={<Truck size={16} />}
                  >
                    Track Your Order
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    fullWidth
                    icon={<HeadphonesIcon size={16} />}
                  >
                    Emergency Support
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            animate="visible"
            variants={slideUp}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {isSubmitted ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-success" />
                  </div>
                  <h3 className="text-2xl font-bold font-poppins mb-2 text-success">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <Button 
                    variant="primary"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold font-poppins mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                      
                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                      />
                      
                      <Input
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-gray-700 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta/50"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      icon={isSubmitting ? undefined : <Send size={18} />}
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our delivery service and products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-lg mb-3">How fast is your delivery?</h3>
              <p className="text-gray-600">
                We guarantee delivery within 60 minutes of order confirmation. Most orders are delivered in 30-45 minutes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-lg mb-3">What areas do you cover?</h3>
              <p className="text-gray-600">
                We deliver across the entire city and surrounding areas. Check our delivery map for specific coverage.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-lg mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                Currently, we only accept Cash on Delivery (COD) to ensure convenience and security for our customers.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Is there a minimum order amount?</h3>
              <p className="text-gray-600">
                No minimum order required! However, orders above ₹2000 qualify for free delivery.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-terracotta to-dark-terracotta rounded-2xl p-8 text-white text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <MessageCircle size={48} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
          <p className="mb-6 text-white/90">
            For urgent construction material needs or delivery issues, contact our emergency support line.
          </p>
          <Button 
            variant="secondary"
            size="lg"
            icon={<Phone size={18} />}
            className="bg-white text-terracotta hover:bg-white/90"
          >
            Call Emergency Support
          </Button>
        </motion.div>
      </div>

      <ChatWidget />
    </div>
  );
};

export default ContactPage;
