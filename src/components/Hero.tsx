import { motion } from 'framer-motion';
import heroImg from '../assets/home_title.jpg';
import { useState, useEffect } from 'react';

export const Hero = () => {
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
        <section style={{
            position: 'relative',
            minHeight: isMobile ? '100vh' : '80vh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #fffbeb 0%, #f5f5f4 100%)', // amber-50 to stone-100
            padding: isMobile ? '2rem 0' : '0'
        }}>
            {/* Background Decor */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: isMobile ? '300px' : '500px',
                height: isMobile ? '300px' : '500px',
                background: 'radial-gradient(circle, rgba(217, 119, 6, 0.1) 0%, transparent 70%)', // amber-600 with opacity
                borderRadius: '50%',
                zIndex: 0
            }} />

            <div className="container mx-auto px-6" style={{
                position: 'relative',
                zIndex: 1,
                display: isMobile ? 'flex' : 'grid',
                flexDirection: isMobile ? 'column' : undefined,
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isMobile ? '2rem' : '4rem',
                alignItems: 'center'
            }}>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ order: isMobile ? 2 : 1 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            background: 'rgba(217, 119, 6, 0.1)', // amber-600
                            color: '#d97706', // amber-600
                            borderRadius: '2rem',
                            fontSize: isMobile ? '0.75rem' : '0.875rem',
                            fontWeight: 600,
                            marginBottom: '1rem'
                        }}
                    >
                        DXパートナー
                    </motion.div>
                    <h2 style={{
                        fontSize: isMobile ? '1.75rem' : '3rem',
                        lineHeight: 1.3,
                        marginBottom: '1rem',
                        color: '#1c1917', // stone-900
                        fontFamily: "sans-serif"
                    }}>
                        請求業務を、<br />
                        もっと<span style={{ color: '#d97706' }}>スマート</span>に。 {/* amber-600 */}
                    </h2>
                    <p style={{
                        fontSize: isMobile ? '0.875rem' : '1rem',
                        color: '#57534e', // stone-600
                        marginBottom: '1.5rem',
                        maxWidth: '540px',
                        lineHeight: 1.8
                    }}>
                        請求書発行から売掛金消し込みまで、毎月の面倒な請求業務を効率化します。
                        {!isMobile && <br />}
                        オンラインデスクトップは、あなたのビジネスの成長を支えるシームレスなソリューションを提供します。
                    </p>
                    <div style={{
                        display: 'flex',
                        gap: '0.75rem',
                        flexDirection: isMobile ? 'column' : 'row'
                    }}>
                        <button style={{
                            padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
                            background: '#d97706', // amber-600
                            color: 'white',
                            border: 'none',
                            borderRadius: '0.5rem',
                            fontSize: isMobile ? '0.875rem' : '1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            boxShadow: '0 4px 6px -1px rgba(217, 119, 6, 0.5)', // amber-600 shadow
                            width: isMobile ? '100%' : 'auto'
                        }}>
                            無料で相談する
                        </button>
                        <button style={{
                            padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
                            background: 'white',
                            color: '#1c1917', // stone-900
                            border: '1px solid #e7e5e4', // stone-200
                            borderRadius: '0.5rem',
                            fontSize: isMobile ? '0.875rem' : '1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            width: isMobile ? '100%' : 'auto'
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
                    style={{
                        position: 'relative',
                        order: isMobile ? 1 : 2
                    }}
                >
                    <div style={{
                        position: 'relative',
                        borderRadius: isMobile ? '1rem' : '2rem',
                        overflow: 'hidden',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        border: isMobile ? '4px solid rgba(255, 255, 255, 0.8)' : '8px solid rgba(255, 255, 255, 0.8)'
                    }}>
                        <img
                            src={heroImg}
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

                    {/* Floating Card Element for "Modern" feel - Hidden on mobile for cleaner layout */}
                    {!isMobile && (
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
                    )}
                </motion.div>
            </div>
        </section>
    );
};
