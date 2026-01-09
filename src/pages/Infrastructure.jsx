import { Server, Cloud, Shield, Database, ArrowRight } from "lucide-react";

const Infrastructure = () => {
  const services = [
    {
      icon: Server,
      title: "Network Servers",
      description: "Centralized LoRaWAN Network Servers for device management",
      features: ["Device provisioning", "Data routing", "OTA updates", "Multi-tenant support"]
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      description: "Scalable cloud infrastructure for data storage and analytics",
      features: ["Real-time dashboards", "API integration", "Alert systems", "Data export"]
    },
    {
      icon: Shield,
      title: "Security Layer",
      description: "End-to-end encryption and device authentication",
      features: ["AES-128 encryption", "Secure join", "Key management", "Device auth"]
    },
    {
      icon: Database,
      title: "Application Servers",
      description: "Custom application logic and business rule processing",
      features: ["Business logic", "Data processing", "Integration", "Custom workflows"]
    }
  ];

  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              LoRaWAN Network Infrastructure
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Complete network solutions for reliable, secure, and scalable IoT deployments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
              Network Architecture Components
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              Our infrastructure solutions provide the complete backbone for your LoRaWAN deployment, 
              from device connectivity to data processing and application integration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-left">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Deployment Options
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">Public</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Public Network</h3>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-600">
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                  Nationwide coverage
                </li>
                <li className="flex items-center text-gray-600">
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                  No infrastructure investment
                </li>
                <li className="flex items-center text-gray-600">
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                  Pay-per-use pricing
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
                Learn More
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-2 border-blue-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-4">Private</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Private Network</h3>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-600">
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                  Complete data control
                </li>
                <li className="flex items-center text-gray-600">
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                  Custom security policies
                </li>
                <li className="flex items-center text-gray-600">
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                  Unlimited devices
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
                Get Started
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">Hybrid</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Hybrid Solution</h3>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-600">
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                  Mix of public & private
                </li>
                <li className="flex items-center text-gray-600">
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                  Geographic flexibility
                </li>
                <li className="flex items-center text-gray-600">
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                  Cost optimization
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Infrastructure;