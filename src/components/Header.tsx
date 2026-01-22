import { motion } from 'framer-motion';
import logoImg from '../assets/hdr_top.png';

export const Header = () => {
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
                    <ul style={{ display: 'flex', gap: '2rem', fontWeight: 500 }}>
                        {['ホーム', 'ニュース', '私たちについて', 'サービス', '導入事例', '料金'].map((item) => (
                            <li key={item}>
                                <a href="#" style={{ position: 'relative', transition: 'color 0.2s', fontSize: '0.95rem' }} className="nav-link">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
};
