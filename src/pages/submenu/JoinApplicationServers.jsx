import { ArrowRight } from 'lucide-react';
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
      {/* Hero & Description Section */}
<div className="w-full">
  {/* 1. Hero Section (Image Background) */}
  <section 
    className="relative min-h-[550px] flex items-center bg-cover bg-center"
    style={{ backgroundImage: "url('/images/LoRaWAN-Join-Servers-Application-Servers.webp')" }}
  >
    {/* Dark Overlay to match the technical aesthetic of joinApplication.jpg */}
    <div className="absolute inset-0 bg-slate-900/75"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Secure, Streamline, and<br /> Scale with LoRaWAN Join<br /> & App Servers
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 font-medium leading-relaxed">
          LoRaWANTech's Join and Application Servers deliver secure key management 
          and application-level routing for efficient, scalable LoRaWAN systems.
        </p>
        
        {/* Contact Us Button - Dark Navy Style with Circular Arrow */}
        <a 
          href="/contact" 
          className="inline-flex items-center bg-[#0f172a] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-black transition-all group"
        >
          Contact Us
          <div className="ml-3 border border-white/50 rounded-full p-0.5 group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-4 h-4" />
          </div>
        </a>
      </div>
    </div>
  </section>

  {/* 2. Description Section (White Background) */}
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4">
      <div className="max-w-5xl text-gray-800 text-lg leading-relaxed">
        <p>
          

Join Servers and Application Servers are critical to LoRaWAN infrastructure, enabling secure device activation and seamless data handling between edge devices and cloud applications. Join Servers manage device authentication, Over-the-Air Activation (OTAA), and secure key exchange, while Application Servers route decoded sensor data to user interfaces and business systems.

These components form the backbone of secure and efficient LoRaWAN deployments across smart infrastructure, industrial IoT, and public sector applications. Designed for scalability and reliability, they ensure that devices are authenticated properly and data is delivered where it needs to go, with encryption, logging, and system resilience built-in.

LoRaWANTech provides tailored Join and Application Server solutions across North America. Headquartered in Detroit, Michigan, we deliver robust systems built with strict quality assurance, ongoing innovation, and responsive B2B support. Our team helps you create secure, scalable infrastructure that unlocks the full potential of LoRaWAN connectivity.

        </p>
      </div>
    </div>
  </section>
</div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Components of LoRaWAN Join & Application Servers</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              In addition to offering products and systems developed by our team and trusted partners for LoRaWAN Join Servers & Application Servers, we are proud to carry top-tier technologies from Global Advanced Operations Tek Inc. (GAO Tek Inc.) and Global Advanced Operations RFID Inc. (GAO RFID Inc.). These reliable, high-quality products and systems enhance our ability to deliver comprehensive technologies, integrations, and services you can trust. Where relevant, we have provided direct links to select products and systems from GAO Tek Inc. and GAO RFID Inc.
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
      {/* Case Studies & CTA Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    
    {/* Case Studies Header */}
    <h2 className="text-3xl font-bold text-[#1a639b] mb-10">Case Studies</h2>

    {/* Case Study Tabs */}
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      <button className="bg-[#1a639b] text-white px-6 py-2.5 rounded-sm text-sm font-medium">
        Case Study 1 – USA: Smart Agriculture Deployment (Iowa)
      </button>
      <button className="bg-[#1a639b] text-white px-6 py-2.5 rounded-sm text-sm font-medium">
        Case Study 2 – USA: Utility Monitoring System (Colorado)
      </button>
      <button className="bg-[#1a639b] text-white px-6 py-2.5 rounded-sm text-sm font-medium">
        Case Study 3 – Canada: Cold Chain Monitoring (British Columbia)
      </button>
    </div>

    {/* Case Study Description */}
    <p className="text-gray-700 text-lg leading-relaxed mb-20">
      A large-scale agribusiness in Iowa implemented LoRaWANTech’s LoRaWAN end devices to monitor soil 
      moisture and crop health over 1,200 acres. The system, powered by solar-assisted nodes and 
      GAO Tek Inc. sensors, resulted in a 30% water savings and significantly improved crop 
      yield forecasting.
    </p>

    {/* Bottom CTA Card */}
    <div 
      className="relative rounded-[2.5rem] overflow-hidden bg-cover bg-center min-h-[380px] flex items-center"
      style={{ backgroundImage: "url('/images/lorawan-cta.webp')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 p-8 md:p-16 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Ready to deploy secure, high-performance<br />  Join and Application Server infrastructure?
        </h2>
        
        <p className="text-lg text-gray-200 mb-10 max-w-2xl">
          Contact LoRaWANTech to speak with our technical specialists, request quotes, 
          or explore customized deployment solutions.
        </p>

        {/* Contact Us Button - White Style */}
        <a 
          href="/contact" 
          className="inline-flex items-center bg-white text-gray-900 px-7 py-3 rounded-md font-bold text-base hover:bg-gray-100 transition-all group"
        >
          Contact Us
          <div className="ml-3 border border-gray-900 rounded-full p-0.5 group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-4 h-4" />
          </div>
        </a>
      </div>
    </div>

  </div>
</section>
    </>
  );
};

export default JoinApplicationServers;