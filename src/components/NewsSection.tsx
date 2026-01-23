import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const newsItems = [
    { date: '2023.10.15', category: 'お知らせ', title: '11月のシステムメンテナンスのお知らせ' },
    { date: '2023.09.28', category: 'プレス', title: 'TechWeeklyにOnlineDesktopが掲載されました。' },
    { date: '2023.08.10', category: 'アップデート', title: '請求ダッシュボードに新機能が追加されました。' },
];

export const NewsSection = () => {
    const navigate = useNavigate();
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
        <section id="news" style={{ padding: isMobile ? '3rem 0' : '6rem 0', background: 'white' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: isMobile ? '2rem' : '3rem', textAlign: 'center' }}
                >
                    <h2 style={{ fontSize: isMobile ? '1.75rem' : '2.5rem', fontWeight: 'bold', color: '#0f172a' }}>ニュース</h2>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                alignItems: isMobile ? 'flex-start' : 'center',
                                padding: isMobile ? '1rem' : '1.5rem',
                                borderBottom: '1px solid #e2e8f0',
                                gap: isMobile ? '0.5rem' : '2rem'
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                flexShrink: 0
                            }}>
                                <div style={{ color: '#64748b', fontSize: isMobile ? '0.75rem' : '0.875rem', minWidth: isMobile ? 'auto' : '100px' }}>{item.date}</div>
                                <span style={{
                                    background: '#eff6ff',
                                    color: '#3b82f6',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '999px',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    whiteSpace: 'nowrap'
                                }}>
                                    {item.category}
                                </span>
                            </div>
                            <a href="#" style={{
                                flex: 1,
                                fontWeight: 500,
                                color: '#1e293b',
                                transition: 'color 0.2s',
                                fontSize: isMobile ? '0.875rem' : '1rem',
                                lineHeight: 1.5
                            }} className="news-link">
                                {item.title}
                            </a>
                        </motion.div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: isMobile ? '2rem' : '3rem' }}>
                    <button
                        onClick={() => {
                            navigate('/news');
                            window.scrollTo(0, 0);
                        }}
                        style={{
                            padding: isMobile ? '0.625rem 1.5rem' : '0.75rem 2rem',
                            background: 'white',
                            border: '1px solid #3b82f6',
                            borderRadius: '9999px',
                            color: '#3b82f6',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            transition: 'all 0.2s',
                            fontSize: isMobile ? '0.875rem' : '1rem'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#3b82f6';
                            e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'white';
                            e.currentTarget.style.color = '#3b82f6';
                        }}
                    >
                        ニュース一覧を見る
                    </button>
                </div>
            </div>
        </section>
    );
};
