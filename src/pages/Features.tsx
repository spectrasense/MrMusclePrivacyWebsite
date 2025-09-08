import React from 'react';
import { 
  Zap, Target, Users, Trophy, Calendar, BarChart3, 
  Smartphone, Dumbbell, Timer, Heart, Brain, Shield 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Smart Workout Plans',
      description: 'AI-powered workout routines that adapt to your fitness level, goals, and available equipment.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set and track your fitness goals with detailed progress monitoring and milestone celebrations.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: 'Progress Analytics',
      description: 'Comprehensive analytics and insights to help you understand your fitness journey.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Calendar,
      title: 'Workout Scheduling',
      description: 'Plan your workouts in advance with our intelligent scheduling system.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with like-minded fitness enthusiasts and share your progress.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Trophy,
      title: 'Achievement System',
      description: 'Unlock achievements and badges as you reach new fitness milestones.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Dumbbell,
      title: 'Exercise Library',
      description: 'Access thousands of exercises with detailed instructions and video demonstrations.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Timer,
      title: 'Workout Timer',
      description: 'Built-in timers for rest periods, intervals, and workout duration tracking.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Heart,
      title: 'Health Integration',
      description: 'Sync with your favorite health apps and wearables for comprehensive tracking.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Brain,
      title: 'Personalized AI Coach',
      description: 'Get personalized tips, motivation, and form corrections from our AI coach.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Smartphone,
      title: 'Offline Mode',
      description: 'Access your workouts even without internet connection.',
      color: 'from-lime-500 to-lime-600'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data is secure and private. We never share your personal information.',
      color: 'from-gray-500 to-gray-600'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Powerful <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Features</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover all the amazing features that make MR MUSCLE the ultimate fitness companion. 
            From AI-powered workouts to comprehensive progress tracking, we've got everything you need.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all hover:transform hover:scale-105"
              >
                <div className={`bg-gradient-to-r ${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Premium Features */}
        <div className="bg-gradient-to-r from-blue-600/20 to-green-400/20 rounded-2xl p-12 border border-gray-700">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Premium Features</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the full potential of MR MUSCLE with our premium features designed for serious fitness enthusiasts.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-gold-400 to-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Advanced Analytics</h3>
                <p className="text-gray-400">Deep insights into your performance and progress trends.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Personal Trainer AI</h3>
                <p className="text-gray-400">One-on-one coaching with our advanced AI personal trainer.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Custom Programs</h3>
                <p className="text-gray-400">Create and share your own workout programs with the community.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;