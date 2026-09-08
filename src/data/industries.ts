export interface Industry {
  name: string;
  priorities: string[];
}

export const industries: Industry[] = [
  { name: 'Hospitality', priorities: ['Story', 'Rooms', 'Direct Booking'] },
  { name: 'Restaurants', priorities: ['Menus', 'Reservations', 'Private Dining'] },
  { name: 'Automotive', priorities: ['Trust', 'Services', 'Booking'] },
  { name: 'Trades', priorities: ['Work', 'Proof', 'Quote Requests'] },
  { name: 'Private Healthcare', priorities: ['Trust', 'Treatment Discovery', 'Consultation'] },
  { name: 'Ecommerce', priorities: ['Product', 'Story', 'Conversion'] },
  { name: 'Travel', priorities: ['Destination', 'Experience', 'Booking'] },
  { name: 'Public Figures & Civic', priorities: ['Trust', 'Priorities', 'Information', 'Contact'] },
  { name: 'Professional Services', priorities: ['Credibility', 'Expertise', 'Enquiry'] },
];
