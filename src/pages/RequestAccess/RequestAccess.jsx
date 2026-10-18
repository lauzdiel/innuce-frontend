import React, { useState } from 'react';
import gridBg from '../../assets/grid_bg.svg'; 
import { submitAccessRequest } from '../../services/api';

function RequestAccess() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    organization: '',
    role: '',
    reason: '',
    document: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await submitAccessRequest(formData);
      if (res && res.success) {
        setIsSuccess(true);
      } else {
        alert(res?.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert(err.message || 'An error occurred while submitting your request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen pt-[180px] px-[10%] pb-[100px] flex justify-center items-start bg-[#021B2B] font-['Inter',sans-serif]">
      
      {/* Background Grid */}
      <div className="absolute top-0 left-0 w-full h-[650px] z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]">
        <img src={gridBg} alt="Grid" className="w-full h-full object-cover opacity-30" />
      </div>

      <div className="relative z-[2] bg-[rgba(2,35,53,0.6)] border border-solid border-[rgba(127,168,184,0.2)] rounded-[16px] p-[30px_20px] sm:p-[50px] w-full max-w-[700px] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <h2 className="text-white text-[32px] text-center mb-[10px] font-bold m-0">Request Platform Access</h2>
        <p className="text-[#7FA8B8] text-center mb-[40px] text-[15px] m-0">Fill out the form below to request access to our platform</p>

        {isSuccess ? (
          <div className="p-6 bg-[rgba(0,255,100,0.1)] border border-[#00FF66] rounded-[8px] text-center text-white">
            <h3 className="text-[20px] font-semibold text-[#00FF66] mb-2">Request Submitted Successfully!</h3>
            <p className="text-[#A0C0CF] text-[14px] m-0">Thank you for your interest in the InNuCe Lab platform. Our team will review your application and contact you soon.</p>
            <button
              onClick={() => {
                setIsSuccess(false);
                setFormData({ name: '', surname: '', email: '', organization: '', role: '', reason: '', document: null });
              }}
              className="mt-6 px-6 py-2 bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] text-white rounded-[6px] font-semibold text-[14px] cursor-pointer"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          /* Form */
          <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
            
            <div className="flex flex-col sm:flex-row gap-[20px]">
              <div className="flex flex-col gap-[8px] flex-1">
                <label htmlFor="name" className="text-white text-[13px] font-semibold">Name *</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name" 
                  className="bg-transparent border border-solid border-[rgba(127,168,184,0.4)] rounded-[8px] p-[12px_16px] text-white font-['Inter',sans-serif] text-[14px] outline-none focus:border-[#FF6B00] placeholder-[rgba(127,168,184,0.5)]"
                  style={{ transition: 'border-color 0.3s' }}
                  required 
                />
              </div>
              <div className="flex flex-col gap-[8px] flex-1">
                <label htmlFor="surname" className="text-white text-[13px] font-semibold">Surname *</label>
                <input 
                  type="text" 
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Enter your surname" 
                  className="bg-transparent border border-solid border-[rgba(127,168,184,0.4)] rounded-[8px] p-[12px_16px] text-white font-['Inter',sans-serif] text-[14px] outline-none focus:border-[#FF6B00] placeholder-[rgba(127,168,184,0.5)]"
                  style={{ transition: 'border-color 0.3s' }}
                  required 
                />
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <label htmlFor="email" className="text-white text-[13px] font-semibold">Email *</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address" 
                className="bg-transparent border border-solid border-[rgba(127,168,184,0.4)] rounded-[8px] p-[12px_16px] text-white font-['Inter',sans-serif] text-[14px] outline-none focus:border-[#FF6B00] placeholder-[rgba(127,168,184,0.5)]"
                style={{ transition: 'border-color 0.3s' }}
                required 
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <label htmlFor="organization" className="text-white text-[13px] font-semibold">Organization *</label>
              <input 
                type="text" 
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Enter your organization" 
                className="bg-transparent border border-solid border-[rgba(127,168,184,0.4)] rounded-[8px] p-[12px_16px] text-white font-['Inter',sans-serif] text-[14px] outline-none focus:border-[#FF6B00] placeholder-[rgba(127,168,184,0.5)]"
                style={{ transition: 'border-color 0.3s' }}
                required 
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <label htmlFor="role" className="text-white text-[13px] font-semibold">Role in Organization *</label>
              <input 
                type="text" 
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="e.g., Research Engineer, PhD Student, etc." 
                className="bg-transparent border border-solid border-[rgba(127,168,184,0.4)] rounded-[8px] p-[12px_16px] text-white font-['Inter',sans-serif] text-[14px] outline-none focus:border-[#FF6B00] placeholder-[rgba(127,168,184,0.5)]"
                style={{ transition: 'border-color 0.3s' }}
                required 
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <label htmlFor="reason" className="text-white text-[13px] font-semibold">Reason for Access *</label>
              <textarea 
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Please describe why you need access to our platform..." 
                rows="5" 
                className="bg-transparent border border-solid border-[rgba(127,168,184,0.4)] rounded-[8px] p-[12px_16px] text-white font-['Inter',sans-serif] text-[14px] outline-none focus:border-[#FF6B00] placeholder-[rgba(127,168,184,0.5)] resize-y"
                style={{ transition: 'border-color 0.3s' }}
                required
              ></textarea>
            </div>

            <div className="flex flex-col gap-[8px]">
              <label htmlFor="document" className="text-white text-[13px] font-semibold">Official Request Document (PDF) *</label>
              <input 
                type="file" 
                id="document"
                name="document"
                onChange={handleChange}
                accept=".pdf" 
                className="text-[rgba(127,168,184,0.8)] p-[10px_16px] file:bg-[rgba(127,168,184,0.2)] file:text-white file:border-none file:p-[8px_16px] file:rounded-[4px] file:mr-[15px] file:cursor-pointer file:font-['Inter',sans-serif] file:font-[600] file:transition-colors file:duration-200 hover:file:bg-[rgba(127,168,184,0.4)]" 
                required 
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] text-white border-none p-[16px] rounded-[8px] font-['Inter',sans-serif] font-bold text-[16px] cursor-pointer mt-[10px] hover:-translate-y-[2px] hover:shadow-[0_10px_20px_rgba(255,107,0,0.3)] disabled:opacity-50"
              style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
            
          </form>
        )}
      </div>
    </section>
  );
}

export default RequestAccess;