import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer style={{ background: '#0f172a', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                    <div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '24px', height: '24px', background: 'white', borderRadius: '50%' }} />
                            OnlineDesktop
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                            Better surprise for the world.<br />
                            テクノロジーで、ビジネスの現場に「快適」な驚きを。
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>サービス</h4>
                        <ul style={{ color: '#94a3b8', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>サーバ構築・運用</li>
                            <li>システム開発</li>
                            <li>Webデザイン</li>
                            <li>運用保守・サポート</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>会社情報</h4>
                        <ul style={{ color: '#94a3b8', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>私たちについて</Link></li>
                            <li><Link to="/news" style={{ color: 'inherit', textDecoration: 'none' }}>ニュース</Link></li>
                            <li>導入事例</li>
                            <li>お問い合わせ</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>お問い合わせ</h4>
                        <address style={{ color: '#94a3b8', fontSize: '0.875rem', fontStyle: 'normal', lineHeight: 1.6 }}>
                            〒180-0004<br />
                            東京都武蔵野市吉祥寺本町1-20-1<br />
                            吉祥寺永谷シティプラザ1002<br />
                            <br />
                            Tel：0422-47-9311
                        </address>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #1e293b', paddingTop: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.875rem' }}>
                    © {new Date().getFullYear()} Online Desktop Co., Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
