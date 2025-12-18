import React from 'react';
import Button from './ui/Button';
import { Download } from 'lucide-react';

const FreeResource: React.FC = () => {
  return (
    <section className="py-16 bg-brand-50 border-t border-brand-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">Not Ready Yet?</h2>
        <p className="text-brand-700 mb-8 max-w-2xl mx-auto">
          Get my free <span className="font-bold">CEFR + DOK Activity Generator Gem</span> – a Gemini Gem that will help you generate level-appropriate, cognitively demanding AI activities with a single prompt.
        </p>
        <Button variant="outline" className="bg-white border-brand-200 hover:bg-brand-50">
          <Download className="w-4 h-4 mr-2" />
          Get the Free Gem
        </Button>
      </div>
    </section>
  );
};

export default FreeResource;