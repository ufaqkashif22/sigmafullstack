"use client";
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const FormsCon = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="pb-0 mt-16 pt-8 pl-8 pr-8  flex items-center justify-center bg-white">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              YOUR NAME
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-cyan-400 px-4 py-3 rounded-md focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              YOUR EMAIL
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-cyan-400 px-4 py-3 rounded-md focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              SUBJECT
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full border border-cyan-400 px-4 py-3 rounded-md focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              YOUR MESSAGE (OPTIONAL)
            </label>
            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-cyan-400 px-4 py-3 rounded-md focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-2 rounded-md"
          >
            SUBMIT
          </button>

          {success && (
            <p className="text-green-600 font-semibold mt-2">
              ✅ Message sent successfully!
            </p>
          )}
        </form>

        {/* Right: Map + Contact Info */}
        <div className="space-y-6">
          <div className="w-full h-[390px] rounded-md overflow-hidden border border-gray-300">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="space-y-2 text-gray-800">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-sky-600" />
              <span className="text-[1rem]">+1 (904) 368-5971</span>
            </div>
            <div className="flex mt-3 items-center gap-3">
              <FaEnvelope className="text-sky-600" />
              <span className="text-[1rem]">support@sigmatechnicalservices.net</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsCon;
