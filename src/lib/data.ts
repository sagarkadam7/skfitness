export const siteConfig = {
  name: "SK Fitness",
  coach: "Sagar Kadam",
  tagline: "Transform Your Body. Transform Your Life.",
  description:
    "Premium online fitness coaching by Sagar Kadam — personalized training, nutrition plans, and weekly accountability for real, lasting results.",
  email: "sagarkadam8081@gmail.com",
  phone: "+91 80104 77969",
  whatsapp: "918010477969",
  location: "Online Coaching · Worldwide",
  social: {
    instagram: "https://instagram.com/sagar.kadam.fitness",
    youtube: "https://youtube.com/@skfitness",
    linkedin: "https://linkedin.com/in/sagarkadam",
  },
  images: {
    hero: "/coach/sagar-hero.png",
    coach: "/coach/sagar-coach-original.png",
  },
};

export const stats = [
  { value: "50+", label: "Clients Transformed" },
  { value: "4+", label: "Years Experience" },
  { value: "90%", label: "Client Retention" },
  { value: "4.9★", label: "Average Rating" },
];

export const programs = [
  {
    id: "weight-loss",
    title: "Fat Loss & Body Recomposition",
    description:
      "Science-backed fat loss with strength training. Lose fat, keep muscle, and build sustainable habits.",
    icon: "flame",
    features: ["Custom macro plan", "3–5 workouts/week", "Weekly check-ins", "Habit tracking"],
  },
  {
    id: "muscle",
    title: "Muscle Building & Strength",
    description:
      "Progressive overload programs designed for hypertrophy and strength gains at any experience level.",
    icon: "dumbbell",
    features: ["Periodized training", "Form video reviews", "Progress tracking", "Supplement guide"],
  },
  {
    id: "online",
    title: "1-on-1 Online Coaching",
    description:
      "Fully personalized coaching with direct access to Sagar — your plan, your pace, your results.",
    icon: "video",
    features: ["Daily messaging", "Video form checks", "Bi-weekly calls", "Priority support"],
  },
  {
    id: "nutrition",
    title: "Nutrition & Lifestyle",
    description:
      "Flexible meal plans that fit your life — no extreme diets, just smart nutrition you can stick to.",
    icon: "apple",
    features: ["Macro-based meals", "Grocery lists", "Restaurant guides", "Recipe library"],
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "₹1,999",
    period: "/month",
    description: "Perfect for self-motivated individuals ready to commit.",
    popular: false,
    features: [
      "Custom workout program",
      "Basic nutrition guidelines",
      "Weekly check-in form",
      "App-based workout tracking",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "₹4,999",
    period: "/month",
    description: "Our most popular plan — full coaching with accountability.",
    popular: true,
    features: [
      "Everything in Starter",
      "Personalized meal plan",
      "Bi-weekly video calls",
      "WhatsApp coaching support",
      "Progress photo reviews",
      "Program adjustments monthly",
    ],
    cta: "Start Premium",
  },
  {
    name: "Elite",
    price: "₹8,999",
    period: "/month",
    description: "White-glove coaching for maximum transformation.",
    popular: false,
    features: [
      "Everything in Premium",
      "Daily WhatsApp access",
      "Weekly 1-on-1 video calls",
      "Custom supplement protocol",
      "Priority response (< 2 hrs)",
      "Dedicated progress dashboard",
    ],
    cta: "Apply for Elite",
  },
];

export const pricingOffers = [
  {
    id: "starter-3m",
    name: "Starter · 3 Months",
    duration: "3 months",
    totalPrice: "₹4,999",
    perMonth: "₹1,666/mo",
    originalTotal: "₹5,997",
    savings: "Save ₹998",
    badge: "Best to Try",
    plan: "Starter",
    highlight: false,
    features: ["Full Starter access", "One program revision", "Weekly check-ins included"],
  },
  {
    id: "premium-3m",
    name: "Premium · 3 Months",
    duration: "3 months",
    totalPrice: "₹12,999",
    perMonth: "₹4,333/mo",
    originalTotal: "₹14,997",
    savings: "Save ₹1,998",
    badge: "Most Popular",
    plan: "Premium",
    highlight: true,
    features: ["Full Premium coaching", "2 program overhauls", "Priority WhatsApp support"],
  },
  {
    id: "premium-6m",
    name: "Premium · 6 Months",
    duration: "6 months",
    totalPrice: "₹24,999",
    perMonth: "₹4,166/mo",
    originalTotal: "₹29,994",
    savings: "Save ₹4,995",
    badge: "Best Value",
    plan: "Premium",
    highlight: false,
    features: ["Full Premium coaching", "Unlimited program tweaks", "Bonus nutrition reset at month 3"],
  },
  {
    id: "elite-3m",
    name: "Elite · 3 Months",
    duration: "3 months",
    totalPrice: "₹22,999",
    perMonth: "₹7,666/mo",
    originalTotal: "₹26,997",
    savings: "Save ₹3,998",
    badge: "Full Transformation",
    plan: "Elite",
    highlight: false,
    features: ["Full Elite access", "Weekly video calls", "Before/after photoshoot guide"],
  },
  {
    id: "premium-12m",
    name: "Premium · 12 Months",
    duration: "12 months",
    totalPrice: "₹44,999",
    perMonth: "₹3,749/mo",
    originalTotal: "₹59,988",
    savings: "Save ₹14,989",
    badge: "Annual Champion",
    plan: "Premium",
    highlight: false,
    features: ["Full year of Premium", "Seasonal program cycles", "Lowest monthly rate"],
  },
];

export const transformations = [
  {
    name: "Rahul M.",
    goal: "Lost 18 kg in 5 months",
    quote: "Sagar's program changed my relationship with food and training forever.",
    before: "92 kg",
    after: "74 kg",
    duration: "5 months",
    beforeImage: "/transformations/rahul-before.jpg",
    afterImage: "/transformations/rahul-after.jpg",
  },
  {
    name: "Priya S.",
    goal: "Built lean muscle & strength",
    quote: "I finally feel strong and confident. The check-ins kept me accountable every week.",
    before: "Beginner",
    after: "Deadlift 80 kg",
    duration: "6 months",
    beforeImage: "/transformations/priya-before.jpg",
    afterImage: "/transformations/priya-after.jpg",
  },
  {
    name: "Arjun K.",
    goal: "Corporate wellness transformation",
    quote: "Flexible plans that fit my travel schedule. Down 12 kg while gaining energy.",
    before: "88 kg",
    after: "76 kg",
    duration: "4 months",
    beforeImage: "/transformations/arjun-before.jpg",
    afterImage: "/transformations/arjun-after.jpg",
  },
  {
    name: "Neha R.",
    goal: "Post-pregnancy fitness",
    quote: "Safe, progressive programming that respected my recovery. I feel like myself again.",
    before: "Post-partum",
    after: "Fit & strong",
    duration: "8 months",
    beforeImage: "/transformations/neha-before.jpg",
    afterImage: "/transformations/neha-after.jpg",
  },
];

export const testimonials = [
  {
    name: "Vikram T.",
    role: "Software Engineer, Bangalore",
    rating: 5,
    text: "The weekly check-ins and personalized adjustments made all the difference. I've tried apps before — nothing compares to having a real coach who knows your story.",
  },
  {
    name: "Ananya P.",
    role: "Entrepreneur, Mumbai",
    rating: 5,
    text: "Sagar doesn't just give you a plan — he teaches you how to think about fitness for life. Lost 15 kg and kept it off for over a year now.",
  },
  {
    name: "Karan D.",
    role: "College Student, Pune",
    rating: 5,
    text: "Affordable, professional, and genuinely cares. The WhatsApp support during workouts is a game-changer for form corrections.",
  },
  {
    name: "Meera J.",
    role: "Doctor, Hyderabad",
    rating: 5,
    text: "As a doctor I appreciate evidence-based coaching. Sagar's approach is sustainable, not crash-diet nonsense. Highly recommend Premium plan.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Free Discovery Call",
    description:
      "Book a 30-minute consultation. We discuss your goals, history, lifestyle, and whether we're a good fit.",
  },
  {
    step: "02",
    title: "Custom Program Design",
    description:
      "Receive a personalized training and nutrition plan built around your equipment, schedule, and preferences.",
  },
  {
    step: "03",
    title: "Train & Track Progress",
    description:
      "Follow your plan via our coaching app. Log workouts, meals, and weekly check-ins with photos and metrics.",
  },
  {
    step: "04",
    title: "Iterate & Transform",
    description:
      "Weekly reviews, program adjustments, and ongoing support until you hit — and maintain — your goals.",
  },
];

export const faqs = [
  {
    question: "Who is online coaching best for?",
    answer:
      "Anyone with a gym or home setup who wants expert guidance without in-person sessions. Ideal for busy professionals, remote workers, and anyone who prefers flexible scheduling across time zones.",
  },
  {
    question: "What equipment do I need?",
    answer:
      "Programs are customized to what you have — full gym, home dumbbells, or bodyweight only. We design around your setup during onboarding.",
  },
  {
    question: "How do weekly check-ins work?",
    answer:
      "Every week you submit weight, progress photos, workout adherence, and a short questionnaire. I review within 24 hours and adjust your plan as needed.",
  },
  {
    question: "Can I pause or cancel my plan?",
    answer:
      "Starter and Premium plans are month-to-month. Elite requires a 3-month commitment. You can pause for travel or medical reasons with 7 days notice.",
  },
  {
    question: "Do you offer nutrition-only coaching?",
    answer:
      "Yes. Nutrition & Lifestyle plans are available standalone or bundled with training. All plans include macro-based meal guidance — no fad diets.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "If you're not satisfied after your first 14 days on Premium or Elite, I'll refund your first month — no questions asked.",
  },
];

export const credentials = [
  "Certified Personal Trainer (ACE)",
  "Sports Nutrition Specialist",
  "50+ Clients Coached Online",
  "Strength & Conditioning Coach",
];
