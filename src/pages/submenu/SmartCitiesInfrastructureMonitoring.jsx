import { ArrowRight } from 'lucide-react';
import React from 'react';

const SmartCitiesInfrastructureMonitoring = () => {
  const monitoringSolutions = [
    {
      title: "Traffic Management",
      description: "Real-time traffic flow analysis and adaptive signal control",
      features: ["Vehicle counting sensors", "Congestion detection", "Adaptive signal timing", "Emergency vehicle priority"],
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Environmental Monitoring",
      description: "Air quality, noise pollution, and weather condition tracking",
      features: ["PM2.5/PM10 sensors", "Noise level monitoring", "Weather stations", "Pollution heat maps"],
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z"
    },
    {
      title: "Waste Management",
      description: "Smart bin monitoring and optimized collection routes",
      features: ["Fill level sensors", "Route optimization", "Collection scheduling", "Recycling tracking"],
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
      title: "Infrastructure Health",
      description: "Bridge, road, and building condition monitoring",
      features: ["Structural sensors", "Vibration monitoring", "Crack detection", "Corrosion sensors"],
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    }
  ];

  const benefits = [
    {
      title: "Better Resource Allocation",
      description: "Make informed decisions using accurate, real-time data from across the city"
    },
    {
      title: "Operational Cost Savings",
      description: "Reduce waste, energy consumption, and unnecessary maintenance expenditures"
    },
    {
      title: "Improved Urban Mobility",
      description: "Alleviate congestion and streamline parking through connected systems"
    },
    {
      title: "Enhanced Public Safety",
      description: "Automated alerts for floods, gas leaks, or infrastructure failures"
    }
  ];

  return (
    <>
      {/* 1. Hero Section (Image Background) */}
      <section 
        className="relative min-h-[550px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Smart-Cities-Infrastructure-Monitoring.webp')" }}
      >
        {/* Dark Overlay for text legibility */}
        <div className="absolute inset-0 bg-slate-900/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            {/* Heading matched to screenshot text */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Build Smarter Cities with<br /> Scalable Infrastructure<br /> Monitoring Solutions
            </h1>
            
            {/* Sub-text matched to screenshot */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 font-medium leading-relaxed max-w-2xl">
              Empower urban innovation with LoRaWANTech's Smart City technologies—designed 
              for real-time monitoring, automation, and data-driven municipal management.
            </p>
            
            {/* Contact Us Button matched to brand style */}
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

      {/* 2. Description Section (White Background below Hero) */}
      <section className="bg-white py-16 md:py-24 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl text-gray-800 text-lg leading-relaxed">
            <p>
              

Smart Cities represent the convergence of technology and urban planning to improve public services, infrastructure performance, and quality of life. With growing populations and aging infrastructure, municipalities are turning to real-time monitoring and IoT-powered systems to manage transportation, utilities, waste, and environmental health more efficiently.

LoRaWANTech delivers tailored Smart City and infrastructure monitoring solutions across North America, helping cities adopt intelligent systems that reduce costs, improve public safety, and enable data-informed governance. From Detroit to regional communities, our Detroit-based team supports city leaders and infrastructure managers with robust hardware, resilient wireless connectivity, and cloud-integrated platforms—backed by decades of experience in public-sector deployments.

            </p>
          </div>
        </div>
      </section>
 
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Components of Smart City Systems</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              


Through partnerships with leading providers like Global Advanced Operations Tek Inc. (GAO Tek Inc.) and Global Advanced Operations RFID Inc. (GAO RFID Inc.), LoRaWANTech offers dependable and interoperable technologies built for municipal applications.

            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {monitoringSolutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Benefits for Municipalities</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  {benefits.slice(0, 2).map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="space-y-6">
                  {benefits.slice(2).map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">City Success Stories</h3>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Traffic Congestion Reduction</h4>
                    <p className="text-gray-600 text-sm">Medium-sized city deployment</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Deployed traffic sensors and LoRaWAN gateways at key intersections. Integrated with adaptive 
                  signal control, the system reduced congestion by 25% during peak hours and lowered idle emissions citywide.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">25% congestion reduction</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Lower emissions</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Peak hour optimization</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Waste Management Optimization</h4>
                    <p className="text-gray-600 text-sm">Suburban municipality partnership</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Partnered with GAO Tek Inc. to deploy bin-level sensors and route optimization software. 
                  LoRaWAN gateways enabled seamless data transmission, resulting in 40% fewer collection runs, 
                  lower fuel costs, and increased citizen satisfaction.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">40% fewer collections</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Fuel cost savings</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Higher citizen satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Applications Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Municipal Applications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Road & bridge condition monitoring",
                "Air quality tracking and reporting",
                "Smart traffic light control",
                "Automated waste collection",
                "Utility usage and leak detection",
                "Smart parking analytics",
                "Flood early warning systems",
                "Noise pollution management"
              ].map((application, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">{application}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to modernize your city infrastructure?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Contact our team today for tailored Smart City solutions that support sustainability, 
              safety, and urban innovation. We're here to help you build a more responsive and efficient city.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                Request City Assessment
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium py-3 px-8 rounded-lg transition-colors">
                View Municipal Solutions
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
          Ready to modernize your city or <br /> infrastructure with intelligent monitoring systems?
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

export default SmartCitiesInfrastructureMonitoring;