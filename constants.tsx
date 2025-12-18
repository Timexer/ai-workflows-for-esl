import React from 'react';
import { FAQItem, ModuleItem } from './types';
import { MessageSquare, BookOpen, Mic, Headphones, PenTool } from 'lucide-react';

export const WORKSHOP_DATE = "Saturday, January 25th, 2026, 10:00 AM - 1:00 PM EST";

export const FAQs: FAQItem[] = [
  {
    question: "Do I need to be \"tech savvy\"?",
    answer: "No. If you can use Google and copy-paste, you're ready. We walk through every step—no coding involved."
  },
  {
    question: "Which AI tools will we use?",
    answer: "We'll focus on tools most teachers already have access to (ChatGPT free/Plus, Google Gemini, Brisk, edcafe, Magic School). Most are free or have free tiers. You pick which ones fit your school."
  },
  {
    question: "Is this only for Business English?",
    answer: "Examples include Business English, Exam Prep, and General English. The workflows apply to nearly any ESL context. If you teach young learners or a specific niche, mention it in the sign-up form—I can tailor examples."
  },
  {
    question: "Will this replace my textbook or LMS?",
    answer: "Not at all. This is about saving prep time and generating better supplementary materials. Your textbook and existing curriculum remain the backbone. AI is a tool to help you work smarter, not replace you."
  },
  {
    question: "What if I'm already using ChatGPT/edcafe/Magic School?",
    answer: "Great! This workshop will show you how to use them more systematically, unlock features you didn't know about, and combine them into workflows. You'll likely find new use cases and save more time."
  },
  {
    question: "Will there be follow-up support after the workshop?",
    answer: "The workshop is a standalone 3-hour session. You'll have the recording, templates, and resources to refer to anytime. Future cohorts or communities may be added based on demand."
  },
  {
    question: "What's the cancellation policy?",
    answer: "If fewer than 5 teachers register, the workshop will be rescheduled (full refund available). If 5+ are registered and you need to cancel, we'll work with you to reschedule."
  }
];

export const MODULES: ModuleItem[] = [
  {
    title: "Module 1 – Foundations & Hands-On Prompting",
    duration: "50 min",
    points: [
      "Why most AI outputs miss the mark (and why that matters for your learners).",
      "The anatomy of a good prompt for language activities.",
      "Quick wins: 3 prompting patterns you'll use this week.",
      "Hands-on: Generate one activity in your teaching context."
    ]
  },
  {
    title: "Module 2 – Skill-by-Skill Best Practices",
    duration: "75 min",
    points: [
      "Reading: Comprehension tasks tailored to proficiency levels with vocabulary scaffolding.",
      "Listening: Structured exercises with pre-listening and detailed comprehension steps.",
      "Speaking: Dynamic role-play scenarios and discussion prompts with assessment rubrics.",
      "Writing: Scaffolding, feedback frames, and self-edit checklists.",
      "Hands-on: You build one activity for each skill."
    ]
  },
  {
    title: "Module 3 – Platforms & Workflow Building",
    duration: "30 min",
    points: [
      "edcafe: Quickly generate activities and interactive student chatbots.",
      "Magic School: Create detailed rubrics and differentiation strategies.",
      "Brisk: Streamline text leveling and scaffolding within Docs.",
      "ChatGPT/Gemini: Design nuanced prompts and foster detailed dialogue.",
      "Hands-on: Build your own Gemini Gem/ChatGPT bot for high-quality lesson generation"
    ]
  },
  {
    title: "Module 4 – Ethics, Guardrails & 4-Week Plan",
    duration: "15 min",
    points: [
      "Avoiding Bias and Hallucinations: How to ensure materials remain fair and accurate.",
      "Quality & Standards: Ensuring AI content meets curriculum benchmarks.",
      "Privacy & Security: Handling student data responsibly.",
      "The 4-Week Rollout: A step-by-step roadmap for your classroom or school."
    ]
  }
];

export const TOOLS_LOGOS = [
  { name: 'ChatGPT', color: 'bg-[#74aa9c]', text: 'text-white' },
  { name: 'Gemini', color: 'bg-gradient-to-r from-blue-500 to-purple-500', text: 'text-white' },
  { name: 'Brisk', color: 'bg-[#FF4F00]', text: 'text-white' },
  { name: 'Magic School', color: 'bg-[#6D28D9]', text: 'text-white' },
  { name: 'edcafe', color: 'bg-[#F59E0B]', text: 'text-white' },
];

export const WORKFLOW_ICONS = {
  message: <MessageSquare className="w-6 h-6 text-brand-600" />,
  grammar: <BookOpen className="w-6 h-6 text-brand-600" />,
  speaking: <Mic className="w-6 h-6 text-brand-600" />,
  listening: <Headphones className="w-6 h-6 text-brand-600" />,
  writing: <PenTool className="w-6 h-6 text-brand-600" />,
};