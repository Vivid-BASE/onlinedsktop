import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
    {
        title: 'オンラインデスクトップ社　月額課金　請求書作成サービス',
        description: '月額課金ビジネスに特化した請求書作成・発行代行サービス。',
    },
    {
        title: 'ＢＵＳＩＣＯＭ社製　ＢＣ－ＰＯＳ',
        description: 'パソコンがPOSレジに。高機能・低価格なパソコンPOSシステム。',
    },
    {
        title: 'アビリティコンサルタント社製　予約プロプラス',
        description: '宿泊施設向けの多機能な予約システム。',
    },
    {
        title: 'ブレイン社製　ブレインフォーム',
        description: '専門知識不要で、誰でも簡単にフォーム作成ができるツール。',
    }
];

export const PricePage = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'linear-gradient(to bottom right, #f8fafc, #f1f5f9)' }}>
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '3rem',
                        textAlign: 'center',
                        color: '#0f172a'
                    }}>
                        料金・取り扱い製品
                        <span style={{
                            display: 'block',
                            fontSize: '1rem',
                            color: '#3b82f6',
                            marginTop: '0.5rem',
                            fontWeight: 'normal'
                        }}>Price & Products</span>
                    </h1>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    background: 'white',
                                    padding: '2rem',
                                    borderRadius: '1rem',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid #e2e8f0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                            >
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1e293b' }}>
                                    {product.title}
                                </h3>
                                <p style={{ color: '#64748b', fontSize: '1.125rem', lineHeight: 1.6 }}>
                                    {product.description}
                                </p>
                                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <Link to="/" style={{ color: '#3b82f6', fontWeight: 'bold', textDecoration: 'none' }}>
                                        お問い合わせ・お見積もりはこちら →
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
