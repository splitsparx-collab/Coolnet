import { Wind, Refrigerator, Droplet, Car, Zap } from 'lucide-react';
import { services } from '../data/services';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  wind: Wind,
  refrigerator: Refrigerator,
  droplet: Droplet,
  car: Car,
  zap: Zap,
};

interface ServicesProps {
  onNavigate: (section: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional repair and maintenance services for all your cooling needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <button
                  onClick={() => onNavigate('booking')}
                  className="text-blue-600 font-medium flex items-center space-x-2 group-hover:space-x-3 transition-all"
                >
                  <span>Book Service</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('booking')}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
          >
            <span>Book Any Service Now</span>
          </button>
        </div>
      </div>
    </section>
  );
}
