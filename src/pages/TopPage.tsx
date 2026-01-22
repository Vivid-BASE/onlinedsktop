import { Hero } from '../components/Hero';
import { ServiceSection } from '../components/ServiceSection';
import { NewsSection } from '../components/NewsSection';

export const TopPage = () => {
    return (
        <main>
            <section id="home">
                <Hero />
            </section>
            <section id="service">
                <ServiceSection />
            </section>
            <section id="news">
                <NewsSection />
            </section>
            {/* Other sections like Case, Pricing could be added here or implemented as placeholders */}
        </main>
    );
};
