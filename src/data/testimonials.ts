/**
 * Testimonials are intentionally empty until genuine client reviews are supplied.
 * The UI will hide this section when the array is empty.
 */
export type Testimonial = {
  id: string;
  clientName: string;
  business?: string;
  clientPhoto?: string;
  rating: number;
  text: string;
};

export const testimonials: Testimonial[] = [];
