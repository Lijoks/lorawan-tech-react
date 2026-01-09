import { ArrowRight, MapPin, Shield, Zap, Cpu, Globe } from "lucide-react";

const AboutUs = () => {
  const strengths = [
    {
      title: "Innovation-driven product development",
      description: ""
    },
    {
      title: "Customer-first technical support",
      description: ""
    },
    {
      title: "High-reliability hardware and platforms",
      description: ""
    },
    {
      title: "End-to-end system expertise—from concept to deployment",
      description: ""
    }
  ];

  const technologies = [
    {
      title: "LoRaWAN Core Hardware",
      description: "Our core hardware suite includes long-range gateways, sensor nodes, antennas, and transceivers engineered for industrial resilience and ultra-low power consumption. Each device is pre-configured for seamless deployment and supports secure bidirectional data exchange over extended distances. Whether placed in urban infrastructure or remote agricultural fields, LoRaWAN can achieve a wide variety of performance requirements. We focus on reliability, adaptability, and ease of integration with diverse IoT ecosystems.",
      buttonText: "Learn More",
      buttonLink: "/lorawan-core-hardware",
      color: "blue",
      image: "/images/lorawan-core-hardware-card.jpg"
    },
    {
      title: "LoRaWAN Network Platforms",
      description: "Our network platforms enable businesses to manage, monitor, and scale their LoRaWAN-based deployments with ease. We offer private and public network options with intuitive dashboards, seamless device provisioning, and advanced security protocols. These platforms ensure reliable data routing, device authentication, and over-the-air updates. Designed for easy integration into existing systems, our platforms offer extensive APIs for third-party software, ERP, and cloud services. We simplify complex deployments, helping B2B clients establish robust, future-ready infrastructure while maintaining full control of their data ecosystems.",
      buttonText: "Learn More",
      buttonLink: "/lorawan-network-platforms",
      color: "green",
      image: "/images/lorawan-network-platforms-card.jpg"
    },
    {
      title: "LoRaWAN Applications",
      description: "LoRaWANTech delivers customized LoRaWAN applications to meet the needs of various industries, including agriculture, logistics, smart cities, utilities, and industrial automation. Our solutions power applications such as remote asset monitoring, predictive maintenance, smart metering, and environmental sensing. With low power requirements and wide coverage, our systems operate in remote or hard-to-reach locations where traditional connectivity falls short. We work closely with clients to configure and deploy application-specific use cases, ensuring optimal functionality, seamless integration, and measurable ROI from day one.",
      buttonText: "Learn More",
      buttonLink: "/lorawan-applications",
      color: "purple",
      image: "/images/lorawan-applications-card.jpg"
    }
  ];

  return (
    <>
      {/* 1. Hero Section  */}
      <section 
        className="relative min-h-[550px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/lorawantech-about-us-scaled.jpg')" }}
      >
        {/* Dark Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-slate-900/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              About Us
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Headquartered in Detroit, Michigan, LoRaWANTech is known across North America 
              for reliable innovation, strict quality assurance, and hands-on support.
            </p>
            
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

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            About LoRaWANTech's LoRaWAN Technology
          </h2>
          
          {/* Main Description */}
          <div className="space-y-6 text-lg text-gray-700 mb-12">
            <p>
              LoRaWANTech delivers high-performance LoRaWAN solutions that empower industrial and commercial 
              operations to improve visibility, reduce operational costs, and gain real-time insights across 
              vast physical spaces.
            </p>
            
            <p>
              Designed for B2B applications, our technology enables seamless wireless communication between 
              distributed devices—even in challenging environments. LoRaWANTech's LoRaWAN systems are ideal 
              for sectors like smart agriculture, manufacturing, logistics, utilities, and infrastructure.
            </p>
            
            <p>
              Our growing presence across North America is built on four foundational strengths:
            </p>
          </div>

          {/* Strengths Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="mb-4">
                  {index === 0 && <Cpu className="w-10 h-10 text-blue-600" />}
                  {index === 1 && <Zap className="w-10 h-10 text-green-600" />}
                  {index === 2 && <Shield className="w-10 h-10 text-red-600" />}
                  {index === 3 && <Globe className="w-10 h-10 text-purple-600" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {strength.title}
                </h3>
                {strength.description && (
                  <p className="text-gray-600">{strength.description}</p>
                )}
              </div>
            ))}
          </div>

          {/* Collaboration Statement */}
          <div className="mb-16">
            <p className="text-lg text-gray-700 bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500">
              We collaborate closely with clients to build tailored, scalable LoRaWAN networks that integrate 
              with existing workflows and align with future business goals.
            </p>
          </div>

          {/* Technology Sections - Side by side cards */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              Our Core LoRaWAN Technology
            </h3>

            {/* Three cards side by side */}
            <div className="grid md:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col h-full bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Image on top */}
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ 
                        backgroundImage: `url('${tech.image}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      {/* Fallback if image doesn't exist */}
                      <div className={`w-full h-full flex items-center justify-center ${
                        tech.color === 'blue' ? 'bg-blue-600' : 
                        tech.color === 'green' ? 'bg-green-600' : 
                        'bg-purple-600'
                      }`}>
                        <div className="text-white text-center p-4">
                          <h4 className="text-xl font-bold mb-2">{tech.title.split(' ')[0]}</h4>
                          <p className="text-sm opacity-90">Technology</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Colored header stripe */}
                  <div className={`p-3 ${tech.color === 'blue' ? 'bg-blue-600' : tech.color === 'green' ? 'bg-green-600' : 'bg-purple-600'}`}>
                    <h4 className="text-lg font-bold text-white text-center">
                      {tech.title}
                    </h4>
                  </div>
                  
                  {/* Content area */}
                  <div className="p-6 flex-grow">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                  
                  {/* Learn More button at bottom */}
                  <div className="p-6 pt-0">
                    <a 
                      href={tech.buttonLink}
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-white hover:opacity-90 transition-opacity ${
                        tech.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 
                        tech.color === 'green' ? 'bg-green-600 hover:bg-green-700' : 
                        'bg-purple-600 hover:bg-purple-700'
                      }`}
                    >
                      {tech.buttonText}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Transform Your Operations with LoRaWAN?
            </h3>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss how our LoRaWAN solutions can drive efficiency, reduce costs, 
              and provide valuable insights for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-600 px-8 py-3.5 rounded-md font-semibold text-lg transition-colors group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3.5 rounded-md font-semibold text-lg transition-colors"
              >
                Call Us Now
              </a>
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

export default AboutUs;