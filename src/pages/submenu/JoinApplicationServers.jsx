import React from 'react';

const JoinApplicationServers = () => {
  const serverComponents = [
    {
      title: "Join Servers",
      description: "Secure device authentication, OTAA activation, and key exchange management",
      features: [
        "Full OTAA support with AppKey protection",
        "AES-128 encryption for secure activation",
        "Automatic key rotation and management",
        "DevEUI/JoinEUI registration and validation"
      ],
      benefits: [
        "Secure device onboarding from first activation",
        "Compliance with LoRaWAN 1.0.4 & 1.1 standards",
        "Prevents unauthorized device access",
        "Automated security policy enforcement"
      ]
    },
    {
      title: "Application Servers",
      description: "Payload decoding, message routing, and data delivery to business systems",
      features: [
        "Flexible payload decoders (JSON, XML, binary)",
        "Message routing engines with MQTT/REST support",
        "Role-based access control dashboards",
        "Real-time data visualization and logging"
      ],
      benefits: [
        "Streamlined data integration with low latency",
        "Deliver usable insights to business applications",
        "Full visibility into payloads and device states",
        "Seamless third-party system integration"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Texas Energy Provider",
      description: "Secure onboarding of 100,000+ smart meters with 92% reduction in provisioning time",
      metrics: ["100,000+ devices", "92% faster setup", "Secure authentication"]
    },
    {
      title: "Ohio Automotive Supplier",
      description: "Application Server integration across 5 plants reduced machine downtime by 38%",
      metrics: ["5 facilities", "38% downtime reduction", "Predictive maintenance"]
    },
    {
      title: "Alberta Wildfire Detection",
      description: "Authenticated 10,000+ remote nodes, improving emergency response times",
      metrics: ["10,000 nodes", "Enhanced safety", "Real-time alerts"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">LoRaWAN Join & Application Servers</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Secure, streamline, and scale with secure key management and application-level routing
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-lg">
                Join Servers and Application Servers are critical to LoRaWAN infrastructure, enabling secure 
                device activation and seamless data handling between edge devices and cloud applications. 
                Designed for scalability and reliability, they ensure proper device authentication and efficient data delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Server Components</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              These components form the backbone of secure and efficient LoRaWAN deployments across smart infrastructure, 
              industrial IoT, and public sector applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {serverComponents.map((component, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg ${index === 0 ? 'bg-green-100' : 'bg-blue-100'} flex items-center justify-center mr-4`}>
                    <svg className={`w-6 h-6 ${index === 0 ? 'text-green-600' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{component.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{component.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {component.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Business Benefits:</h4>
                  <ul className="space-y-2">
                    {component.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Capabilities */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Capabilities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900">Secure Authentication</h4>
                <p className="text-sm text-gray-600 mt-1">AES encryption & OTAA support</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900">High Performance</h4>
                <p className="text-sm text-gray-600 mt-1">Thousands of messages per second</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900">Vendor Neutral</h4>
                <p className="text-sm text-gray-600 mt-1">Works with all major LoRaWAN systems</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900">Multi-Tenant</h4>
                <p className="text-sm text-gray-600 mt-1">Isolated environments for clients</p>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {study.metrics.map((metric, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {metric}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{study.title}</h4>
                    <p className="text-gray-600 text-sm">{study.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to deploy secure server infrastructure?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Contact our team for expert guidance, system customization, or deployment assistance for your next LoRaWAN initiative.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                Schedule Consultation
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium py-3 px-8 rounded-lg transition-colors">
                Download Technical Specs
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinApplicationServers;