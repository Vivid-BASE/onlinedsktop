import { motion } from 'framer-motion';
import logoImg from '../assets/hdr_top.png';
import { useNavigate, useLocation } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (item: string) => {
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

        // Map Japanese items to section IDs
        const sectionMap: { [key: string]: string } = {
            'ホーム': 'home',
            '導入事例': 'home', // Fallback
            '料金': 'home' // Fallback
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

    return (
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
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
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
                            height: '50px',
                            width: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                </div>

                <nav>
                    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
                        {['ホーム', 'ニュース', '私たちについて', 'サービス', '導入事例', '料金'].map((item) => (
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
                                        fontFamily: 'inherit'
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
            </div>
        </motion.header>
    );
};
