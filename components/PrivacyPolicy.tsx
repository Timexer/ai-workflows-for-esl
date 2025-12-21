import React from 'react';
import Footer from './Footer';
import Header from './Header';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] font-sans text-slate-300">
            <Header />
            <main className="container mx-auto px-4 py-24 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Privacy Policy</h1>

                <div className="prose prose-invert prose-slate max-w-none space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">1. Data Controller</h2>
                        <p>
                            The administrator of your personal data is <strong>Lingoxpress</strong>, located at
                            Al. Piłsudskiego 11A/1, 05-820 Piastow, Poland.
                        </p>
                        <p>
                            You can contact us via email at: <a href="mailto:info@timsaitips.com" className="text-brand-400 hover:text-brand-300">info@timsaitips.com</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">2. Purpose of Data Processing</h2>
                        <p>We process your personal data for the following purposes:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>To provide the workshop and educational services you signed up for.</li>
                            <li>To communicate with you regarding your workshop participation.</li>
                            <li>To process payments and issue invoices (if applicable).</li>
                            <li>To improve our services and website functionality.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">3. Data Retention</h2>
                        <p>
                            We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected,
                            including for the purposes of satisfying any legal, accounting, or reporting requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">4. Your Rights</h2>
                        <p>Under GDPR, you have the right to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Access your personal data.</li>
                            <li>Request correction or deletion of your data ("right to be forgotten").</li>
                            <li>Restrict the processing of your data.</li>
                            <li>Object to the processing of your data.</li>
                            <li>Data portability.</li>
                        </ul>
                        <p className="mt-4">
                            To exercise these rights, please contact us at <a href="mailto:info@timsaitips.com" className="text-brand-400 hover:text-brand-300">info@timsaitips.com</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">5. Cookies</h2>
                        <p>
                            Our website uses cookies to enhance your browsing experience and analyze site traffic.
                            By using our website, you consent to our use of cookies in accordance with this Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">6. Changes to This Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>
                    </section>

                    <p className="text-sm text-slate-500 mt-12 pt-8 border-t border-slate-800">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
