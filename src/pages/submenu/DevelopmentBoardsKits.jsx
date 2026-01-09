import { ArrowRight } from 'lucide-react';
import React from 'react';

const DevelopmentBoardsKits = () => {
  const kits = [
    {
      title: "Starter Development Kit",
      description: "Complete entry-level kit for beginners to quickly start with LoRaWAN development and prototyping.",
      includes: [
        "1 LoRaWAN Gateway with setup guide",
        "3 different sensor nodes (temp, humidity, motion)",
        "Cloud dashboard access for 6 months",
        "Comprehensive getting started guide and tutorials"
      ],
      level: "Beginner",
      features: ["Ideal for learning", "Quick setup < 30 minutes", "Educational resources included", "Community support"],
      price: "From $299",
      color: "green"
    },
    {
      title: "Professional Development Kit",
      description: "Advanced development platform for professional IoT engineers and system integrators.",
      includes: [
        "1 Industrial-grade 8-channel Gateway",
        "5 different specialized sensor nodes",
        "Full SDK with API documentation",
        "Advanced debugging and testing tools"
      ],
      level: "Professional",
      features: ["Production-ready components", "Enterprise security features", "Scalable architecture", "Priority support"],
      price: "From $899",
      color: "blue"
    },
    {
      title: "Educational & Academic Kit",
      description: "Comprehensive package designed for universities, research institutions, and training programs.",
      includes: [
        "10 sensor nodes for classroom use",
        "Dedicated classroom gateway",
        "Complete lesson plans and curriculum",
        "Student workbooks and assessment materials"
      ],
      level: "Educational",
      features: ["Curriculum aligned", "Bulk licensing", "Teacher training", "Academic discounts"],
      price: "Contact for pricing",
      color: "purple"
    },
    {
      title: "Enterprise Development Package",
      description: "Custom-tailored solutions for specific enterprise requirements and large-scale deployments.",
      includes: [
        "Custom hardware configurations",
        "Dedicated engineering support",
        "Integration and deployment services",
        "On-site training and workshops"
      ],
      level: "Enterprise",
      features: ["Custom specifications", "White-label options", "Volume pricing", "Direct engineering access"],
      price: "Custom Quote",
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    switch(color) {
      case 'green': return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200', button: 'bg-green-600 hover:bg-green-700' };
      case 'blue': return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', button: 'bg-blue-600 hover:bg-blue-700' };
      case 'purple': return { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200', button: 'bg-purple-600 hover:bg-purple-700' };
      case 'orange': return { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200', button: 'bg-orange-600 hover:bg-orange-700' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200', button: 'bg-gray-600 hover:bg-gray-700' };
    }
  };

  return (
    <>
      {/* Hero & Description Section */}
<div className="w-full">
  {/* 1. Hero Section (Image Background) */}
  <section 
    className="relative min-h-[550px] flex items-center bg-cover bg-center"
    style={{ backgroundImage: "url('/images/LoRaWAN-Development-Boards-Kits.webp')" }}
  >
    {/* Dark Overlay to match develo.jpg */}
    <div className="absolute inset-0 bg-slate-900/80"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Empowering IoT<br /> Development with<br /> LoRaWAN Boards & Kits
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 font-medium leading-relaxed">
          Accelerate your industrial IoT projects using LoRaWANTech's complete 
          LoRaWAN development tools, platforms, and integrated services.
        </p>
        
        {/* Contact Us Button - Dark Navy Style */}
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
      <div className="max-w-5xl text-gray-800 text-lg leading-relaxed space-y-6">
        <p>
          

LoRaWAN Development Boards & Kits play a pivotal role in enabling rapid prototyping, efficient testing, and streamlined deployment of IoT solutions for businesses across industries. These development tools simplify the integration of LoRaWAN communication protocols into embedded systems, helping developers build smart, scalable, and secure connected products. Especially critical for R&D teams, academic institutions, and enterprise engineers, these kits help turn concepts into functional prototypes with ease. In the evolving industrial IoT landscape, the ability to build, test, and iterate solutions quickly is paramount—and these boards and kits meet that demand.

As a B2B company with a strong presence in North America, LoRaWANTech offers premium LoRaWAN development tools that address the needs of enterprises looking to innovate and scale. Our development boards are designed for seamless interoperability, durability, and real-time performance.

        </p>
      </div>
    </div>
  </section>
</div>

      {/* Kits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Components of LoRaWAN Development Boards & Kits</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Select the development kit that matches your experience level, project requirements, and deployment goals. 
              Each kit provides the hardware, software, and documentation needed for successful LoRaWAN implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kits.map((kit, index) => {
              const colors = getColorClasses(kit.color);
              return (
                <div key={index} className={`rounded-xl p-6 border ${colors.border} hover:shadow-xl transition-all duration-300 flex flex-col h-full`}>
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text}`}>
                      {kit.level}
                    </span>
                  </div>

                  <div className="mb-6 flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{kit.title}</h3>
                    <p className="text-gray-600 mb-4">{kit.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-2">Kit Includes:</h4>
                      <ul className="space-y-2">
                        {kit.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start text-gray-600 text-sm">
                            <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {kit.features.map((feature, idx) => (
                          <span key={idx} className={`px-2 py-1 text-xs rounded ${colors.bg} ${colors.text}`}>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-gray-900">{kit.price}</span>
                      <button className={`text-white font-medium py-2 px-6 rounded-lg transition-colors ${colors.button}`}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Support Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Development Support Resources</h3>
                <p className="text-gray-700 mb-6">
                  All our development kits come with comprehensive support including documentation, 
                  code examples, and community access. Professional and enterprise kits include 
                  direct engineering support.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Comprehensive API documentation and SDKs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sample code and application examples
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Active developer community and forums
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Training & Certification</h3>
                <p className="text-gray-700 mb-6">
                  Enhance your team's skills with our structured training programs and 
                  LoRaWAN certification courses.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-blue-700 mb-2">LoRaWAN Fundamentals Course</h4>
                    <p className="text-sm text-gray-600">Online course covering LoRaWAN basics, architecture, and deployment</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Advanced Development Workshop</h4>
                    <p className="text-sm text-gray-600">Hands-on workshop for professional developers and engineers</p>
                  </div>
                </div>
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
          Looking to upgrade or deploy LoRaWAN<br /> End Devices for your IoT strategy?
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

export default DevelopmentBoardsKits;