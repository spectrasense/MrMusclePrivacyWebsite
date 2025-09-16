import React, { useState } from 'react';
import { Trash2, AlertTriangle, CheckCircle, Mail, User, MessageSquare } from 'lucide-react';

const DeleteAccount = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    reason: '',
    additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-8">
              <CheckCircle className="text-green-400" size={48} />
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">
              Request Received
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Thank you for your request. Your account will be deleted within 24 hours. 
              You will receive a confirmation email once the deletion is complete.
            </p>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="text-yellow-400 mr-2" size={24} />
                <span className="text-yellow-400 font-semibold">Important Notice</span>
              </div>
              <p className="text-gray-300">
                This action cannot be undone. All your data, including workout history, 
                progress tracking, and personal information will be permanently deleted.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mx-auto w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-8">
            <Trash2 className="text-red-400" size={48} />
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">
            Delete Your <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Account</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            We're sorry to see you go. Please fill out the form below to request account deletion. 
            Your account will be permanently deleted within 24 hours.
          </p>
        </div>

        {/* Warning Notice */}
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-12">
          <div className="flex items-start">
            <AlertTriangle className="text-red-400 mr-3 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-red-400 font-semibold mb-2">Warning: This action is irreversible</h3>
              <p className="text-gray-300">
                Once your account is deleted, all your data including workout history, progress tracking, 
                achievements, and personal information will be permanently removed and cannot be recovered.
              </p>
            </div>
          </div>
        </div>

        {/* Delete Account Form */}
        <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                <Mail className="inline mr-2" size={16} />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter your registered email address"
              />
            </div>

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                <User className="inline mr-2" size={16} />
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            {/* Reason Field */}
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-300 mb-2">
                <MessageSquare className="inline mr-2" size={16} />
                Reason for Account Deletion *
              </label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Select a reason</option>
                <option value="no-longer-needed">No longer need the service</option>
                <option value="found-alternative">Found a better alternative</option>
                <option value="privacy-concerns">Privacy concerns</option>
                <option value="technical-issues">Technical issues</option>
                <option value="cost">Cost considerations</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Additional Information */}
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Please provide any additional feedback or information that might help us improve our service..."
              />
            </div>

            {/* Confirmation Checkbox */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="confirm"
                  required
                  className="mt-1 mr-3 h-4 w-4 text-red-500 bg-gray-800 border-gray-600 rounded focus:ring-red-500 focus:ring-2"
                />
                <label htmlFor="confirm" className="text-gray-300 text-sm">
                  I understand that this action is permanent and irreversible. I confirm that I want to delete my account 
                  and all associated data within 24 hours.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Processing Request...
                </>
              ) : (
                <>
                  <Trash2 className="mr-2" size={20} />
                  Delete My Account
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Have second thoughts? Contact our support team before your account is deleted.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="/support"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="/contact"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              General Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
