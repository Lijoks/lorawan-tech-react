import React from 'react';

const SmartUtilityMetering = () => {
  const meteringSolutions = [
    {
      utility: "Water",
      description: "Advanced metering infrastructure for residential, commercial, and industrial water usage",
      features: ["Leak detection", "Reverse flow monitoring", "Pressure monitoring", "Consumption analytics"],
      icon: "M3.343 7.778a.75.75 0 01.326-1.013l8.5-3.75a.75.75 0 01.662 0l8.5 3.75a.75.75 0 01.326 1.013l-5.25 10.5a.75.75 0 01-1.036.297l-6-3a.75.75 0 01-.297-1.036l5.25-10.5z"
    },
    {
      utility: "Electric",
      description: "Real-time electricity monitoring with load profiling and demand response capabilities",
      features: ["Load profiling", "Peak demand management", "Power quality monitoring", "Outage detection"],
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      utility: "Gas",
      description: "Safe and accurate natural gas monitoring with leak detection and consumption analytics",
      features: ["Leak detection", "Temperature compensation", "Tamper detection", "Remote disconnect"],
      icon: "M16.881 4.346A23.112 23.112 0 018.25 6H7.5a5.25 5.25 0 00-.88 10.427 21.593 21.593 0 001.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.592.772-2.468a17.116 17.116 0 01-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0018 11.25c0-2.413-.393-4.735-1.119-6.904zM18.26 3.74a23.22 23.22 0 011.24 7.51 23.22 23.22 0 01-1.24 7.51c-.055.161-.111.322-.17.482a.75.75 0 101.409.516 24.555 24.555 0 001.415-6.43 2.992 2.992 0 00.836-2.078c0-.806-.319-1.54-.836-2.078a24.65 24.65 0 00-1.415-6.43.75.75 0 10-1.409.516c.059.16.115.321.17.483z"
    }
  ];

  const benefits = [
    {
      title: "Operational Efficiency",
      description: "Reduce field visits and manual errors with remote reads and controls",
      icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Revenue Assurance",
      description: "Improve billing accuracy and reduce losses due to leaks or theft",
      icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Customer Engagement",
      description: "Empower customers with usage insights and real-time alerts",
      icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart Utility Metering Solutions</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Transform utility management with real-time water, gas, and electricity monitoring
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-lg">
                As utility providers face rising infrastructure costs and growing customer expectations, 
                Smart Utility Metering has emerged as a key enabler of next-generation service delivery. 
                These systems enable real-time monitoring, eliminating manual reads and improving billing accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Metering Infrastructure</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Built on reliable long-range connectivity and open data platforms, our systems empower utility 
              operators with greater visibility, automation, and control over critical infrastructure.
            </p>
          </div>

          {/* Utility Solutions */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {meteringSolutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg ${
                    solution.utility === 'Water' ? 'bg-blue-100' : 
                    solution.utility === 'Electric' ? 'bg-yellow-100' : 'bg-orange-100'
                  } flex items-center justify-center mr-4`}>
                    <svg className={`w-6 h-6 ${
                      solution.utility === 'Water' ? 'text-blue-600' : 
                      solution.utility === 'Electric' ? 'text-yellow-600' : 'text-orange-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={solution.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{solution.utility} Metering</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Typical Applications:</span>
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Residential</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Commercial</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Business Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Features */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { feature: "Automated Meter Reading", desc: "Eliminate manual data collection" },
                { feature: "Usage Transparency", desc: "Real-time consumption data access" },
                { feature: "Event Alerts", desc: "Leak detection and tamper notifications" },
                { feature: "Remote Control", desc: "Disconnection/reconnection capability" },
                { feature: "Scalable Deployment", desc: "Thousands of endpoints support" },
                { feature: "Data Encryption", desc: "End-to-end AES security" },
                { feature: "Multi-Network", desc: "LoRaWAN, NB-IoT, LTE compatible" },
                { feature: "Standard Compliance", desc: "DLMS/COSEM, M-Bus standards" }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-1 text-sm">{item.feature}</h4>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Utility Success Stories</h3>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Regional Electric Utility</h4>
                    <p className="text-gray-600 text-sm">5,000+ meter deployment</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Replaced analog meters with LoRaWAN-supported smart meters, enabling real-time usage data, 
                  reducing service calls, and cutting operational costs by 30%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">5,000+ meters</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">30% cost reduction</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Real-time data</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.343 7.778a.75.75 0 01.326-1.013l8.5-3.75a.75.75 0 01.662 0l8.5 3.75a.75.75 0 01.326 1.013l-5.25 10.5a.75.75 0 01-1.036.297l-6-3a.75.75 0 01-.297-1.036l5.25-10.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Municipal Water Authority</h4>
                    <p className="text-gray-600 text-sm">Leak detection initiative</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Deployed LoRaWAN-connected ultrasonic water meters with leak detection sensors. The initiative 
                  identified pipe leakage early, reducing non-revenue water losses by 28% within 12 months.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">28% loss reduction</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Early detection</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Ultrasonic meters</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to modernize your utility infrastructure?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Contact our team for expert advice, tailored solutions, and hardware recommendations to fit 
              your specific operational and geographic needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                Request Utility Assessment
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium py-3 px-8 rounded-lg transition-colors">
                Download Metering Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SmartUtilityMetering;