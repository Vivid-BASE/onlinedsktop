import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const services = [
    {
        title: '月額課金システム',
        description: '会員管理から決済まで一元管理できる月額課金システム。',
        link: '/service/service01'
    },
    {
        title: 'サーバー',
        description: 'お客様の用途に合わせた最適なサーバー環境を構築・提供します。',
        link: '/service/service02'
    },
    {
        title: 'システム',
        description: '業務効率化を実現する各種Webシステムの開発・運用。',
        link: '/service/service03'
    },
    {
        title: 'Webデザイン',
        description: '使いやすさと美しさを兼ね備えたWebサイトの制作。',
        link: '/service/service04'
    },
    {
        title: '運用サポート',
        description: 'システム導入後の運用保守やトラブル対応も万全の体制でサポート。',
        link: '/service/service05'
    },
    {
        title: '月額課金用　請求書作成サービス',
        description: '毎月の煩雑な請求書作成・発行業務を自動化します。',
        link: '/service/service06'
    }
];

export const ServicePage = () => {
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
        <div style={{ paddingTop: isMobile ? '70px' : '100px', minHeight: '100vh', background: 'linear-gradient(to bottom right, #f8fafc, #f1f5f9)' }}>
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: isMobile ? '2rem' : '4rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 style={{
                        fontSize: isMobile ? '1.75rem' : '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: isMobile ? '2rem' : '3rem',
                        textAlign: 'center',
                        color: '#0f172a'
                    }}>
                        サービス
                        <span style={{
                            display: 'block',
                            fontSize: isMobile ? '0.875rem' : '1rem',
                            color: '#3b82f6',
                            marginTop: '0.5rem',
                            fontWeight: 'normal'
                        }}>Service</span>
                    </h1>

                    {/* Service List Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: isMobile ? '1rem' : '2rem',
                        marginBottom: isMobile ? '2rem' : '4rem'
                    }}>
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    background: 'white',
                                    padding: isMobile ? '1.25rem' : '2rem',
                                    borderRadius: '1rem',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid #e2e8f0'
                                }}
                            >
                                <h3 style={{ fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#1e293b' }}>
                                    {service.title}
                                </h3>
                                <p style={{ color: '#64748b', marginBottom: '1rem', lineHeight: 1.6, fontSize: isMobile ? '0.875rem' : '1rem' }}>
                                    {service.description}
                                </p>
                                <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: '500', display: 'inline-flex', alignItems: 'center', fontSize: isMobile ? '0.875rem' : '1rem' }}>
                                    Detail coming soon →
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Monthly Billing System Details */}
                    <div style={{ background: 'white', padding: isMobile ? '1.5rem' : '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0' }}>
                        <h2 style={{ fontSize: isMobile ? '1.125rem' : '1.75rem', fontWeight: 'bold', marginBottom: isMobile ? '1rem' : '2rem', color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '1rem', lineHeight: 1.5 }}>
                            毎月の請求書発行業務を三菱東京ＵＦＪ銀行様の「おまかせバンク」サービスとの連携により実現
                        </h2>

                        <p style={{ color: '#64748b', fontSize: isMobile ? '0.75rem' : '0.875rem', marginBottom: isMobile ? '1rem' : '2rem' }}>
                            ※「おまかせバンク」は三菱東京ＵＦＪ銀行様の商品名称、商標または登録商標です。<br />
                            ※「秘文」は株式会社日立ソリューションズ様の商品名称、商標または登録商標です。<br />
                            ※「セキュアホスティング」および「セキュアホスティングサービス」は株式会社朝日ネット様の商品名称、商標または登録商標です。
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'baseline', gap: isMobile ? '0.25rem' : '1rem' }}>
                                <span style={{ fontWeight: 'bold', color: '#334155', minWidth: isMobile ? 'auto' : '160px', fontSize: isMobile ? '0.875rem' : '1rem' }}>請求先ごとの専用口座</span>
                                <span style={{ color: '#475569', fontSize: isMobile ? '0.875rem' : '1rem' }}>・・・　三菱東京ＵＦＪ銀行様　１，０００口座単位の集中口座と連携</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'baseline', gap: isMobile ? '0.25rem' : '1rem' }}>
                                <span style={{ fontWeight: 'bold', color: '#334155', minWidth: isMobile ? 'auto' : '160px', fontSize: isMobile ? '0.875rem' : '1rem' }}>コンビニ支払</span>
                                <span style={{ color: '#475569', fontSize: isMobile ? '0.875rem' : '1rem' }}>・・・・　三菱東京ＵＦＪニコス様サービスと連携</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'baseline', gap: isMobile ? '0.25rem' : '1rem' }}>
                                <span style={{ fontWeight: 'bold', color: '#334155', minWidth: isMobile ? 'auto' : '160px', fontSize: isMobile ? '0.875rem' : '1rem' }}>銀行口座引落</span>
                                <span style={{ color: '#475569', fontSize: isMobile ? '0.875rem' : '1rem' }}>・・・・　三菱東京ＵＦＪニコス様サービスと連携</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'baseline', gap: isMobile ? '0.25rem' : '1rem' }}>
                                <span style={{ fontWeight: 'bold', color: '#334155', minWidth: isMobile ? 'auto' : '160px', fontSize: isMobile ? '0.875rem' : '1rem' }}>郵便局支払</span>
                                <span style={{ color: '#475569', fontSize: isMobile ? '0.875rem' : '1rem' }}>・・・・　三菱東京ＵＦＪニコス様サービスと連携</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
