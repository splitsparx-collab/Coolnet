import { useState } from 'react';
import { Calendar, User, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { BookingFormData } from '../types';
import { services } from '../data/services';

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submitData = {
      ...formData,
      submittedAt: new Date().toISOString(),
      source: 'website',
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'direct',
    };

    console.log('Form data ready for n8n webhook:', submitData);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        serviceType: '',
        preferredDate: '',
        message: '',
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSuccess) {
    return (
      <section id="booking" className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 md:p-12 text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Booking Received!
            </h3>
            <p className="text-gray-700 mb-6">
              Thank you for choosing Coolnet! We'll contact you shortly to confirm your appointment.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Book Another Service
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Book a Service
          </h2>
          <p className="text-lg text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-10 rounded-2xl shadow-xl">
          <div className="space-y-6">
            <div>
              <label htmlFor="fullName" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4" />
                <span>Full Name *</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4" />
                <span>Phone Number *</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="+263 77 123 4567"
              />
            </div>

            <div>
              <label htmlFor="serviceType" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Service Type *</span>
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="preferredDate" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4" />
                <span>Preferred Date *</span>
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Additional Details</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us more about your repair needs..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit Booking Request</span>
              )}
            </button>

            <p className="text-sm text-gray-600 text-center">
              By submitting this form, you agree to be contacted by Coolnet regarding your service request.
            </p>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Prefer to call directly?</p>
          <a
            href="tel:+263773470212"
            className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>+263 77 347 0212</span>
          </a>
        </div>
      </div>
    </section>
  );
}
