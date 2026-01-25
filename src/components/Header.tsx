import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/hdr_top.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const handleNavClick = (item: string) => {
        setIsMobileMenuOpen(false);

        if (item === 'ニュース') {
            navigate('/news');
            window.scrollTo(0, 0);
            return;
        }

        if (item === '私たちについて') {
            navigate('/about');
            window.scrollTo(0, 0);
            return;
        }

        if (item === 'サービス') {
            navigate('/service');
            window.scrollTo(0, 0);
            return;
        }

        if (item === '導入事例') {
            navigate('/case');
            window.scrollTo(0, 0);
            return;
        }

        if (item === '料金') {
            navigate('/price');
            window.scrollTo(0, 0);
            return;
        }

        if (item === 'お問い合わせ') {
            navigate('/contact');
            window.scrollTo(0, 0);
            return;
        }

        // Map Japanese items to section IDs
        const sectionMap: { [key: string]: string } = {
            'ホーム': 'home',
        };

        const targetId = sectionMap[item];

        if (location.pathname !== '/') {
            navigate('/');
            // Small timeout to allow navigation to complete before scrolling
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    const navItems = ['ホーム', 'ニュース', '私たちについて', 'サービス', '導入事例', '料金', 'お問い合わせ'];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 50,
                    backdropFilter: 'blur(12px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                }}
            >
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: isMobile ? '60px' : '80px'
                }}>
                    <div
                        style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}
                        onClick={() => {
                            navigate('/');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        {/* Logo image - ensuring full visibility */}
                        <img
                            src={logoImg}
                            alt="OnlineDesktop Logo"
                            style={{
                                height: isMobile ? '36px' : '50px',
                                width: 'auto',
                                objectFit: 'contain'
                            }}
                        />
                    </div>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <nav>
                            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
                                {navItems.map((item) => (
                                    <li key={item}>
                                        <button
                                            onClick={() => handleNavClick(item)}
                                            style={{
                                                color: '#334155',
                                                fontWeight: 500,
                                                fontSize: '0.95rem',
                                                textDecoration: 'none',
                                                transition: 'color 0.2s',
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                padding: 0,
                                                fontFamily: 'inherit',
                                                whiteSpace: 'nowrap'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                                            onMouseLeave={(e) => e.currentTarget.style.color = '#334155'}
                                        >
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}

                    {/* Mobile Hamburger Button */}
                    {isMobile && (
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '5px',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '8px',
                                zIndex: 101
                            }}
                            aria-label="メニューを開く"
                        >
                            <span style={{
                                display: 'block',
                                width: '24px',
                                height: '2px',
                                background: isMobileMenuOpen ? '#3b82f6' : '#334155',
                                transition: 'all 0.3s ease',
                                transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
                            }} />
                            <span style={{
                                display: 'block',
                                width: '24px',
                                height: '2px',
                                background: isMobileMenuOpen ? '#3b82f6' : '#334155',
                                transition: 'all 0.3s ease',
                                opacity: isMobileMenuOpen ? 0 : 1
                            }} />
                            <span style={{
                                display: 'block',
                                width: '24px',
                                height: '2px',
                                background: isMobileMenuOpen ? '#3b82f6' : '#334155',
                                transition: 'all 0.3s ease',
                                transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
                            }} />
                        </button>
                    )}
                </div>
            </motion.header>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMobile && isMobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(255, 255, 255, 0.98)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 99,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1rem'
                        }}
                    >
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => handleNavClick(item)}
                                style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 600,
                                    color: '#1e293b',
                                    padding: '1rem 2rem',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontFamily: 'inherit'
                                }}
                            >
                                {item}
                            </motion.button>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};
