import type { AstroGlobal } from 'astro';

// Translation interface for type safety
export interface Translation {
  // Navigation
  nav: {
    home: string;
    features: string;
    classes: string;
    testimonials: string;
    pricing: string;
    getStarted: string;
  };

  // Hero section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustedBy: string;
  };

  // Features
  features: {
    title: string;
    subtitle: string;
    badge: string;
    aiTitle: string;
    aiDescription: string;
    aiBadge1: string;
    aiBadge2: string;
    liveTitle: string;
    liveDescription: string;
    liveBadge1: string;
    liveBadge2: string;
    progressTitle: string;
    progressDescription: string;
    progressBadge1: string;
    progressBadge2: string;
    meditationTitle: string;
    meditationDescription: string;
    meditationBadge1: string;
    meditationBadge2: string;
    nutritionTitle: string;
    nutritionDescription: string;
    nutritionBadge1: string;
    nutritionBadge2: string;
    communityTitle: string;
    communityDescription: string;
    communityBadge1: string;
    communityBadge2: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };

  // Classes
  classes: {
    title: string;
    subtitle: string;
    liveClasses: string;
    allClasses: string;
    beginner: string;
    intermediate: string;
    advanced: string;
    meditation: string;
    todaySchedule: string;
    weekSchedule: string;
    joinClass: string;
    reserveSpot: string;
    setReminder: string;
    book: string;
    // Table headers
    day: string;
    class: string;
    instructor: string;
    time: string;
    duration: string;
    level: string;
    action: string;
    // Days of week
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
    // Class specific translations
    students: string;
    liveNow: string;
    inHours: string;
    inMinutes: string;
    allLevels: string;
    // Class names
    sunriseFlow: string;
    powerYoga: string;
    eveningMeditation: string;
    gentleHatha: string;
    vinyasaFlow: string;
    yinYoga: string;
    ashtanga: string;
    restorativeYoga: string;
    // Instructor names
    sarahChen: string;
    mikeJohnson: string;
    emmaWilson: string;
    davidLee: string;
    // Class descriptions
    perfectForBeginners: string;
    forSeriousPractitioners: string;
    forEnthusiastsTeachers: string;
    // FAQ
    faq: {
      cancel: string;
      cancelAnswer: string;
      trial: string;
      trialAnswer: string;
      equipment: string;
      equipmentAnswer: string;
      levels: string;
      levelsAnswer: string;
    };
  };

  // Testimonials
  testimonials: {
    title: string;
    subtitle: string;
    successStories: string;
    stats: {
      members: string;
      rating: string;
      classes: string;
      retention: string;
    };
    featured: {
      name: string;
      memberSince: string;
      testimonial: string;
      badges: {
        weightLoss: string;
        flexibility: string;
        mindfulness: string;
      };
    };
    members: {
      robert: {
        name: string;
        profession: string;
        testimonial: string;
        duration: string;
      };
      amanda: {
        name: string;
        profession: string;
        testimonial: string;
        duration: string;
      };
      marcus: {
        name: string;
        profession: string;
        testimonial: string;
        duration: string;
      };
      lisa: {
        name: string;
        profession: string;
        testimonial: string;
        duration: string;
      };
      david: {
        name: string;
        profession: string;
        testimonial: string;
        duration: string;
      };
      rachel: {
        name: string;
        profession: string;
        testimonial: string;
        duration: string;
      };
    };
    asFeaturedIn: string;
    featuredIn: {
      yogaJournal: string;
      mindful: string;
      wellGood: string;
      healthMagazine: string;
      techCrunch: string;
    };
  };

  // Pricing
  pricing: {
    title: string;
    subtitle: string;
    monthly: string;
    annual: string;
    save: string;
    saveWithAnnual: string;
    mostPopular: string;
    plans: {
      free: string;
      pro: string;
      premium: string;
    };
    descriptions: {
      free: string;
      pro: string;
      premium: string;
    };
    prices: {
      free: string;
      proMonthly: string;
      proAnnual: string;
      premiumMonthly: string;
      premiumAnnual: string;
    };
    buttons: {
      getStartedFree: string;
      startFreeTrial: string;
      contactSales: string;
    };
    features: {
      basicClasses: string;
      progressTracking: string;
      community: string;
      mobileAccess: string;
      liveClasses: string;
      aiRecommendations: string;
      advancedAnalytics: string;
      downloadable: string;
      prioritySupport: string;
      coaching: string;
      mealPlans: string;
      workshops: string;
      certification: string;
      vipSupport: string;
    };
    faq: {
      title: string;
      cancel: string;
      cancelAnswer: string;
      trial: string;
      trialAnswer: string;
      equipment: string;
      equipmentAnswer: string;
      levels: string;
      levelsAnswer: string;
    };
  };

  // CTA
  cta: {
    title: string;
    subtitle: string;
    firstName: string;
    lastName: string;
    email: string;
    experience: string;
    goals: string;
    termsAgree: string;
    submit: string;
    downloadApp: string;
    browseClasses: string;
  };

  // Video Modal
  videoModal: {
    title: string;
    description: string;
    iframeTitle: string;
    close: string;
    startTrial: string;
  };

  // Footer
  footer: {
    about: string;
    contact: string;
    careers: string;
    pressKit: string;
    copyright: string;
    rights: string;
  };

  // Careers
  careers: {
    title: string;
    description: string;
    joinOurTeam: string;
    subtitle: string;
    viewPositions: string;
    learnMore: string;
    whyWorkHere: string;
    whyWorkHereDesc: string;
    benefits: {
      health: string;
      healthDesc: string;
      growth: string;
      growthDesc: string;
      team: string;
      teamDesc: string;
      innovation: string;
      innovationDesc: string;
      flexibility: string;
      flexibilityDesc: string;
      competitive: string;
      competitiveDesc: string;
    };
    openPositions: string;
    positionsDesc: string;
    salary: string;
    applyNow: string;
    noPositions: string;
    spontaneousApplication: string;
    applicationProcess: string;
    processDesc: string;
    process: {
      apply: {
        title: string;
        description: string;
      };
      review: {
        title: string;
        description: string;
      };
      interview: {
        title: string;
        description: string;
      };
      offer: {
        title: string;
        description: string;
      };
    };
    positions: {
      seniorYogaInstructor: {
        title: string;
        type: string;
        location: string;
        experience: string;
        description: string;
        salary: string;
      };
      fullstackDeveloper: {
        title: string;
        type: string;
        location: string;
        experience: string;
        description: string;
        salary: string;
      };
      marketingManager: {
        title: string;
        type: string;
        location: string;
        experience: string;
        description: string;
        salary: string;
      };
    };
    readyToJoin: string;
    readyToJoinDesc: string;
  };

  // Press Kit
  pressKit: {
    title: string;
    description: string;
    mediaResources: string;
    subtitle: string;
    downloadAssets: string;
    contactUs: string;
    companyOverview: string;
    companyOverviewDesc: string;
    stats: {
      users: string;
      rating: string;
      classes: string;
      instructors: string;
    };
    story: {
      title: string;
      content: string;
      mission: string;
    };
    brandAssets: string;
    brandAssetsDesc: string;
    assets: {
      logo: string;
      logoDesc: string;
      colors: string;
      colorsDesc: string;
      primary: string;
      secondary: string;
      accent: string;
      screenshots: string;
      screenshotsDesc: string;
      downloadAll: string;
    };
    mediaDownloads: string;
    mediaDownloadsDesc: string;
    downloads: {
      pressRelease: string;
      latestNews: string;
      download: string;
      executiveBio: string;
      teamPhotos: string;
    };
    contactInfo: string;
    contactInfoDesc: string;
    contact: {
      media: string;
      partnerships: string;
    };
    forImmediateRelease: string;
    available247: string;
    guidelines: {
      title: string;
      subtitle: string;
      logoUsage: {
        title: string;
        content: string;
        rule1: string;
        rule2: string;
        rule3: string;
      };
      attributions: {
        title: string;
        content: string;
      };
    };
    readyToShare: string;
    readyToShareDesc: string;
  };

  // Common
  common: {
    loading: string;
    error: string;
    success: string;
    close: string;
    menu: string;
    language: string;
    theme: {
      light: string;
      dark: string;
      system: string;
    };
  };
}

// Translation data for all languages
const translations: Record<string, Translation> = {
  en: {
    nav: {
      home: "Home",
      features: "Features",
      classes: "Classes",
      testimonials: "Testimonials",
      pricing: "Pricing",
      getStarted: "Get Started",
    },
    hero: {
      title: "Transform Your Life With Joga",
      subtitle: "AI-Powered Yoga for Modern Living",
      description: "Experience personalized yoga sessions powered by artificial intelligence. Join thousands who are transforming their minds and bodies.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Watch Demo",
      trustedBy: "Trusted by 50,000+ practitioners worldwide",
    },
    features: {
      title: "Smart Yoga Experience",
      subtitle: "Discover cutting-edge features powered by AI and designed for your wellness journey",
      badge: "Modern Features",
      aiTitle: "AI-Powered Personalization",
      aiDescription: "Get customized yoga routines based on your goals, fitness level, and preferences. Our AI learns and adapts to your progress.",
      aiBadge1: "Adaptive Learning",
      aiBadge2: "Smart Recommendations",
      liveTitle: "Live Interactive Classes",
      liveDescription: "Join live classes with certified instructors from around the world. Real-time feedback and community support.",
      liveBadge1: "HD Quality",
      liveBadge2: "2-Way Audio",
      progressTitle: "Advanced Progress Analytics",
      progressDescription: "Track your progress with detailed analytics, pose accuracy scoring, and personalized insights for improvement.",
      progressBadge1: "Real-time Stats",
      progressBadge2: "Goals Tracking",
      meditationTitle: "Guided Meditation",
      meditationDescription: "Access hundreds of guided meditation sessions for stress relief, better sleep, and mindfulness practice.",
      meditationBadge1: "Sleep Stories",
      meditationBadge2: "Breathing Exercises",
      nutritionTitle: "Nutrition Guidance",
      nutritionDescription: "Get personalized meal plans and nutrition tips that complement your yoga practice for optimal wellness.",
      nutritionBadge1: "Meal Plans",
      nutritionBadge2: "Recipe Library",
      communityTitle: "Community Support",
      communityDescription: "Connect with fellow yoga enthusiasts, share experiences, and grow together in our supportive community.",
      communityBadge1: "Forums",
      communityBadge2: "Challenges",
      ctaTitle: "Ready to Transform Your Practice?",
      ctaDescription: "Join thousands of users who have already discovered the benefits of AI-powered yoga",
      ctaButton: "Start Your Journey",
    },
    classes: {
      title: "Join Our Live Classes",
      subtitle: "Practice with world-class instructors in real-time",
      liveClasses: "Live Classes",
      allClasses: "All Classes",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      meditation: "Meditation",
      todaySchedule: "Today's Schedule",
      weekSchedule: "This Week's Schedule",
      joinClass: "Join Class",
      reserveSpot: "Reserve Spot",
      setReminder: "Set Reminder",
      book: "Book",
      // Table headers
      day: "Day",
      class: "Class",
      instructor: "Instructor",
      time: "Time",
      duration: "Duration",
      level: "Level",
      action: "Action",
      // Days of week
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      // Class specific translations
      students: "Students",
      liveNow: "Live Now",
      inHours: "In {{hours}} hours",
      inMinutes: "In {{minutes}} minutes",
      allLevels: "All Levels",
      // Class names
      sunriseFlow: "Sunrise Flow",
      powerYoga: "Power Yoga",
      eveningMeditation: "Evening Meditation",
      gentleHatha: "Gentle Hatha",
      vinyasaFlow: "Vinyasa Flow",
      yinYoga: "Yin Yoga",
      ashtanga: "Ashtanga",
      restorativeYoga: "Restorative Yoga",
      // Instructor names
      sarahChen: "Sarah Chen",
      mikeJohnson: "Mike Johnson",
      emmaWilson: "Emma Wilson",
      davidLee: "David Lee",
      // Class descriptions
      perfectForBeginners: "Perfect for getting started",
      forSeriousPractitioners: "For serious yoga practitioners",
      forEnthusiastsTeachers: "For yoga enthusiasts and teachers",
      // FAQ
      faq: {
        cancel: "Can I cancel my subscription anytime?",
        cancelAnswer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.",
        trial: "Is there a free trial?",
        trialAnswer: "Yes! All paid plans come with a 7-day free trial. No credit card required for the Free plan.",
        equipment: "What equipment do I need?",
        equipmentAnswer: "To get started, you just need a yoga mat. As you progress, you might want to add props like blocks, straps, or blankets, but these are optional.",
        levels: "Are there different levels for beginners?",
        levelsAnswer: "Absolutely! We have classes ranging from complete beginners to advanced practitioners. Our AI will recommend the perfect starting point for you.",
      },
    },
    testimonials: {
      title: "Community Love",
      subtitle: "Hear from our members about their transformative journeys",
      successStories: "Success Stories",
      stats: {
        members: "Happy Members",
        rating: "Average Rating",
        classes: "Classes Completed",
        retention: "Retention Rate",
      },
      featured: {
        name: "Jessica Martinez",
        memberSince: "Member since 2023",
        testimonial: "Joga has completely transformed my life. I started as a complete beginner and now I'm practicing advanced poses I never thought possible. The AI-powered personalization keeps me motivated and the live classes make me feel connected to a wonderful community. I've lost 20 pounds, gained so much flexibility, and most importantly, found inner peace.",
        badges: {
          weightLoss: "Weight Loss Journey",
          flexibility: "Flexibility Gained",
          mindfulness: "Mindfulness Practice",
        },
      },
      members: {
        robert: {
          name: "Robert Chen",
          profession: "Software Engineer",
          testimonial: "Perfect for my busy schedule. The 30-minute classes fit perfectly into my lunch breaks, and I've noticed significant improvement in my posture and stress levels.",
          duration: "3 months with Joga",
        },
        amanda: {
          name: "Amanda Foster",
          profession: "Teacher & Mother",
          testimonial: "The meditation sessions have been life-changing. I'm more present with my students and family. The app makes it so easy to squeeze in self-care.",
          duration: "6 months with Joga",
        },
        marcus: {
          name: "Marcus Thompson",
          profession: "Retired Athlete",
          testimonial: "As a former athlete, I needed something that challenged me physically. The advanced classes and progress tracking keep me motivated to push my limits.",
          duration: "1 year with Joga",
        },
        lisa: {
          name: "Lisa Park",
          profession: "Marketing Director",
          testimonial: "Great variety of classes and instructors. The app is user-friendly and the community is so supportive. Only wish they had more advanced workshops.",
          duration: "2 months with Joga",
        },
        david: {
          name: "David Kumar",
          profession: "Medical Student",
          testimonial: "The stress relief from yoga has improved my focus during studies. The AI recommendations perfectly match my energy levels and study schedule.",
          duration: "4 months with Joga",
        },
        rachel: {
          name: "Rachel Green",
          profession: "Freelance Designer",
          testimonial: "As someone with back pain from sitting all day, the targeted yoga programs have been incredibly helpful. I feel stronger and more flexible than ever.",
          duration: "8 months with Joga",
        },
      },
      asFeaturedIn: "As featured in:",
      featuredIn: {
        yogaJournal: "Yoga Journal",
        mindful: "Mindful",
        wellGood: "Well+Good",
        healthMagazine: "Health Magazine",
        techCrunch: "TechCrunch",
      },
    },
    pricing: {
      title: "Choose Your Path",
      subtitle: "Start free, upgrade when you're ready. No hidden fees, cancel anytime.",
      monthly: "Monthly",
      annual: "Annual (Save 20%)",
      save: "Save",
      saveWithAnnual: "Save ${{amount}} with annual billing",
      mostPopular: "MOST POPULAR",
      plans: {
        free: "Free",
        pro: "Pro",
        premium: "Premium",
      },
      descriptions: {
        free: "Perfect for getting started",
        pro: "For serious yoga practitioners",
        premium: "For yoga enthusiasts and teachers",
      },
      prices: {
        free: "$0",
        proMonthly: "$19.99",
        proAnnual: "$15.99",
        premiumMonthly: "$39.99",
        premiumAnnual: "$31.99",
      },
      buttons: {
        getStartedFree: "Get Started Free",
        startFreeTrial: "Start Free Trial",
        contactSales: "Contact Sales",
      },
      features: {
        basicClasses: "Access to 50+ basic classes",
        progressTracking: "Basic progress tracking",
        community: "Community forums",
        mobileAccess: "Mobile app access",
        liveClasses: "Unlimited live classes",
        aiRecommendations: "AI-powered personalization",
        advancedAnalytics: "Advanced progress analytics",
        downloadable: "Downloadable content",
        prioritySupport: "Priority support",
        coaching: "1-on-1 coaching sessions",
        mealPlans: "Custom meal plans",
        workshops: "Exclusive workshops",
        certification: "Teacher certification prep",
        vipSupport: "VIP support",
      },
      faq: {
        title: "Frequently Asked Questions",
        cancel: "Can I cancel my subscription anytime?",
        cancelAnswer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.",
        trial: "Is there a free trial?",
        trialAnswer: "Yes! All paid plans come with a 7-day free trial. No credit card required for the Free plan.",
        equipment: "What equipment do I need?",
        equipmentAnswer: "To get started, you just need a yoga mat. As you progress, you might want to add props like blocks, straps, or blankets, but these are optional.",
        levels: "Are there different levels for beginners?",
        levelsAnswer: "Absolutely! We have classes ranging from complete beginners to advanced practitioners. Our AI will recommend the perfect starting point for you.",
      },
    },
    cta: {
      title: "Begin Your Journey",
      subtitle: "Join thousands of people transforming their lives with Joga. Start your free trial today.",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      experience: "Experience Level",
      goals: "Primary Goals",
      termsAgree: "I agree to the {terms} and {privacy}",
      submit: "Start My 7-Day Free Trial",
      downloadApp: "Download App",
      browseClasses: "Browse Classes",
    },
    videoModal: {
      title: "Watch Joga in Action",
      description: "See how AI-powered yoga can transform your wellness journey with personalized classes and expert instructors.",
      iframeTitle: "Joga Platform Demo Video",
      close: "Close",
      startTrial: "Start Free Trial",
    },
    footer: {
      about: "About us",
      contact: "Contact",
      careers: "Careers",
      pressKit: "Press Kit",
      copyright: "Copyright © {year} - All rights reserved by",
      rights: "Joga Inc.",
    },
    careers: {
      title: "Careers at Joga",
      description: "Join our team and transform lives through yoga and wellness",
      joinOurTeam: "Join Our Team",
      subtitle: "Be part of something bigger. Help people transform their lives through the power of yoga and AI technology.",
      viewPositions: "View Open Positions",
      learnMore: "Learn More",
      whyWorkHere: "Why Work With Us",
      whyWorkHereDesc: "We're more than just a wellness platform. We're a team passionate about making yoga accessible to everyone through innovative technology.",
      benefits: {
        health: "Health & Wellness",
        healthDesc: "Comprehensive health insurance, free yoga classes, and wellness stipend",
        growth: "Professional Growth",
        growthDesc: "Continuous learning opportunities, career development programs, and mentorship",
        team: "Amazing Team",
        teamDesc: "Work with passionate, talented individuals who share your vision",
        innovation: "Innovation",
        innovationDesc: "Be at the forefront of AI-powered wellness technology",
        flexibility: "Work Flexibility",
        flexibilityDesc: "Remote work options, flexible hours, and work-life balance",
        competitive: "Competitive Compensation",
        competitiveDesc: "Competitive salary, equity options, and performance bonuses",
      },
      openPositions: "Open Positions",
      positionsDesc: "We're always looking for talented individuals to join our team.",
      salary: "Salary Range",
      applyNow: "Apply Now",
      noPositions: "Don't see a position that fits? We're always interested in meeting passionate people.",
      spontaneousApplication: "Send Spontaneous Application",
      applicationProcess: "Application Process",
      processDesc: "Our hiring process is designed to be thorough, transparent, and respectful of your time.",
      process: {
        apply: {
          title: "Apply Online",
          description: "Submit your application and we'll review it within 5 business days",
        },
        review: {
          title: "Initial Review",
          description: "Our team reviews your application and background",
        },
        interview: {
          title: "Interviews",
          description: "Meet with team members and showcase your skills",
        },
        offer: {
          title: "Offer & Onboarding",
          description: "Receive offer and join our amazing team",
        },
      },
      positions: {
        seniorYogaInstructor: {
          title: "Senior Yoga Instructor",
          type: "Full-time",
          location: "Remote / Hybrid",
          experience: "5+ years",
          description: "Lead yoga classes, develop curriculum, and mentor other instructors. Help shape the future of AI-powered yoga instruction.",
          salary: "$60,000 - $85,000",
        },
        fullstackDeveloper: {
          title: "Full-Stack Developer",
          type: "Full-time",
          location: "Remote",
          experience: "3+ years",
          description: "Build and maintain our web platform, implement AI features, and create amazing user experiences.",
          salary: "$80,000 - $120,000",
        },
        marketingManager: {
          title: "Marketing Manager",
          type: "Full-time",
          location: "Remote",
          experience: "4+ years",
          description: "Lead marketing campaigns, manage social media, and grow our community of yoga enthusiasts.",
          salary: "$65,000 - $90,000",
        },
      },
      readyToJoin: "Ready to Transform Lives?",
      readyToJoinDesc: "Join us in our mission to make yoga accessible to everyone through innovative technology.",
    },
    pressKit: {
      title: "Press Kit",
      description: "Media resources and brand assets for Joga",
      mediaResources: "Media Resources",
      subtitle: "Welcome to the Joga press kit. Here you'll find everything you need to cover our story, from brand assets to company information.",
      downloadAssets: "Download Assets",
      contactUs: "Contact Us",
      companyOverview: "Company Overview",
      companyOverviewDesc: "Get to know Joga - the AI-powered yoga platform transforming wellness worldwide.",
      stats: {
        users: "Active Users",
        rating: "App Rating",
        classes: "Classes Available",
        instructors: "Expert Instructors",
      },
      story: {
        title: "Our Story",
        content: "Founded in 2024, Joga emerged from a simple observation: while yoga has transformative power, access to quality instruction remains limited. We combined ancient wisdom with cutting-edge AI technology to create personalized yoga experiences that adapt to your unique journey.",
        mission: "Our mission is to make quality yoga instruction accessible to everyone, everywhere, through the power of artificial intelligence.",
      },
      brandAssets: "Brand Assets",
      brandAssetsDesc: "Download our official logos, colors, and screenshots to use in your coverage.",
      assets: {
        logo: "Logo",
        logoDesc: "Official Joga logos in various formats and sizes",
        colors: "Brand Colors",
        colorsDesc: "Our official brand color palette",
        primary: "Primary",
        secondary: "Secondary",
        accent: "Accent",
        screenshots: "Screenshots",
        screenshotsDesc: "High-quality app screenshots and product images",
        downloadAll: "Download All",
      },
      mediaDownloads: "Media Downloads",
      mediaDownloadsDesc: "Press releases, executive bios, and company information.",
      downloads: {
        pressRelease: "Press Release",
        latestNews: "Latest news and announcements",
        download: "Download",
        executiveBio: "Executive Bios & Photos",
        teamPhotos: "Leadership team information and photos",
      },
      contactInfo: "Contact Information",
      contactInfoDesc: "For media inquiries, partnership opportunities, or additional information.",
      contact: {
        media: "Media Inquiries",
        partnerships: "Partnerships",
      },
      forImmediateRelease: "For immediate release",
      available247: "Available 24/7 for media inquiries",
      guidelines: {
        title: "Brand Guidelines",
        subtitle: "Please follow these guidelines when using Joga brand assets.",
        logoUsage: {
          title: "Logo Usage",
          content: "Use our logos to represent Joga in your coverage.",
          rule1: "Maintain clear space around the logo",
          rule2: "Don't stretch or alter the logo proportions",
          rule3: "Use against contrasting backgrounds for visibility",
        },
        attributions: {
          title: "Attribution",
          content: "When using our assets, please credit 'Joga - AI-Powered Yoga Platform' and link to jogawellness.com when possible.",
        },
      },
      readyToShare: "Ready to Share Our Story?",
      readyToShareDesc: "We're excited to work with media partners and creators who share our vision for accessible wellness.",
    },
    common: {
      loading: "Loading...",
      error: "Error occurred",
      success: "Success!",
      close: "Close",
      menu: "Menu",
      language: "Language",
      theme: {
        light: "Light",
        dark: "Dark",
        system: "System",
      },
    },
  },

  de: {
    nav: {
      home: "Startseite",
      features: "Funktionen",
      classes: "Kurse",
      testimonials: "Testimonials",
      pricing: "Preise",
      getStarted: "Loslegen",
    },
    hero: {
      title: "Verwandle Dein Leben Mit Joga",
      subtitle: "KI-gestütztes Yoga für modernes Leben",
      description: "Erlebe personalisierte Yoga-Sitzungen mit künstlicher Intelligenz. Schließe dich Tausenden an, die Körper und Geist verwandeln.",
      ctaPrimary: "Kostenlose Testversion starten",
      ctaSecondary: "Demo ansehen",
      trustedBy: "Vertraut von 50.000+ Praktizierenden weltweit",
    },
    features: {
      title: "Intelligentes Yoga-Erlebnis",
      subtitle: "Entdecke Spitzenfunktionen mit KI-Unterstützung, die für deine Wellness-Reise entwickelt wurden",
      badge: "Moderne Funktionen",
      aiTitle: "KI-gestützte Personalisierung",
      aiDescription: "Erhalte personalisierte Yoga-Routinen basierend auf deinen Zielen, Fitnesslevel und Vorlieben. Unsere KI lernt und passt sich deinem Fortschritt an.",
      aiBadge1: "Adaptives Lernen",
      aiBadge2: "Intelligente Empfehlungen",
      liveTitle: "Live-Interaktive Kurse",
      liveDescription: "Nimm an Live-Kursen mit zertifizierten Instruktoren aus der ganzen Welt teil. Echtzeit-Feedback und Community-Unterstützung.",
      liveBadge1: "HD-Qualität",
      liveBadge2: "2-Wege-Audio",
      progressTitle: "Erweiterte Fortschrittsanalyse",
      progressDescription: "Verfolge deinen Fortschritt mit detaillierten Analysen, Haltungsgenauigkeitsbewertung und personalisierten Einblicken zur Verbesserung.",
      progressBadge1: "Echtzeit-Statistiken",
      progressBadge2: "Zielverfolgung",
      meditationTitle: "Geführte Meditation",
      meditationDescription: "Zugriff auf hunderte geführter Meditationssitzungen für Stressabbau, besseren Schlaf und Achtsamkeitspraxis.",
      meditationBadge1: "Schlafgeschichten",
      meditationBadge2: "Atemübungen",
      nutritionTitle: "Ernährungsberatung",
      nutritionDescription: "Erhalte personalisierte Essenspläne und Ernährungstipps, die deine Yoga-Praxis für optimales Wohlbefinden ergänzen.",
      nutritionBadge1: "Essenspläne",
      nutritionBadge2: "Rezeptbibliothek",
      communityTitle: "Community-Unterstützung",
      communityDescription: "Verbinde dich mit gleichgesinnten Yoga-Enthusiasten, teile Erfahrungen und wachse gemeinsam in unserer unterstützenden Community.",
      communityBadge1: "Foren",
      communityBadge2: "Herausforderungen",
      ctaTitle: "Bereit, Deine Praxis zu Transformieren?",
      ctaDescription: "Schließe dich Tausenden von Benutzern an, die bereits die Vorteile von KI-gestütztem Yoga entdeckt haben",
      ctaButton: "Starte Deine Reise",
    },
    classes: {
      title: "Nimm an Unseren Live-Kursen Teil",
      subtitle: "Praktiziere mit Weltklasse-Instruktoren in Echtzeit",
      liveClasses: "Live-Kurse",
      allClasses: "Alle Kurse",
      beginner: "Anfänger",
      intermediate: "Mittelstufe",
      advanced: "Fortgeschritten",
      meditation: "Meditation",
      todaySchedule: "Heutiger Zeitplan",
      weekSchedule: "Wochenplan",
      joinClass: "Kurs beitreten",
      reserveSpot: "Platz reservieren",
      setReminder: "Erinnerung setzen",
      book: "Buchen",
      // Table headers
      day: "Tag",
      class: "Kurs",
      instructor: "Trainer",
      time: "Zeit",
      duration: "Dauer",
      level: "Level",
      action: "Aktion",
      // Days of week
      monday: "Montag",
      tuesday: "Dienstag",
      wednesday: "Mittwoch",
      thursday: "Donnerstag",
      friday: "Freitag",
      saturday: "Samstag",
      sunday: "Sonntag",
      // Class specific translations
      students: "Teilnehmer",
      liveNow: "Live Jetzt",
      inHours: "In {{hours}} Stunden",
      inMinutes: "In {{minutes}} Minuten",
      allLevels: "Alle Level",
      // Class names
      sunriseFlow: "Morgendämmerung Flow",
      powerYoga: "Power Yoga",
      eveningMeditation: "Abendmeditation",
      gentleHatha: "Sanftes Hatha",
      vinyasaFlow: "Vinyasa Flow",
      yinYoga: "Yin Yoga",
      ashtanga: "Ashtanga",
      restorativeYoga: "Wiederherstellendes Yoga",
      // Instructor names
      sarahChen: "Sarah Chen",
      mikeJohnson: "Mike Johnson",
      emmaWilson: "Emma Wilson",
      davidLee: "David Lee",
      // Class descriptions
      perfectForBeginners: "Perfekt für den Einstieg",
      forSeriousPractitioners: "Für ernsthafte Yoga-Praktizierende",
      forEnthusiastsTeachers: "Für Yoga-Enthusiasten und Lehrer",
      // FAQ
      faq: {
        cancel: "Kann ich mein Abo jederzeit kündigen?",
        cancelAnswer: "Ja, Sie können Ihr Abonnement jederzeit kündigen. Ihr Zugriff läuft bis zum Ende Ihrer Abrechnungsperiode weiter.",
        trial: "Gibt es eine kostenlose Testversion?",
        trialAnswer: "Ja! Alle kostenpflichtigen Pläne enthalten eine 7-tägige kostenlose Testversion. Für den kostenlosen Plan wird keine Kreditkarte benötigt.",
        equipment: "Welche Ausrüstung benötige ich?",
        equipmentAnswer: "Zum Starten benötigen Sie nur eine Yogamatte. Mit fortschreitender Praxis möchten Sie vielleicht Hilfsmittel wie Blöcke, Gurte oder Decken hinzufügen, aber diese sind optional.",
        levels: "Gibt es verschiedene Level für Anfänger?",
        levelsAnswer: "Absolut! Wir haben Kurse für komplette Anfänger bis hin zu fortgeschrittenen Praktizierenden. Unsere KI wird den perfekten Startpunkt für Sie empfehlen.",
      },
    },
    testimonials: {
      title: "Gemeinschaftsliebe",
      subtitle: "Höre von unseren Mitgliedern über ihre transformierenden Reisen",
      successStories: "Erfolgsgeschichten",
      stats: {
        members: "Zufriedene Mitglieder",
        rating: "Durchschnittsbewertung",
        classes: "Abgeschlossene Kurse",
        retention: "Rücklaufrate",
      },
      featured: {
        name: "Jessica Martinez",
        memberSince: "Mitglied seit 2023",
        testimonial: "Joga hat mein Leben völlig verändert. Ich begann als komplette Anfängerin und praktiziere jetzt fortgeschrittene Posen, von denen ich nie dachte, dass sie möglich sind. Die KI-gestützte Personalisierung hält mich motiviert und die Live-Kurse lassen mich mich mit einer wunderbaren Gemeinschaft verbunden fühlen. Ich habe 20 Pfund abgenommen, viel Flexibilität gewonnen und vor allem inneren Frieden gefunden.",
        badges: {
          weightLoss: "Gewichtsverlust Reise",
          flexibility: "Flexibilität Gaining",
          mindfulness: "Achtsamkeitspraxis",
        },
      },
      members: {
        robert: {
          name: "Robert Chen",
          profession: "Software Ingenieur",
          testimonial: "Perfekt für meinen vollen Zeitplan. Die 30-Minuten-Kurse passen perfekt in meine Mittagspausen, und ich habe eine signifikante Verbesserung meiner Haltung und Stressniveaus festgestellt.",
          duration: "3 Monate mit Joga",
        },
        amanda: {
          name: "Amanda Foster",
          profession: "Lehrerin & Mutter",
          testimonial: "Die Meditationssitzungen waren lebensverändernd. Ich bin präsenter bei meinen Schülern und meiner Familie. Die App macht es so einfach, Selbstfürsorge einzuplanen.",
          duration: "6 Monate mit Joga",
        },
        marcus: {
          name: "Marcus Thompson",
          profession: " pensionierter Athlet",
          testimonial: "Als ehemaliger Athlet brauchte ich etwas, das mich körperlich fordert. Die fortgeschrittenen Kurse und das Fortschritts-Tracking motivieren mich, meine Grenzen zu überschreiten.",
          duration: "1 Jahr mit Joga",
        },
        lisa: {
          name: "Lisa Park",
          profession: "Marketing Direktorin",
          testimonial: "Große Vielfalt an Kursen und Trainern. Die App ist benutzerfreundlich und die Gemeinschaft ist so unterstützend. Ich wünschte nur, sie hätten mehr fortgeschrittene Workshops.",
          duration: "2 Monate mit Joga",
        },
        david: {
          name: "David Kumar",
          profession: "Medizinstudent",
          testimonial: "Die Stressentlastung durch Yoga hat meine Konzentration beim Studium verbessert. Die KI-Empfehlungen passen perfekt zu meinen Energielevels und Studienzeiten.",
          duration: "4 Monate mit Joga",
        },
        rachel: {
          name: "Rachel Green",
          profession: "Freiberufliche Designerin",
          testimonial: "Als jemand mit Rückenschmerzen durch langes Sitzen waren die gezielten Yoga-Programme unglaublich hilfreich. Ich fühle mich stärker und flexibler als je zuvor.",
          duration: "8 Monate mit Joga",
        },
      },
      asFeaturedIn: "Vorgestellt in:",
      featuredIn: {
        yogaJournal: "Yoga Journal",
        mindful: "Mindful",
        wellGood: "Well+Good",
        healthMagazine: "Health Magazine",
        techCrunch: "TechCrunch",
      },
    },
    pricing: {
      title: "Wähle Deinen Weg",
      subtitle: "Starte kostenlos, aktualisiere wenn du bereit bist. Keine versteckten Gebühren, jederzeit kündbar.",
      monthly: "Monatlich",
      annual: "Jährlich (20% sparen)",
      save: "Sparen",
      saveWithAnnual: "Speichere ${{amount}} mit jährlicher Abrechnung",
      mostPopular: "AM BELIEBTESTEN",
      plans: {
        free: "Kostenlos",
        pro: "Pro",
        premium: "Premium",
      },
      descriptions: {
        free: "Perfekt für den Anfang",
        pro: "Für ernsthafte Yoga-Praktizierende",
        premium: "Für Yoga-Enthusiasten und Lehrer",
      },
      prices: {
        free: "$0",
        proMonthly: "$19.99",
        proAnnual: "$15.99",
        premiumMonthly: "$39.99",
        premiumAnnual: "$31.99",
      },
      buttons: {
        getStartedFree: "Kostenlos Starten",
        startFreeTrial: "Kostenlose Testversion Starten",
        contactSales: "Vertrieb Kontaktieren",
      },
      features: {
        basicClasses: "Zugang zu 50+ Grundkursen",
        progressTracking: "Basis-Fortschrittsverfolgung",
        community: "Community-Foren",
        mobileAccess: "Mobile App Zugang",
        liveClasses: "Unbegrenzte Live-Kurse",
        aiRecommendations: "KI-gestützte Personalisierung",
        advancedAnalytics: "Erweiterte Fortschrittsanalysen",
        downloadable: "Herunterladbare Inhalte",
        prioritySupport: "Prioritäts-Support",
        coaching: "1-on-1 Coaching-Sitzungen",
        mealPlans: "Maßgeschneiderte Ernährungspläne",
        workshops: "Exklusive Workshops",
        certification: "Lehrer-Zertifizierungsvorbereitung",
        vipSupport: "VIP-Support",
      },
      faq: {
        title: "Häufig Gestellte Fragen",
        cancel: "Kann ich mein Abo jederzeit kündigen?",
        cancelAnswer: "Ja, Sie können Ihr Abonnement jederzeit kündigen. Ihr Zugang läuft bis zum Ende Ihrer Abrechnungsperiode weiter.",
        trial: "Gibt es eine kostenlose Testversion?",
        trialAnswer: "Ja! Alle bezahlten Pläne enthalten eine 7-tägige kostenlose Testversion. Für den kostenlosen Plan ist keine Kreditkarte erforderlich.",
        equipment: "Welche Ausrüstung benötige ich?",
        equipmentAnswer: "Zum Starten benötigen Sie nur eine Yogamatte. Mit der Fortschritt können Sie zusätzlich Requisiten wie Blöcke, Gurte oder Decken hinzufügen, aber diese sind optional.",
        levels: "Gibt es verschiedene Level für Anfänger?",
        levelsAnswer: "Absolut! Wir haben Kurse von kompletten Anfängern bis zu fortgeschrittenen Praktizierenden. Unsere KI wird den perfekten Startpunkt für Sie empfehlen.",
      },
    },
    cta: {
      title: "Beginne Deine Reise",
      subtitle: "Schließe dich Tausenden an, die ihr Leben mit Joga verwandeln. Starte heute deine kostenlose Testversion.",
      firstName: "Vorname",
      lastName: "Nachname",
      email: "E-Mail-Adresse",
      experience: "Erfahrungslevel",
      goals: "Hauptziele",
      termsAgree: "Ich stimme den {terms} und der {privacy} zu",
      submit: "Starte meine 7-tägige kostenlose Testversion",
      downloadApp: "App herunterladen",
      browseClasses: "Kurse durchsuchen",
    },
    videoModal: {
      title: "Joga in Aktion erleben",
      description: "Sehen Sie, wie KI-gestütztes Yoga Ihre Wellness-Reise mit personalisierten Kursen und erfahrenen Trainern transformieren kann.",
      iframeTitle: "Joga Plattform Demo-Video",
      close: "Schließen",
      startTrial: "Kostenlose Testversion starten",
    },
    footer: {
      about: "Über uns",
      contact: "Kontakt",
      careers: "Karriere",
      pressKit: "Pressemappe",
      copyright: "Copyright © {year} - Alle Rechte vorbehalten von",
      rights: "Joga Inc.",
    },
    careers: {
      title: "Karriere bei Joga",
      description: "Werden Sie Teil unseres Teams und verändern Sie Leben durch Yoga und Wohlbefinden",
      joinOurTeam: "Werden Sie Teil unseres Teams",
      subtitle: "Seien Sie Teil von etwas Größerem. Helfen Sie Menschen, ihr Leben durch die Kraft von Yoga und KI-Technologie zu verändern.",
      viewPositions: "Offene Stellen anzeigen",
      learnMore: "Mehr erfahren",
      whyWorkHere: "Warum bei uns arbeiten",
      whyWorkHereDesc: "Wir sind mehr als nur eine Wellness-Plattform. Wir sind ein Team, das leidenschaftlich daran arbeitet, Yoga durch innovative Technologie für alle zugänglich zu machen.",
      benefits: {
        health: "Gesundheit & Wohlbefinden",
        healthDesc: "Umfassende Krankenversicherung, kostenlose Yogakurse und Wellness-Zuschuss",
        growth: "Professionelles Wachstum",
        growthDesc: "Kontinuierliche Lernmöglichkeiten, Karriereentwicklungsprogramme und Mentoring",
        team: "Fantastisches Team",
        teamDesc: "Arbeiten Sie mit leidenschaftlichen, talentierten Menschen, die Ihre Vision teilen",
        innovation: "Innovation",
        innovationDesc: "Seien Sie an der Spitze der KI-gestützten Wellness-Technologie",
        flexibility: "Arbeitsflexibilität",
        flexibilityDesc: "Remote-Work-Optionen, flexible Stunden und Work-Life-Balance",
        competitive: "Wettbewerbsfähige Vergütung",
        competitiveDesc: "Wettbewerbsfähiges Gehalt, Aktienoptionen und Leistungsboni",
      },
      openPositions: "Offene Stellen",
      positionsDesc: "Wir suchen immer nach talentierten Personen für unser Team.",
      salary: "Gehaltsspanne",
      applyNow: "Jetzt bewerben",
      noPositions: "Sehen Sie keine passende Stelle? Wir sind immer daran interessiert, leidenschaftliche Menschen kennenzulernen.",
      spontaneousApplication: "Spontane Bewerbung senden",
      applicationProcess: "Bewerbungsprozess",
      processDesc: "Unser Einstellungsprozess ist darauf ausgelegt, gründlich, transparent und respektvoll gegenüber Ihrer Zeit zu sein.",
      process: {
        apply: {
          title: "Online bewerben",
          description: "Reichen Sie Ihre Bewerbung ein und wir prüfen sie innerhalb von 5 Werktagen",
        },
        review: {
          title: "Erste Prüfung",
          description: "Unser Team prüft Ihre Bewerbung und Ihren Hintergrund",
        },
        interview: {
          title: "Interviews",
          description: "Treffen Sie Teammitglieder und zeigen Sie Ihre Fähigkeiten",
        },
        offer: {
          title: "Angebot & Onboarding",
          description: "Erhalten Sie ein Angebot und werden Sie Teil unseres fantastischen Teams",
        },
      },
      positions: {
        seniorYogaInstructor: {
          title: "Senior Yoga Lehrer",
          type: "Vollzeit",
          location: "Remote / Hybrid",
          experience: "5+ Jahre",
          description: "Leiten Sie Yogakurse, entwickeln Sie Lehrpläne und mentorieren Sie andere Lehrer. Helfen Sie, die Zukunft der KI-gestützten Yoga-Unterrichtung zu gestalten.",
          salary: "55.000 € - 75.000 €",
        },
        fullstackDeveloper: {
          title: "Full-Stack Entwickler",
          type: "Vollzeit",
          location: "Remote",
          experience: "3+ Jahre",
          description: "Bauen und warten Sie unsere Web-Plattform, implementieren Sie KI-Funktionen und schaffen Sie erstaunliche Benutzererfahrungen.",
          salary: "65.000 € - 90.000 €",
        },
        marketingManager: {
          title: "Marketing Manager",
          type: "Vollzeit",
          location: "Remote",
          experience: "4+ Jahre",
          description: "Leiten Sie Marketingkampagnen, verwalten Sie soziale Medien und wachsen Sie unsere Community von Yoga-Enthusiasten.",
          salary: "60.000 € - 80.000 €",
        },
      },
      readyToJoin: "Bereit, Leben zu verändern?",
      readyToJoinDesc: "Schließen Sie sich uns bei unserer Mission an, Yoga durch innovative Technologie für alle zugänglich zu machen.",
    },
    pressKit: {
      title: "Pressemappe",
      description: "Medienressourcen und Marken-Assets für Joga",
      mediaResources: "Medienressourcen",
      subtitle: "Willkommen in der Joga-Pressemappe. Hier finden Sie alles, was Sie für die Berichterstattung über unsere Geschichte benötigen, von Marken-Assets bis zu Unternehmensinformationen.",
      downloadAssets: "Assets Herunterladen",
      contactUs: "Kontaktieren Sie uns",
      companyOverview: "Unternehmensüberblick",
      companyOverviewDesc: "Lernen Sie Joga kennen - die KI-gestützte Yoga-Plattform, die das Wellness weltweit verändert.",
      stats: {
        users: "Aktive Nutzer",
        rating: "App-Bewertung",
        classes: "Verfügbare Kurse",
        instructors: "Experten-Instruktoren",
      },
      story: {
        title: "Unsere Geschichte",
        content: "Gegründet 2024, entstand Joga aus einer einfachen Beobachtung: Während Yoga transformative Kraft hat, bleibt der Zugang zu qualitierter Anleitung begrenzt. Wir kombinierten alte Weisheit mit modernster KI-Technologie, um personalisierte Yoga-Erfahrungen zu schaffen, die sich an Ihre einzigartige Reise anpassen.",
        mission: "Unsere Mission ist es, qualitierende Yoga-Anleitung für jeden, überall, durch die Kraft der künstlichen Intelligenz zugänglich zu machen.",
      },
      brandAssets: "Marken-Assets",
      brandAssetsDesc: "Laden Sie unsere offiziellen Logos, Farben und Screenshots für Ihre Berichterstattung herunter.",
      assets: {
        logo: "Logo",
        logoDesc: "Offizielle Joga-Logos in verschiedenen Formaten und Größen",
        colors: "Markenfarben",
        colorsDesc: "Unsere offizielle Marktfarbpalette",
        primary: "Primär",
        secondary: "Sekundär",
        accent: "Akzent",
        screenshots: "Screenshots",
        screenshotsDesc: "Hochwertige App-Screenshots und Produktbilder",
        downloadAll: "Alle Herunterladen",
      },
      mediaDownloads: "Medien-Downloads",
      mediaDownloadsDesc: "Pressemitteilungen, Executive-Bios und Unternehmensinformationen.",
      downloads: {
        pressRelease: "Pressemitteilung",
        latestNews: "Neueste Nachrichten und Ankündigungen",
        download: "Herunterladen",
        executiveBio: "Executive-Bios & Fotos",
        teamPhotos: "Informationen und Fotos des Führungsteams",
      },
      contactInfo: "Kontaktinformationen",
      contactInfoDesc: "Für Medienanfragen, Partnerschaftsmöglichkeiten oder zusätzliche Informationen.",
      contact: {
        media: "Medienanfragen",
        partnerships: "Partnerschaften",
      },
      forImmediateRelease: "Zur sofortigen Veröffentlichung",
      available247: "24/7 für Medienanfragen verfügbar",
      guidelines: {
        title: "Markenrichtlinien",
        subtitle: "Bitte befolgen Sie diese Richtlinien bei der Verwendung von Joga-Marken-Assets.",
        logoUsage: {
          title: "Logo-Nutzung",
          content: "Verwenden Sie unsere Logos, um Joga in Ihrer Berichterstattung darzustellen.",
          rule1: "Halten Sie klaren Abstand um das Logo",
          rule2: "Strecken oder verändern Sie nicht die Logo-Proportionen",
          rule3: "Verwenden Sie vor kontrastierenden Hintergründen für die Sichtbarkeit",
        },
        attributions: {
          title: "Zuschreibung",
          content: "Bei der Verwendung unserer Assets bitten wir, 'Joga - KI-gestützte Yoga-Plattform' zu nennen und wenn möglich auf jogawellness.com zu verlinken.",
        },
      },
      readyToShare: "Bereit, unsere Geschichte zu teilen?",
      readyToShareDesc: "Wir freuen uns darauf, mit Mediennpartnern und Createuren zusammenzuarbeiten, die unsere Vision für zugängliches Wellness teilen.",
    },
    common: {
      loading: "Laden...",
      error: "Fehler aufgetreten",
      success: "Erfolg!",
      close: "Schließen",
      menu: "Menü",
      language: "Sprache",
      theme: {
        light: "Hell",
        dark: "Dunkel",
        system: "System",
      },
    },
  },

  ru: {
    nav: {
      home: "Главная",
      features: "Функции",
      classes: "Занятия",
      testimonials: "Отзывы",
      pricing: "Цены",
      getStarted: "Начать",
    },
    hero: {
      title: "Преобразуйте Свою Жизнь С Йогой",
      subtitle: "Йога на базе ИИ для современной жизни",
      description: "Испытайте персонализированные сеансы йоги с искусственным интеллектом. Присоединяйтесь к тысячам, которые преобразуют свои умы и тела.",
      ctaPrimary: "Начать Бесплатный Пробный Период",
      ctaSecondary: "Смотреть Демо",
      trustedBy: "Доверяют 50,000+ практиков по всему миру",
    },
    features: {
      title: "Умный Йога Опыт",
      subtitle: "Откройте для себя передовые функции с поддержкой ИИ, разработанные для вашего оздоровительного путешествия",
      badge: "Современные Функции",
      aiTitle: "Персонализация с Поддержкой ИИ",
      aiDescription: "Получайте индивидуальные программы йоги на основе ваших целей, уровня физической подготовки и предпочтений. Наш ИИ учится и адаптируется к вашему прогрессу.",
      aiBadge1: "Адаптивное Обучение",
      aiBadge2: "Умные Рекомендации",
      liveTitle: "Живые Интерактивные Занятия",
      liveDescription: "Присоединяйтесь к живым занятиям с сертифицированными инструкторами со всего мира. Обратная связь в реальном времени и поддержка сообщества.",
      liveBadge1: "HD Качество",
      liveBadge2: "Двусторонний Аудио",
      progressTitle: "Расширенная Аналитика Прогресса",
      progressDescription: "Отслеживайте свой прогресс с помощью детальной аналитики, оценки точности поз и персонализированных рекомендаций для улучшения.",
      progressBadge1: "Статистика в Реальном Времени",
      progressBadge2: "Отслеживание Целей",
      meditationTitle: "Групповая Медитация",
      meditationDescription: "Получите доступ к сотням сеансов групповой медитации для снятия стресса, улучшения сна и практики осознанности.",
      meditationBadge1: "Истории для Сна",
      meditationBadge2: "Дыхательные Упражнения",
      nutritionTitle: "Консультации по Питанию",
      nutritionDescription: "Получайте персонализированные планы питания и советы по питанию, которые дополняют вашу практику йоги для оптимального здоровья.",
      nutritionBadge1: "Планы Питания",
      nutritionBadge2: "Библиотека Рецептов",
      communityTitle: "Поддержка Сообщества",
      communityDescription: "Общайтесь с энтузиастами йоги, делитесь опытом и растите вместе в нашей поддерживающей среде.",
      communityBadge1: "Форумы",
      communityBadge2: "Вызовы",
      ctaTitle: "Готовы Трансформировать Свою Практику?",
      ctaDescription: "Присоединяйтесь к тысячам пользователей, которые уже открыли для себя преимущества йоги с поддержкой ИИ",
      ctaButton: "Начните Свое Путешествие",
    },
    classes: {
      title: "Присоединяйтесь к Нашим Живым Занятиям",
      subtitle: "Практикуйте с инструкторами мирового класса в реальном времени",
      liveClasses: "Живые Занятия",
      allClasses: "Все Занятия",
      beginner: "Начинающий",
      intermediate: "Средний",
      advanced: "Продвинутый",
      meditation: "Медитация",
      todaySchedule: "Сегодняшнее Расписание",
      weekSchedule: "Расписание Недели",
      joinClass: "Присоединиться к Занятию",
      reserveSpot: "Забронировать Место",
      setReminder: "Напомнить",
      book: "Забронировать",
      // Table headers
      day: "День",
      class: "Занятие",
      instructor: "Инструктор",
      time: "Время",
      duration: "Длительность",
      level: "Уровень",
      action: "Действие",
      // Days of week
      monday: "Понедельник",
      tuesday: "Вторник",
      wednesday: "Среда",
      thursday: "Четверг",
      friday: "Пятница",
      saturday: "Суббота",
      sunday: "Воскресенье",
      // Class specific translations
      students: "Студенты",
      liveNow: "Прямо Сейчас",
      inHours: "Через {{hours}} часа",
      inMinutes: "Через {{minutes}} минут",
      allLevels: "Все Уровни",
      // Class names
      sunriseFlow: "Рассветный Поток",
      powerYoga: "Силовая Йога",
      eveningMeditation: "Вечерняя Медитация",
      gentleHatha: "Мягкий Хатха",
      vinyasaFlow: "Виньяса Поток",
      yinYoga: "Инь Йога",
      ashtanga: "Аштанга",
      restorativeYoga: "Восстановительная Йога",
      // Instructor names
      sarahChen: "Сара Чен",
      mikeJohnson: "Майк Джонсон",
      emmaWilson: "Эмма Уилсон",
      davidLee: "Дэвид Ли",
      // Class descriptions
      perfectForBeginners: "Идеально для начинающих",
      forSeriousPractitioners: "Для серьезных практиков йоги",
      forEnthusiastsTeachers: "Для энтузиастов и преподавателей йоги",
      // FAQ
      faq: {
        cancel: "Могу ли я отменить подписку в любое время?",
        cancelAnswer: "Да, вы можете отменить подписку в любое время. Ваш доступ будет продолжаться до конца расчетного периода.",
        trial: "Есть ли бесплатный пробный период?",
        trialAnswer: "Да! Все платные планы включают 7-дневный бесплатный пробный период. Для бесплатного плана кредитная карта не требуется.",
        equipment: "Какое оборудование мне нужно?",
        equipmentAnswer: "Для начала вам понадобится только коврик для йоги. По мере прогресса вы можете добавить реквизит, такой как блоки, ремни или одеяла, но это необязательно.",
        levels: "Есть ли разные уровни для начинающих?",
        levelsAnswer: "Абсолютно! У нас есть занятия от полного новичка до продвинутых практиков. Наш ИИ порекомендует идеальную отправную точку для вас.",
      },
    },
    testimonials: {
      title: "Любовь Сообщества",
      subtitle: "Послушайте наших членов об их трансформирующих путешествиях",
      successStories: "Истории Успеха",
      stats: {
        members: "Довольных Участников",
        rating: "Средняя Оценка",
        classes: "Завершенных Занятий",
        retention: "Уровень Удержания",
      },
      featured: {
        name: "Джессика Мартинес",
        memberSince: "Участник с 2023",
        testimonial: "Йога полностью изменила мою жизнь. Я начала как полный новичок и теперь практикую продвинутые позы, о которых никогда не думала, что они возможны. Персонализация на базе ИИ поддерживает мою мотивацию, а живые занятия заставляют меня чувствовать связь с замечательным сообществом. Я потеряла 20 фунтов, приобрела гибкость и, что самое главное, нашла внутренний покой.",
        badges: {
          weightLoss: "Путешествие Потери Веса",
          flexibility: "Приобретенная Гибкость",
          mindfulness: "Практика Осознанности",
        },
      },
      members: {
        robert: {
          name: "Роберт Чен",
          profession: "Инженер-программист",
          testimonial: "Идеально для моего загруженного расписания. 30-минутные занятия идеально помещаются в мои обеденные перерывы, и я заметил значительное улучшение осанки и уровня стресса.",
          duration: "3 месяца с Йогой",
        },
        amanda: {
          name: "Аманда Фостер",
          profession: "Учительница и Мать",
          testimonial: "Сеансы медитации изменили мою жизнь. Я более присутствуета со своими учениками и семьей. Приложение делает так легко втиснуть заботу о себе.",
          duration: "6 месяцев с Йогой",
        },
        marcus: {
          name: "Маркус Томпсон",
          profession: "Бывший Спортсмен",
          testimonial: "Как бывший спортсмен, мне нужно было что-то, что бросало бы мне физический вызов. Продвинутые классы и отслеживание прогресса мотивируют меня превышать свои пределы.",
          duration: "1 год с Йогой",
        },
        lisa: {
          name: "Лиза Парк",
          profession: "Маркетинг Директор",
          testimonial: "Отличное разнообразие классов и инструкторов. Приложение дружественное к пользователю, и сообщество такое поддерживающее. Только хотелось бы больше продвинутых воркшопов.",
          duration: "2 месяца с Йогой",
        },
        david: {
          name: "Дэвид Кумар",
          profession: "Студент-медик",
          testimonial: "Снятие стресса от йоги улучшило мою концентрацию во время учебы. Рекомендации ИИ идеально соответствуют моим уровням энергии и учебному расписанию.",
          duration: "4 месяца с Йогой",
        },
        rachel: {
          name: "Рэйчел Грин",
          profession: "Фриланс Дизайнер",
          testimonial: "Как человек с болями в спине от сидения весь день, целевые программы йоги были невероятно полезны. Я чувствую себя сильнее и гибче, чем когда-либо.",
          duration: "8 месяцев с Йогой",
        },
      },
      asFeaturedIn: "Как показано в:",
      featuredIn: {
        yogaJournal: "Yoga Journal",
        mindful: "Mindful",
        wellGood: "Well+Good",
        healthMagazine: "Health Magazine",
        techCrunch: "TechCrunch",
      },
    },
    pricing: {
      title: "Выберите Свой Путь",
      subtitle: "Начните бесплатно, обновляйтесь когда будете готовы. Никаких скрытых платежей, отмена в любое время.",
      monthly: "Ежемесячно",
      annual: "Ежегодно (Экономия 20%)",
      save: "Экономия",
      saveWithAnnual: "Экономия ${{amount}} с годовым выставлением счетов",
      mostPopular: "САМЫЙ ПОПУЛЯРНЫЙ",
      plans: {
        free: "Бесплатно",
        pro: "Про",
        premium: "Премиум",
      },
      descriptions: {
        free: "Идеально для начала",
        pro: "Для серьезных практиков йоги",
        premium: "Для энтузиастов и преподавателей йоги",
      },
      prices: {
        free: "$0",
        proMonthly: "$19.99",
        proAnnual: "$15.99",
        premiumMonthly: "$39.99",
        premiumAnnual: "$31.99",
      },
      buttons: {
        getStartedFree: "Начать Бесплатно",
        startFreeTrial: "Начать Бесплатный Пробный Период",
        contactSales: "Связаться с Продажами",
      },
      features: {
        basicClasses: "Доступ к 50+ базовым занятиям",
        progressTracking: "Базовое отслеживание прогресса",
        community: "Сообщественные форумы",
        mobileAccess: "Доступ к мобильному приложению",
        liveClasses: "Безлимитные живые занятия",
        aiRecommendations: "Персонализация на базе ИИ",
        advancedAnalytics: "Продвинутая аналитика прогресса",
        downloadable: "Загружаемый контент",
        prioritySupport: "Приоритетная поддержка",
        coaching: "1-на-1 коучинг сессии",
        mealPlans: "Индивидуальные планы питания",
        workshops: "Эксклюзивные воркшопы",
        certification: "Подготовка к сертификации преподавателя",
        vipSupport: "VIP поддержка",
      },
      faq: {
        title: "Часто Задаваемые Вопросы",
        cancel: "Могу ли я отменить подписку в любое время?",
        cancelAnswer: "Да, вы можете отменить подписку в любое время. Ваш доступ будет продолжаться до конца периода выставления счетов.",
        trial: "Есть ли бесплатный пробный период?",
        trialAnswer: "Да! Все платные планы включают 7-дневный бесплатный пробный период. Для бесплатного плана кредитная карта не требуется.",
        equipment: "Какое оборудование мне нужно?",
        equipmentAnswer: "Для начала вам понадобится только коврик для йоги. По мере прогресса вы можете добавить реквизит如блоки, ремни или одеяла, но это необязательно.",
        levels: "Есть ли разные уровни для начинающих?",
        levelsAnswer: "Абсолютно! У нас есть занятия от абсолютных новичков до продвинутых практиков. Наш ИИ порекомендует идеальную отправную точку для вас.",
      },
    },
    cta: {
      title: "Начните Свое Путешествие",
      subtitle: "Присоединяйтесь к тысячам людей, преобразующих свою жизнь с Йогой. Начните свой бесплатный пробный период сегодня.",
      firstName: "Имя",
      lastName: "Фамилия",
      email: "Адрес электронной почты",
      experience: "Уровень Опыта",
      goals: "Основные Цели",
      termsAgree: "Я согласен с {terms} и {privacy}",
      submit: "Начать Мой 7-дневный Бесплатный Пробный Период",
      downloadApp: "Скачать Приложение",
      browseClasses: "Просмотреть Занятия",
    },
    videoModal: {
      title: "Йога в Действии",
      description: "Узнайте, как йога на базе ИИ может преобразить ваше оздоровительное путешествие с персонализированными занятиями и опытными инструкторами.",
      iframeTitle: "Демо-видео Платформы Йога",
      close: "Закрыть",
      startTrial: "Начать Бесплатный Пробный Период",
    },
    footer: {
      about: "О нас",
      contact: "Контакт",
      careers: "Карьера",
      pressKit: "Пресс-кит",
      copyright: "Авторское право © {year} - Все права защищены",
      rights: "Joga Inc.",
    },
    careers: {
      title: "Карьера в Joga",
      description: "Присоединяйтесь к нашей команде и меняйте жизнь через йогу и оздоровление",
      joinOurTeam: "Присоединяйтесь к нашей команде",
      subtitle: "Станьте частью чего-то большего. Помогите людям трансформировать свою жизнь с помощью силы йоги и технологий ИИ.",
      viewPositions: "Просмотреть открытые позиции",
      learnMore: "Узнать больше",
      whyWorkHere: "Почему стоит работать с нами",
      whyWorkHereDesc: "Мы больше, чем просто платформа оздоровления. Мы команда энтузиастов, увлеченных тем, чтобы сделать йогу доступной для всех с помощью инновационных технологий.",
      benefits: {
        health: "Здоровье и благополучие",
        healthDesc: "Комплексное медицинское страхование, бесплатные занятия йогой и пособие на оздоровление",
        growth: "Профессиональный рост",
        growthDesc: "Постоянные возможности для обучения, программы развития карьеры и менторство",
        team: "Потрясающая команда",
        teamDesc: "Работайте с увлеченными, талантливыми людьми, которые разделяют ваше видение",
        innovation: "Инновации",
        innovationDesc: "Будьте на переднем крае технологий оздоровления на базе ИИ",
        flexibility: "Гибкость в работе",
        flexibilityDesc: "Возможность удаленной работы, гибкий график и баланс работы и личной жизни",
        competitive: "Конкурентоспособная компенсация",
        competitiveDesc: "Конкурентоспособная зарплата, опционы на акции и бонусы за производительность",
      },
      openPositions: "Открытые позиции",
      positionsDesc: "Мы всегда ищем талантливых людей для нашей команды.",
      salary: "Диапазон зарплаты",
      applyNow: "Подать заявку сейчас",
      noPositions: "Не видите подходящей позиции? Мы всегда заинтересованы в знакомстве с увлеченными людьми.",
      spontaneousApplication: "Отправить спонтанную заявку",
      applicationProcess: "Процесс подачи заявки",
      processDesc: "Наш процесс найма разработан так, чтобы быть тщательным, прозрачным и уважительным к вашему времени.",
      process: {
        apply: {
          title: "Подать заявку онлайн",
          description: "Отправьте вашу заявку, и мы рассмотрим ее в течение 5 рабочих дней",
        },
        review: {
          title: "Первоначальный рассмотрение",
          description: "Наша команда рассматривает вашу заявку и предысторию",
        },
        interview: {
          title: "Собеседования",
          description: "Встретьтесь с членами команды и продемонстрируйте свои навыки",
        },
        offer: {
          title: "Предложение и онбординг",
          description: "Получите предложение и станьте частью нашей потрясающей команды",
        },
      },
      positions: {
        seniorYogaInstructor: {
          title: "Старший инструктор йоги",
          type: "Полная занятость",
          location: "Удаленно / Гибрид",
          experience: "5+ лет",
          description: "Проводите занятия йогой, разрабатывайте учебные программы и менторьте других инструкторов. Помогите формировать будущее обучения йоге на базе ИИ.",
          salary: "3,500,000 ₽ - 5,000,000 ₽",
        },
        fullstackDeveloper: {
          title: "Full-Stack разработчик",
          type: "Полная занятость",
          location: "Удаленно",
          experience: "3+ года",
          description: "Создавайте и поддерживайте нашу веб-платформу, внедряйте функции ИИ и создавайте удивительные пользовательские интерфейсы.",
          salary: "4,500,000 ₽ - 7,000,000 ₽",
        },
        marketingManager: {
          title: "Менеджер по маркетингу",
          type: "Полная занятость",
          location: "Удаленно",
          experience: "4+ года",
          description: "Руководите маркетинговыми кампаниями, управляйте социальными сетями и растите наше сообщество энтузиастов йоги.",
          salary: "3,800,000 ₽ - 5,500,000 ₽",
        },
      },
      readyToJoin: "Готовы менять жизни?",
      readyToJoinDesc: "Присоединяйтесь к нам в нашей миссии сделать йогу доступной для всех с помощью инновационных технологий.",
    },
    pressKit: {
      title: "Пресс-кит",
      description: "Медийные ресурсы и бренд-ассеты для Joga",
      mediaResources: "Медийные ресурсы",
      subtitle: "Добро пожаловать в пресс-кит Joga. Здесь вы найдете все необходимое для освещения нашей истории, от бренд-ассетов до информации о компании.",
      downloadAssets: "Скачать ассеты",
      contactUs: "Свяжитесь с нами",
      companyOverview: "Обзор компании",
      companyOverviewDesc: "Познакомьтесь с Joga - платформой йоги на базе ИИ, которая трансформирует оздоровление по всему миру.",
      stats: {
        users: "Активные пользователи",
        rating: "Рейтинг приложения",
        classes: "Доступные занятия",
        instructors: "Эксперты-инструкторы",
      },
      story: {
        title: "Наша история",
        content: "Основанная в 2024 году, Joga возникла из простого наблюдения: хотя йога обладает трансформирующей силой, доступ к качественному обучению остается ограниченным. Мы объединили древнюю мудрость с передовыми технологиями ИИ, чтобы создать персонализированные впечатления от йоги, которые адаптируются к вашему уникальному пути.",
        mission: "Наша миссия - сделать качественное обучение йоге доступным для всех, везде, благодаря силе искусственного интеллекта.",
      },
      brandAssets: "Бренд-ассеты",
      brandAssetsDesc: "Скачайте наши официальные логотипы, цвета и скриншоты для использования в ваших материалах.",
      assets: {
        logo: "Логотип",
        logoDesc: "Официальные логотипы Joga в различных форматах и размерах",
        colors: "Цвета бренда",
        colorsDesc: "Наша официальная цветовая палитра бренда",
        primary: "Основной",
        secondary: "Вторичный",
        accent: "Акцент",
        screenshots: "Скриншоты",
        screenshotsDesc: "Высококачественные скриншоты приложения и изображения продукта",
        downloadAll: "Скачать все",
      },
      mediaDownloads: "Медийные загрузки",
      mediaDownloadsDesc: "Пресс-релизы, биографии руководителей и информация о компании.",
      downloads: {
        pressRelease: "Пресс-релиз",
        latestNews: "Последние новости и объявления",
        download: "Скачать",
        executiveBio: "Биографии руководителей и фото",
        teamPhotos: "Информация и фото руководящей команды",
      },
      contactInfo: "Контактная информация",
      contactInfoDesc: "Для запросов от СМИ, возможностей партнерства или дополнительной информации.",
      contact: {
        media: "Запросы от СМИ",
        partnerships: "Партнерства",
      },
      forImmediateRelease: "Для немедленного распространения",
      available247: "Доступны 24/7 для запросов от СМИ",
      guidelines: {
        title: "Руководство по бренду",
        subtitle: "Пожалуйста, следуйте этим рекомендациям при использовании бренд-ассетов Joga.",
        logoUsage: {
          title: "Использование логотипа",
          content: "Используйте наши логотипы для представления Joga в ваших материалах.",
          rule1: "Поддерживайте чистое пространство вокруг логотипа",
          rule2: "Не растягивайте и не изменяйте пропорции логотипа",
          rule3: "Используйте на контрастирующем фоне для видимости",
        },
        attributions: {
          title: "Атрибуция",
          content: "При использовании наших ассетов, пожалуйста, указывайте 'Joga - Платформа йоги на базе ИИ' и при возможности ссылайтесь на jogawellness.com.",
        },
      },
      readyToShare: "Готовы поделиться нашей историей?",
      readyToShareDesc: "Мы рады сотрудничеству с медийными партнерами и создателями, которые разделяют наше видение доступного оздоровления.",
    },
    common: {
      loading: "Загрузка...",
      error: "Произошла ошибка",
      success: "Успех!",
      close: "Закрыть",
      menu: "Меню",
      language: "Язык",
      theme: {
        light: "Светлая",
        dark: "Темная",
        system: "Системная",
      },
    },
  },

  tr: {
    nav: {
      home: "Ana Sayfa",
      features: "Özellikler",
      classes: "Dersler",
      testimonials: "Yorumlar",
      pricing: "Fiyatlar",
      getStarted: "Başla",
    },
    hero: {
      title: "Hayatınızı Joga ile Değiştirin",
      subtitle: "Modern Yaşam için Yapay Zeka Destekli Yoga",
      description: "Yapay zeka destekli kişiselleştirilmiş yoga seansları deneyin. Zihinlerini ve bedenlerini dönüştüren binlerce kişiye katılın.",
      ctaPrimary: "Ücretsiz Deneme Başlat",
      ctaSecondary: "Demo İzle",
      trustedBy: "Dünya çapında 50.000+ pratik yapan tarafından güvenilir",
    },
    features: {
      title: "Akıllı Yoga Deneyimi",
      subtitle: "Yapay zeka destekli ve wellness yolculuğunuz için tasarlanmış son teknoloji özellikleri keşfedin",
      badge: "Modern Özellikler",
      aiTitle: "Yapay Zeka Destekli Kişiselleştirme",
      aiDescription: "Hedeflerinize, fitness seviyenize ve tercihlerinize göre özelize edilmiş yoga rutinleri alın. YZ'miz öğrenir ve ilerlemenize adapte olur.",
      aiBadge1: "Uyarlanabilir Öğrenme",
      aiBadge2: "Akıllı Tavsiyeler",
      liveTitle: "Canlı Etkileşimli Dersler",
      liveDescription: "Dünyanın dört bir yanından sertifikalı eğitmenlerle canlı derslere katılın. Gerçek zamanlı geri bildirim ve topluluk desteği.",
      liveBadge1: "HD Kalite",
      liveBadge2: "Yönlü Ses",
      progressTitle: "Gelişmiş İlerleme Analitiği",
      progressDescription: "Detaylı analizler, pozisyon doğruluk puanlaması ve iyileştirme için kişiselleştirilmiş içgörülerle ilerlemenizi takip edin.",
      progressBadge1: "Gerçek Zamanlı İstatistikler",
      progressBadge2: "Hedef Takibi",
      meditationTitle: "Rehberli Meditasyon",
      meditationDescription: "Stres rahatlatma, daha iyi uyku ve mindfulness pratikleri için yüzlerce rehberli meditasyon oturumuna erişin.",
      meditationBadge1: "Uyku Hikayeleri",
      meditationBadge2: "Nefes Egzersizleri",
      nutritionTitle: "Beslenme Rehberliği",
      nutritionDescription: "Optimal wellness için yoga pratiğinizi tamamlayan kişiselleştirilmiş diyet planları ve beslenme ipuçları alın.",
      nutritionBadge1: "Diyet Planları",
      nutritionBadge2: "Tarif Kütüphanesi",
      communityTitle: "Topluluk Desteği",
      communityDescription: "Yoga meraklılarıyla bağlantı kurun, deneyimleri paylaşın ve destekleyici topluluğumuzda birlikte büyüyün.",
      communityBadge1: "Forumlar",
      communityBadge2: "Meydan Okumalar",
      ctaTitle: "Pratiğinizi Dönüştürmeye Hazır mısınız?",
      ctaDescription: "YZ destekli yoga'nın faydalarını keşfeden binlerce kullanıcıya katılın",
      ctaButton: "Yolculuğunuza Başlayın",
    },
    classes: {
      title: "Canlı Derslerimize Katılın",
      subtitle: "Dünya çapında eğitmenlerle gerçek zamanlı pratik yapın",
      liveClasses: "Canlı Dersler",
      allClasses: "Tüm Dersler",
      beginner: "Başlangıç",
      intermediate: "Orta",
      advanced: "İleri",
      meditation: "Meditasyon",
      todaySchedule: "Bugünkü Program",
      weekSchedule: "Haftalık Program",
      joinClass: "Derse Katıl",
      reserveSpot: "Yer Ayırt",
      setReminder: "Hatırlatıcı Ayarla",
      book: "Rezervasyon Yap",
      // Table headers
      day: "Gün",
      class: "Ders",
      instructor: "Eğitmen",
      time: "Saat",
      duration: "Süre",
      level: "Seviye",
      action: "Eylem",
      // Days of week
      monday: "Pazartesi",
      tuesday: "Salı",
      wednesday: "Çarşamba",
      thursday: "Perşembe",
      friday: "Cuma",
      saturday: "Cumartesi",
      sunday: "Pazar",
      // Class specific translations
      students: "Öğrenciler",
      liveNow: "Canlı Şimdi",
      inHours: "{{hours}} saat sonra",
      inMinutes: "{{minutes}} dakika sonra",
      allLevels: "Tüm Seviyeler",
      // Class names
      sunriseFlow: "Gün Doğumu Akışı",
      powerYoga: "Güç Yoga",
      eveningMeditation: "Akşam Meditasyonu",
      gentleHatha: "Nazik Hatha",
      vinyasaFlow: "Vinyasa Akışı",
      yinYoga: "Yin Yoga",
      ashtanga: "Ashtanga",
      restorativeYoga: "Restoratif Yoga",
      // Instructor names
      sarahChen: "Sarah Chen",
      mikeJohnson: "Mike Johnson",
      emmaWilson: "Emma Wilson",
      davidLee: "David Lee",
      // Class descriptions
      perfectForBeginners: "Başlamak için mükemmel",
      forSeriousPractitioners: "Ciddi yoga uygulayıcıları için",
      forEnthusiastsTeachers: "Yoga meraklıları ve öğretmenleri için",
      // FAQ
      faq: {
        cancel: "Aboneliğimi istediğim zaman iptal edebilir miyim?",
        cancelAnswer: "Evet, aboneliğinizi istediğiniz zaman iptal edebilirsiniz. Erişiminiz fatura döneminizin sonuna kadar devam edecektir.",
        trial: "Ücretsiz deneme sürümü var mı?",
        trialAnswer: "Evet! Tüm ücretli planlar 7 günlük ücretsiz deneme içerir. Ücretsiz plan için kredi kartı gerekmez.",
        equipment: "Ne tür ekipmanlara ihtiyacım var?",
        equipmentAnswer: "Başlamak için sadece bir yoga matine ihtiyacınız var. İlerledikçe bloklar, kayışlar veya battaniyeler gibi aksesuarlar eklemek isteyebilirsiniz, ancak bunlar isteğe bağlıdır.",
        levels: "Yeni başlayanlar için farklı seviyeler var mı?",
        levelsAnswer: "Kesinlikle! Tamamen yeni başlayanlardan ileri düzey uygulayıcılara kadar çeşitli seviyelerde derslerimiz var. YZ'miz sizin için mükemmel bir başlangıç noktası önerecektir.",
      },
    },
    testimonials: {
      title: "Topluluk Sevgisi",
      subtitle: "Üyelerimizin dönüşüm yolculuklarından dinleyin",
      successStories: "Başarı Hikayeleri",
      stats: {
        members: "Mutlu Üye",
        rating: "Ortalama Puan",
        classes: "Tamamlanan Ders",
        retention: "Elde Tutma Oranı",
      },
      featured: {
        name: "Jessica Martinez",
        memberSince: "2023'ten beri üye",
        testimonial: "Joga hayatımı tamamen değiştirdi. Tam bir acemi olarak başladım ve şimdi mümkün olduğunu düşünmediğim ileri pozları uyguluyorum. Yapay zeka destekli kişiselleştirme beni motive ediyor ve canlı dersler beni harika bir toplulukla bağlantıda hissettiriyor. 20 pound kaybettim, çok fazla esneklik kazandım ve en önemlisi, iç huzuru buldum.",
        badges: {
          weightLoss: "Kilo Verme Yolculuğu",
          flexibility: "Esneklik Kazandı",
          mindfulness: "Farkındalık Pratiği",
        },
      },
      members: {
        robert: {
          name: "Robert Chen",
          profession: "Yazılım Mühendisi",
          testimonial: "Meşgul programım için mükemmel. 30 dakikalık dersler mola zamanlarıma mükemmel uyuyor ve duruşumda ve stres seviyelerinde önemli bir iyileşme fark ettim.",
          duration: "Joga ile 3 ay",
        },
        amanda: {
          name: "Amanda Foster",
          profession: "Öğretmen & Anne",
          testimonial: "Meditasyon seansları hayat değiştiriciydi. Öğrencilerim ve ailemle daha fazla mevcudum. Uygulama, kendi kendime bakmayı sıkıştırmayı çok kolaylaştırıyor.",
          duration: "Joga ile 6 ay",
        },
        marcus: {
          name: "Marcus Thompson",
          profession: "Emekli Sporcu",
          testimonial: "Eski bir sporcu olarak, beni fiziksel olarak zorlayacak bir şeye ihtiyacım vardı. İleri düzey dersler ve ilerleme takibi beni sınırlarımı zorlamak için motive ediyor.",
          duration: "Joga ile 1 yıl",
        },
        lisa: {
          name: "Lisa Park",
          profession: "Pazarlama Direktörü",
          testimonial: "Ders ve eğitmenlerde harika çeşitlilik. Uygulama kullanıcı dostu ve topluluk çok destekleyici. Sadece daha fazla ileri düzey atölye çalışması olsaydı.",
          duration: "Joga ile 2 ay",
        },
        david: {
          name: "David Kumar",
          profession: "Tıp Öğrencisi",
          testimonial: "Yogadan gelen stres rahatlaması çalışırken konsantrasyonumu artırdı. Yapay zeka önerileri enerji seviyelerime ve çalışma programıma mükemmel uyuyor.",
          duration: "Joga ile 4 ay",
        },
        rachel: {
          name: "Rachel Green",
          profession: "Serbest Tasarımcı",
          testimonial: "Tüm gün oturduğumda sırt ağrısı olan biri olarak, hedefli yoga programları inanılmaz derecede yardımcı oldu. Hiç olmadığım kadar güçlü ve esnek hissediyorum.",
          duration: "Joga ile 8 ay",
        },
      },
      asFeaturedIn: "Şurada yer aldı:",
      featuredIn: {
        yogaJournal: "Yoga Journal",
        mindful: "Mindful",
        wellGood: "Well+Good",
        healthMagazine: "Health Magazine",
        techCrunch: "TechCrunch",
      },
    },
    pricing: {
      title: "Yolunuzu Seçin",
      subtitle: "Ücretsiz başlayın, hazır olduğunuzda geçiş yapın. Gizli ücret yok, istediğiniz zaman iptal edin.",
      monthly: "Aylık",
      annual: "Yıllık (%20 İndirim)",
      save: "Tasarruf",
      saveWithAnnual: "Yıllık faturalandırma ile ${{amount}} kazanın",
      mostPopular: "EN POPÜLER",
      plans: {
        free: "Ücretsiz",
        pro: "Pro",
        premium: "Premium",
      },
      descriptions: {
        free: "Başlangıç için mükemmel",
        pro: "Ciddi yoga uygulayıcıları için",
        premium: "Yoga meraklıları ve öğretmenleri için",
      },
      prices: {
        free: "$0",
        proMonthly: "$19.99",
        proAnnual: "$15.99",
        premiumMonthly: "$39.99",
        premiumAnnual: "$31.99",
      },
      buttons: {
        getStartedFree: "Ücretsiz Başlayın",
        startFreeTrial: "Ücretsiz Deneyi Başlatın",
        contactSales: "Satış İletişimi",
      },
      features: {
        basicClasses: "50+ temel derse erişim",
        progressTracking: "Temel ilerleme takibi",
        community: "Topluluk forumları",
        mobileAccess: "Mobil uygulama erişimi",
        liveClasses: "Sınırsız canlı dersler",
        aiRecommendations: "YZ destekli kişiselleştirme",
        advancedAnalytics: "Gelişmiş ilerleme analizi",
        downloadable: "İndirilebilir içerik",
        prioritySupport: "Öncelikli destek",
        coaching: "1'e 1 koçluk seansları",
        mealPlans: "Özel yemek planları",
        workshops: "Eksklüzif atölyeler",
        certification: "Eğitmen sertifika hazırlığı",
        vipSupport: "VIP destek",
      },
      faq: {
        title: "Sıkça Sorulan Sorular",
        cancel: "Aboneliğimi istediğim zaman iptal edebilir miyim?",
        cancelAnswer: "Evet, aboneliğinizi istediğiniz zaman iptal edebilirsiniz. Erişiminiz fatura döneminizin sonuna kadar devam edecektir.",
        trial: "Ücretsiz deneme var mı?",
        trialAnswer: "Evet! Tüm ücretli planlar 7 günlük ücretsiz deneme içerir. Ücretsiz plan için kredi kartı gerekmez.",
        equipment: "Ne ekipmana ihtiyacım var?",
        equipmentAnswer: "Başlamak için sadece bir yoga matine ihtiyacınız var. İlerledikçe bloklar, kayışlar veya battaniyeler gibi aksesuarlar eklemek isteyebilirsiniz, ancak bunlar isteğe bağlıdır.",
        levels: "Başlangıç için farklı seviyeler var mı?",
        levelsAnswer: "Kesinlikle! Tamamen yeni başlayanlardan ileri düzey uygulayıcılara kadar çeşitli seviyelerde derslerimiz var. YZ'miz sizin için mükemmel bir başlangıç noktası önerecektir.",
      },
    },
    cta: {
      title: "Yolculuğunuza Başlayın",
      subtitle: "Hayatlarını Joga ile dönüştüren binlerce kişiye katılın. Bugün ücretsiz denemenize başlayın.",
      firstName: "Ad",
      lastName: "Soyad",
      email: "E-posta Adresi",
      experience: "Deneyim Seviyesi",
      goals: "Ana Hedefler",
      termsAgree: "{terms} ve {privacy} kabul ediyorum",
      submit: "7 Günlük Ücretsiz Denememi Başlat",
      downloadApp: "Uygulamayı İndir",
      browseClasses: "Derslere Göz At",
    },
    videoModal: {
      title: "Joga'yi Hareket Halinde İzleyin",
      description: "Yapay zeka destekli yoga'nin kişiselleştirilmiş dersler ve uzman eğitmenlerle wellness yolculuğunuzu nasıl dönüştürebileceğini görün.",
      iframeTitle: "Joga Platformu Demo Videosu",
      close: "Kapat",
      startTrial: "Ücretsiz Denemeyi Başlat",
    },
    footer: {
      about: "Hakkımızda",
      contact: "İletişim",
      careers: "Kariyer",
      pressKit: "Basit Kiti",
      copyright: "Telif Hakkı © {year} - Tüm hakları saklıdır",
      rights: "Joga Inc.",
    },
    careers: {
      title: "Joga'da Kariyer",
      description: "Ekibimize katılın ve yoga ile wellness aracılığıyla hayatları değiştirin",
      joinOurTeam: "Ekibimize Katılın",
      subtitle: "Daha büyük bir şeyin parçası olun. İnsanların yoga ve yapay zeka teknolojisinin gücüyle hayatlarını dönüştürmelerine yardımcı olun.",
      viewPositions: "Açık Pozisyonları Görüntüle",
      learnMore: "Daha Fazla Bilgi Edinin",
      whyWorkHere: "Neden Bizimle Çalışmalısınız",
      whyWorkHereDesc: "Sadece bir wellness platformundan daha fazlasıyız. Yoga'yu yenilikçi teknoloji aracılığıyla herkes için erişilebilir kılma konusunda tutkulu bir ekibiz.",
      benefits: {
        health: "Sağlık & Wellness",
        healthDesc: "Kapsamlı sağlık sigortası, ücretsiz yoga dersleri ve wellness yardımı",
        growth: "Profesyonel Gelişim",
        growthDesc: "Sürekli öğrenme fırsatları, kariyer geliştirme programları ve mentorluk",
        team: "Harika Ekip",
        teamDesc: "Vizyonunuzu paylaşan tutkulu, yetenekli bireylerle çalışın",
        innovation: "İnovasyon",
        innovationDesc: "Yapay zeka destekli wellness teknolojisinin ön saflarında yer alın",
        flexibility: "İş Esnekliği",
        flexibilityDesc: "Uzaktan çalışma seçenekleri, esnek saatler ve iş-yaşam dengesi",
        competitive: "Rekabetçi Tazminat",
        competitiveDesc: "Rekabetçi maaş, hisse senedi seçenekleri ve performans bonusları",
      },
      openPositions: "Açık Pozisyonlar",
      positionsDesc: "Ekibimize katılacak yetenekli bireyler her zaman arıyoruz.",
      salary: "Maaş Aralığı",
      applyNow: "Şimdi Başvur",
      noPositions: "Uygun bir pozisyon görmüyor musunuz? Tutkulu insanlarla tanışmak her zaman ilgileniyoruz.",
      spontaneousApplication: "Kendiliğinden Başvuru Gönder",
      applicationProcess: "Başvuru Süreci",
      processDesc: "İe işe alma sürecimiz kapsamlı, şeffaf ve zamanınıza saygılı olacak şekilde tasarlandı.",
      process: {
        apply: {
          title: "Çevrimiçi Başvur",
          description: "Başvurunuzu gönderin, 5 iş günü içinde inceleyeceğiz",
        },
        review: {
          title: "İlk Değerlendirme",
          description: "Ekibimiz başvurunuzu ve geçmişinizi inceler",
        },
        interview: {
          title: "Mülakatlar",
          description: "Ekip üyeleriyle tanışın ve becerilerinizi sergileyin",
        },
        offer: {
          title: "Teklif ve Oryantasyon",
          description: "Teklif alın ve harika ekibimizin parçası olun",
        },
      },
      positions: {
        seniorYogaInstructor: {
          title: "Kıdemli Yoga Eğitmeni",
          type: "Tam zamanlı",
          location: "Uzaktan / Hibrit",
          experience: "5+ yıl",
          description: "Yoga dersleri yönetin, müfredat geliştirin ve diğer eğitmenlere mentorluk yapın. Yapay zeka destekli yoga eğitiminin geleceğini şekillendirmeye yardımcı olun.",
          salary: "350.000 ₺ - 500.000 ₺",
        },
        fullstackDeveloper: {
          title: "Full-Stack Geliştirici",
          type: "Tam zamanlı",
          location: "Uzaktan",
          experience: "3+ yıl",
          description: "Web platformumuzu oluşturun ve bakımını yapın, yapay zeka özellikleri uygulayın ve harika kullanıcı deneyimleri yaratın.",
          salary: "450.000 ₺ - 700.000 ₺",
        },
        marketingManager: {
          title: "Pazarlama Yöneticisi",
          type: "Tam zamanlı",
          location: "Uzaktan",
          experience: "4+ yıl",
          description: "Pazarlama kampanyalarını yönetin, sosyal medyayı yönetin ve yoga meraklılarından oluşan topluluğumuzu büyütün.",
          salary: "380.000 ₺ - 550.000 ₺",
        },
      },
      readyToJoin: "Hayatları Değiştirmeye Hazır mısınız?",
      readyToJoinDesc: "Yoga'yu yenilikçi teknoloji aracılığıyla herkes için erişilebilir kılma misyonumuzda bize katılın.",
    },
    pressKit: {
      title: "Basit Kiti",
      description: "Joga için medya kaynakları ve marka varlıkları",
      mediaResources: "Medya Kaynakları",
      subtitle: "Joga basit kitine hoş geldiniz. Hikayemizi anlatmak için ihtiyacınız olan her şeyi, marka varlıklarından şirket bilgilerine kadar burada bulacaksınız.",
      downloadAssets: "Varlıkları İndir",
      contactUs: "Bizimle İletişime Geçin",
      companyOverview: "Şirket Genel Bakış",
      companyOverviewDesc: "Joga'yı tanıyın - wellness'ı dünya çapında dönüştüren yapay zeka destekli yoga platformu.",
      stats: {
        users: "Aktif Kullanıcılar",
        rating: "Uygulama Puanı",
        classes: "Mevcut Dersler",
        instructors: "Uzman Eğitmenler",
      },
      story: {
        title: "Hikayemiz",
        content: "2024'te kurulan Joga, basit bir gözlemden ortaya çıktı: yoga'nın dönüştürücü gücü olsa da, kaliteli öğretime erişim sınırlı kalıyor. Antik bilgelikyi en son yapay zeka teknolojisiyle birleştirerek, benzersiz yolculuğunuza uyum sağlayan kişiselleştirilmiş yoga deneyimleri oluşturduk.",
        mission: "Misyonumuz, yapay zeka gücüyle herkes için, her yerde kaliteli yoga öğretimini erişilebilir kılmaktır.",
      },
      brandAssets: "Marka Varlıkları",
      brandAssetsDesc: "Kapsamınızda kullanmak üzere resmi logolarımızı, renklerimizi ve ekran görüntülerimizi indirin.",
      assets: {
        logo: "Logo",
        logoDesc: "Çeşitli formatlarda ve boyutlarda resmi Joga logoları",
        colors: "Marka Renkleri",
        colorsDesc: "Resmi marka renk paletimiz",
        primary: "Birincil",
        secondary: "İkincil",
        accent: "Vurgu",
        screenshots: "Ekran Görüntüleri",
        screenshotsDesc: "Yüksek kaliteli uygulama ekran görüntüleri ve ürün görselleri",
        downloadAll: "Tümünü İndir",
      },
      mediaDownloads: "Medya İndirmeleri",
      mediaDownloadsDesc: "Basın bültenleri, yönetici biyografileri ve şirket bilgileri.",
      downloads: {
        pressRelease: "Basın Bülteni",
        latestNews: "En son haberler ve duyurular",
        download: "İndir",
        executiveBio: "Yönetici Biyografileri ve Fotoğrafları",
        teamPhotos: "Liderlik ekibi bilgileri ve fotoğrafları",
      },
      contactInfo: "İletişim Bilgileri",
      contactInfoDesc: "Medya soruları, ortaklık fırsatları veya ek bilgiler için.",
      contact: {
        media: "Medya Soruları",
        partnerships: "Ortaklıklar",
      },
      forImmediateRelease: "Hemen yayınlanmak üzere",
      available247: "Medya soruları için 24/7 mevcut",
      guidelines: {
        title: "Marka Kılavuzları",
        subtitle: "Joga marka varlıklarını kullanırken lütfen bu kılavuzları izleyin.",
        logoUsage: {
          title: "Logo Kullanımı",
          content: "Kapsamınızda Joga'yı temsil etmek için logolarımızı kullanın.",
          rule1: "Logo etrafında boş alan bırakın",
          rule2: "Logoyu germeyin veya oranlarını değiştirmeyin",
          rule3: "Görünürlük için zıt arka planlarda kullanın",
        },
        attributions: {
          title: "Atıf",
          content: "Varlıklarımızı kullanırken, lütfen 'Joga - Yapay Zeka Destekli Yoga Platformu' olarak atıfta bulunun ve mümkünse jogawellness.com'a link verin.",
        },
      },
      readyToShare: "Hikayemizi Paylaşmaya Hazır mısınız?",
      readyToShareDesc: "Erişilebilir wellness vizyonumuzu paylaşan medya ortakları ve yaratıcılarla çalışmaktan heyecan duyuyoruz.",
    },
    common: {
      loading: "Yükleniyor...",
      error: "Hata oluştu",
      success: "Başarılı!",
      close: "Kapat",
      menu: "Menü",
      language: "Dil",
      theme: {
        light: "Açık",
        dark: "Koyu",
        system: "Sistem",
      },
    },
  },

  es: {
    nav: {
      home: "Inicio",
      features: "Características",
      classes: "Clases",
      testimonials: "Testimonios",
      pricing: "Precios",
      getStarted: "Comenzar",
    },
    hero: {
      title: "Transforma Tu Vida Con Joga",
      subtitle: "Yoga con IA para la Vida Moderna",
      description: "Experimenta sesiones de yoga personalizadas con inteligencia artificial. Únete a miles que están transformando sus mentes y cuerpos.",
      ctaPrimary: "Iniciar Prueba Gratuita",
      ctaSecondary: "Ver Demo",
      trustedBy: "Confiado por 50,000+ practicantes mundialmente",
    },
    features: {
      title: "Experiencia de Yoga Inteligente",
      subtitle: "Descubre características de vanguardia con IA diseñadas para tu viaje de bienestar",
      badge: "Características Modernas",
      aiTitle: "Personalización con IA",
      aiDescription: "Obtén rutinas de yoga personalizadas basadas en tus metas, nivel de condición física y preferencias. Nuestra IA aprende y se adapta a tu progreso.",
      aiBadge1: "Aprendizaje Adaptativo",
      aiBadge2: "Recomendaciones Inteligentes",
      liveTitle: "Clases Interactivas en Vivo",
      liveDescription: "Únete a clases en vivo con instructores certificados de todo el mundo. Comentarios en tiempo real y apoyo comunitario.",
      liveBadge1: "Calidad HD",
      liveBadge2: "Audio Bidireccional",
      progressTitle: "Análisis de Progreso Avanzado",
      progressDescription: "Rastrea tu progreso con análisis detallados, puntuación de precisión de posturas e ideas personalizadas para mejorar.",
      progressBadge1: "Estadísticas en Tiempo Real",
      progressBadge2: "Seguimiento de Metas",
      meditationTitle: "Meditación Guiada",
      meditationDescription: "Accede a cientos de sesiones de meditación guiada para el alivio del estrés, mejor sueño y práctica de atención plena.",
      meditationBadge1: "Historias para Dormir",
      meditationBadge2: "Ejercicios de Respiración",
      nutritionTitle: "Guía de Nutrición",
      nutritionDescription: "Obtén planes de comidas personalizados y consejos de nutrición que complementan tu práctica de yoga para bienestar óptimo.",
      nutritionBadge1: "Planes de Comidas",
      nutritionBadge2: "Biblioteca de Recetas",
      communityTitle: "Apoyo de la Comunidad",
      communityDescription: "Conecta con entusiastas del yoga, comparte experiencias y crece junto con nuestra comunidad de apoyo.",
      communityBadge1: "Foros",
      communityBadge2: "Desafíos",
      ctaTitle: "¿Listo para Transformar tu Práctica?",
      ctaDescription: "Únete a miles de usuarios que ya han descubierto los beneficios del yoga con IA",
      ctaButton: "Comienza tu Viaje",
    },
    classes: {
      title: "Únete a Nuestras Clases en Vivo",
      subtitle: "Practica con instructores de clase mundial en tiempo real",
      liveClasses: "Clases en Vivo",
      allClasses: "Todas las Clases",
      beginner: "Principiante",
      intermediate: "Intermedio",
      advanced: "Avanzado",
      meditation: "Meditación",
      todaySchedule: "Horario de Hoy",
      weekSchedule: "Horario de la Semana",
      joinClass: "Unirse a Clase",
      reserveSpot: "Reservar Lugar",
      setReminder: "Establecer Recordatorio",
      book: "Reservar",
      // Table headers
      day: "Día",
      class: "Clase",
      instructor: "Instructor",
      time: "Hora",
      duration: "Duración",
      level: "Nivel",
      action: "Acción",
      // Days of week
      monday: "Lunes",
      tuesday: "Martes",
      wednesday: "Miércoles",
      thursday: "Jueves",
      friday: "Viernes",
      saturday: "Sábado",
      sunday: "Domingo",
      // Class specific translations
      students: "Estudiantes",
      liveNow: "En Vivo Ahora",
      inHours: "En {{hours}} horas",
      inMinutes: "En {{minutes}} minutos",
      allLevels: "Todos los Niveles",
      // Class names
      sunriseFlow: "Flujo del Amanecer",
      powerYoga: "Power Yoga",
      eveningMeditation: "Meditación Vespertina",
      gentleHatha: "Hatha Suave",
      vinyasaFlow: "Flujo Vinyasa",
      yinYoga: "Yin Yoga",
      ashtanga: "Ashtanga",
      restorativeYoga: "Yoga Restaurativo",
      // Instructor names
      sarahChen: "Sarah Chen",
      mikeJohnson: "Mike Johnson",
      emmaWilson: "Emma Wilson",
      davidLee: "David Lee",
      // Class descriptions
      perfectForBeginners: "Perfecto para empezar",
      forSeriousPractitioners: "Para practicantes serios de yoga",
      forEnthusiastsTeachers: "Para entusiastas y profesores de yoga",
      // FAQ
      faq: {
        cancel: "¿Puedo cancelar mi suscripción en cualquier momento?",
        cancelAnswer: "Sí, puedes cancelar tu suscripción en cualquier momento. Tu acceso continuará hasta el final de tu período de facturación.",
        trial: "¿Hay una prueba gratuita?",
        trialAnswer: "¡Sí! Todos los planes de pago vienen con una prueba gratuita de 7 días. No se requiere tarjeta de crédito para el plan gratuito.",
        equipment: "¿Qué equipo necesito?",
        equipmentAnswer: "Para empezar, solo necesitas una esterilla de yoga. A medida que progreses, es posible que quieras añadir accesorios como bloques, correas o mantas, pero son opcionales.",
        levels: "¿Hay diferentes niveles para principiantes?",
        levelsAnswer: "¡Absolutamente! Tenemos clases que van desde principiantes completos hasta practicantes avanzados. Nuestra IA recomendará el punto de partida perfecto para ti.",
      },
    },
    testimonials: {
      title: "Amor de la Comunidad",
      subtitle: "Escucha a nuestros miembros sobre sus viajes transformadores",
      successStories: "Historias de Éxito",
      stats: {
        members: "Miembros Felices",
        rating: "Calificación Promedio",
        classes: "Clases Completadas",
        retention: "Tasa de Retención",
      },
      featured: {
        name: "Jessica Martinez",
        memberSince: "Miembro desde 2023",
        testimonial: "Joga ha transformado completamente mi vida. Comencé como principiante completa y ahora estoy practicando poses avanzadas que nunca pensé que serían posibles. La personalización impulsada por IA me mantiene motivada y las clases en vivo me hacen sentir conectada con una comunidad maravillosa. He perdido 20 libras, ganado mucha flexibilidad y, lo más importante, encontrado paz interior.",
        badges: {
          weightLoss: "Viaje de Pérdida de Peso",
          flexibility: "Flexibilidad Ganada",
          mindfulness: "Práctica de Atención Plena",
        },
      },
      members: {
        robert: {
          name: "Robert Chen",
          profession: "Ingeniero de Software",
          testimonial: "Perfecto para mi ocupado horario. Las clases de 30 minutos encajan perfectamente en mis descansos para el almuerzo, y he notado una mejora significativa en mi postura y niveles de estrés.",
          duration: "3 meses con Joga",
        },
        amanda: {
          name: "Amanda Foster",
          profession: "Maestra y Madre",
          testimonial: "Las sesiones de meditación han sido transformadoras de vida. Estoy más presente con mis estudiantes y familia. La aplicación hace que sea tan fácil incluir el autocuidado.",
          duration: "6 meses con Joga",
        },
        marcus: {
          name: "Marcus Thompson",
          profession: "Atleta Jubilado",
          testimonial: "Como atleta anterior, necesitaba algo que me desafiara físicamente. Las clases avanzadas y el seguimiento del progreso me mantienen motivado para superar mis límites.",
          duration: "1 año con Joga",
        },
        lisa: {
          name: "Lisa Park",
          profession: "Directora de Marketing",
          testimonial: "Gran variedad de clases e instructores. La aplicación es fácil de usar y la comunidad es muy solidaria. Solo desearía que tuvieran más talleres avanzados.",
          duration: "2 meses con Joga",
        },
        david: {
          name: "David Kumar",
          profession: "Estudiante de Medicina",
          testimonial: "El alivio del estrés del yoga ha mejorado mi concentración durante los estudios. Las recomendaciones de IA coinciden perfectamente con mis niveles de energía y horario de estudio.",
          duration: "4 meses con Joga",
        },
        rachel: {
          name: "Rachel Green",
          profession: "Diseñadora Freelance",
          testimonial: "Como alguien con dolor de espalda por estar sentada todo el día, los programas de yoga dirigidos han sido increíblemente útiles. Me siento más fuerte y flexible que nunca.",
          duration: "8 meses con Joga",
        },
      },
      asFeaturedIn: "Como se ve en:",
      featuredIn: {
        yogaJournal: "Yoga Journal",
        mindful: "Mindful",
        wellGood: "Well+Good",
        healthMagazine: "Health Magazine",
        techCrunch: "TechCrunch",
      },
    },
    pricing: {
      title: "Elige Tu Camino",
      subtitle: "Comienza gratis, actualiza cuando estés listo. Sin tarifas ocultas, cancela en cualquier momento.",
      monthly: "Mensual",
      annual: "Anual (Ahorra 20%)",
      save: "Ahorra",
      saveWithAnnual: "Ahorra ${{amount}} con facturación anual",
      mostPopular: "MÁS POPULAR",
      plans: {
        free: "Gratis",
        pro: "Pro",
        premium: "Premium",
      },
      descriptions: {
        free: "Perfecto para empezar",
        pro: "Para practicantes serios de yoga",
        premium: "Para entusiastas y profesores de yoga",
      },
      prices: {
        free: "$0",
        proMonthly: "$19.99",
        proAnnual: "$15.99",
        premiumMonthly: "$39.99",
        premiumAnnual: "$31.99",
      },
      buttons: {
        getStartedFree: "Comenzar Gratis",
        startFreeTrial: "Comenzar Prueba Gratuita",
        contactSales: "Contactar Ventas",
      },
      features: {
        basicClasses: "Acceso a 50+ clases básicas",
        progressTracking: "Seguimiento básico de progreso",
        community: "Foros comunitarios",
        mobileAccess: "Acceso a aplicación móvil",
        liveClasses: "Clases en vivo ilimitadas",
        aiRecommendations: "Personalización con IA",
        advancedAnalytics: "Análisis avanzado de progreso",
        downloadable: "Contenido descargable",
        prioritySupport: "Soporte prioritario",
        coaching: "Sesiones de coaching 1-a-1",
        mealPlans: "Planes de comida personalizados",
        workshops: "Talleres exclusivos",
        certification: "Preparación para certificación de instructor",
        vipSupport: "Soporte VIP",
      },
      faq: {
        title: "Preguntas Frecuentes",
        cancel: "¿Puedo cancelar mi suscripción en cualquier momento?",
        cancelAnswer: "Sí, puedes cancelar tu suscripción en cualquier momento. Tu acceso continuará hasta el final de tu período de facturación.",
        trial: "¿Hay una prueba gratuita?",
        trialAnswer: "¡Sí! Todos los planes de pago vienen con una prueba gratuita de 7 días. No se requiere tarjeta de crédito para el plan gratuito.",
        equipment: "¿Qué equipo necesito?",
        equipmentAnswer: "Para empezar, solo necesitas una esterilla de yoga. A medida que progreses, es posible que quieras añadir accesorios como bloques, correas o mantas, pero son opcionales.",
        levels: "¿Hay diferentes niveles para principiantes?",
        levelsAnswer: "¡Absolutamente! Tenemos clases que van desde principiantes completos hasta practicantes avanzados. Nuestra IA recomendará el punto de partida perfecto para ti.",
      },
    },
    cta: {
      title: "Comienza Tu Viaje",
      subtitle: "Únete a miles transformando sus vidas con Joga. Comienza tu prueba gratuita hoy.",
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo Electrónico",
      experience: "Nivel de Experiencia",
      goals: "Metas Principales",
      termsAgree: "Acepto los {terms} y la {privacy}",
      submit: "Iniciar Mi Prueba Gratuita de 7 Días",
      downloadApp: "Descargar App",
      browseClasses: "Explorar Clases",
    },
    videoModal: {
      title: "Ver Joga en Acción",
      description: "Descubre cómo el yoga con IA puede transformar tu viaje de bienestar con clases personalizadas e instructores expertos.",
      iframeTitle: "Video Demo de la Plataforma Joga",
      close: "Cerrar",
      startTrial: "Iniciar Prueba Gratuita",
    },
    footer: {
      about: "Sobre nosotros",
      contact: "Contacto",
      careers: "Carreras",
      pressKit: "Kit de Prensa",
      copyright: "Derechos de Autor © {year} - Todos los derechos reservados por",
      rights: "Joga Inc.",
    },
    careers: {
      title: "Carreras en Joga",
      description: "Únete a nuestro equipo y transforma vidas a través del yoga y el bienestar",
      joinOurTeam: "Únete a Nuestro Equipo",
      subtitle: "Sé parte de algo más grande. Ayuda a las personas a transformar sus vidas a través del poder del yoga y la tecnología de IA.",
      viewPositions: "Ver Posiciones Abiertas",
      learnMore: "Aprende Más",
      whyWorkHere: "Por Qué Trabajar Con Nosotros",
      whyWorkHereDesc: "Somos más que una plataforma de bienestar. Somos un equipo apasionado por hacer que el yoga sea accesible para todos a través de tecnología innovadora.",
      benefits: {
        health: "Salud y Bienestar",
        healthDesc: "Seguro médico completo, clases de yoga gratuitas y subsidio de bienestar",
        growth: "Crecimiento Profesional",
        growthDesc: "Oportunidades de aprendizaje continuo, programas de desarrollo de carrera y mentoría",
        team: "Equipo Increíble",
        teamDesc: "Trabaja con personas apasionadas y talentosas que comparten tu visión",
        innovation: "Innovación",
        innovationDesc: "Estate a la vanguardia de la tecnología de bienestar impulsada por IA",
        flexibility: "Flexibilidad Laboral",
        flexibilityDesc: "Opciones de trabajo remoto, horarios flexibles y equilibrio vida-trabajo",
        competitive: "Compensación Competitiva",
        competitiveDesc: "Salario competitivo, opciones de acciones y bonos de desempeño",
      },
      openPositions: "Posiciones Abiertas",
      positionsDesc: "Siempre estamos buscando personas talentosas para unirse a nuestro equipo.",
      salary: "Rango Salarial",
      applyNow: "Aplicar Ahora",
      noPositions: "¿No ves una posición que se ajuste? Siempre estamos interesados en conocer personas apasionadas.",
      spontaneousApplication: "Enviar Aplicación Espontánea",
      applicationProcess: "Proceso de Aplicación",
      processDesc: "Nuestro proceso de contratación está diseñado para ser exhaustivo, transparente y respetuoso con tu tiempo.",
      process: {
        apply: {
          title: "Aplicar en Línea",
          description: "Envía tu aplicación y la revisaremos en 5 días hábiles",
        },
        review: {
          title: "Revisión Inicial",
          description: "Nuestro equipo revisa tu aplicación y antecedentes",
        },
        interview: {
          title: "Entrevistas",
          description: "Reúnete con miembros del equipo y muestra tus habilidades",
        },
        offer: {
          title: "Oferta y Onboarding",
          description: "Recibe una oferta y únete a nuestro increíble equipo",
        },
      },
      positions: {
        seniorYogaInstructor: {
          title: "Instructor de Yoga Senior",
          type: "Tiempo Completo",
          location: "Remoto / Híbrido",
          experience: "5+ años",
          description: "Dirige clases de yoga, desarrolla currículos y mentoriza a otros instructores. Ayuda a dar forma al futuro de la instrucción de yoga impulsada por IA.",
          salary: "€45,000 - €65,000",
        },
        fullstackDeveloper: {
          title: "Desarrollador Full-Stack",
          type: "Tiempo Completo",
          location: "Remoto",
          experience: "3+ años",
          description: "Construye y mantiene nuestra plataforma web, implementa características de IA y crea experiencias de usuario increíbles.",
          salary: "€55,000 - €80,000",
        },
        marketingManager: {
          title: "Gerente de Marketing",
          type: "Tiempo Completo",
          location: "Remoto",
          experience: "4+ años",
          description: "Lidera campañas de marketing, gestiona redes sociales y haz crecer nuestra comunidad de entusiastas del yoga.",
          salary: "€48,000 - €68,000",
        },
      },
      readyToJoin: "¿Listo para Transformar Vidas?",
      readyToJoinDesc: "Únete a nosotros en nuestra misión de hacer que el yoga sea accesible para todos a través de tecnología innovadora.",
    },
    pressKit: {
      title: "Kit de Prensa",
      description: "Recursos de medios y activos de marca para Joga",
      mediaResources: "Recursos de Medios",
      subtitle: "Bienvenido al kit de prensa de Joga. Aquí encontrarás todo lo que necesitas para cubrir nuestra historia, desde activos de marca hasta información de la empresa.",
      downloadAssets: "Descargar Activos",
      contactUs: "Contáctanos",
      companyOverview: "Resumen de la Empresa",
      companyOverviewDesc: "Conoce a Joga - la plataforma de yoga impulsada por IA que está transformando el bienestar mundial.",
      stats: {
        users: "Usuarios Activos",
        rating: "Calificación de la App",
        classes: "Clases Disponibles",
        instructors: "Instructores Expertos",
      },
      story: {
        title: "Nuestra Historia",
        content: "Fundada en 2024, Joga surgió de una simple observación: aunque el yoga tiene poder transformador, el acceso a instrucción de calidad sigue siendo limitado. Combinamos la sabiduría antigua con tecnología de IA de vanguardia para crear experiencias de yoga personalizadas que se adaptan a tu viaje único.",
        mission: "Nuestra misión es hacer que la instrucción de yoga de calidad sea accesible para todos, en todas partes, a través del poder de la inteligencia artificial.",
      },
      brandAssets: "Activos de Marca",
      brandAssetsDesc: "Descarga nuestros logos oficiales, colores y capturas de pantalla para usar en tu cobertura.",
      assets: {
        logo: "Logo",
        logoDesc: "Logos oficiales de Joga en varios formatos y tamaños",
        colors: "Colores de Marca",
        colorsDesc: "Nuestra paleta de colores de marca oficial",
        primary: "Primario",
        secondary: "Secundario",
        accent: "Acento",
        screenshots: "Capturas de Pantalla",
        screenshotsDesc: "Capturas de pantalla de alta calidad de la aplicación e imágenes del producto",
        downloadAll: "Descargar Todo",
      },
      mediaDownloads: "Descargas de Medios",
      mediaDownloadsDesc: "Comunicados de prensa, biografías de ejecutivos e información de la empresa.",
      downloads: {
        pressRelease: "Comunicado de Prensa",
        latestNews: "Últimas noticias y anuncios",
        download: "Descargar",
        executiveBio: "Biografías de Ejecutivos y Fotos",
        teamPhotos: "Información y fotos del equipo de liderazgo",
      },
      contactInfo: "Información de Contacto",
      contactInfoDesc: "Para consultas de medios, oportunidades de asociación o información adicional.",
      contact: {
        media: "Consultas de Medios",
        partnerships: "Asociaciones",
      },
      forImmediateRelease: "Para publicación inmediata",
      available247: "Disponible 24/7 para consultas de medios",
      guidelines: {
        title: "Directrices de Marca",
        subtitle: "Por favor sigue estas directrices al usar los activos de marca de Joga.",
        logoUsage: {
          title: "Uso del Logo",
          content: "Usa nuestros logos para representar a Joga en tu cobertura.",
          rule1: "Mantén espacio claro alrededor del logo",
          rule2: "No estires o alteres las proporciones del logo",
          rule3: "Usa contra fondos contrastantes para visibilidad",
        },
        attributions: {
          title: "Atribución",
          content: "Al usar nuestros activos, por favor acredita 'Joga - Plataforma de Yoga Impulsada por IA' y enlaza a jogawellness.com cuando sea posible.",
        },
      },
      readyToShare: "¿Listo para Compartir Nuestra Historia?",
      readyToShareDesc: "Estamos emocionados de trabajar con socios de medios y creadores que comparten nuestra visión de bienestar accesible.",
    },
    common: {
      loading: "Cargando...",
      error: "Ocurrió un error",
      success: "¡Éxito!",
      close: "Cerrar",
      menu: "Menú",
      language: "Idioma",
      theme: {
        light: "Claro",
        dark: "Oscuro",
        system: "Sistema",
      },
    },
  },
};

// Get translation function for components
export function getTranslation(Astro: AstroGlobal, key: string): string {
  const locale = Astro.currentLocale || 'en';
  const translation = translations[locale] || translations['en'];

  // Access nested properties using dot notation
  const keys = key.split('.');
  let value: any = translation;

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}

// Get all translations for a locale
export function getTranslations(locale: string): Translation {
  return translations[locale] || translations['en'];
}

// Get supported locales
export function getSupportedLocales(): string[] {
  return Object.keys(translations);
}

// Get locale info for display
export function getLocaleInfo(locale: string) {
  const localeMap: Record<string, { name: string; flag: string }> = {
    en: { name: "English", flag: "🇺🇸" },
    de: { name: "Deutsch", flag: "🇩🇪" },
    ru: { name: "Русский", flag: "🇷🇺" },
    tr: { name: "Türkçe", flag: "🇹🇷" },
    es: { name: "Español", flag: "🇪🇸" },
  };

  return localeMap[locale] || localeMap['en'];
}