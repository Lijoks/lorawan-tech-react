import { MapPin, Users, Award, Clock } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team consists of IoT experts, engineers, and industry veterans"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control for all products and solutions"
    },
    {
      icon: Clock,
      title: "Proven Experience",
      description: "Years of experience in deploying successful IoT solutions"
    },
    {
      icon: MapPin,
      title: "North American Focus",
      description: "Headquartered in Detroit with nationwide deployment capabilities"
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Headquartered in Detroit, Michigan, LoRaWANTech is known across North America for reliable innovation, strict quality assurance, and hands-on support.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                LoRaWANTech was founded with a clear mission: to deliver reliable, scalable wireless 
                connectivity solutions for smarter operations across industries. Based in Detroit, 
                Michigan, we've grown to become a trusted partner for businesses across North America 
                seeking to implement IoT solutions.
              </p>
              <p>
                Our expertise lies in LoRaWAN technology—a low-power, long-range wireless communication 
                protocol that enables cost-effective IoT deployments. We understand that every business 
                has unique challenges, which is why we offer customized solutions rather than one-size-fits-all 
                products.
              </p>
              <p>
                From initial consultation to deployment and ongoing support, our team works closely with 
                clients to ensure their IoT initiatives deliver measurable results. We pride ourselves on 
                our hands-on approach, technical expertise, and commitment to quality.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Location</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Detroit Headquarters</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">607 Shelby St Ste 700, Detroit, MI 48226</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@lorawantech.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="h-96 bg-gray-200 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.8335770952663!2d-83.05096732352297!3d42.32929453704416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d3aeb1d6cef%3A0x5cb331097060cfe4!2s607%20Shelby%20St%20Suite%20700%2C%20Detroit%2C%20MI%2048226%2C%20USA!5e1!3m2!1sen!2sbd!4v1761755712853!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LoRaWANTech Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;