import criticalPowerImage from '@/assets/images/critical-power-solutions.webp'
import dataCenterCoolingImage from '@/assets/images/data-center-cooling.jpg'
import dataCenterInfraImage from '@/assets/images/data-center-infra.jpeg'
import hvacImage from '@/assets/images/hvac.webp'
import afterSalesImage from '@/assets/images/after-sales-services.png'
import bankingImage from '@/assets/images/industries/banking-financial.webp'
import commercialBuildingsImage from '@/assets/images/industries/commercial-buildings.webp'
import dataCentersImage from '@/assets/images/industries/data-centers.webp'
import educationImage from '@/assets/images/industries/education-research.webp'
import healthcareImage from '@/assets/images/industries/healthcare.webp'
import hospitalityImage from '@/assets/images/industries/hospitality.webp'
import itItesImage from '@/assets/images/industries/it-ites.webp'
import manufacturingImage from '@/assets/images/industries/manufacturing.webp'
import solarImage from '@/assets/images/industries/solar.webp'
import warehousingImage from '@/assets/images/industries/warehousing-logistics.webp'
import fujiLogo from '@/assets/images/partners/fuji.png'
import hisenseLogo from '@/assets/images/partners/hisense.png'
import schneiderLogo from '@/assets/images/partners/schneider.png'
import socomecLogo from '@/assets/images/partners/socomec.png'
import swegonLogo from '@/assets/images/partners/swegon.png'
import allengersLogo from '@/assets/images/customers/allengers.webp'
import innovativeResinsLogo from '@/assets/images/customers/innovative-resins.webp'
import punjabBevelGearsLogo from '@/assets/images/customers/punjab-bevel-gears.webp'
import erosGroupLogo from '@/assets/images/customers/eros-group.webp'
import orianaPowerLogo from '@/assets/images/customers/oriana-power.webp'
import parsonsLogo from '@/assets/images/customers/parsons.webp'

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Capabilities', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '7+', label: 'Major projects delivered', color: 'text-solar' },
  { value: '5', label: 'OEM technology partners', color: 'text-white' },
  { value: '10+', label: 'Industries served', color: 'text-white' },
  { value: '24/7', label: 'Service & support network', color: 'text-azure' },
]

export const services = [
  {
    title: 'Critical Power Solutions',
    description:
      'Clean, continuous power for loads that cannot drop, from single racks to plant-wide UPS systems.',
    tags: [
      'UPS systems',
      'STS',
      'Power distribution',
      'Batteries',
      'Power quality',
      'Lithium-ion',
    ],
    image: criticalPowerImage,
    imageAlt: 'Critical power equipment in a plant room',
    accent: 'linear-gradient(90deg, #FDAE09, #9A0F14)',
  },
  {
    title: 'Data Center Cooling',
    description:
      'Precision air and chilled-water systems that hold inlet temperatures where the IT load needs them.',
    tags: [
      'PAC',
      'PAHU',
      'Chiller-based systems',
      'Cold aisle containment',
      'Hot aisle containment',
    ],
    image: dataCenterCoolingImage,
    imageAlt: 'Precision cooling units in a data centre',
    accent: 'linear-gradient(90deg, #206FC3, #17376F)',
  },
  {
    title: 'Data Center Infrastructure',
    description:
      'The physical backbone of the data hall: racks, electrical, containment and the monitoring that watches it.',
    tags: [
      'Server racks',
      'Electrical infrastructure',
      'Monitoring',
      'Containment',
    ],
    image: dataCenterInfraImage,
    imageAlt: 'Server racks and structured cabling in a data hall',
    accent: 'linear-gradient(90deg, #17376F, #181933)',
  },
  {
    title: 'HVAC Solutions',
    description:
      'Comfort and process cooling for offices, machine areas and commercial floors, sized to the space.',
    tags: [
      'VRF / VRV',
      'Ductable solutions',
      'Chiller-based solutions',
      'Distribution & control',
    ],
    image: hvacImage,
    imageAlt: 'Outdoor HVAC condenser units',
    accent: 'linear-gradient(90deg, #206FC3, #17376F)',
  },
  {
    title: 'AMC & After-Sales Services',
    description:
      'Keeping installed systems healthy across their life-cycle, whoever the original OEM was.',
    tags: [
      'Modernisation & retrofit',
      'AMC',
      'Health checks',
      'Preventive maintenance',
      'Breakdown support',
    ],
    image: afterSalesImage,
    imageAlt: 'Service engineer maintaining installed equipment',
    accent: 'linear-gradient(90deg, #FDAE09, #9A0F14)',
  },
]

export const pillars = [
  {
    label: 'Reliability',
    color: '#C47F00',
    description:
      'OEM-backed, mission-critical engineering designed for maximum uptime and business continuity.',
  },
  {
    label: 'Precision',
    color: '#206FC3',
    description:
      'Application-oriented design, tested and commissioned to exact thermal and electrical tolerances.',
  },
  {
    label: 'Efficiency',
    color: '#3F860B',
    description:
      'Energy-smart solutions that lower operating cost and carbon while raising performance.',
  },
  {
    label: 'Partnership',
    color: '#9A0F14',
    description:
      'Multi-brand flexibility and responsive after-sales support across the full equipment life-cycle.',
  },
]

export const reasons = [
  {
    title: 'OEM-backed solutions',
    description:
      'Genuine, reliable solutions supported by leading OEMs to ensure quality, compatibility and long-term performance.',
    icon: 'shield',
    stroke: '#206FC3',
  },
  {
    title: 'Experienced engineering team',
    description:
      'Skilled professionals delivering reliable, technically sound and customised solutions for every project.',
    icon: 'power-backup',
    stroke: '#181933',
  },
  {
    title: 'End-to-end project execution',
    description:
      'Complete project management from planning and supply to installation, commissioning and final handover.',
    icon: 'route',
    stroke: '#C47F00',
  },
  {
    title: 'Mission-critical expertise',
    description:
      'Specialised solutions designed to ensure reliability, continuity and uninterrupted performance for critical operations.',
    icon: 'pulse',
    stroke: '#9A0F14',
  },
  {
    title: 'Energy-efficient solutions',
    description:
      'Smart, sustainable solutions designed to reduce energy consumption, lower operating costs and improve system efficiency.',
    icon: 'leaf',
    stroke: '#4CA10D',
  },
  {
    title: 'Strong after-sales support',
    description:
      'Reliable, prompt and responsive service to ensure smooth operation, minimal downtime and long-term performance.',
    icon: 'wrench',
    stroke: '#17376F',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We understand the load, the site and the uptime you need.',
    bg: '#FDAE09',
    color: '#181933',
  },
  {
    number: '02',
    title: 'Site survey',
    description:
      'Engineers assess space, power and cooling conditions on site.',
    bg: '#E5780C',
    color: '#FFFFFF',
  },
  {
    number: '03',
    title: 'Solution working',
    description: 'Sizing and selection across multi-brand OEM options.',
    bg: '#C04110',
    color: '#FFFFFF',
  },
  {
    number: '04',
    title: 'Design',
    description: 'Layouts, schematics and a clear bill of quantities.',
    bg: '#9A0F14',
    color: '#FFFFFF',
  },
  {
    number: '05',
    title: 'Supply',
    description: 'Genuine OEM equipment delivered to site.',
    bg: '#206FC3',
    color: '#FFFFFF',
  },
  {
    number: '06',
    title: 'Installation',
    description: 'Installed by our own project and installation team.',
    bg: '#1B53A0',
    color: '#FFFFFF',
  },
  {
    number: '07',
    title: 'Testing & commissioning',
    description: 'Tested to exact thermal and electrical tolerances.',
    bg: '#17376F',
    color: '#FFFFFF',
  },
  {
    number: '08',
    title: 'AMC support',
    description:
      'Preventive maintenance, health checks and breakdown support.',
    bg: '#181933',
    color: '#FFFFFF',
  },
]

export const industries = [
  {
    name: 'Data Centers',
    image: dataCentersImage,
    imageAlt: 'Rows of server racks inside a data center',
    accent: '#206FC3',
  },
  {
    name: 'Healthcare',
    image: healthcareImage,
    imageAlt: 'Hospital emergency entrance',
    accent: '#9A0F14',
  },
  {
    name: 'IT & ITeS',
    image: itItesImage,
    imageAlt: 'Modern open-plan office workspace',
    accent: '#17376F',
  },
  {
    name: 'Banking & Financial Services',
    image: bankingImage,
    imageAlt: 'Financial district skyline at dusk',
    accent: '#C47F00',
  },
  {
    name: 'Service & Hospitality',
    image: hospitalityImage,
    imageAlt: 'Modern hotel buildings at sunset',
    accent: '#206FC3',
  },
  {
    name: 'Manufacturing',
    image: manufacturingImage,
    imageAlt: 'Industrial manufacturing facility',
    accent: '#9A0F14',
  },
  {
    name: 'Warehousing & Logistics',
    image: warehousingImage,
    imageAlt: 'Workers and shelving inside a warehouse',
    accent: '#17376F',
  },
  {
    name: 'Commercial Buildings',
    image: commercialBuildingsImage,
    imageAlt: 'Modern commercial buildings',
    accent: '#181933',
  },
  {
    name: 'Solar Industries',
    image: solarImage,
    imageAlt: 'Solar panels installed on a rooftop',
    accent: '#4CA10D',
  },
  {
    name: 'Education & Research',
    image: educationImage,
    imageAlt: 'University campus building',
    accent: '#C47F00',
  },
]

export const partners = [
  { name: 'Schneider Electric', image: schneiderLogo },
  { name: 'Bluebox by Swegon', image: swegonLogo },
  { name: 'Socomec', image: socomecLogo },
  { name: 'Fuji Electric', image: fujiLogo },
  { name: 'Hisense', image: hisenseLogo },
]

export const projects = [
  { customer: 'KF Instruments Pvt Ltd', logo: null, initials: 'KF' },
  { customer: 'Allengers Medical Systems Limited', logo: allengersLogo },
  { customer: 'Innovative Resins Private Limited', logo: innovativeResinsLogo },
  { customer: 'Punjab Bevel Gears Ltd', logo: punjabBevelGearsLogo },
  { customer: 'Eros Group', logo: erosGroupLogo },
  { customer: 'Oriana Power Limited', logo: orianaPowerLogo },
  { customer: 'Parasons Nutritionals Solutions Limited', logo: parsonsLogo },
]

export const supportRoles = [
  'Sales & application engineering',
  'Project management',
  'Installation team',
  'Commissioning engineers',
  'Service engineers',
  'On-site support',
  'Spare parts',
  'Preventive & breakdown maintenance',
]

export const contact = {
  office:
    'Office No 112, Block C, Ground Floor, Sushant Shopping Arcade, Sushant Lok 1, Gurugram, Haryana 122009',
  people: [
    {
      initials: 'NS',
      name: 'Neeraj Saini',
      role: 'Director · Sales & Applications',
      phones: '+91 98731 43974 · +91 89308 08787',
      email: 'neeraj@thermosync.in',
      avatarBg: '#FFF4DB',
      avatarColor: '#9A0F14',
    },
    {
      initials: 'MU',
      name: 'Manish Upadhyaya',
      role: '',
      phones: '+91 97174 45763',
      email: 'manish@thermosync.in',
      avatarBg: '#EAF1F8',
      avatarColor: '#17376F',
    },
  ],
  serviceOptions: [
    'Select a service',
    'Critical Power Solutions',
    'Data Center Cooling',
    'Data Center Infrastructure',
    'HVAC Solutions',
    'AMC & After-Sales Services',
  ],
}

export const footer = {
  description:
    'Thermosync JMK Pvt. Ltd. delivers critical power, precision cooling, data-center infrastructure and HVAC, end to end, for mission-critical environments across India.',
  tagline: 'Engineered for Certainty.',
  quickLinks: [
    { label: 'About us', href: '#about' },
    { label: 'Core business', href: '#services' },
    { label: 'Why Thermosync', href: '#why' },
    { label: 'Industries', href: '#industries' },
    { label: 'Contact', href: '#contact' },
  ],
  serviceLinks: [
    'Critical power',
    'Data center cooling',
    'Data center infrastructure',
    'HVAC',
    'AMC & after-sales',
  ],
  contacts: [
    { name: 'Neeraj Saini', phone: '+91 98731 43974', email: 'neeraj@thermosync.in' },
    { name: 'Manish Upadhyaya', phone: '+91 97174 45763', email: 'manish@thermosync.in' },
  ],
  copyright: '© 2026 Thermosync JMK Private Limited. All rights reserved.',
  website: 'www.thermosync.in',
}
