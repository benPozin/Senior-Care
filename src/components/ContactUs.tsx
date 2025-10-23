"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Inquiry Type: ${formData.inquiryType}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent from the Spirit Alliance Social contact form.
      `);

      const mailtoLink = `mailto:inna@spiritalliancesocial.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.open(mailtoLink);
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general"
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-linear-to-br from-slate-50 to-slate-100" id="contact">
      <div className="mx-auto max-w-7xl container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're here to help you and your loved ones. Reach out to us for support, 
            questions, or to learn more about our services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                    <p className="text-slate-600">416-992-4915</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">inna@spiritalliancesocial.com</p>
                    <p className="text-sm text-slate-500">General Inquiries</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Office Hours</h4>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Emergency Only</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="416-992-4915"
                  />
                </div>
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="services">Services Information</option>
                    <option value="support">Support Request</option>
                    <option value="emergency">Emergency</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-800 text-sm">
                    ✓ Thank you! Your message has been prepared. Your email client should open with the message ready to send.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-800 text-sm">
                    ✗ There was an error preparing your message. Please try again or contact us directly.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-orange-700 focus:ring-4 focus:ring-orange-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Preparing Message..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
