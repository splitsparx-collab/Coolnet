import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+263 77 347 0212',
      action: 'tel:+263773470212',
      actionText: 'Call Now',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Harare, Zimbabwe',
      action: null,
      actionText: null,
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Mon - Sat: 8am - 6pm',
      action: null,
      actionText: null,
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@coolnet.co.zw',
      action: 'mailto:info@coolnet.co.zw',
      actionText: 'Send Email',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to get your cooling system fixed? Contact us today for fast and reliable service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                {info.title}
              </h3>
              <p className="text-gray-900 font-medium mb-3">{info.value}</p>
              {info.action && (
                <a
                  href={info.action}
                  className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
                >
                  {info.actionText}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 h-96 md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.3234567890!2d30.8161!3d-17.8252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4a3fc9cb3cd%3A0x5696e43e8ead1117!2sCoolnet%20Air%20Conditioning%20%26%20Fridge%20Repairs%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2zZW4!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="mt-12 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Emergency Repairs Available 24/7
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We understand that cooling emergencies don't wait. Call us anytime for urgent repairs.
          </p>
          <a
            href="tel:+263773470212"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span>Call Emergency Line</span>
          </a>
        </div>
      </div>
    </section>
  );
}
