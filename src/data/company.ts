import { CompanyPillar, CompanyStat, GlobalHub, SampleKitBox } from "@/types";

export const sampleBoxes: SampleKitBox[] = [
  {
    id: "ecoform-box",
    name: "EcoForm Starter Bottle Evaluation Kit",
    items: "5x Frosted & Clear Health Bottles + Gold & Silver Cap Samples",
    tag: "MOST POPULAR",
  },
  {
    id: "amber-box",
    name: "Amber Pharma UV Protection Kit",
    items: "3x Amber Medicine Bottles + Droppers & Continuous Thread Caps",
    tag: "PHARMA GRADE",
  },
  {
    id: "enterprise-box",
    name: "Full EcoForm Material Swatch Box",
    items: "Complete line of frosted, amber, clear & matte black bottles with full cap swatch set",
    tag: "ENTERPRISE",
  },
];

export const companyStats: CompanyStat[] = [
  { label: "Annual Production", value: "100M+" },
  { label: "Global Distribution", value: "15+ Countries" },
  { label: "Manufacturing Tolerance", value: "±0.05 mm" },
  { label: "Cleanroom Standard", value: "ISO 15378" },
];

export const companyPillars: CompanyPillar[] = [
  {
    title: "High-Grade Medical Polymer & Glass Molding",
    description:
      "Advanced injection-blow molding delivering crystal-clear transparency with heavy-base shatterproof durability for pharmaceutical and medical formulations.",
  },
  {
    title: "99.8% UV Light Protection",
    description:
      "High-density amber and opaque matte barriers specifically calibrated to block harmful light wavelengths between 290nm and 450nm for sensitive medicines.",
  },
  {
    title: "Precision Airtight Sealing",
    description:
      "Engineered multi-layer structures with tamper-evident and child-resistant closures to isolate sensitive pharmaceuticals from moisture and oxidation.",
  },
  {
    title: "360° Laser Optical Quality Control",
    description:
      "Every medicine bottle undergoes high-speed optical inspection verifying wall thickness, continuous thread precision, and airtight hermetic sealing.",
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
