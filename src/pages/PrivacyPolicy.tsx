import React from 'react';
import { Shield, Eye, Lock, Database, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Shield className="mx-auto mb-6 text-blue-400" size={48} />
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: September 2025</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <div className="prose prose-invert max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Eye className="mr-3 text-blue-400" size={24} />
                Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed">
                At MR MUSCLE, your privacy is our default. We do not collect, store, or process any
                personal data from you when you use our app. The app operates entirely on your device,
                and we do not run accounts, cloud sync, analytics, or advertising trackers.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Database className="mr-3 text-green-400" size={24} />
                Information We Do Not Collect
              </h2>
              <p className="text-gray-300 mb-4">Specifically, we do not collect:</p>
              <ul className="text-gray-300 space-y-2">
                <li>• Personal identifiers (name, email, phone number)</li>
                <li>• Usage analytics or behavioral tracking</li>
                <li>• Location data (precise or coarse)</li>
                <li>• Contacts, photos, or files from your device</li>
                <li>• Health, fitness, or sensitive personal data</li>
                <li>• Cookies, ad IDs, or cross-site tracking technologies</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Scope</h2>
              <p className="text-gray-300">
                This Privacy Policy applies to the MR MUSCLE mobile and web application and any related
                pages where it is displayed. It does not apply to third-party websites, stores, or services
                that may be linked from within our app.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Definitions</h2>
              <p className="text-gray-300 mb-2"><strong>“Personal Data”</strong> means any information that identifies or can be used to identify an individual.</p>
              <p className="text-gray-300"><strong>“Processing”</strong> means any operation performed on data, such as collecting, storing, or using it.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <UserCheck className="mr-3 text-purple-400" size={24} />
                Third-Party Services and Sharing
              </h2>
              <p className="text-gray-300">
                We do not share your data with third parties, because we do not collect any data. If you
                obtain the app via an app store, the platform provider may collect limited, aggregated
                diagnostics per their own privacy policy.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Lock className="mr-3 text-red-400" size={24} />
                Data Security
              </h2>
              <p className="text-gray-300">
                Because we do not collect or store personal data on our servers, there is no personal
                information to secure on our side. We still follow secure development practices and
                platform guidelines to help keep the app safe on your device.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Cookies and Local Storage</h2>
              <p className="text-gray-300">
                We do not use cookies or similar tracking technologies for analytics or advertising. The app
                may store minimal, strictly necessary settings locally on your device or browser to make core
                features work. These values never leave your device unless you choose to share them.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p className="text-gray-300">
                We do not retain any personal data. Any settings or content you create in the app are
                stored locally on your device and are removed when you uninstall the app.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Device Permissions</h2>
              <p className="text-gray-300">
                The app may request optional device permissions (for example, notifications) solely to enable
                on-device functionality. Granting permissions is optional, and permission states are managed by
                your device operating system.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300">
                Since we do not collect personal data, traditional privacy rights requests (access,
                deletion, portability) generally do not apply. If you contact us and share information
                voluntarily (for example, by email), you may request that we delete that communication at
                any time.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Links</h2>
              <p className="text-gray-300">
                Our app may contain links to third-party websites or services. We are not responsible for the
                privacy practices of those third parties. We encourage you to review their privacy policies.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Communications</h2>
              <p className="text-gray-300">
                If you contact us (for example, via email), we will receive the information you provide in that
                message. We use it only to respond to your inquiry and will delete it upon request.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Legal Bases</h2>
              <p className="text-gray-300">
                Because we do not process personal data in our app, legal bases for processing under laws like
                the GDPR generally do not apply. If you voluntarily share information with us during support
                communications, we process it based on your consent and our legitimate interest in responding
                to you.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-gray-300">
                We do not knowingly collect personal information from anyone, including children under 13.
                If you believe a child has provided us information via support channels, please contact us
                so we can promptly delete it.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">International Transfers</h2>
              <p className="text-gray-300">
                We do not transfer personal data internationally because we do not collect any. If you
                contact us, email transmissions may be processed by your and our email providers consistent
                with their policies.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Controller</h2>
              <p className="text-gray-300">
                MR MUSCLE is the data controller for any limited communications you send to us directly. For
                questions or requests, please use the contact details below.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy to reflect changes in our app or legal requirements. We
                will update the "Last updated" date above when changes are made.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-green-400/20 rounded-lg p-6 border border-gray-600">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                Questions about this Privacy Policy? Contact us:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Email: support@musclecrm.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;