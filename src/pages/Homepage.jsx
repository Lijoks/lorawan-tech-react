import { ArrowRight, Cpu, Wifi, Layers, CheckCircle, Shield, Users, Clock, Check, Radio } from "lucide-react";

const Homepage = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative text-white overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/images/hero.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        {/* Gradient Overlay (combines gradient + dark overlay) */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Reliable, Scalable Wireless Connectivity for Smarter Operations
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto drop-shadow-md">
              LoRaWANTech's LoRaWAN Technology delivers low-power, long-range IoT solutions tailored to meet industrial and commercial demands.
            </p>
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
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Modern industries require robust, secure, and cost-effective communication systems 
            to connect devices across diverse operational landscapes. This homepage introduces 
            LoRaWAN Technology as a cornerstone for building scalable, low-power, wide-area IoT networks.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With a focus on B2B needs, LoRaWANTech presents core offerings that include LoRaWAN Core Hardware, 
            Network Platforms, and Applications each crafted for resilience and interoperability. 
            As a growing technology leader headquartered in Detroit, Michigan, LoRaWANTech is known across North America for reliable innovation,
             strict quality assurance, and hands-on support. Businesses working with LoRaWANTech benefit from expert-led deployments, durable products, 
             and real-time connectivity systems that adapt to their evolving needs. Visitors can explore key offerings and are encouraged to contact LoRaWANTech for custom solutions and implementation support.
          </p>
        </div>
      </section>

      {/* Core Technology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Core LoRaWAN Technology
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">LoRaWAN Core Hardware</h3>
              <p className="text-gray-600 mb-6">
                LoRaWANTech’s LoRaWAN Core Hardware forms the backbone of any reliable IoT infrastructure. Our product suite includes industrial-grade gateways,
                 base stations, and transceivers that support long-range connectivity with minimal power usage. Built for rugged environments, 
                 these devices are optimized for outdoor and indoor deployments. Each unit is pre-configured for plug-and-play installation and supports secure data transmission across multiple devices. 
                 With consistent performance and scalable compatibility, businesses can implement real-time monitoring and control systems with reduced maintenance and extended operational life. 
              </p>
              <a 
  href="/applications" 
  className="bg-[#1a639b] text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-[#155280] transition-colors inline-block"
>
  Learn More
</a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <Wifi className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Network Platforms</h3>
              <p className="text-gray-600 mb-6">
                Our network platforms enable businesses to manage, monitor, and scale their LoRaWAN-based deployments with ease. 
                LoRaWANTech offers private and public network options with intuitive dashboards, seamless device provisioning, and advanced security protocols.
                 These platforms ensure reliable data routing, device authentication, and over-the-air updates. 
                 Designed for easy integration into existing systems, our platforms offer extensive APIs for third-party software, ERP, and cloud services.
                  We simplify complex deployments, helping B2B clients establish robust, future-ready infrastructure while maintaining full control of their data ecosystems.
              </p>
              <a 
  href="/applications" 
  className="bg-[#1a639b] text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-[#155280] transition-colors inline-block"
>
  Learn More
</a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                <Layers className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Applications</h3>
              <p className="text-gray-600 mb-6">
                LoRaWANTech delivers customized LoRaWAN applications to meet the needs of various industries,
                 including agriculture, logistics, smart cities, utilities, and industrial automation. 
                 Our solutions power applications such as remote asset monitoring, predictive maintenance,
                  smart metering, and environmental sensing. With low power requirements and wide coverage, 
                  our systems operate in remote or hard-to-reach locations where traditional connectivity falls short. 
                  LoRaWANTech works closely with clients to configure and deploy application-specific use cases, ensuring optimal functionality,
                   seamless integration, and measurable ROI from day one. 
              </p>
              <a 
  href="/applications" 
  className="bg-[#1a639b] text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-[#155280] transition-colors inline-block"
>
  Learn More
</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
<section className="bg-white overflow-hidden">
  <div className="flex flex-col md:flex-row min-h-[600px]">
    
    {/* Left Side: Image */}
    <div className="w-full md:w-1/2">
      <img 
        src="/images/loranwan.png" 
        alt="LoRaWAN Technology" 
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right Side: Content */}
    <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a639b] mb-8">
        Why Choose LoRaWANTech for<br /> LoRaWAN Technology
      </h2>
      
      <div className="space-y-6">
        {[
          { icon: Shield, title: "Trusted Partner", desc: "Headquartered in Detroit, Michigan, with a growing B2B footprint across North America." },
          { icon: CheckCircle, title: "Reliable Products", desc: "Engineered for longevity, minimal downtime, and harsh environments." },
          { icon: Users, title: "Custom Deployment", desc: "Tailored solutions with expert support from consultation to post-deployment." },
          { icon: Clock, title: "Technology-Driven", desc: "Powered by research, innovation, and rigorous quality assurance." },
          { icon: Radio, title: "Industry Versatility", desc: "Serving sectors such as manufacturing, utilities, logistics, agriculture, and smart cities." }
        ].map((item, index) => (
          <div key={index} className="flex items-center p-6 bg-slate-50 rounded-xl">
            {/* Icon Circle */}
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mr-6">
              <item.icon className="w-6 h-6 text-blue-800" />
            </div>
            
            {/* Text Content */}
            <div>
              <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Benefits Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
    
    {/* Left Side: Heading and Intro */}
    <div className="w-full md:w-1/2">
      <h2 className="text-4xl md:text-5xl font-bold text-[#1a639b] mb-6 leading-tight">
        Innovation That<br /> Powers Scalable<br /> IoT Networks
      </h2>
      <p className="text-lg text-gray-700">
        With LoRaWANTech’s LoRaWAN Technology, your<br className="hidden md:block" /> business can:
      </p>
    </div>

    {/* Right Side: Dark Blue Benefits Card */}
    <div className="w-full md:w-1/2">
      {/* Note: rounded-[2.5rem] gives it that extra smooth curve from your image */}
      <div className="bg-[#1a639b] rounded-[2.5rem] p-8 md:p-12 shadow-xl">
        <ul className="space-y-0 divide-y divide-white/20">
          {[
            "Extend IoT coverage to rural and urban zones with minimal infrastructure",
            "Optimize energy usage with low-power device communication",
            "Monitor assets, environments, and equipment in real time",
            "Securely transmit data across multiple endpoints",
            "Scale operations without adding complexity or cost"
          ].map((benefit, index) => (
            <li key={index} className="flex items-center py-5 first:pt-0 last:pb-0">
              {/* White circle background for the check icon */}
              <div className="flex-shrink-0 bg-white rounded-full w-6 h-6 flex items-center justify-center mr-4">
                <Check className="w-4 h-4 text-[#1a639b] stroke-[3px]" />
              </div>
              <span className="text-white font-medium leading-snug">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>

  </div>
</section>

      {/* CTA Section */}
<section className="py-20 px-4">
  <div 
    className="max-w-7xl mx-auto relative rounded-[2.5rem] overflow-hidden bg-cover bg-center min-h-[450px] flex items-center"
    style={{ backgroundImage: "url('/images/lorawan-cta.webp')" }}
  >
    {/* Dark Overlay to make text readable */}
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 p-8 md:p-20 max-w-3xl text-left">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
        Ready to take your IoT infrastructure to <br className="hidden md:block" /> the next level?
      </h2>
      
      <p className="text-lg md:text-xl mb-10 text-gray-200 font-light leading-relaxed">
        Let’s work together. Whether you need expert advice, product support, or a full 
        deployment strategy, we’re here to help. Contact LoRaWANTech Now For 
        detailed consultations, implementation help, or product inquiries, reach out 
        to our team today.
      </p>

      {/* Contact Us Button - Positioned Bottom Left */}
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
</section>
    </>
  );
};

export default Homepage;