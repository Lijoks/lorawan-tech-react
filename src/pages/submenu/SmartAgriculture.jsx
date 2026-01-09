import React from 'react';

const SmartAgriculture = () => {
  const agricultureSolutions = [
    {
      title: "Precision Irrigation",
      description: "Optimize water usage with soil moisture sensors and automated control systems",
      features: ["Real-time soil monitoring", "Weather-based scheduling", "Zone-based control", "Leak detection"],
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
      title: "Crop Health Monitoring",
      description: "Continuous monitoring of crop conditions, growth patterns, and environmental factors",
      features: ["NDVI imaging sensors", "Disease detection algorithms", "Growth stage tracking", "Yield prediction"],
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      title: "Livestock Management",
      description: "Track animal health, location, and behavior for improved herd management",
      features: ["GPS tracking collars", "Health monitoring sensors", "Automated feeding systems", "Behavior analysis"],
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    },
    {
      title: "Greenhouse Automation",
      description: "Climate-controlled environments with automated systems for optimal plant growth",
      features: ["Temperature/Humidity control", "Light intensity management", "CO2 monitoring", "Automated ventilation"],
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z"
    }
  ];

  const benefits = [
    { metric: "Increased Crop Yields", value: "Up to 22%", description: "Through optimized input timing" },
    { metric: "Water Savings", value: "Up to 38%", description: "With precision irrigation systems" },
    { metric: "Labor Cost Reduction", value: "Up to 40%", description: "Via automation of routine tasks" },
    { metric: "Energy Efficiency", value: "Up to 28%", description: "In greenhouse operations" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart Agriculture Solutions</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Smarter, connected farming with advanced technologies for modern agribusiness
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-lg">
                Technology is reshaping how agricultural operations are managed—from remote monitoring of crops 
                and soil to automated irrigation and asset tracking. Smart Agriculture leverages IoT networks 
                to deliver data-driven insights that help farmers make more informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Agricultural Solutions</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              By integrating advanced hardware, robust connectivity, and powerful analytics, we help clients 
              maximize productivity, ensure operational resilience, and achieve long-term sustainability goals.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {agricultureSolutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={solution.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 text-xs">
                      <svg className="w-3 h-3 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Benefits Metrics */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Measurable Results</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{benefit.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.metric}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Success Stories</h3>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">California Almond Farm</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">38% water savings</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">22% yield increase</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600">
                      Deployed soil and weather sensors with smart irrigation controllers across 500+ acres. 
                      The system automatically adjusts watering schedules based on real-time conditions, 
                      resulting in significant resource savings and improved crop quality.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Ontario Greenhouse Facility</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">28% energy savings</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">Improved crop uniformity</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600">
                      Implemented environmental control solution with automated heating and ventilation systems. 
                      Real-time monitoring of temperature, humidity, and CO2 levels optimized growing conditions 
                      while reducing operational costs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Montana Livestock Operations</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">19% mortality reduction</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Improved feeding efficiency</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600">
                      Adopted RFID-enabled animal tracking with real-time health monitoring. Automated feeding alerts 
                      and location tracking improved herd management, reduced losses, and enhanced overall 
                      operational efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Integration */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 border border-blue-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Integrated Technology Ecosystem</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-blue-700 mb-4">Compatible Systems</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">LoRaWAN, NB-IoT, and cellular networks</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">AWS IoT, Azure IoT, Google Cloud IoT</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Agricultural ERP and farm management systems</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">GIS software for spatial analysis and mapping</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-4">Key Features</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-1">Real-Time Insights</h5>
                    <p className="text-sm text-gray-600">Access field data instantly through dashboards or mobile apps</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-1">Weather Resilience</h5>
                    <p className="text-sm text-gray-600">IP-rated devices designed for rain, dust, heat, and frost</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-1">Energy Efficient</h5>
                    <p className="text-sm text-gray-600">Low power consumption with solar compatibility options</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to transform your farming operations?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Contact our team for a personalized consultation, system design support, or product recommendations 
              tailored to your unique agricultural environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                Schedule Farm Assessment
              </button>
              <button className="bg-white hover:bg-gray-50 text-green-600 border border-green-600 font-medium py-3 px-8 rounded-lg transition-colors">
                Download Solution Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SmartAgriculture;