import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About Our Analytics Dashboard</h1>
      
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-8">
            We strive to provide the most comprehensive and user-friendly analytics solution for businesses
            of all sizes. Our dashboard combines powerful data visualization with intuitive user interface
            design to help you make informed decisions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
                     <h3 className="text-lg font-semibold text-gray-700 mb-3">Real-time Analytics</h3>
              <p className="text-gray-600">
                Monitor your user activity and engagement metrics in real-time with our advanced tracking system.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Interactive Visualizations</h3>
              <p className="text-gray-600">
                Explore your data through interactive charts and graphs that make complex information easy to understand.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">User Management</h3>
              <p className="text-gray-600">
                Efficiently manage user accounts and permissions with our comprehensive user management system.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Custom Reports</h3>
              <p className="text-gray-600">
                Generate detailed reports tailored to your specific needs with our flexible reporting tools.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Technology Stack</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li>React.js for dynamic user interfaces</li>
              <li>Redux for state management</li>
              <li>TypeScript for type-safe code</li>
              <li>Recharts for data visualization</li>
              <li>Tailwind CSS for modern styling</li>
            </ul>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions about our analytics dashboard? Visit our contact page to reach out to our team.
            We're always here to help you make the most of your data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;