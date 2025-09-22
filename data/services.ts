export interface Service {
  name: string
  slug: string
  category: 'gynecology' | 'aesthetics' | 'cosmetic-gyn'
  description: string
  whatItHelps: string[]
  howItWorks: string[]
  visitTime?: string
}

export const gynecologyServices: Service[] = [
  {
    name: 'Birth Control',
    slug: 'birth-control',
    category: 'gynecology',
    description: 'Comprehensive contraceptive counseling and management to help you choose the best birth control method for your lifestyle and health needs.',
    whatItHelps: ['Pregnancy prevention', 'Menstrual regulation', 'Hormone balance'],
    howItWorks: ['Consultation and health assessment', 'Discussion of all available options', 'Personalized recommendation and follow-up'],
    visitTime: '30-45 minutes'
  },
  {
    name: 'Endometriosis',
    slug: 'endometriosis',
    category: 'gynecology',
    description: 'Expert diagnosis and treatment of endometriosis using the latest minimally invasive techniques to reduce pain and improve quality of life.',
    whatItHelps: ['Pelvic pain relief', 'Heavy bleeding control', 'Fertility preservation'],
    howItWorks: ['Comprehensive evaluation and imaging', 'Minimally invasive surgical options', 'Long-term management plan'],
    visitTime: '45-60 minutes'
  },
  {
    name: 'Fibroids',
    slug: 'fibroids',
    category: 'gynecology',
    description: 'Advanced treatment options for uterine fibroids, from medication management to minimally invasive surgical procedures.',
    whatItHelps: ['Heavy menstrual bleeding', 'Pelvic pressure', 'Fertility concerns'],
    howItWorks: ['Detailed imaging and assessment', 'Non-surgical and surgical options', 'Personalized treatment approach'],
    visitTime: '45-60 minutes'
  },
  {
    name: 'Incontinence',
    slug: 'incontinence',
    category: 'gynecology',
    description: 'Comprehensive evaluation and treatment of urinary incontinence with both conservative and advanced treatment options.',
    whatItHelps: ['Bladder control', 'Quality of life', 'Confidence restoration'],
    howItWorks: ['Thorough evaluation and testing', 'Conservative treatment first', 'Advanced options if needed'],
    visitTime: '45 minutes'
  },
  {
    name: 'Menopause',
    slug: 'menopause',
    category: 'gynecology',
    description: 'Personalized menopause management including hormone therapy, lifestyle counseling, and symptom relief strategies.',
    whatItHelps: ['Hot flash relief', 'Mood stabilization', 'Bone health protection'],
    howItWorks: ['Comprehensive hormone assessment', 'Individualized treatment plan', 'Regular monitoring and adjustments'],
    visitTime: '45 minutes'
  },
  {
    name: 'Menstrual Disorders',
    slug: 'menstrual-disorders',
    category: 'gynecology',
    description: 'Expert evaluation and treatment of irregular periods, heavy bleeding, and other menstrual concerns.',
    whatItHelps: ['Cycle regulation', 'Bleeding control', 'Pain management'],
    howItWorks: ['Detailed menstrual history', 'Appropriate testing and evaluation', 'Targeted treatment approach'],
    visitTime: '30-45 minutes'
  },
  {
    name: 'Ovarian Cysts',
    slug: 'ovarian-cysts',
    category: 'gynecology',
    description: 'Comprehensive management of ovarian cysts with careful monitoring and minimally invasive treatment when necessary.',
    whatItHelps: ['Pelvic pain relief', 'Cyst resolution', 'Fertility preservation'],
    howItWorks: ['Ultrasound evaluation', 'Monitoring vs. treatment decision', 'Minimally invasive removal if needed'],
    visitTime: '30-45 minutes'
  },
  {
    name: 'Pelvic Pain',
    slug: 'pelvic-pain',
    category: 'gynecology',
    description: 'Thorough evaluation and treatment of chronic pelvic pain using a multidisciplinary approach for lasting relief.',
    whatItHelps: ['Pain reduction', 'Function improvement', 'Quality of life'],
    howItWorks: ['Comprehensive pain assessment', 'Identify underlying causes', 'Multimodal treatment approach'],
    visitTime: '60 minutes'
  },
  {
    name: 'PCOS',
    slug: 'pcos',
    category: 'gynecology',
    description: 'Comprehensive management of Polycystic Ovary Syndrome including metabolic, reproductive, and cosmetic concerns.',
    whatItHelps: ['Hormone balance', 'Fertility improvement', 'Metabolic health'],
    howItWorks: ['Complete hormonal evaluation', 'Lifestyle and medication management', 'Long-term monitoring'],
    visitTime: '45-60 minutes'
  },
  {
    name: 'UTI',
    slug: 'uti',
    category: 'gynecology',
    description: 'Expert diagnosis and treatment of urinary tract infections with focus on prevention of recurrent infections.',
    whatItHelps: ['Infection clearance', 'Symptom relief', 'Recurrence prevention'],
    howItWorks: ['Rapid diagnosis and testing', 'Targeted antibiotic therapy', 'Prevention strategies'],
    visitTime: '20-30 minutes'
  },
  {
    name: 'Vaginitis',
    slug: 'vaginitis',
    category: 'gynecology',
    description: 'Comprehensive evaluation and treatment of vaginal infections and inflammatory conditions for optimal vaginal health.',
    whatItHelps: ['Infection treatment', 'Symptom relief', 'Recurrence prevention'],
    howItWorks: ['Accurate diagnosis with testing', 'Targeted treatment approach', 'Follow-up and prevention'],
    visitTime: '30 minutes'
  },
  {
    name: 'Vulvar Disorders',
    slug: 'vulvar-disorders',
    category: 'gynecology',
    description: 'Specialized care for vulvar conditions including dermatologic issues, pain syndromes, and other vulvar concerns.',
    whatItHelps: ['Pain relief', 'Skin health', 'Comfort restoration'],
    howItWorks: ['Detailed examination and assessment', 'Appropriate testing if needed', 'Targeted treatment plan'],
    visitTime: '45 minutes'
  },
  {
    name: 'Hysteroscopy',
    slug: 'hysteroscopy',
    category: 'gynecology',
    description: 'Minimally invasive procedure to diagnose and treat uterine conditions using a thin, lighted scope.',
    whatItHelps: ['Abnormal bleeding', 'Polyp removal', 'Fibroid treatment'],
    howItWorks: ['Office-based procedure', 'Direct visualization of uterus', 'Same-day treatment when appropriate'],
    visitTime: '30-45 minutes'
  },
  {
    name: 'Laparoscopy',
    slug: 'laparoscopy',
    category: 'gynecology',
    description: 'Advanced minimally invasive surgery for diagnosis and treatment of various gynecologic conditions.',
    whatItHelps: ['Endometriosis treatment', 'Ovarian cyst removal', 'Adhesion removal'],
    howItWorks: ['Small incision technique', 'Camera-guided precision', 'Faster recovery time'],
    visitTime: '1-2 hours (surgical)'
  },
  {
    name: 'NovaSure Ablation',
    slug: 'novasure-ablation',
    category: 'gynecology',
    description: 'Quick, effective treatment for heavy menstrual bleeding using advanced radiofrequency technology.',
    whatItHelps: ['Heavy bleeding reduction', 'Menstrual management', 'Quality of life'],
    howItWorks: ['5-minute outpatient procedure', 'Radiofrequency energy treatment', 'No hormones required'],
    visitTime: '30 minutes'
  },
  {
    name: 'MonaLisa Touch',
    slug: 'monalisa-touch-gyn',
    category: 'gynecology',
    description: 'Revolutionary laser therapy for vaginal health, addressing dryness, pain, and other menopausal changes.',
    whatItHelps: ['Vaginal dryness', 'Painful intercourse', 'Urinary symptoms'],
    howItWorks: ['Gentle laser treatment', 'Stimulates natural healing', 'Series of 3 treatments'],
    visitTime: '15-20 minutes'
  }
]

export const aestheticsServices: Service[] = [
  {
    name: 'Botox & Fillers',
    slug: 'botox-fillers',
    category: 'aesthetics',
    description: 'Expert injection techniques for wrinkle reduction and facial volume restoration using premium products.',
    whatItHelps: ['Wrinkle reduction', 'Volume restoration', 'Facial rejuvenation'],
    howItWorks: ['Personalized consultation', 'Precise injection technique', 'Natural-looking results'],
    visitTime: '30-45 minutes'
  },
  {
    name: 'Chin Liposuction',
    slug: 'chin-liposuction',
    category: 'aesthetics',
    description: 'Minimally invasive procedure to remove excess fat under the chin for a more defined jawline.',
    whatItHelps: ['Double chin reduction', 'Jawline definition', 'Profile improvement'],
    howItWorks: ['Local anesthesia', 'Small incision technique', 'Immediate results'],
    visitTime: '1-2 hours'
  },
  {
    name: 'Laser Hair Removal',
    slug: 'laser-hair-removal',
    category: 'aesthetics',
    description: 'Advanced laser technology for permanent hair reduction on all skin types with minimal discomfort.',
    whatItHelps: ['Unwanted hair removal', 'Smooth skin', 'Long-term results'],
    howItWorks: ['Laser targets hair follicles', 'Series of treatments', 'Progressive hair reduction'],
    visitTime: '15-60 minutes'
  },
  {
    name: 'Lumecca',
    slug: 'lumecca',
    category: 'aesthetics',
    description: 'Intense pulsed light therapy for sun damage, age spots, and skin tone improvement.',
    whatItHelps: ['Sun damage reversal', 'Age spot removal', 'Skin tone evening'],
    howItWorks: ['IPL light energy', 'Targets pigmentation', 'Gradual improvement'],
    visitTime: '30-45 minutes'
  },
  {
    name: 'Morpheus8',
    slug: 'morpheus8',
    category: 'aesthetics',
    description: 'Revolutionary radiofrequency microneedling for skin tightening and collagen stimulation.',
    whatItHelps: ['Skin tightening', 'Wrinkle reduction', 'Texture improvement'],
    howItWorks: ['Microneedling with RF energy', 'Stimulates collagen production', 'Progressive improvement'],
    visitTime: '45-60 minutes'
  },
  {
    name: 'PRP Hair Restoration',
    slug: 'prp-hair-restoration',
    category: 'aesthetics',
    description: 'Natural hair restoration using your own platelet-rich plasma to stimulate hair growth.',
    whatItHelps: ['Hair thinning', 'Hair loss', 'Scalp health'],
    howItWorks: ['Blood draw and processing', 'PRP injection into scalp', 'Natural growth stimulation'],
    visitTime: '60-90 minutes'
  },
  {
    name: 'PRP (Skin)',
    slug: 'prp-skin',
    category: 'aesthetics',
    description: 'Platelet-rich plasma therapy for facial rejuvenation and skin texture improvement.',
    whatItHelps: ['Skin rejuvenation', 'Texture improvement', 'Natural glow'],
    howItWorks: ['Blood processing', 'Facial injection or microneedling', 'Natural healing response'],
    visitTime: '60-90 minutes'
  },
  {
    name: 'Skin Tightening',
    slug: 'skin-tightening',
    category: 'aesthetics',
    description: 'Non-surgical skin tightening treatments using advanced radiofrequency and ultrasound technology.',
    whatItHelps: ['Loose skin', 'Facial sagging', 'Body contouring'],
    howItWorks: ['Energy-based treatment', 'Collagen stimulation', 'Gradual tightening'],
    visitTime: '45-90 minutes'
  }
]

export const cosmeticGynServices: Service[] = [
  {
    name: 'Labiaplasty',
    slug: 'labiaplasty',
    category: 'cosmetic-gyn',
    description: 'Surgical procedure to reshape and reduce the labia for improved comfort, function, and appearance.',
    whatItHelps: ['Physical discomfort', 'Aesthetic concerns', 'Confidence improvement'],
    howItWorks: ['Personalized surgical plan', 'Minimally invasive technique', 'Natural-looking results'],
    visitTime: '1-2 hours (surgical)'
  },
  {
    name: 'Vaginal Revitalization',
    slug: 'vaginal-revitalization',
    category: 'cosmetic-gyn',
    description: 'Non-surgical treatments to improve vaginal health, tightness, and overall intimate wellness.',
    whatItHelps: ['Vaginal laxity', 'Dryness', 'Sexual satisfaction'],
    howItWorks: ['Energy-based treatments', 'Collagen stimulation', 'Series of sessions'],
    visitTime: '30-45 minutes'
  },
  {
    name: 'Vaginoplasty',
    slug: 'vaginoplasty',
    category: 'cosmetic-gyn',
    description: 'Surgical procedure to tighten the vaginal canal and surrounding muscles for improved function.',
    whatItHelps: ['Vaginal laxity', 'Sexual function', 'Confidence'],
    howItWorks: ['Surgical tightening', 'Muscle repair', 'Enhanced sensation'],
    visitTime: '1-2 hours (surgical)'
  },
  {
    name: 'Sexual Orgasm Surgeries',
    slug: 'sexual-orgasm-surgeries',
    category: 'cosmetic-gyn',
    description: 'Specialized procedures designed to enhance sexual function and improve orgasmic response.',
    whatItHelps: ['Sexual satisfaction', 'Orgasmic function', 'Intimate wellness'],
    howItWorks: ['Comprehensive evaluation', 'Targeted surgical approach', 'Enhanced sensitivity'],
    visitTime: '1-2 hours (surgical)'
  },
  {
    name: 'MonaLisa Touch',
    slug: 'monalisa-touch-cosmetic',
    category: 'cosmetic-gyn',
    description: 'Laser therapy for vaginal rejuvenation, addressing dryness, laxity, and other intimate concerns.',
    whatItHelps: ['Vaginal dryness', 'Tissue health', 'Intimate comfort'],
    howItWorks: ['Gentle laser treatment', 'Tissue regeneration', 'Series of treatments'],
    visitTime: '15-20 minutes'
  }
]

export const allServices = [...gynecologyServices, ...aestheticsServices, ...cosmeticGynServices]