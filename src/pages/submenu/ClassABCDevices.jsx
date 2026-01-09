import { ArrowRight } from 'lucide-react';
import React from 'react';

const ClassABCDevices = () => {
  const classes = [
    {
      title: "Class A Devices",
      description: "Battery-optimized devices with scheduled receive windows for maximum power efficiency.",
      features: [
        "Lowest power consumption (µA sleep current)",
        "Bidirectional communication capability",
        "Two scheduled receive windows after transmission",
        "Typical battery life: 5-10 years"
      ],
      applications: [
        "Environmental sensors", "Smart metering", "Agricultural monitoring", "Remote asset tracking"
      ],
      iconColor: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Class B Devices",
      description: "Devices with scheduled ping slots offering predictable latency for time-sensitive applications.",
      features: [
        "Scheduled receive ping slots",
        "Moderate power consumption profile",
        "Predictable downlink latency",
        "Typical battery life: 2-5 years"
      ],
      applications: [
        "Smart irrigation control", "Industrial monitoring", "Building automation", "Scheduled reporting"
      ],
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Class C Devices",
      description: "Continuously listening devices providing lowest latency for real-time control applications.",
      features: [
        "Continuous receive mode operation",
        "Lowest communication latency",
        "Highest power consumption profile",
        "Typical battery life: Days to months"
      ],
      applications: [
        "Smart actuators", "Industrial valves", "Control switches", "Real-time monitoring"
      ],
      iconColor: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      title: "Multi-class Devices",
      description: "Adaptive devices capable of switching between classes based on application requirements.",
      features: [
        "Dynamic class switching capability",
        "Adaptive power management",
        "Application-configurable behavior",
        "Optimized performance for varying needs"
      ],
      applications: [
        "Smart street lighting", "Advanced tracking", "Complex automation", "Hybrid applications"
      ],
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <>
      {/* Hero & Description Section */}
<div className="w-full">
  {/* 1. Hero Section (Image Background) */}
  <section 
    className="relative min-h-[550px] flex items-center bg-cover bg-center"
    style={{ backgroundImage: "url('/images/LoRaWAN-Class.webp')" }}
  >
    {/* Dark Overlay to match the technical aesthetic of abc.jpg */}
    <div className="absolute inset-0 bg-slate-900/80"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Optimize IoT Networks<br /> with LoRaWAN Class A/B/<br />C Device Types
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 font-medium leading-relaxed">
          LoRaWANTech delivers scalable LoRaWAN Class A/B/C devices for tailored, 
          energy-efficient, and reliable IoT communication solutions
        </p>
        
        {/* Contact Us Button - Dark Navy Style with Circular Arrow Icon */}
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
          LoRaWAN Class A/B/C device types offer a flexible and efficient way to connect Internet of Things (IoT) devices over long distances with minimal energy consumption. These devices are categorized based on their communication behavior and energy efficiency to fit diverse applications—from battery-powered sensors to always-on industrial equipment. LoRaWAN’s versatility and reliability make it a preferred choice for businesses needing to monitor, control, and automate their operations across sprawling environments.
LoRaWANTech supports businesses throughout North America by delivering advanced LoRaWAN Class A/B/C device solutions tailored for B2B needs. With expertise in technology innovation, product reliability, and customer-centric service, we help enterprises unlock scalable, smart solutions backed by a rigorous quality assurance process, continuous product development, and expert guidance.
        </p>
      </div>
    </div>
  </section>
</div>

      {/* Device Classes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Components of LoRaWAN Class A/B/C Device Types</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              In addition to offering products and systems developed by our team and trusted partners for LoRaWAN Class A/B/C Device Types, we are proud to carry top-tier technologies from Global Advanced Operations Tek Inc. (GAO Tek Inc.) and Global Advanced Operations RFID Inc. (GAO RFID Inc.). These reliable, high-quality products and systems enhance our ability to deliver comprehensive technologies, integrations, and services you can trust. Where relevant, we have provided direct links to select products and systems from GAO Tek Inc. and GAO RFID Inc.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {classes.map((deviceClass, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className={`w-14 h-14 rounded-lg ${deviceClass.bgColor} flex items-center justify-center mr-4 flex-shrink-0`}>
                    <svg className={`w-7 h-7 ${deviceClass.iconColor}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{deviceClass.title}</h3>
                    <p className="text-gray-600">{deviceClass.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Key Characteristics:</h4>
                  <ul className="space-y-2">
                    {deviceClass.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Ideal Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {deviceClass.applications.map((app, idx) => (
                      <span key={idx} className={`px-3 py-1 ${deviceClass.bgColor} ${deviceClass.iconColor} rounded-full text-sm`}>
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Comparison: LoRaWAN Device Classes</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Detailed comparison of Class A, B, and C devices across key performance parameters
            </p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Parameter</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-green-700 uppercase tracking-wider">Class A</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-700 uppercase tracking-wider">Class B</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-red-700 uppercase tracking-wider">Class C</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Power Consumption", "Lowest (μA range)", "Moderate (mA range)", "Highest (continuous RX)"],
                  ["Battery Life", "5-10 years", "2-5 years", "Days to months"],
                  ["Downlink Latency", "High (scheduled windows)", "Moderate (ping slots)", "Lowest (immediate)"],
                  ["Communication Pattern", "Uplink-initiated", "Scheduled bidirectional", "Continuous bidirectional"],
                  ["Network Complexity", "Simple", "Medium (requires beacons)", "Complex"],
                  ["Device Cost", "Lowest", "Medium", "Highest"],
                  ["Typical Use Cases", "Sensor data collection", "Time-sensitive control", "Real-time actuation"],
                  ["Network Capacity", "Highest", "Medium", "Lowest"]
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row[0]}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">{row[1]}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">{row[2]}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Selection Guidance */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Class Selection Guidance</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-700 mb-2">Choose Class A When:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Maximizing battery life is critical</li>
                  <li>• Downlink latency is not time-sensitive</li>
                  <li>• Simple sensor data collection needed</li>
                  <li>• Large-scale deployments required</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-700 mb-2">Choose Class B When:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Scheduled downlink communication needed</li>
                  <li>• Moderate battery life acceptable</li>
                  <li>• Predictable latency required</li>
                  <li>• Control applications with timing needs</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-700 mb-2">Choose Class C When:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Real-time control needed</li>
                  <li>• Immediate downlink required</li>
                  <li>• Power source readily available</li>
                  <li>• Actuators or switches to control</li>
                </ul>
              </div>
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
          Looking to deploy efficient and scalable LoRaWAN <br /> Class A/B/C devices for your business?
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

export default ClassABCDevices;