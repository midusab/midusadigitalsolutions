export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  longDescription: string;
  features: string[];
  client: string;
  date: string;
  gallery: string[];
  stats?: { label: string; value: string }[];
  testimonial?: { content: string; author: string; role: string; avatar?: string };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "The Golden Plate",
    category: "Restaurant",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
    description: "A luxury dining experience captured in a high-performance website.",
    longDescription: "The Golden Plate required a digital presence as exquisite as their menu. We focused on high-resolution food photography, a seamless reservation system, and a mobile-optimized menu that loads instantly even on slow connections. The result was a 45% increase in direct bookings within the first three months of launch.",
    features: [
      "Online Reservations with Real-time Availability",
      "Dynamic Menu with Dietary Filtering",
      "Instagram Feed Integration",
      "Automated Table Management System",
      "Interactive Google Maps Integration",
      "Multi-language Support"
    ],
    client: "Elite Dining Group",
    date: "March 2024",
    gallery: [
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
    ],
    stats: [
      { label: "Increase in Bookings", value: "45%" },
      { label: "Mobile Traffic Growth", value: "60%" },
      { label: "New Customers", value: "1.2k+" }
    ],
    testimonial: {
      content: "Midusa Digital transformed our business. Our customers constantly compliment the ease of booking, and our revenue has seen a significant boost.",
      author: "Sarah Jenkins",
      role: "Operations Manager, Elite Dining Group",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    }
  },
  {
    id: "2",
    title: "Luxe Realty",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    description: "Modern property listings with immersive galleries.",
    longDescription: "Real estate is all about visuals. Luxe Realty's platform features fullscreen property tours, advanced search filtering, and an automated lead capture system for agents. We integrated a CRM that allows agents to manage leads directly from their phone, reducing response times by over 70%.",
    features: [
      "Interactive Map Search with Radius Filtering",
      "Automated Lead Management & CRM",
      "360° Virtual Tours Integration",
      "Advanced Mortgage Calculator",
      "Agent Dashboard with Analytics",
      "Property Alert Notifications"
    ],
    client: "Luxe Realty Group",
    date: "Feb 2024",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
    ],
    stats: [
      { label: "Lead Conversion Rate", value: "22%" },
      { label: "Response Time Reduction", value: "70%" },
      { label: "Monthly Sessions", value: "15k+" }
    ],
    testimonial: {
      content: "The best investment we've made this year. Our agents are more productive and the quality of leads coming through the site has doubled.",
      author: "Michael Chen",
      role: "CEO, Luxe Realty Group",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    }
  },
  {
    id: "3",
    title: "Sharp Cuts",
    category: "Barber Shop",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80",
    description: "A bold, minimalist site for a premium grooming brand.",
    longDescription: "Sharp Cuts needed a site that looked as sharp as their fades. We implemented a robust booking system and an interactive gallery showcasing their top barbers' work. The system also includes automated SMS reminders which reduced no-shows by 85%.",
    features: [
      "Online Booking with Barber Selection",
      "Dynamic Portfolio/Gallery",
      "Loyalty Program Integration",
      "Automated SMS Appointment Reminders",
      "Service & Pricing Packages",
      "Customer Reviews System"
    ],
    client: "Sharp Cuts Co.",
    date: "Jan 2024",
    gallery: [
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1621605815841-28d944683b83?auto=format&fit=crop&q=80"
    ],
    stats: [
      { label: "No-Show Reduction", value: "85%" },
      { label: "Online Bookings", value: "90%" },
      { label: "Returning Clients", value: "78%" }
    ],
    testimonial: {
      content: "Running the shop has never been smoother. Midusa Digital understood our vibe and built exactly what we needed to scale.",
      author: "Marcus Doe",
      role: "Founder, Sharp Cuts Co.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    }
  },
  {
    id: "4",
    title: "FitLife Hub",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
    description: "Training plans and community features for fitness enthusiasts.",
    longDescription: "FitLife Hub is a community-first platform. It includes workout logging, a premium membership portal, and integrated video streaming for home training sessions. We scaled the platform to handle over 10,000 active members with zero downtime.",
    features: [
      "Secure Membership Portal",
      "On-Demand Video Streaming Service",
      "Ecommerce Store for Supplements",
      "Custom Workout Logging System",
      "Community Forum & Groups",
      "Progress Tracking Analytics"
    ],
    client: "FitLife Athletics",
    date: "Dec 2023",
    gallery: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80"
    ],
    stats: [
      { label: "Active Members", value: "10k+" },
      { label: "Retail Revenue Growth", value: "35%" },
      { label: "User Engagement", value: "4.8/5" }
    ],
    testimonial: {
      content: "The custom membership portal is a game-changer. Our members love the experience, and the automated billing has saved us hours of work.",
      author: "Jessica T.",
      role: "Founder, FitLife Athletics",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    }
  },
  {
    id: "5",
    title: "Serenity Spa",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1544161515-4ae6ce6ea858?auto=format&fit=crop&q=80",
    description: "Relaxing aesthetics paired with easy service booking.",
    longDescription: "Calmness starts on the website. Serenity Spa features a soft color palette, fluid transitions, and a multi-service booking engine that handles advanced scheduling for a team of 10 therapists. We implemented a gift card system that generated $5,000 in its first week.",
    features: [
      "Digital Gift Card Purchase & Redemption",
      "Complex Multi-Service Booking Engine",
      "Specific Therapist Selection Option",
      "Automated Billing & Digital Receipts",
      "Treatment Aftercare Resource Hub",
      "Integrated Loyalty Points"
    ],
    client: "Serenity Wellness",
    date: "Nov 2023",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecee?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600334129128-fa85730d968f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80"
    ],
    stats: [
      { label: "Gift Card Revenue", value: "$5k/wk" },
      { label: "Average Appointment Value", value: "+25%" },
      { label: "Customer Growth", value: "150/mo" }
    ],
    testimonial: {
      content: "Midusa Digital captured the essence of Serenity perfectly. The booking flow is seamless and our clients find it very intuitive.",
      author: "Elena Rodriguez",
      role: "Manager, Serenity Wellness",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
    }
  }
];
