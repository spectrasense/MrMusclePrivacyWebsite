import React, { useState } from 'react';
import { 
  HelpCircle, Book, MessageCircle, Video, Search, 
  ChevronDown, ChevronRight, Mail, Phone, Clock 
} from 'lucide-react';

const Support = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: "How do I create a workout plan?",
      answer: "To create a workout plan, go to the 'Workouts' tab, tap the '+' button, and follow the guided setup. You can choose from pre-made templates or create a custom plan based on your goals, available equipment, and schedule."
    },
    {
      question: "Can I use the app offline?",
      answer: "Yes! Once you've downloaded your workout plans, you can use them offline. Your progress will sync automatically when you reconnect to the internet."
    },
    {
      question: "How do I track my progress?",
      answer: "The app automatically tracks your workouts, including sets, reps, and weights. You can view your progress in the 'Progress' tab, which shows charts and statistics over time."
    },
    {
      question: "What if I can't complete a workout?",
      answer: "No problem! You can modify any workout by adjusting weights, reps, or substituting exercises. The app will adapt future recommendations based on your performance."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription through your device's app store settings (iOS App Store or Google Play Store). The cancellation will take effect at the end of your current billing period."
    },
    {
      question: "Can I sync with other fitness apps?",
      answer: "Yes, MR MUSCLE integrates with popular health apps like Apple Health, Google Fit, and various fitness trackers. Enable sync in the app settings."
    },
    {
      question: "How do I reset my password?",
      answer: "On the login screen, tap 'Forgot Password' and enter your email address. You'll receive a password reset link within a few minutes."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use industry-standard encryption to protect your data. Your personal information is never shared with third parties without your consent. See our Privacy Policy for details."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <HelpCircle className="mx-auto mb-6 text-blue-400" size={48} />
          <h1 className="text-5xl font-bold text-white mb-6">
            Support <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Center</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions, browse our help articles, or get in touch with our support team.
          </p>
        </div>

        {/* Quick Help Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center hover:border-blue-500/50 transition-all">
            <Book className="mx-auto mb-4 text-blue-400" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">User Guide</h3>
            <p className="text-gray-400 mb-4">Complete guide to using all features of MR MUSCLE</p>
            <button className="text-blue-400 hover:text-blue-300 font-medium">Read Guide →</button>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center hover:border-green-500/50 transition-all">
            <Video className="mx-auto mb-4 text-green-400" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">Video Tutorials</h3>
            <p className="text-gray-400 mb-4">Step-by-step video guides for common tasks</p>
            <button className="text-green-400 hover:text-green-300 font-medium">Watch Videos →</button>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center hover:border-purple-500/50 transition-all">
            <MessageCircle className="mx-auto mb-4 text-purple-400" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
            <p className="text-gray-400 mb-4">Chat with our support team in real-time</p>
            <button className="text-purple-400 hover:text-purple-300 font-medium">Start Chat →</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              
              {/* Search */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-lg border border-gray-700">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-750 transition-colors"
                  >
                    <span className="text-white font-medium">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronDown className="text-gray-400" size={20} />
                    ) : (
                      <ChevronRight className="text-gray-400" size={20} />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">No FAQs found matching your search.</p>
              </div>
            )}
          </div>

          {/* Contact Support */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 sticky top-8">
              <h3 className="text-2xl font-bold text-white mb-6">Need More Help?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-white" size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email Support</h4>
                    <p className="text-gray-400 text-sm mb-2">Get detailed help via email</p>
                    <a href="mailto:support@mrmuscle.app" className="text-blue-400 hover:text-blue-300 text-sm">
                      support@mrmuscle.app
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                    <MessageCircle className="text-white" size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">In-App Chat</h4>
                    <p className="text-gray-400 text-sm mb-2">Available 24/7 in the app</p>
                    <span className="text-green-400 text-sm">Open the app to chat</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="text-white" size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Response Time</h4>
                    <p className="text-gray-400 text-sm">Usually within 2-4 hours</p>
                    <p className="text-gray-400 text-sm">24 hours maximum</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-600/20 to-green-400/20 rounded-lg border border-gray-600">
                <h4 className="text-white font-semibold mb-2">Premium Support</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Premium users get priority support with faster response times and dedicated assistance.
                </p>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                  Upgrade to Premium →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
              <h4 className="text-white font-semibold mb-2">System Status</h4>
              <p className="text-gray-400 text-sm mb-3">Check if our services are running smoothly</p>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-green-400 text-sm">All systems operational</span>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
              <h4 className="text-white font-semibold mb-2">Release Notes</h4>
              <p className="text-gray-400 text-sm mb-3">See what's new in the latest version</p>
              <button className="text-blue-400 hover:text-blue-300 text-sm">View Updates</button>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
              <h4 className="text-white font-semibold mb-2">Community Forum</h4>
              <p className="text-gray-400 text-sm mb-3">Connect with other users and share tips</p>
              <button className="text-purple-400 hover:text-purple-300 text-sm">Join Forum</button>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
              <h4 className="text-white font-semibold mb-2">Feature Requests</h4>
              <p className="text-gray-400 text-sm mb-3">Suggest new features for future updates</p>
              <button className="text-orange-400 hover:text-orange-300 text-sm">Submit Idea</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;