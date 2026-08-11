import { CompanyPillar, CompanyStat, GlobalHub, SampleKitBox } from "@/types";

export const sampleBoxes: SampleKitBox[] = [
  {
    id: "ecofoam-box",
    name: "EcoFoam Starter Evaluation Kit",
    items: "5x Molded Bio-Foam Inserts + 4x Plant-Starch Corner Protectors",
    tag: "MOST POPULAR",
  },
  {
    id: "thermal-box",
    name: "Bio-Thermal Cold Chain Kit",
    items: "2x Eco Thermal Cooler Inserts + Temperature Data Sheet",
    tag: "HIGH INSULATION",
  },
  {
    id: "enterprise-box",
    name: "Full EcoFoam Material Swatch Box",
    items: "Complete line of bio-foam density blocks & compostability certification",
    tag: "ENTERPRISE",
  },
];

export const companyStats: CompanyStat[] = [
  { label: "Annual Production", value: "450M+" },
  { label: "Global Distribution", value: "65+ Countries" },
  { label: "Manufacturing Tolerance", value: "±0.05 mm" },
  { label: "Cleanroom Standard", value: "ISO 15378" },
];

export const companyPillars: CompanyPillar[] = [
  {
    title: "Type I Borosilicate Clarity",
    description:
      "Engineered for maximum thermal shock resistance and near-zero chemical leeching, protecting volatile pharmaceutical and cosmetic compounds.",
  },
  {
    title: "99.8% UV Light Protection",
    description:
      "High-density amber formulation specifically calibrated to block light spectrum wavelengths between 290nm and 450nm.",
  },
  {
    title: "100% Recyclable Eco-Glass",
    description:
      "Infinitely recyclable glass crafted with up to 45% post-consumer cullet glass to minimize global carbon footprint.",
  },
  {
    title: "360° Laser Optical Quality Control",
    description:
      "Every single vial undergoes high-speed optical camera checks verifying wall thickness, neck thread precision, and lip seal uniformity.",
  },
];

export const companyContact = {
  email: "Ecofoampackaging@gmail.com",
  phone: "+91 97111 76696",
  rawPhone: "9711176696",
  address: "H83V+F46, Village Chhalera & Sadarpur, Sadarpur, Sector 44, Noida, Uttar Pradesh 201303",
  plusCode: "H83V+F46",
  village: "Village Chhalera & Sadarpur",
  locality: "Sadarpur, Sector 44",
  city: "Noida",
  state: "Uttar Pradesh",
  pincode: "201303",
  country: "India",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=H83V%2BF46%2C+Village+Chhalera+%26+Sadarpur%2C+Sadarpur%2C+Sector+44%2C+Noida%2C+Uttar+Pradesh+201303",
  googleMapsEmbed: "https://maps.google.com/maps?q=H83V%2BF46%2C%20Village%20Chhalera%20%26%20Sadarpur%2C%20Sadarpur%2C%20Sector%2044%2C%20Noida%2C%20Uttar%20Pradesh%20201303&t=&z=15&ie=UTF8&iwloc=&output=embed"
};

export const globalHubs: GlobalHub[] = [
  {
    name: "Noida Head Office & Logistics Hub",
    role: "Global Headquarters, Sales & Primary Operations",
    location: "Noida, Uttar Pradesh, India",
  },
];
