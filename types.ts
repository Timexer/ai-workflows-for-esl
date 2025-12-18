export interface FAQItem {
  question: string;
  answer: string;
}

export interface ModuleItem {
  title: string;
  duration: string;
  points: string[];
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: 'message' | 'grammar' | 'speaking' | 'listening' | 'writing';
}
