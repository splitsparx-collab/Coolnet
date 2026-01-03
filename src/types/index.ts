export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  message: string;
}
