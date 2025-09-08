import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Users } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <FileText className="mx-auto mb-6 text-blue-400" size={48} />
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: December 2024</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <div className="prose prose-invert max-w-none">
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Scale className="mr-3 text-blue-400" size={24} />
                Agreement to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By downloading, installing, or using the MR MUSCLE mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App. These Terms constitute a legally binding agreement between you and MR MUSCLE.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <CheckCircle className="mr-3 text-green-400" size={24} />
                Acceptance and Use
              </h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Eligibility</h3>
              <p className="text-gray-300 mb-4">You must be at least 13 years old to use this App. If you are under 18, you must have parental consent to use the App.</p>
              
              <h3 className="text-xl font-semibold text-white mb-3">License to Use</h3>
              <p className="text-gray-300 mb-4">We grant you a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes, subject to these Terms.</p>
              
              <h3 className="text-xl font-semibold text-white mb-3">Account Registration</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• You must provide accurate and complete information when creating an account</li>
                <li>• You are responsible for maintaining the security of your account</li>
                <li>• You must notify us immediately of any unauthorized use of your account</li>
                <li>• One person may not maintain more than one account</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <XCircle className="mr-3 text-red-400" size={24} />
                Prohibited Uses
              </h2>
              <p className="text-gray-300 mb-4">You agree not to use the App for any of the following prohibited activities:</p>
              <ul className="text-gray-300 space-y-2">
                <li>• Violating any applicable laws or regulations</li>
                <li>• Infringing on intellectual property rights</li>
                <li>• Transmitting harmful, offensive, or inappropriate content</li>
                <li>• Attempting to gain unauthorized access to our systems</li>
                <li>• Interfering with or disrupting the App's functionality</li>
                <li>• Using the App for commercial purposes without permission</li>
                <li>• Creating fake accounts or impersonating others</li>
                <li>• Sharing false or misleading health information</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Users className="mr-3 text-purple-400" size={24} />
                User Content
              </h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Your Content</h3>
              <p className="text-gray-300 mb-4">You retain ownership of content you create and share through the App. However, by sharing content, you grant us a worldwide, royalty-free license to use, display, and distribute your content within the App.</p>
              
              <h3 className="text-xl font-semibold text-white mb-3">Content Standards</h3>
              <p className="text-gray-300 mb-4">All user content must:</p>
              <ul className="text-gray-300 space-y-2">
                <li>• Be accurate and not misleading</li>
                <li>• Respect others' privacy and rights</li>
                <li>• Not contain harmful or offensive material</li>
                <li>• Comply with applicable laws and regulations</li>
                <li>• Not promote dangerous fitness practices</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Subscription and Payments</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Premium Features</h3>
              <p className="text-gray-300 mb-4">Some features require a paid subscription. Subscription fees are charged in advance and are non-refundable except as required by law.</p>
              
              <h3 className="text-xl font-semibold text-white mb-3">Auto-Renewal</h3>
              <p className="text-gray-300 mb-4">Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period. You can manage your subscription through your device's app store settings.</p>
              
              <h3 className="text-xl font-semibold text-white mb-3">Free Trial</h3>
              <p className="text-gray-300 mb-4">Free trials may be offered for premium features. If you don't cancel before the trial ends, you'll be charged for a subscription.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertTriangle className="mr-3 text-orange-400" size={24} />
                Health and Safety Disclaimer
              </h2>
              <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
                <p className="text-orange-200 mb-4 font-semibold">IMPORTANT HEALTH NOTICE:</p>
                <ul className="text-orange-100 space-y-2">
                  <li>• Consult your doctor before starting any fitness program</li>
                  <li>• The App provides general fitness information, not medical advice</li>
                  <li>• Stop exercising if you experience pain or discomfort</li>
                  <li>• We are not responsible for injuries resulting from App use</li>
                  <li>• Individual results may vary</li>
                  <li>• The App is not intended to diagnose or treat medical conditions</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                The App and its content, including but not limited to text, graphics, images, logos, and software, are owned by MR MUSCLE and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written permission.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Privacy</h2>
              <p className="text-gray-300">
                Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your information. By using the App, you consent to our privacy practices as described in the Privacy Policy.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimers and Limitation of Liability</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">App Availability</h3>
              <p className="text-gray-300 mb-4">We strive to keep the App available, but we don't guarantee uninterrupted access. The App may be unavailable due to maintenance, updates, or technical issues.</p>
              
              <h3 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h3>
              <p className="text-gray-300 mb-4">To the maximum extent permitted by law, MR MUSCLE shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="text-gray-300 mb-4">
                We may terminate or suspend your account and access to the App at any time, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
              <p className="text-gray-300">
                You may terminate your account at any time by deleting the App and ceasing all use of our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these Terms at any time. We will notify users of significant changes through the App or by email. Your continued use of the App after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="text-gray-300">
                These Terms are governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or your use of the App will be resolved through binding arbitration or in the courts of competent jurisdiction.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-green-400/20 rounded-lg p-6 border border-gray-600">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Email: legal@mrmuscle.app</li>
                <li>• Support: support@mrmuscle.app</li>
                <li>• In-app contact form</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;