import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const services = [
    {
        title: 'サーバ構築・運用',
        description: '仮想サーバおよびWindowsサーバの構築から運用まで。ビジネスを支える堅牢なインフラを提供します。',
        icon: '🖥️'
    },
    {
        title: 'システム開発',
        description: 'お客様のワークフローに合わせたカスタムシステム開発やWebデータベースの構築を行います。',
        icon: '⚙️'
    },
    {
        title: 'Webデザイン',
        description: '情報設計からディレクションまで。ユーザー中心のデジタル体験を創り出します。',
        icon: '🎨'
    },
    {
        title: '運用保守・サポート',
        description: 'OS移行や継続的なメンテナンス、テクニカルサポートで安定稼働を保証します。',
        icon: '🛡️'
    }
];

export const ServiceSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="service" style={{ padding: isMobile ? '3rem 0' : '6rem 0', background: '#f8fafc' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '4rem' }}
                >
                    <h2 style={{ fontSize: isMobile ? '1.75rem' : '2.5rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#0f172a' }}>事業内容</h2>
                    <p style={{ color: '#64748b', fontSize: isMobile ? '0.875rem' : '1.125rem' }}>インフラからデザインまで、包括的なITソリューション。</p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: isMobile ? '1rem' : '2rem'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass"
                            style={{
                                padding: isMobile ? '1.5rem' : '2rem',
                                borderRadius: '1rem',
                                background: 'white',
                                border: '1px solid rgba(226, 232, 240, 0.8)'
                            }}
                        >
                            <div style={{ fontSize: isMobile ? '2rem' : '3rem', marginBottom: isMobile ? '1rem' : '1.5rem' }}>{service.icon}</div>
                            <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#0f172a' }}>{service.title}</h3>
                            <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: isMobile ? '0.875rem' : '1rem' }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
