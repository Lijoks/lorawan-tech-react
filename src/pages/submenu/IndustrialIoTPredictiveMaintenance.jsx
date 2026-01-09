import React from 'react';

const IndustrialIoTPredictiveMaintenance = () => {
  const monitoringSolutions = [
    {
      title: "Vibration Analysis",
      description: "Continuous monitoring of machinery vibration patterns for early fault detection",
      applications: ["Motors", "Pumps", "Compressors", "Conveyors"],
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      title: "Temperature Monitoring",
      description: "Real-time temperature tracking of critical components and processes",
      applications: ["Bearings", "Electrical panels", "Heat exchangers", "Boilers"],
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.768 0L4.242 16.5c-.77.833.192 2.5 1.732 2.5z"
    },
    {
      title: "Pressure Sensing",
      description: "Monitoring fluid and gas pressure systems for optimal operation",
      applications: ["Hydraulic systems", "Pneumatic lines", "Pipelines", "Tanks"],
      icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    }
  ];

  const benefits = [
    {
      title: "Reduced Downtime",
      value: "Up to 40%",
      description: "Prevent unexpected failures with continuous diagnostics"
    },
    {
      title: "Maintenance Efficiency",
      value: "Up to 35%",
      description: "Allocate labor and parts only when needed"
    },
    {
      title: "Cost Reduction",
      value: "Up to 30%",
      description: "Avoid emergency repairs and production losses"
    },
    {
      title: "Asset Life Extension",
      value: "Up to 25%",
      description: "Improve ROI through optimized maintenance timing"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industrial IoT & Predictive Maintenance</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Unlock efficiency with real-time equipment monitoring and failure prevention for maximum uptime
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-lg">
                In modern industrial environments, unplanned downtime and equipment failures severely impact 
                productivity. Industrial IoT combined with predictive maintenance enables businesses to proactively 
                monitor equipment conditions, anticipate failures, and optimize maintenance schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Predictive Maintenance Solutions</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              From vibration and temperature sensors to cloud-based analytics platforms, we integrate sensor 
              networks with AI-driven insights to transform raw data into actionable intelligence.
            </p>
          </div>

          {/* Monitoring Solutions */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {monitoringSolutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={solution.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Typical Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.applications.map((app, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Metrics */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Measurable Business Impact</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Integration Capabilities */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Seamless Industrial Integration</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-blue-700 mb-4">Compatible Protocols</h4>
                <div className="space-y-3">
                  {["Modbus", "OPC-UA", "MQTT", "BACnet", "Profibus", "EtherNet/IP"].map((protocol, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{protocol}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-4">System Integration</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-1">Enterprise Asset Management</h5>
                    <p className="text-sm text-gray-600">Integration with EAM and CMMS platforms</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-1">SCADA & HMI Systems</h5>
                    <p className="text-sm text-gray-600">Real-time monitoring and control integration</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-1">Cloud Platforms</h5>
                    <p className="text-sm text-gray-600">AWS, Azure, Google Cloud, and on-premise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industry Success Stories</h3>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Midwest Automotive Supplier</h4>
                    <p className="text-gray-600 text-sm">Stamping press monitoring</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Deployed vibration sensors on stamping presses. Data indicated early bearing wear, 
                  preventing costly downtime and saving $100,000 in emergency repairs over a year.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">$100K savings</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Early detection</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Zero unplanned downtime</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Commercial Refrigeration Facility</h4>
                    <p className="text-gray-600 text-sm">Temperature and pressure monitoring</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Installed LoRaWAN temperature and pressure sensors. Predictive alerts enabled the team 
                  to prevent a major compressor failure and reduced energy costs by 15%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">15% energy savings</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Major failure prevented</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Predictive alerts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Technical Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Condition-Based Monitoring</span>
                      <p className="text-sm text-gray-600">Replaces scheduled checks with continuous diagnostics</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Security-First Architecture</span>
                      <p className="text-sm text-gray-600">TLS encryption, secure boot, and OTA firmware updates</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Edge-to-Cloud Scalability</span>
                      <p className="text-sm text-gray-600">From single site to multinational operations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Workplace Safety Enhancement</span>
                      <p className="text-sm text-gray-600">Catch dangerous faults before they cause harm</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to increase uptime and reduce maintenance costs?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Contact us today to learn how our IIoT & Predictive Maintenance solutions can transform your 
              equipment strategy with real-time data and intelligent automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                Request Industrial Assessment
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium py-3 px-8 rounded-lg transition-colors">
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustrialIoTPredictiveMaintenance;