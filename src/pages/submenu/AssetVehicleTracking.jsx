import { ArrowRight } from 'lucide-react';
import React from 'react';

const AssetVehicleTracking = () => {
  const trackingSolutions = [
    {
      type: "GPS Tracking",
      description: "Real-time location tracking with geofencing and route optimization",
      features: ["Real-time GPS location", "Geofencing alerts", "Route history", "Speed monitoring"],
      icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
    },
    {
      type: "RFID Tracking",
      description: "Proximity-based asset identification and inventory management",
      features: ["Contactless identification", "Inventory management", "Access control", "Tamper detection"],
      icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
    },
    {
      type: "Condition Monitoring",
      description: "Environmental and usage condition tracking for sensitive assets",
      features: ["Temperature monitoring", "Shock/vibration detection", "Humidity sensing", "Tilt detection"],
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    }
  ];

  const applications = [
    {
      industry: "Construction",
      description: "Equipment tracking across job sites",
      metrics: ["60% asset loss reduction", "Improved fleet coordination", "Site-to-site tracking"]
    },
    {
      industry: "Logistics",
      description: "Pallet and warehouse asset tracking",
      metrics: ["70% misplaced items reduction", "Increased picking speed", "Inventory accuracy"]
    },
    {
      industry: "Manufacturing",
      description: "Tool and production asset management",
      metrics: ["Reduced search delays", "Tool usage tracking", "Production line efficiency"]
    }
  ];

  return (
    <>
      {/* 1. Hero Section with Background Image */}
      <section 
        className="relative min-h-[550px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Asset-Vehicle-Tracking.webp')" }}
      >
        {/* Dark Overlay for text legibility */}
        <div className="absolute inset-0 bg-slate-900/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl text-left">
            {/* Heading matched to screenshot text */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Real-Time Asset & Vehicle<br /> Tracking for Smarter<br /> Operations
            </h1>
            
            {/* Sub-text matched to screenshot */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              LoRaWANTech’s tracking solutions combine GPS, RFID, and LoRaWAN to 
              deliver location, condition, and usage insights—reducing losses and 
              maximizing fleet efficiency.
            </p>
            
            {/* Brand-consistent Contact Us Button */}
            <a 
              href="/contact" 
              className="inline-flex items-center bg-[#0B1C33] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-black transition-all group"
            >
              Contact Us
              <div className="ml-3 border border-white/40 rounded-full p-0.5 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Descriptive Section (Following clean brand layout) */}
      <section className="bg-white py-16 md:py-20 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl text-gray-700 text-lg leading-relaxed">
            <p>
              

Whether managing fleet logistics, industrial equipment, or high-value tools, real-time tracking is essential for operational efficiency and asset security. LoRaWANTech’s Asset & Vehicle Tracking solutions deliver comprehensive visibility across fixed and mobile resources—helping organizations streamline inventory management, prevent loss, and ensure compliance.

Powered by LoRaWAN, GPS, and RFID technologies from trusted partners like GAO Tek Inc. and GAO RFID Inc., our systems integrate seamlessly into existing infrastructures. These solutions enable businesses to monitor asset location, motion, usage patterns, and environmental conditions across warehouses, job sites, or cross-country transit routes.

            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Components of Asset & Vehicle Tracking Systems</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Powered by LoRaWAN, GPS, and RFID technologies, our systems integrate seamlessly into existing 
              infrastructures to monitor asset location, motion, usage patterns, and environmental conditions.
            </p>
          </div>

          {/* Tracking Solutions */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {trackingSolutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={solution.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.type}</h3>
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
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Technology:</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {solution.type === "GPS Tracking" ? "GPS + LoRaWAN" : 
                       solution.type === "RFID Tracking" ? "RFID + LoRaWAN" : "Sensor + LoRaWAN"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Business Benefits</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Reduced Loss & Theft</h4>
                <p className="text-sm text-gray-600">Real-time alerts and historical playback protect valuable items</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Improved Utilization</h4>
                <p className="text-sm text-gray-600">Identify idle assets or underused fleet vehicles</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Faster Recovery</h4>
                <p className="text-sm text-gray-600">Quickly locate misplaced or stolen equipment</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Optimized Operations</h4>
                <p className="text-sm text-gray-600">Reduce downtime and boost workforce productivity</p>
              </div>
            </div>
          </div>

          {/* Industry Applications */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industry Applications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-full ${
                      app.industry === "Construction" ? "bg-orange-100" :
                      app.industry === "Logistics" ? "bg-blue-100" : "bg-green-100"
                    } flex items-center justify-center mr-4`}>
                      <svg className={`w-5 h-5 ${
                        app.industry === "Construction" ? "text-orange-600" :
                        app.industry === "Logistics" ? "text-blue-600" : "text-green-600"
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{app.industry}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{app.description}</p>
                  <div className="space-y-2">
                    {app.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Specifications</h3>
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Parameter</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Specification</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Communication Range", "Up to 15 km rural", "Wide area coverage with minimal infrastructure"],
                    ["Battery Life", "Up to 5+ years", "Reduced maintenance and replacement costs"],
                    ["Update Interval", "Configurable 1 min - 24 hrs", "Balance between battery life and data freshness"],
                    ["Position Accuracy", "GPS: 2-5m, Cell: 100-1000m", "Appropriate precision for different use cases"],
                    ["Environmental Rating", "IP67/IP68 available", "Suitable for harsh industrial environments"],
                    ["Integration Support", "ERP, TMS, WMS APIs", "Seamless business system integration"]
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row[0]}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row[1]}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Integration Options */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Integration & Compatibility</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-blue-700 mb-4">Compatible Systems</h4>
                <div className="space-y-3">
                  {[
                    "ERP, TMS, and WMS platforms",
                    "LoRaWAN network servers (ChirpStack, AWS IoT Core)",
                    "GIS and logistics planning tools",
                    "Mobile apps and handheld scanners",
                    "Third-party analytics and CRM platforms"
                  ].map((system, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{system}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-4">Key Features</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-1">Multi-Environment Resilience</h5>
                    <p className="text-sm text-gray-600">Track indoors, outdoors, and underground via hybrid technology</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-1">Condition Monitoring</h5>
                    <p className="text-sm text-gray-600">Know not just where but how your assets are handled</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-1">Tamper Alerts & Theft Detection</h5>
                    <p className="text-sm text-gray-600">Real-time breach notifications and asset immobilization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to improve visibility and control over your assets?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Get in touch with us to explore tailored tracking solutions that increase efficiency, 
              reduce losses, and empower data-driven logistics for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                Request Tracking Demo
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium py-3 px-8 rounded-lg transition-colors">
                Download Solutions Catalog
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
          Looking to improve visibility and control <br /> over your assets and vehicles?
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

export default AssetVehicleTracking;