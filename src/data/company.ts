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

export const globalHubs: GlobalHub[] = [
  {
    name: "Zurich R&D Facility",
    role: "Global Headquarters & Glass Formulation Lab",
    location: "Zürich, Switzerland",
  },
  {
    name: "Milan Design Studio",
    role: "Bespoke Silhouette Engineering & Hot-Stamping",
    location: "Milano, Italy",
  },
  {
    name: "New York Hub",
    role: "Americas Distribution & Rapid Sample Dispatch",
    location: "New York, USA",
  },
];
