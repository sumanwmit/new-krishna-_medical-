export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  itemCount: string;
  badge?: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  review: string;
  verified: boolean;
  avatarBg: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string;
  date: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'storefront' | 'medicines' | 'devices' | 'babycare' | 'surgical';
  imageUrl: string;
  description: string;
}

export const BUSINESS_INFO = {
  name: 'New Krishna Medical Hall',
  category: 'Pharmacy & Healthcare Essentials',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  phone: '7870726402',
  displayPhone: '+91 78707 26402',
  whatsappNumber: '917870726402',
  whatsappDisplay: '+91 78707 26402',
  email: 'newkrishnamedicaljehanabad@gmail.com',
  address: '6X6P+P4G, Gaya - Patna Main Rd, Jehanabad, Bihar 804408',
  plusCode: '6X6P+P4G',
  city: 'Jehanabad',
  state: 'Bihar',
  pinCode: '804408',
  landmark: 'Gaya - Patna Main Road, Opposite Main Market, Jehanabad',
  workingHours: {
    days: 'Monday to Sunday',
    timing: '07:00 AM - 10:00 PM',
    emergency: '24/7 WhatsApp Emergency Support Available'
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14457.262529983196!2d84.97491215!3d25.2182046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2cc814a1f869f%3A0xa193d22e03bd6b9c!2sJehanabad%2C%20Bihar%20804408!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=6X6P%2BP4G,+Gaya+-+Patna+Main+Rd,+Jehanabad,+Bihar+804408',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    whatsapp: 'https://wa.me/917870726402',
    googleBusiness: 'https://maps.google.com/?q=6X6P%2BP4G,+Gaya+-+Patna+Main+Rd,+Jehanabad,+Bihar+804408'
  },
  developer: {
    name: 'WMIT',
    company: 'WebMaker IT Solutions',
    url: 'https://main.webmakerit.com'
  }
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'prescription-medicines',
    title: 'Prescription Medicines',
    shortDesc: 'Complete inventory of authentic cardiac, diabetic, antibiotic, and chronic care drugs.',
    fullDesc: 'We stock a wide spectrum of 100% genuine prescription medications directly sourced from top pharmaceutical manufacturers (Cipla, Sun Pharma, Alkem, Mankind, Torrent, etc.). Every batch is verified for quality and stored under strict thermal control.',
    iconName: 'Pill',
    itemCount: '5000+ Stocked Items',
    badge: '100% Genuine',
    features: [
      'Authentic & Batch-Verified Medicines',
      'Specialized Cardiac, Diabetic & BP Drugs',
      'Antibiotics, Antivirals & Respiratory Meds',
      'Free Pharmacist Consultation on Dosage'
    ]
  },
  {
    id: 'otc-medicines',
    title: 'OTC & First Aid Supplies',
    shortDesc: 'Over-the-counter care for fever, pain relief, cough, cold, and immediate wound care.',
    fullDesc: 'Fast access to everyday healthcare remedies including anti-pyretics, pain relief sprays, digestion syrups, antiseptics, bandages, thermal compresses, and immediate home first-aid essential kits.',
    iconName: 'Cross',
    itemCount: '1200+ Products',
    badge: 'Instant Delivery',
    features: [
      'Fast-acting Pain & Fever Remedies',
      'Digestive & Acidity Care Products',
      'Complete First Aid Box Kits',
      'Cough, Cold & Immunity Syrups'
    ]
  },
  {
    id: 'health-devices',
    title: 'Health Devices & Monitors',
    shortDesc: 'Digital BP monitors, glucometers, nebulizers, pulse oximeters, and clinical thermometers.',
    fullDesc: 'Empowering health monitoring at home with certified clinical devices from trusted brands like Omron, Accu-Chek, Dr. Trust, and Beurer. Includes full demonstration and battery check on request.',
    iconName: 'Activity',
    itemCount: '250+ Devices & Strips',
    badge: 'Warranty Guaranteed',
    features: [
      'Digital Blood Pressure Monitors',
      'Blood Glucose Meters & Test Strips',
      'Compressor & Portable Nebulizers',
      'Infrared & Digital Thermometers'
    ]
  },
  {
    id: 'surgical-equipment',
    title: 'Surgical & Medical Supplies',
    shortDesc: 'Sterile cotton, gauze rolls, disposable syringes, orthopedic belts, and catheters.',
    fullDesc: 'Comprehensive surgical supplies catering to home post-operative care, dressing needs, orthopedic support, lumbar belts, knee caps, catheters, cannulas, and sterile clinical consumables.',
    iconName: 'Stethoscope',
    itemCount: '800+ Surgical Items',
    badge: 'Clinical Grade',
    features: [
      'Sterile Bandages, Gauze & Cotton Rolls',
      'Orthopedic Lumbar & Knee Supports',
      'Disposable Syringes & IV Sets',
      'Post-Surgical Home Care Accessories'
    ]
  },
  {
    id: 'baby-care',
    title: 'Baby Care & Essentials',
    shortDesc: 'Pediatric supplements, infant formula, diapers, gentle baby wipes, and lotion care.',
    fullDesc: 'Specialized care for infants and toddlers with dermatologist-tested baby cosmetics, hypoallergenic lotions, diapers, feeding bottles, grip water, and infant nutritional powders.',
    iconName: 'Baby',
    itemCount: '450+ Baby Care Items',
    badge: 'Dermatologist Tested',
    features: [
      'Infant Milk Formula & Baby Food',
      'Ultra-Absorbent Diapers & Wipes',
      'Gentle Baby Oils, Shampoos & Creams',
      'Pediatric Oral Drops & Teething Gel'
    ]
  },
  {
    id: 'supplements-nutrition',
    title: 'Supplements & Nutrition',
    shortDesc: 'Multivitamins, protein powders, calcium, fish oils, and daily stamina boosters.',
    fullDesc: 'Boost your vitality, joint health, and immunity with certified nutritional supplements, whey proteins, herbal health drinks, Ayurvedic tonics, and essential micronutrient capsules.',
    iconName: 'ShieldPlus',
    itemCount: '600+ Wellness Items',
    badge: 'Top Brands',
    features: [
      'Multivitamins & Mineral Supplements',
      'Whey & Plant Protein Powders',
      'Calcium, Vitamin D3 & Bone Health',
      'Immunity Boosters & Herbal Tonics'
    ]
  },
  {
    id: 'home-senior-care',
    title: 'Home & Senior Patient Care',
    shortDesc: 'Adult diapers, walking sticks, commode chairs, anti-bedsore mats, and hygiene aids.',
    fullDesc: 'Empowering elderly family members and bedridden patients with comfortable, high-absorption adult diapers, walking frames, wheel chairs, anti-bedsore air mattresses, and sanitation products.',
    iconName: 'HeartPulse',
    itemCount: '300+ Senior Care Items',
    badge: 'Compassionate Care',
    features: [
      'High-Absorbency Adult Diapers & Pants',
      'Walking Sticks, Quad Canes & Walkers',
      'Anti-Bedsore Air Mattresses & Pumps',
      'Commode Chairs & Bed Pans'
    ]
  },
  {
    id: 'personal-care-hygiene',
    title: 'Personal Care & Hygiene',
    shortDesc: 'Dermatological skincare, oral care, antiseptics, hair loss treatments, and hygiene.',
    fullDesc: 'Curated personal hygiene products including medicated soaps, anti-dandruff shampoos, oral care pastes, intimate washes, and prescription dermatological ointments.',
    iconName: 'Sparkles',
    itemCount: '900+ Personal Care Items',
    badge: 'Derm Approved',
    features: [
      'Medicated Skincare & Acne Washes',
      'Sensodyne & Oral Health Solutions',
      'Antiseptic Soaps & Hand Sanitizers',
      'Dermatological Hair Loss Treatments'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'genuine',
    title: '100% Genuine Medicines',
    desc: 'Directly sourced from authorized pharmaceutical distributors. Zero counterfeit or expired stock.',
    icon: 'ShieldCheck',
    color: 'emerald'
  },
  {
    id: 'pharmacists',
    title: 'Registered Pharmacists',
    desc: 'On-site qualified experts to cross-verify prescriptions, explain dosage schedules, and guide interactions.',
    icon: 'Award',
    color: 'blue'
  },
  {
    id: 'cold-chain',
    title: '24/7 Cold Chain Storage',
    desc: 'Dedicated refrigeration unit ensuring temperature-sensitive insulins and vaccines maintain 100% potency.',
    icon: 'ThermometerSnowflake',
    color: 'cyan'
  },
  {
    id: 'pricing',
    title: 'Affordable & Fair Prices',
    desc: 'Transparent MRP pricing with special seasonal discounts and monthly maintenance prescription savings.',
    icon: 'Tag',
    color: 'green'
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Ordering',
    desc: 'Simply send a photo of your prescription on WhatsApp (7870726402) for rapid order packing.',
    icon: 'MessageSquareText',
    color: 'emerald'
  },
  {
    id: 'delivery',
    title: 'Fast Local Delivery',
    desc: 'Prompt home delivery across Jehanabad town and express counter pickup for emergency patient needs.',
    icon: 'Truck',
    color: 'indigo'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Rahul Kumar',
    location: 'Gaya-Patna Rd, Jehanabad',
    rating: 5,
    date: '2 weeks ago',
    review: 'New Krishna Medical Hall is my go-to store for my father\'s monthly diabetic and BP medicines. They always have fresh stock and offer genuine medicines at fair rates. The WhatsApp ordering service is extremely convenient!',
    verified: true,
    avatarBg: 'bg-emerald-600'
  },
  {
    id: 'rev-2',
    name: 'Suman Verma',
    location: 'Main Market, Jehanabad',
    rating: 5,
    date: '1 month ago',
    review: 'Very professional behavior by the pharmacist. When my infant daughter needed a specific pediatric syrup late in the evening, they quickly made it available. Cold chain storage for insulin is also properly maintained.',
    verified: true,
    avatarBg: 'bg-blue-600'
  },
  {
    id: 'rev-3',
    name: 'Dr. A. K. Singh',
    location: 'Jehanabad Civil Hospital Rd',
    rating: 5,
    date: '3 weeks ago',
    review: 'Reliable pharmacy in Jehanabad. I frequently recommend my patients to purchase surgical items and prescribed antibiotic courses from New Krishna Medical Hall because of their commitment to 100% authentic medicines.',
    verified: true,
    avatarBg: 'bg-teal-600'
  },
  {
    id: 'rev-4',
    name: 'Priyanka Kumari',
    location: 'Court Area, Jehanabad',
    rating: 5,
    date: '2 months ago',
    review: 'Prompt home delivery service! I sent my mother\'s prescription on WhatsApp and within an hour the medicines were delivered to my door. Polite staff and clear computerized bill provided.',
    verified: true,
    avatarBg: 'bg-purple-600'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Ordering',
    question: 'How do I place a medicine order on WhatsApp?',
    answer: 'Ordering on WhatsApp is super easy! Simply click the "WhatsApp Order" button on our website or save our number 7870726402. Take a clear photo of your doctor\'s prescription, upload it in the WhatsApp chat along with your delivery address, and our pharmacist will verify stock, calculate the total amount, and arrange dispatch.'
  },
  {
    id: 'faq-2',
    category: 'Authenticity',
    question: 'Are all medicines sold at New Krishna Medical Hall genuine?',
    answer: 'Yes, 100%. We source all our medicines, health monitors, and surgical equipment directly from government-licensed stockists and accredited pharma brand distributors. We never deal with untrusted channels or unverified suppliers.'
  },
  {
    id: 'faq-3',
    category: 'Storage',
    question: 'How do you store temperature-sensitive items like Insulin & Vaccines?',
    answer: 'We maintain continuous 24/7 refrigeration systems with power backup specifically calibrated for temperature-sensitive biopharmaceuticals, insulins, vaccines, and eye drops between 2°C and 8°C.'
  },
  {
    id: 'faq-4',
    category: 'Stock',
    question: 'Can I check if my prescribed medicine is available before visiting?',
    answer: 'Yes! Use our live "Medicine Stock Checker" tool on the website or send us a quick WhatsApp query. Our staff will immediately confirm item status, price, and batch availability.'
  },
  {
    id: 'faq-5',
    category: 'Prescription Policy',
    question: 'Is a doctor\'s prescription required for all medicines?',
    answer: 'A valid doctor\'s prescription is strictly mandatory for Schedule H and Schedule H1 prescription drugs (like antibiotics, psychiatric meds, steroid pills, and heavy painkillers). General OTC items like paracetamol, band-aids, ORS, and baby products do not require a prescription.'
  },
  {
    id: 'faq-6',
    category: 'Delivery',
    question: 'Do you offer home delivery in Jehanabad?',
    answer: 'Yes, we provide local home delivery across Jehanabad city and immediate surrounding areas. Express dispatch is available for elderly patients and urgent medical needs.'
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: 'tip-1',
    title: '5 Essential Rules for Storing Medicines at Home safely',
    category: 'Medicine Safety',
    readTime: '3 min read',
    summary: 'Improper storage can degrade active pharmaceutical ingredients. Learn how to keep your family safe.',
    content: 'Always store medicines in a cool, dry place away from direct sunlight, moisture, and high temperatures. Avoid storing pills in bathroom cabinets where humidity rises. Keep temperature-sensitive items like insulin in the middle shelf of your refrigerator (not the freezer!). Always double-check expiration dates before taking any pill.',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tip-2',
    title: 'How to Accurate Measure Blood Pressure at Home',
    category: 'Health Monitoring',
    readTime: '4 min read',
    summary: 'Simple steps to get precise digital BP readings using your home monitor.',
    content: 'Rest quietly for 5 minutes before taking a reading. Sit upright with your back supported and feet flat on the floor. Rest your arm on a table so the cuff sits at heart level. Avoid caffeine, exercise, and smoking 30 minutes prior. Take two readings 1 minute apart and record the average in your logbook.',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tip-3',
    title: 'Why Completing Your Full Antibiotic Course is Critical',
    category: 'Prescription Guide',
    readTime: '3 min read',
    summary: 'Stopping antibiotics early leads to drug resistance and bacterial relapse.',
    content: 'Even if your fever subsides and symptoms improve after two days, continuing your antibiotic regimen as prescribed by your physician is non-negotiable. Stopping early allows surviving, stronger bacteria to multiply, leading to antibiotic resistance that makes future infections far harder to cure.',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Modern Organized Medicine Counter',
    category: 'storefront',
    imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1200',
    description: 'Neatly arranged prescription counter and customer waiting space at New Krishna Medical Hall.'
  },
  {
    id: 'gal-2',
    title: 'Comprehensive Medicine Racks & Stock',
    category: 'medicines',
    imageUrl: 'https://images.unsplash.com/photo-1631549912613-2051670f5e71?auto=format&fit=crop&q=80&w=1200',
    description: 'Systematically cataloged pharmaceutical racks ensuring fast retrieval and accurate dispensing.'
  },
  {
    id: 'gal-3',
    title: 'Digital Health Devices & Monitors',
    category: 'devices',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    description: 'Digital blood pressure machines, glucometers, and clinical diagnostic instruments.'
  },
  {
    id: 'gal-4',
    title: 'Baby Care & Nutrition Display',
    category: 'babycare',
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=1200',
    description: 'Dermatologist approved baby skin lotions, formulas, and soft diaper supplies.'
  },
  {
    id: 'gal-5',
    title: 'Surgical Bandages & Ortho Supports',
    category: 'surgical',
    imageUrl: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=1200',
    description: 'Sterile surgical dressings, orthopedic knee caps, belts, and clinical consumables.'
  },
  {
    id: 'gal-6',
    title: 'Refrigerated Cold Chain Storage Unit',
    category: 'medicines',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200',
    description: 'Dedicated 2°C - 8°C pharmaceutical refrigerator for insulins, vaccines, and eye drops.'
  }
];

export const TIMELINE_EVENTS = [
  {
    year: '2012',
    title: 'Foundation of New Krishna Medical Hall',
    description: 'Established on Gaya - Patna Main Road in Jehanabad with a core goal of providing 100% genuine and affordable medicines to local families.'
  },
  {
    year: '2016',
    title: 'Cold Chain & Surgical Expansion',
    description: 'Installed state-of-the-art cold storage systems for insulins and vaccines, and introduced a complete line of clinical surgical equipment.'
  },
  {
    year: '2020',
    title: 'Pandemic Community Response',
    description: 'Operated round-the-clock during health emergencies to supply masks, sanitizers, oxygen accessories, and life-saving medications without price inflation.'
  },
  {
    year: '2023',
    title: 'WhatsApp & Digital Desk Launch',
    description: 'Pioneered instant WhatsApp prescription ordering and local home delivery across Jehanabad for elderly patients and chronic care management.'
  },
  {
    year: 'Present',
    title: 'Trusted Local Healthcare Leader',
    description: 'Serving over 50,000+ satisfied customers with an expanded digital stock checker and dedicated multi-category healthcare essentials.'
  }
];
