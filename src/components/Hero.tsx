import { Phone, MessageCircle, FileText } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const handleCall = () => {
    window.location.href = 'tel:+263773470212';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/263773470212', '_blank');
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span>Trusted Service in Harare</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            Coolnet Air Conditioning & <br className="hidden sm:block" />
            Fridge Repairs – Harare
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 animate-slide-up-delay">
            Fast, Reliable, and Professional Services
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up-delay-2">
            <button
              onClick={handleCall}
              className="group w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Call Now</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="group w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={() => onNavigate('booking')}
              className="group w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-blue-600"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Get a Quote</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
            {[
              { label: 'Years Experience', value: '10+' },
              { label: 'Happy Clients', value: '500+' },
              { label: 'Same Day Service', value: '24/7' },
              { label: 'Satisfaction', value: '100%' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
