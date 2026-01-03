import { CheckCircle2, Award, Users, Clock } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Experienced Technicians',
      description: 'Certified professionals with years of hands-on experience',
    },
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Same-day service available for urgent repairs',
    },
    {
      icon: CheckCircle2,
      title: 'Quality Guaranteed',
      description: 'All work backed by our satisfaction guarantee',
    },
    {
      icon: Users,
      title: 'Trusted Locally',
      description: 'Proudly serving Harare and surrounding areas',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Coolnet
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Coolnet Air Conditioning & Fridge Repairs is a trusted local business serving
              Harare and surrounding areas. We specialize in professional repair and maintenance
              services for air conditioning units, refrigerators, and automotive cooling systems.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our team of experienced technicians is committed to providing fast, reliable, and
              affordable services. We understand the importance of keeping your cooling systems
              running smoothly, especially in Zimbabwe's climate. That's why we offer same-day
              service and emergency repairs.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Licensed and insured technicians',
                'Transparent pricing with no hidden fees',
                'Quality parts and refrigerants',
                'Emergency and same-day service available',
                'Comprehensive warranty on all repairs',
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
