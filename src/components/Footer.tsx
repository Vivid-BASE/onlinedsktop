import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Footer = () => {
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
        <footer style={{ background: '#1c1917', color: 'white', padding: isMobile ? '2rem 0 1.5rem' : '4rem 0 2rem' }}>
            <div className="container mx-auto px-6">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: isMobile ? '2rem' : '3rem',
                    marginBottom: isMobile ? '2rem' : '3rem'
                }}>
                    {/* Brand Section */}
                    <div>
                        <div style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '24px', height: '24px', background: 'white', borderRadius: '50%' }} />
                            OnlineDesktop
                        </div>
                        <p style={{ color: '#a8a29e', fontSize: isMobile ? '0.8rem' : '0.875rem', lineHeight: 1.8, marginBottom: '0' }}>
                            Better surprise for the world.<br />
                            テクノロジーで、ビジネスの現場に<br />
                            「快適」な驚きを。
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-2 gap-4 md:col-span-2 lg:col-span-2">
                        <div>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: isMobile ? '0.9rem' : '1rem' }}>サービス</h4>
                            <ul style={{ color: '#a8a29e', fontSize: isMobile ? '0.8rem' : '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li><Link to="/service" style={{ color: 'inherit', textDecoration: 'none' }}>サーバ構築・運用</Link></li>
                                <li><Link to="/service" style={{ color: 'inherit', textDecoration: 'none' }}>システム開発</Link></li>
                                <li><Link to="/service" style={{ color: 'inherit', textDecoration: 'none' }}>Webデザイン</Link></li>
                                <li><Link to="/service" style={{ color: 'inherit', textDecoration: 'none' }}>運用保守・サポート</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: isMobile ? '0.9rem' : '1rem' }}>サイトマップ</h4>
                            <ul style={{ color: '#a8a29e', fontSize: isMobile ? '0.8rem' : '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>私たちについて</Link></li>
                                <li><Link to="/company" style={{ color: 'inherit', textDecoration: 'none' }}>会社概要</Link></li>
                                <li><Link to="/news" style={{ color: 'inherit', textDecoration: 'none' }}>ニュース</Link></li>
                                <li><Link to="/case" style={{ color: 'inherit', textDecoration: 'none' }}>導入事例</Link></li>
                                <li><Link to="/price" style={{ color: 'inherit', textDecoration: 'none' }}>料金</Link></li>
                                <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>お問い合わせ</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #44403c', paddingTop: isMobile ? '1rem' : '2rem', textAlign: 'center', color: '#78716c', fontSize: isMobile ? '0.75rem' : '0.875rem' }}>
                    © {new Date().getFullYear()} Online Desktop Co., Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
