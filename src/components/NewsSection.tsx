import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const newsItems = [
    { date: '2023.10.15', category: 'お知らせ', title: '11月のシステムメンテナンスのお知らせ' },
    { date: '2023.09.28', category: 'プレス', title: 'TechWeeklyにOnlineDesktopが掲載されました。' },
    { date: '2023.08.10', category: 'アップデート', title: '請求ダッシュボードに新機能が追加されました。' },
];

export const NewsSection = () => {
    const navigate = useNavigate();

    return (
        <section id="news" style={{ padding: '6rem 0', background: 'white' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '3rem', textAlign: 'center' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a' }}>ニュース</h2>
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
                                alignItems: 'center',
                                padding: '1.5rem',
                                borderBottom: '1px solid #e2e8f0',
                                gap: '2rem'
                            }}
                        >
                            <div style={{ color: '#64748b', fontSize: '0.875rem', minWidth: '100px' }}>{item.date}</div>
                            <span style={{
                                background: '#eff6ff',
                                color: '#3b82f6',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '999px',
                                fontSize: '0.75rem',
                                fontWeight: 600
                            }}>
                                {item.category}
                            </span>
                            <a href="#" style={{ flex: 1, fontWeight: 500, color: '#1e293b', transition: 'color 0.2s' }} className="news-link">
                                {item.title}
                            </a>
                        </motion.div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <button
                        onClick={() => {
                            navigate('/news');
                            window.scrollTo(0, 0);
                        }}
                        style={{
                            padding: '0.75rem 2rem',
                            background: 'white',
                            border: '1px solid #3b82f6',
                            borderRadius: '9999px',
                            color: '#3b82f6',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            transition: 'all 0.2s'
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
