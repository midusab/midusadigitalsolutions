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
}

export const projects: Project[] = [
  {
    id: "1",
    title: "The Golden Plate",
    category: "Restaurant",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
    description: "A luxury dining experience captured in a high-performance website.",
    longDescription: "The Golden Plate required a digital presence as exquisite as their menu. We focused on high-resolution food photography, a seamless reservation system, and a mobile-optimized menu that loads instantly even on slow connections.",
    features: ["Online Reservations", "Dynamic Menu", "Instagram Integration", "Table Management"],
    client: "Elite Dining Group",
    date: "March 2024",
    gallery: [
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "2",
    title: "Luxe Realty",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    description: "Modern property listings with immersive galleries.",
    longDescription: "Real estate is all about visuals. Luxe Realty's platform features fullscreen property tours, advanced search filtering, and an automated lead capture system for agents.",
    features: ["Map Search", "Lead Management", "360 Virtual Tours", "Mortgage Calculator"],
    client: "Luxe Realty Group",
    date: "Feb 2024",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "3",
    title: "Sharp Cuts",
    category: "Barber Shop",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80",
    description: "A bold, minimalist site for a premium grooming brand.",
    longDescription: "Sharp Cuts needed a site that looked as sharp as their fades. We implemented a robust booking system and an interactive gallery showcasing their top barbers' work.",
    features: ["Online Booking", "Barber Profiles", "Loyalty Program", "SMS Reminders"],
    client: "Sharp Cuts Co.",
    date: "Jan 2024",
    gallery: [
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1621605815841-28d944683b83?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "4",
    title: "FitLife Hub",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
    description: "Training plans and community features for fitness enthusiasts.",
    longDescription: "FitLife Hub is a community-first platform. It includes workout logging, a premium membership portal, and integrated video streaming for home training sessions.",
    features: ["Member Portal", "Video Streaming", "Ecommerce Store", "Workout Logger"],
    client: "FitLife Athletics",
    date: "Dec 2023",
    gallery: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "5",
    title: "Serenity Spa",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1544161515-4ae6ce6ea858?auto=format&fit=crop&q=80",
    description: "Relaxing aesthetics paired with easy service booking.",
    longDescription: "Calmness starts on the website. Serenity Spa features a soft color palette, fluid transitions, and a multi-service booking engine that handles advanced scheduling for a team of 10 therapists.",
    features: ["Gift Cards", "Multi-Service Booking", "Therapist Selection", "Automated Billing"],
    client: "Serenity Wellness",
    date: "Nov 2023",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecee?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600334129128-fa85730d968f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "6",
    title: "Nova Tech",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    description: "A tech-forward landing page for a growing software company.",
    longDescription: "Nova Tech needed a landing page that could explain complex data products simply. We used interactive 3D elements, Lottie animations, and a highly conversion-focused layout.",
    features: ["Lottie Animations", "Interactive Charts", "Waitlist System", "API Documentation"],
    client: "Nova Systems Inc.",
    date: "Oct 2023",
    gallery: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
    ]
  },
];
