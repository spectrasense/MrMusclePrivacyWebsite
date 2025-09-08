import React from 'react';
import { Smartphone, Apple, Play, Monitor, Star, Download as DownloadIcon } from 'lucide-react';

const Download = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Download <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">MR MUSCLE</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Get MR MUSCLE on all your devices and start your fitness transformation today. 
            Available on iOS, Android, and coming soon to desktop.
          </p>
          <div className="flex items-center justify-center space-x-2 text-yellow-400 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="currentColor" />
            ))}
            <span className="text-white ml-2 text-lg">4.9/5 (10,000+ reviews)</span>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <a
            href="#"
            className="flex items-center justify-center px-8 py-4 bg-black border border-gray-600 rounded-xl hover:border-gray-500 transition-all group"
          >
            <Apple className="mr-4 text-white group-hover:text-blue-400 transition-colors" size={32} />
            <div className="text-left">
              <div className="text-sm text-gray-400">Download on the</div>
              <div className="text-xl font-semibold text-white">App Store</div>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center justify-center px-8 py-4 bg-black border border-gray-600 rounded-xl hover:border-gray-500 transition-all group"
          >
            <Play className="mr-4 text-white group-hover:text-green-400 transition-colors" size={32} />
            <div className="text-left">
              <div className="text-sm text-gray-400">Get it on</div>
              <div className="text-xl font-semibold text-white">Google Play</div>
            </div>
          </a>
        </div>

        {/* Coming Soon */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Coming Soon</h2>
          <div className="flex justify-center">
            <div className="flex items-center justify-center px-8 py-4 bg-gray-800 border border-gray-600 rounded-xl opacity-75">
              <Monitor className="mr-4 text-gray-400" size={32} />
              <div className="text-left">
                <div className="text-sm text-gray-400">Available soon on</div>
                <div className="text-xl font-semibold text-gray-300">Desktop</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">What You'll Get</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Personalized Workouts</h3>
                  <p className="text-gray-400">AI-powered workout plans tailored to your goals and fitness level.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Progress Tracking</h3>
                  <p className="text-gray-400">Comprehensive analytics to monitor your fitness journey.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Community Support</h3>
                  <p className="text-gray-400">Connect with thousands of fitness enthusiasts worldwide.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Expert Guidance</h3>
                  <p className="text-gray-400">Professional tips and form corrections from certified trainers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-green-400/20 rounded-xl p-8 border border-gray-700">
            <div className="text-center">
              <Smartphone className="mx-auto mb-6 text-blue-400" size={64} />
              <h3 className="text-2xl font-bold text-white mb-4">Free to Download</h3>
              <p className="text-gray-300 mb-6">
                Start your fitness journey with our free version, then upgrade to premium for advanced features.
              </p>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="text-sm text-gray-400 mb-2">App Size</div>
                <div className="text-lg font-semibold text-white">~50 MB</div>
              </div>
            </div>
          </div>
        </div>

        {/* System Requirements */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Apple className="mr-2" size={20} />
                iOS Requirements
              </h3>
              <ul className="text-gray-400 space-y-2">
                <li>• iOS 12.0 or later</li>
                <li>• iPhone 6s or newer</li>
                <li>• iPad (5th generation) or newer</li>
                <li>• 100 MB free storage</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Play className="mr-2" size={20} />
                Android Requirements
              </h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Android 6.0 (API level 23) or higher</li>
                <li>• 2 GB RAM minimum</li>
                <li>• 100 MB free storage</li>
                <li>• Internet connection for sync</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;