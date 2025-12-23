import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Homepage: React.FC = () => {
    const sliderLogos = [
        "https://res.cloudinary.com/drlymuj5s/image/upload/v1766497902/Google_Gemini_logo.svg_aenc1i.png",
        "https://res.cloudinary.com/drlymuj5s/image/upload/v1766497902/Chatgpt_logo_gtqwlx.png",
        "https://res.cloudinary.com/drlymuj5s/image/upload/v1766497902/NotebookLM_logo_lbqtz6.png",
        "https://res.cloudinary.com/drlymuj5s/image/upload/v1766497901/Claude_logo_xdztvx.png",
        "https://res.cloudinary.com/drlymuj5s/image/upload/v1766497900/copilot_logo_wlnyck.jpg",
        "https://res.cloudinary.com/drlymuj5s/image/upload/v1766497900/HeaderCover-Blogs-min-2-scaled-1_fyllr8.jpg",
        "https://res.cloudinary.com/drlymuj5s/image/upload/v1766497900/Perplexity_AI_logo.svg_oxxygm.png",
        "https://res.cloudinary.com/drlymuj5s/image/upload/v1766497899/edcafe_nkd5gx.jpg",
        "https://res.cloudinary.com/drlymuj5s/image/upload/v1766497899/genspark_na3hf4.webp",
        "https://res.cloudinary.com/drlymuj5s/image/upload/v1766497899/magicschool_ai_cmiiuj.png"
    ];

    // Duplicate logic for seamless scroll (x2 is usually enough if list is long, or x4 if short)
    const duplicatedLogos = [...sliderLogos, ...sliderLogos];

    return (
        <div className="bg-[#131313] text-white font-sans antialiased min-h-screen">
            {/* Header */}
            <header className="w-full py-6 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-20">
                <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#0f172a] p-2 rounded flex items-center justify-center">
                            {/* Using the existing logo as requested, assuming /logo.png exists as seen in Header.tsx */}
                            <img src="/logo.png" alt="Tim's AI Tips" className="h-8 md:h-10 w-auto object-contain" />
                        </div>
                    </div>
                </div>
                <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-300">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link to="/aiworkshop" className="hover:text-primary transition-colors">Live Workshop</Link>
                    <a href="https://www.youtube.com/@TimsAITips?sub_confirmation=1" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">AI Tips (YouTube)</a>
                    <a href="#about" className="hover:text-primary transition-colors">About Me</a>
                    <a href="https://en.englishbreakfast.pl/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Learn or Teach English</a>
                </nav>
                <div className="flex gap-5 mt-4 md:mt-0 items-center">
                    <a href="#" className="text-primary hover:text-white transition-colors" target="_blank" rel="noreferrer"><Facebook size={16} /></a>
                    <a href="#" className="text-primary hover:text-white transition-colors" target="_blank" rel="noreferrer"><Instagram size={16} /></a>
                    <a href="https://www.youtube.com/@TimsAITips?sub_confirmation=1" target="_blank" rel="noreferrer" className="text-primary hover:text-white transition-colors"><Youtube size={16} /></a>
                    <a href="#" className="text-primary hover:text-white transition-colors" target="_blank" rel="noreferrer"><Twitter size={16} /></a>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-12 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 z-10 relative pr-0 md:pr-8">
                    <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-medium leading-[1.1] mb-8 text-white tracking-tight">
                        LESS <span className="text-primary font-semibold">PREP</span>-TIME,<br />
                        MORE <span className="text-primary font-semibold">TEACHING.</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 mb-12">
                        <a href="https://www.youtube.com/@TimsAITips?sub_confirmation=1" target="_blank" rel="noreferrer" className="bg-primary hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-orange-900/20 text-sm">
                            Watch the Latest AI Tip
                        </a>
                        <Link to="/aiworkshop" className="flex items-center gap-2 text-white hover:text-primary font-medium text-sm transition-colors group">
                            Live Teaching with AI Workshop <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                        </Link>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-md mb-16 leading-relaxed font-light">
                        I break down complex AI tools into simple, short video tutorials that you can use immediately.
                    </p>

                    {/* Generative AI Badge & CELTA Logo */}
                    <div className="flex items-center gap-8">
                        <div className="relative w-48 h-48 flex items-center justify-center">
                            <div className="absolute inset-0 bg-white rounded-full"></div>
                            <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                                <path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="curve"></path>
                                <text className="text-[9px] font-bold uppercase tracking-[0.14em]" fill="#333">
                                    <textPath href="#curve" startOffset="0%">
                                        Generative AI Leader • Generative AI Leader •
                                    </textPath>
                                </text>
                            </svg>
                            <div className="relative z-10 w-28 h-28 bg-white rounded-full flex flex-col items-center justify-center p-2">
                                <img src="https://res.cloudinary.com/drlymuj5s/image/upload/v1766081688/GenAI_badge_xgbvu2.png" alt="Generative AI Badge" className="w-full h-full object-contain" />
                            </div>
                        </div>

                        {/* CELTA Logo */}
                        <div>
                            <img src="https://res.cloudinary.com/drlymuj5s/image/upload/v1766081786/Celta_aape5l.png" alt="CELTA Logo" className="h-28 w-auto object-contain bg-white p-3 rounded-lg" />
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 mt-12 md:mt-0 relative flex justify-end items-start h-full">
                    <div className="relative w-full max-w-xl aspect-[4/5] md:-mr-12 lg:-mr-20">
                        <img
                            alt="Instructor Timothy Hannum"
                            className="object-cover w-full h-full rounded-none md:rounded-l-2xl shadow-none"
                            src="https://res.cloudinary.com/drlymuj5s/image/upload/v1766497740/Tim_s_photo_p8erkv.png"
                            style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
                        />
                    </div>
                </div>
            </section>

            {/* Slider Section */}
            <div className="w-full bg-white py-6 overflow-hidden">
                <div className="flex w-max animate-scroll items-center hover:pause">
                    {duplicatedLogos.map((logo, index) => (
                        <div key={index} className="flex justify-center items-center px-8 min-w-[200px]">
                            <img src={logo} alt={`Logo ${index}`} className="h-16 md:h-24 w-auto object-contain hover:opacity-100 transition-all opacity-100" />
                        </div>
                    ))}
                    {duplicatedLogos.map((logo, index) => (
                        <div key={`d-${index}`} className="flex justify-center items-center px-8 min-w-[200px]">
                            <img src={logo} alt={`Logo D ${index}`} className="h-16 md:h-24 w-auto object-contain hover:opacity-100 transition-all opacity-100" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Perfect For Section */}
            <section className="py-20 px-4 md:px-8 bg-[#1a1a1a]">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8 ml-1">PERFECT FOR:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-primary p-8 rounded-lg min-h-[340px] flex flex-col relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <span className="text-white/60 text-xs font-bold absolute top-8 left-8">01.</span>
                            <div className="mt-auto mb-auto">
                                <h4 className="text-white text-3xl font-medium leading-tight relative z-10">
                                    Business English & <br /> ESL/EFL Teachers
                                </h4>
                            </div>
                            <div className="w-16 h-px bg-white/40 mt-auto mb-12"></div>
                        </div>
                        <div className="bg-primary p-8 rounded-lg min-h-[340px] flex flex-col relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <span className="text-white/60 text-xs font-bold absolute top-8 left-8">02.</span>
                            <div className="mt-auto mb-auto">
                                <h4 className="text-white text-3xl font-medium leading-tight relative z-10">
                                    English Language <br /> Program Designers
                                </h4>
                            </div>
                            <div className="w-full mt-auto mb-8">
                                <div className="w-16 h-px bg-white/40 mb-6"></div>
                                {/* Reduced/blank content area here as requested to remove the link */}
                            </div>
                        </div>
                        <div className="bg-primary p-8 rounded-lg min-h-[340px] flex flex-col relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <span className="text-white/60 text-xs font-bold absolute top-8 left-8">03.</span>
                            <div className="mt-auto mb-auto">
                                <h4 className="text-white text-3xl font-medium leading-tight relative z-10">
                                    International/Adult <br /> Language Educators
                                </h4>
                            </div>
                            <div className="w-16 h-px bg-white/40 mt-auto mb-12"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-[#131313]">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="w-full lg:w-5/12">
                        <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
                            <img alt="Timothy Hannum smiling outdoors" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" src="https://res.cloudinary.com/drlymuj5s/image/upload/v1766081758/1759952995384_de5bhc.jpg" />
                        </div>
                    </div>
                    <div className="w-full lg:w-7/12 pt-2">
                        <span className="text-primary text-xs font-bold tracking-[0.1em] uppercase block mb-4">FROM AN EDUCATOR, FOR EDUCATORS</span>
                        <h2 className="text-4xl md:text-5xl lg:text-[4rem] leading-none font-normal text-white mb-10">
                            HI, I'M TIMOTHY <br /> HANNUM<span className="text-primary">.</span>
                        </h2>
                        <div className="space-y-8 text-white text-xl md:text-2xl font-light leading-relaxed mb-12">
                            <p>
                                With 12+ years of teaching experience and a background building my own AI tools, I bridge the gap between education and technology.
                            </p>
                            <p>
                                My goal is simple: I translate cutting-edge AI into 10-minute teacher workflows you can deploy today.
                            </p>
                            <div className="w-full h-px bg-gray-700"></div>
                        </div>
                        <div className="mt-10 space-y-10">
                            <div className="flex gap-5 items-start">
                                <span className="text-primary mt-1 text-xl">↗</span>
                                <div>
                                    <h4 className="text-white font-bold mb-2 text-sm">Actionable AI Strategies</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                                        Every tool and technique you'll find here has been tested in a real educational setting. My focus is on simple, powerful AI applications that you can implement immediately to save time on administrative tasks and create more dynamic lessons.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-start">
                                <span className="text-primary mt-1 text-xl">↗</span>
                                <div>
                                    <h4 className="text-white font-bold mb-2 text-sm">Future-Proof Your Teaching</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                                        AI is reshaping the educational landscape. My tips are designed to keep you ahead of the curve, equipping you with the skills to not only stay relevant but to become a leader in educational technology at your institution. This is about career-long professional development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 px-4 md:px-8 bg-[#181818]">
                <div className="max-w-5xl mx-auto text-center">
                    <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-12">SKILLS YOU WILL MASTER</h3>
                    <div className="flex flex-wrap justify-center gap-4 mb-4">
                        {["AI-Assisted Lesson Planning", "Prompt Engineering for Educators", "Workflow Automation", "Automated Student Assessment", "Personalized Learning Design"].map((skill, i) => (
                            <div key={i} className="bg-[#2a2a2a] text-gray-200 px-4 py-6 rounded-lg text-xs font-bold w-36 h-28 flex items-center justify-center text-center leading-tight hover:bg-[#333] transition-colors cursor-default">
                                {skill.split(' ').map((word, wI) => <React.Fragment key={wI}>{word} <br /></React.Fragment>)}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {["AI Content Generation", "Ethical AI Implementation", "Data-Driven Instruction", "AI Tool Vetting & Selection"].map((skill, i) => (
                            <div key={i} className="bg-[#2a2a2a] text-gray-200 px-4 py-6 rounded-lg text-xs font-bold w-36 h-28 flex items-center justify-center text-center leading-tight hover:bg-[#333] transition-colors cursor-default">
                                {skill.split(' ').map((word, wI) => <React.Fragment key={wI}>{word} <br /></React.Fragment>)}
                            </div>
                        ))}
                    </div>
                    <a href="https://www.youtube.com/@TimsAITips?sub_confirmation=1" target="_blank" rel="noreferrer" className="inline-block bg-primary hover:bg-orange-600 text-white font-bold py-3 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-orange-900/20 text-sm">
                        Watch the Latest AI Tip
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-b border-gray-800 bg-[#131313]">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-normal text-primary mb-6">Still have questions?</h2>
                        <p className="text-gray-400 mb-12 leading-relaxed text-sm font-light">
                            Have a question or a collaboration idea? I'd love to hear from you.
                        </p>
                        <p className="text-white text-2xl md:text-3xl font-normal mb-2">
                            Share your AI classroom <span className="text-primary">challenge</span>.
                        </p>
                        <p className="text-white text-2xl md:text-3xl font-normal mb-8">
                            I <span className="text-primary">reply personally</span> within 48 hours.
                        </p>
                        <p className="text-gray-500 text-xs mb-8">
                            Your email stays with me; no marketing lists.
                        </p>
                        <div className="flex gap-4 mt-8">
                            <a href="#" className="bg-[#1f2937] hover:bg-gray-700 w-8 h-8 flex items-center justify-center rounded-full text-white transition-colors" target="_blank" rel="noreferrer"><Facebook size={14} /></a>
                            <a href="#" className="bg-[#1f2937] hover:bg-gray-700 w-8 h-8 flex items-center justify-center rounded-full text-white transition-colors" target="_blank" rel="noreferrer"><Instagram size={14} /></a>
                            <a href="https://www.youtube.com/@TimsAITips?sub_confirmation=1" target="_blank" rel="noreferrer" className="bg-[#1f2937] hover:bg-gray-700 w-8 h-8 flex items-center justify-center rounded-full text-white transition-colors"><Youtube size={14} /></a>
                            <a href="#" className="bg-[#1f2937] hover:bg-gray-700 w-8 h-8 flex items-center justify-center rounded-full text-white transition-colors" target="_blank" rel="noreferrer"><Twitter size={14} /></a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <form className="bg-[#1f1f1f] p-8 md:p-12 rounded-2xl">
                            <div className="mb-4">
                                <input className="w-full bg-[#2a2a2a] border border-[#333] rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-xs font-medium" placeholder="Your Name*" type="text" />
                            </div>
                            <div className="mb-4">
                                <input className="w-full bg-[#2a2a2a] border border-[#333] rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-xs font-medium" placeholder="Email*" type="email" />
                            </div>
                            <div className="mb-6">
                                <textarea className="w-full bg-[#2a2a2a] border border-[#333] rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-xs font-medium resize-none h-40" placeholder="Your Question*" rows={4}></textarea>
                            </div>
                            <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 rounded-full transition-colors text-sm" type="button">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </footer>
            <div className="py-8 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#0f172a] p-2 rounded flex items-center justify-center">
                            <img src="/logo.png" alt="Tim's AI Tips" className="h-4 md:h-5 w-auto object-contain" />
                        </div>
                    </div>
                </div>
                <nav className="flex gap-6 text-[10px] text-gray-400 mb-4 md:mb-0">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <a href="https://www.youtube.com/@TimsAITips?sub_confirmation=1" className="hover:text-white transition-colors">AI Tips (YouTube)</a>
                    <a href="#about" className="hover:text-white transition-colors">About Me</a>
                    <Link to="/aiworkshop" className="hover:text-white transition-colors">AI Workshop</Link>
                </nav>
                <div className="text-[10px]">
                    2025 Tim's AI Tips | All rights Reserved
                </div>
            </div>

        </div>
    );
};

export default Homepage;
