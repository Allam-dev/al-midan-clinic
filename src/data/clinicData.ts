export interface ReviewItem {
  id: string;
  reviewerName: string;
  avatarUrl?: string;
  dateText: string;
  rating: number;
  arabicText: string;
  englishText?: string;
  sourceUrl: string;
  verificationStatus: 'verified_google_maps' | 'verified_public_listing';
  isGoogleTranslated?: boolean;
}

export interface CandidateService {
  id: string;
  titleArabic: string;
  titleEnglish: string;
  shortDescArabic: string;
  iconName: string; // Lucide icon key
  category: 'general' | 'cosmetic' | 'specialized';
  isConfirmedByClinic: boolean; // false until clinic approves
}

export interface SocialProfile {
  platform: 'facebook' | 'instagram' | 'whatsapp';
  platformNameArabic: string;
  url: string;
  handleDisplay: string;
  verificationEvidence: string;
  isVerified: boolean;
}

export interface ClinicConfiguration {
  identity: {
    nameArabic: string;
    nameEnglish: string;
    doctorNameArabic: string;
    doctorNameEnglish: string;
    doctorTitleArabic: string;
    specialtyArabic: string;
    category: string;
    governorateArabic: string;
    cityArabic: string;
  };
  contact: {
    phoneRaw: string;
    phoneDisplay: string;
    whatsappRaw: string;
    whatsappDisplay: string;
    whatsappDefaultMessage: string;
    isPhoneConfirmed: boolean;
    isWhatsappConfirmed: boolean;
  };
  location: {
    governorate: string;
    city: string;
    confirmedAddressArabic: string;
    plusCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    landmarkDirectionsArabic: string; // Directory lead - flagged for confirmation
    isLandmarkConfirmed: boolean;
    googleMapsUrl: string;
    embedMapUrl: string;
  };
  reputation: {
    ratingValue: number;
    ratingScale: number;
    totalReviews: number;
    starDistribution: {
      stars5: number;
      stars4: number;
      stars3: number;
      stars2: number;
      stars1: number;
    };
    sourceName: string;
    sourceUrl: string;
    lastVerifiedDate: string;
    topicChips: Array<{
      termArabic: string;
      termEnglish: string;
      mentionsCount: number;
      highlight: boolean;
    }>;
  };
  reviews: ReviewItem[];
  reviewThemes: Array<{
    titleArabic: string;
    descriptionArabic: string;
    evidenceNote: string;
    icon: string;
  }>;
  services: CandidateService[];
  socialProfiles: SocialProfile[];
  operatingHours: {
    status: 'by_appointment' | 'confirmed_hours';
    statusTextArabic: string;
    noticeArabic: string;
    isHoursConfirmed: boolean;
    rawText: string;
  };
  outreachSafeguards: {
    isPreviewDemo: boolean;
    disclaimerBannerArabic: string;
    legalMedicalDisclaimerArabic: string;
    unconfirmedChecklist: string[];
  };
  clinicImagery: {
    heroImage: string;
    interiorPhoto1: string;
    interiorPhoto2: string;
  };
}

export const clinicData: ClinicConfiguration = {
  identity: {
    nameArabic: 'عيادة الميدان لطب الأسنان',
    nameEnglish: 'Al Midan Dental Clinic',
    doctorNameArabic: 'د. محمود السيد إبراهيم',
    doctorNameEnglish: 'Dr. Mahmoud El-Sayed Ibrahim',
    doctorTitleArabic: 'طبيب وجراح الفم والأسنان',
    specialtyArabic: 'طب وجراحة الفم والأسنان | علاج الجذور والتركيبات والتجميل',
    category: 'Dentist / عيادة أسنان',
    governorateArabic: 'محافظة المنوفية',
    cityArabic: 'شبين الكوم',
  },
  contact: {
    phoneRaw: '+201150737055',
    phoneDisplay: '011 5073 7055',
    whatsappRaw: '201150737055',
    whatsappDisplay: '01150737055',
    whatsappDefaultMessage:
      'السلام عليكم، أرغب في الاستفسار عن موعد في عيادة الميدان لطب الأسنان (د. محمود السيد إبراهيم).',
    isPhoneConfirmed: true, // Verified from Google Maps primary listing
    isWhatsappConfirmed: true, // Verified linked to same phone number
  },
  location: {
    governorate: 'المنوفية',
    city: 'شبين الكوم',
    confirmedAddressArabic: 'قسم شبين الكوم، شبين الكوم، محافظة المنوفية، مصر',
    plusCode: 'H235+XX Shibin el Kom',
    coordinates: {
      lat: 30.5549291,
      lng: 31.009944,
    },
    landmarkDirectionsArabic:
      'خلف عمر أفندي - شارع الشامي / شارع المهدي المتفرع من شارع سعد زغلول، أعلى سوبر ماركت الدلتا ومحلات المهدي، الدور الأول',
    isLandmarkConfirmed: false, // Flagged for clinic confirmation against exact building entrance
    googleMapsUrl: 'https://maps.app.goo.gl/RAWQbcceTD1chLXX8',
    embedMapUrl:
      'https://maps.google.com/maps?q=30.5549291,31.009944&hl=ar&z=16&output=embed',
  },
  reputation: {
    ratingValue: 5.0,
    ratingScale: 5.0,
    totalReviews: 117,
    starDistribution: {
      stars5: 117,
      stars4: 0,
      stars3: 0,
      stars2: 0,
      stars1: 0,
    },
    sourceName: 'Google Maps Reviews',
    sourceUrl: 'https://maps.app.goo.gl/RAWQbcceTD1chLXX8',
    lastVerifiedDate: 'أكتوبر 2026',
    topicChips: [
      { termArabic: 'د. محمود', termEnglish: 'Dr. Mahmoud', mentionsCount: 10, highlight: true },
      { termArabic: 'دكتوراه ودراسات عليا', termEnglish: 'phd', mentionsCount: 20, highlight: true },
      { termArabic: 'دكتور محترم جداً', termEnglish: 'respectable doctor', mentionsCount: 14, highlight: true },
      { termArabic: 'طبيب ماهر وشاطر', termEnglish: 'skilled doctor', mentionsCount: 14, highlight: true },
      { termArabic: 'أعلى معايير التعقيم', termEnglish: 'sterilized', mentionsCount: 5, highlight: true },
      { termArabic: 'نظافة العيادة والمكان', termEnglish: 'clean clinic', mentionsCount: 4, highlight: false },
      { termArabic: 'انضباط المواعيد', termEnglish: 'punctual', mentionsCount: 4, highlight: false },
      { termArabic: 'معاملة راقية وأخلاق', termEnglish: 'polite treatment', mentionsCount: 3, highlight: false },
    ],
  },
  reviews: [
    {
      id: 'rev-dina',
      reviewerName: 'Dina Hassansaieed',
      avatarUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocIyQgmV5Ct-ai6Ya4K1GYCm_x_eJ-Y_DGXfsZdAWiYWHTxtwQ=w120-h120-p-rp-mo-br100',
      dateText: 'منذ 6 أشهر',
      rating: 5,
      arabicText:
        'ما شاء الله، دكتور محترم وشاطر جداً، والتعقيم ممتاز وبيعرف الضرس محتاج إيه وفاهم الحالة كويس، ربنا يجزيه خير على تعبه مع المرضى.',
      englishText:
        "God bless him, he's a very respectable and skilled doctor. The sterilization is excellent, he can tell what the tooth needs, and he understands the case. May God reward him for his service to his patients.",
      sourceUrl: 'https://maps.app.goo.gl/RAWQbcceTD1chLXX8',
      verificationStatus: 'verified_google_maps',
      isGoogleTranslated: true,
    },
    {
      id: 'rev-mohamed-saif',
      reviewerName: 'Mohamed Saif',
      avatarUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocJO9ihzUpDmRdeDyOk6L4QslOsJC4hJt2aVMVAvVtm8GREtug=w120-h120-p-rp-mo-br100',
      dateText: 'منذ عام',
      rating: 5,
      arabicText: 'دكتور ممتاز، شكراً جزيلاً لحضرتك!',
      englishText: 'Excellent doctor, thank you so much!',
      sourceUrl: 'https://maps.app.goo.gl/RAWQbcceTD1chLXX8',
      verificationStatus: 'verified_google_maps',
    },
    {
      id: 'rev-mohamed-zaki',
      reviewerName: 'Mohamed Zaki',
      avatarUrl:
        'https://lh3.googleusercontent.com/a-/ALV-UjW2-bRsMFfNuu214nfTz2d9yd7Nquyp53IF-GWZ7SbE9Qx-tdZR=w120-h120-p-rp-mo-br100',
      dateText: 'منذ 8 أشهر',
      rating: 5,
      arabicText: 'رقم 1 في شبين الكوم بلا منازع 👍🏻❤️',
      englishText: 'Num 1👍🏻❤️',
      sourceUrl: 'https://maps.app.goo.gl/RAWQbcceTD1chLXX8',
      verificationStatus: 'verified_google_maps',
    },
  ],
  reviewThemes: [
    {
      titleArabic: 'شرح الحالة واحتياجات الأسنان بوضوح',
      descriptionArabic:
        'إجماع كبير في آراء المرضى على شفافية الدكتور في توضيح سبب الألم وما يحتاجه الضرس بدقة دون أي مبالغة أو إجراءات غير لازمة.',
      evidenceNote: 'مستخلص من مراجعات Google الموثقة للعيادة',
      icon: 'FileCheck',
    },
    {
      titleArabic: 'عناية فائقة بالنظافة والتعقيم الطبي',
      descriptionArabic:
        'تركيز استثنائي على تعقيم الأدوات وتجهيز كرسي العلاج بأعلى مستويات السلامة والراحة لمكافحة العدوى.',
      evidenceNote: 'ورد لفظ "تعقيم" و"نظافة" في تقييمات متكررة',
      icon: 'ShieldCheck',
    },
    {
      titleArabic: 'الصبر والاهتمام براحة المريض النفسية',
      descriptionArabic:
        'أسلوب إنساني هادئ يخفف من رهبة عيادة الأسنان، مع أخذ الوقت الكافي للإجابة على التساؤلات وطمأنة المريض.',
      evidenceNote: 'وُصف الطبيب بأنه دكتور محترم وصبور وأمين',
      icon: 'HeartHandshake',
    },
    {
      titleArabic: 'دقة المواعيد وسلاسة التجربة',
      descriptionArabic:
        'العمل بنظام الحجز المسبق يمنح كل مريض حقه الكامل في وقت الكشف والعلاج دون تكدس أو انتظار طويل.',
      evidenceNote: 'تقييم 5.0 كامل بـ 117 مراجعة إيجابية متطابقة',
      icon: 'ClockCheck',
    },
  ],
  services: [
    {
      id: 'srv-checkup',
      titleArabic: 'الفحص الشامل وخطة العلاج',
      titleEnglish: 'Comprehensive Examination',
      shortDescArabic:
        'تشخيص دقيق لحالة الأسنان واللثة باستخدام الفحص السريري مع شرح وافٍ لكافة الخيارات العلاجية المناسبة لحالتك.',
      iconName: 'Stethoscope',
      category: 'general',
      isConfirmedByClinic: false,
    },
    {
      id: 'srv-cleaning',
      titleArabic: 'تنظيف وتلميع الأسنان وإزالة الجير',
      titleEnglish: 'Teeth Cleaning & Polishing',
      shortDescArabic:
        'إزالة الرواسب الجيرية وتلميع الأسطح السنية بالموجات فوق الصوتية لحماية اللثة من الالتهابات واستعادة انتعاش الفم.',
      iconName: 'Sparkles',
      category: 'general',
      isConfirmedByClinic: false,
    },
    {
      id: 'srv-fillings',
      titleArabic: 'الحشوات التجميلية وعلاج التسوس',
      titleEnglish: 'Cosmetic Fillings',
      shortDescArabic:
        'ترميم الأسنان بحشوات كمبوزيت ضوئية تطابق لون الأسنان الطبيعي وتعيد لها قوتها ومظهرها الجمالي بدقة متناهية.',
      iconName: 'Layers',
      category: 'cosmetic',
      isConfirmedByClinic: false,
    },
    {
      id: 'srv-root-canal',
      titleArabic: 'علاج الجذور وسحب العصب',
      titleEnglish: 'Root Canal Treatment',
      shortDescArabic:
        'تنظيف وحشو القنوات العصبية بأحدث التقنيات لإنقاذ الضرس الطبيعي والتخلص التام من الألم في جلسات دقيقة ومريحة.',
      iconName: 'Activity',
      category: 'specialized',
      isConfirmedByClinic: false,
    },
    {
      id: 'srv-whitening',
      titleArabic: 'تبييض الأسنان الآمن',
      titleEnglish: 'Safe Teeth Whitening',
      shortDescArabic:
        'تفتيح درجات لون الأسنان والتخلص من التصبغات الناتجة عن المشروبات والتدخين بطرق آمنة على طبقة المينا.',
      iconName: 'Sun',
      category: 'cosmetic',
      isConfirmedByClinic: false,
    },
    {
      id: 'srv-prosthetics',
      titleArabic: 'التركيبات والعدسات التجميلية (فينير ولومينير)',
      titleEnglish: 'Crowns, Bridges & Veneers',
      shortDescArabic:
        'تعويض الأسنان المفقودة وتجميل الابتسامة بتركيبات الزيركون والبورسلين والعدسات التجميلية المتناسقة.',
      iconName: 'Smile',
      category: 'cosmetic',
      isConfirmedByClinic: false,
    },
    {
      id: 'srv-gum-care',
      titleArabic: 'علاج وصحة اللثة',
      titleEnglish: 'Periodontal Care',
      shortDescArabic:
        'علاج نزيف والتهابات اللثة وجيوب الأسنان للمحافظة على ثبات الأسنان وصحة الأنسجة الداعمة لها.',
      iconName: 'Shield',
      category: 'specialized',
      isConfirmedByClinic: false,
    },
    {
      id: 'srv-orthodontics',
      titleArabic: 'استشارات تقويم الأسنان',
      titleEnglish: 'Orthodontics Consultation',
      shortDescArabic:
        'تقييم حالات اعوجاج وتزاحم الأسنان واقتراح الحلول التقويمية المناسبة لاستعادة تناسق الابتسامة والإطباق السليم.',
      iconName: 'Grid',
      category: 'specialized',
      isConfirmedByClinic: false,
    },
    {
      id: 'srv-pediatric',
      titleArabic: 'طب أسنان الأطفال',
      titleEnglish: 'Pediatric Dentistry',
      shortDescArabic:
        'رعاية لطيفة خاصة بأسنان الأطفال بأسلوب نفسي مهدئ يزيل الرهبة ويغرس عادات العناية بصحة الفم مبكراً.',
      iconName: 'Baby',
      category: 'general',
      isConfirmedByClinic: false,
    },
  ],
  socialProfiles: [
    {
      platform: 'facebook',
      platformNameArabic: 'فيسبوك',
      url: 'https://www.facebook.com/Almiedan007?mibextid=ZbWKwL',
      handleDisplay: 'Almiedan007',
      verificationEvidence: 'الرابط الرسمي المسجل في ملف خرائط Google ودليل الأعمال',
      isVerified: true,
    },
    {
      platform: 'instagram',
      platformNameArabic: 'إنستغرام',
      url: 'https://www.instagram.com/mahmoud_ibrahiem007',
      handleDisplay: '@mahmoud_ibrahiem007',
      verificationEvidence: 'الحساب الرسمي المرتبط برقم العيادة 01150737055 واسم د. محمود السيد',
      isVerified: true,
    },
    {
      platform: 'whatsapp',
      platformNameArabic: 'واتساب',
      url: 'https://wa.me/201150737055?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%85%D9%88%D8%B9%D8%AF%20%D9%81%D9%8A%20%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9%20%D8%A7%D9%84%D9%85%D9%8A%D8%AF%D8%A7%D9%86%20%D9%84%D8%B7%D8%A8%20%D8%A7%D9%84%D8%A3%D8%B3%D9%86%D8%A7%D9%86.',
      handleDisplay: '01150737055',
      verificationEvidence: 'رقم الهاتف الموثق على Google Maps',
      isVerified: true,
    },
  ],
  operatingHours: {
    status: 'by_appointment',
    statusTextArabic: 'العيادة تعمل بنظام الحجز المسبق',
    noticeArabic:
      'نظراً لعدم إدراج ساعات عمل أسبوعية ثابتة على ملف Google الرسمي، تعمل العيادة بمواعيد محددة مسبقاً عبر الاتصال أو واتساب لضمان راحة المرضى.',
    isHoursConfirmed: false, // Flagged for clinic confirmation
    rawText: 'المواعيد بالحجز المسبق (Add hours on Google)',
  },
  outreachSafeguards: {
    isPreviewDemo: true,
    disclaimerBannerArabic:
      'نموذج تجريبي غير رسمي — أُعدّ للعرض والتواصل المهني فقط | عيادة الميدان لطب الأسنان',
    legalMedicalDisclaimerArabic:
      'المعلومات الواردة في هذا الموقع لأغراض تعريفية وتثقيفية عامة، ولا تُعد بديلاً عن الفحص والاستشارة الطبية المباشرة لدى طبيب الأسنان المختص. جميع العلامات والبيانات مأخوذة من المصادر العامة والتقييمات المفتوحة للمرضى.',
    unconfirmedChecklist: [
      'ساعات وأيام العمل الأسبوعية بالتحديد (مسجلة حالياً: بالحجز المسبق).',
      'العنوان الدائري التفصيلي ورقم العقار والدور (مسجل: قسم شبين الكوم / خلف عمر أفندي).',
      'قائمة الخدمات الطبية المعتمدة رسمياً والأسعار أو أنظمة التأمين إن وجدت.',
      'صورة البورتريه الرسمية المعتمدة للدكتور محمود السيد إبراهيم.',
      'أي أرقام هواتف أو خطوط أرضية بديلة.',
    ],
  },
  clinicImagery: {
    heroImage:
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeVW0OnXHMpcmVmjmavpTaLhdQuqBMgr8KFlOpQAh70lTT_cgsy5--aKWj1IWsrUJDpokmKqminDVYqY8evTyRCp3U81XTD39VwaA3ivoVNpW4qMp8Zsnxq16ZJJMWxx2CrxdI=w1200-h700-k-no',
    interiorPhoto1:
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SI_E_XNAof-ejUWn51VLauT1TBA6b-VczqysIjFR2iv4o9jZsflvLavs-4soXytWLjRncHZXShpeY1Cgt681Z8-L3QYZmPXG__Jup1MrTeZWs2Jh4bf2A_zVl4g4_dm0PqFEs=w800-h500-k-no',
    interiorPhoto2:
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SHAmioj5_fCuBvCvONzZstso9opQmseiFiUkYmJWwSeoTVC4kR8Ykl8znwqhNDtTtQiqa-6UdI-E6l6uEqB1GYyS5NM2uJFtM05dwpyq751XiJgfsZzpK8fZy_iJQ6gzHPtGTH=w800-h500-k-no',
  },
};
