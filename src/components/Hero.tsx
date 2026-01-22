import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'
        }}>
            {/* Background Decor */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            background: 'rgba(59, 130, 246, 0.1)',
                            color: '#3b82f6',
                            borderRadius: '2rem',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            marginBottom: '1.5rem'
                        }}
                    >
                        DXパートナー
                    </motion.div>
                    <h2 style={{ fontSize: '3rem', lineHeight: 1.3, marginBottom: '1.5rem', color: '#0f172a', fontFamily: "sans-serif" }}>
                        請求業務を、<br />
                        もっと<span style={{ color: '#3b82f6' }}>スマート</span>に。
                    </h2>
                    <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: '2.5rem', maxWidth: '540px', lineHeight: 1.8 }}>
                        請求書発行から売掛金消し込みまで、毎月の面倒な請求業務を効率化します。<br />
                        オンラインデスクトップは、あなたのビジネスの成長を支えるシームレスなソリューションを提供します。
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button style={{
                            padding: '1rem 2rem',
                            background: '#3b82f6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '0.5rem',
                            fontSize: '1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.5)'
                        }}>
                            無料で相談する
                        </button>
                        <button style={{
                            padding: '1rem 2rem',
                            background: 'white',
                            color: '#0f172a',
                            border: '1px solid #e2e8f0',
                            borderRadius: '0.5rem',
                            fontSize: '1rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                        }}>
                            詳しく見る
                        </button>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ position: 'relative' }}
                >
                    <div style={{
                        position: 'relative',
                        borderRadius: '2rem',
                        overflow: 'hidden',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        border: '8px solid rgba(255, 255, 255, 0.8)'
                    }}>
                        <img
                            src="/assets/home_title.jpg"
                            alt="Billing Workflow"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                        {/* Overlay Gradient to blend if needed, or keeping it clean */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to right, rgba(15, 23, 42, 0.1), transparent)',
                            pointerEvents: 'none'
                        }} />
                    </div>

                    {/* Floating Card Element for "Modern" feel */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            bottom: '-5rem',
                            left: '-2rem',
                            background: 'white',
                            padding: '1.5rem',
                            borderRadius: '1rem',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}
                    >
                        <div style={{ width: '3rem', height: '3rem', background: '#ecfccb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#65a30d', fontSize: '1.5rem' }}>✓</div>
                        <div>
                            <div style={{ fontWeight: 'bold', color: '#0f172a' }}>入金マッチング完了</div>
                            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>AI自動照合</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
