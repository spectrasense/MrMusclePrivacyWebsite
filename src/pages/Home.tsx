import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Smartphone, Zap, Target, Users, Trophy } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-400/20 opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img 
              src="/image.png" 
              alt="MR MUSCLE Logo" 
              className="h-32 w-32 mx-auto mb-6 object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              MR MUSCLE
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your fitness journey with the ultimate workout and fitness tracking app. 
            Build muscle, track progress, and achieve your goals like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/download"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all transform hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download Now
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">MR MUSCLE</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Packed with powerful features to help you reach your fitness goals faster and more efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Smart Workouts</h3>
              <p className="text-gray-400">
                AI-powered workout plans tailored to your fitness level and goals. Get personalized routines that adapt as you progress.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Progress Tracking</h3>
              <p className="text-gray-400">
                Track your workouts, monitor your progress, and see your improvements over time with detailed analytics and insights.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Community</h3>
              <p className="text-gray-400">
                Connect with like-minded fitness enthusiasts, share your progress, and stay motivated with our supportive community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy className="mx-auto mb-6 text-white" size={48} />
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Fitness?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already transformed their bodies and lives with MR MUSCLE.
          </p>
          <Link
            to="/download"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            <Smartphone className="mr-2" size={20} />
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;