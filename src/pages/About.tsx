import React from 'react';
import { Heart, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">MR MUSCLE</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're on a mission to make fitness accessible, enjoyable, and effective for everyone. 
            Our app combines cutting-edge technology with proven fitness principles to help you achieve your goals.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-400 mb-6">
              At MR MUSCLE, we believe that everyone deserves access to high-quality fitness guidance and tools. 
              Our mission is to democratize fitness by providing personalized workout plans, expert guidance, 
              and a supportive community right at your fingertips.
            </p>
            <p className="text-gray-400">
              We're committed to helping you build not just muscle, but confidence, discipline, and a healthier lifestyle 
              that lasts a lifetime.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600/20 to-green-400/20 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">Why We Started</h3>
            <p className="text-gray-300">
              Founded by fitness enthusiasts who struggled to find the right guidance and motivation, 
              MR MUSCLE was born from the desire to create a comprehensive fitness solution that adapts 
              to your unique needs and keeps you motivated throughout your journey.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Passion</h3>
              <p className="text-gray-400">
                We're passionate about fitness and helping others achieve their goals.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-400">
                Building a supportive community where everyone can thrive together.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
              <p className="text-gray-400">
                Committed to delivering the highest quality fitness experience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400">
                Constantly innovating to bring you the latest in fitness technology.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            MR MUSCLE is built by a dedicated team of fitness experts, developers, and designers 
            who are committed to helping you achieve your fitness goals.
          </p>
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <p className="text-gray-300 text-lg">
              "We're not just building an app – we're building a movement. A movement towards 
              healthier, stronger, and more confident individuals who can achieve anything they set their minds to."
            </p>
            <p className="text-blue-400 font-semibold mt-4">- The MR MUSCLE Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;