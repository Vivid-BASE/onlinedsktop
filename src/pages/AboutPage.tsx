import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const AboutPage = () => {
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
        <div style={{ paddingTop: isMobile ? '70px' : '100px', minHeight: '100vh', background: 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: isMobile ? '2rem' : '4rem' }}>
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
                        私たちについて
                        <span style={{
                            display: 'block',
                            fontSize: isMobile ? '0.875rem' : '1rem',
                            color: '#3b82f6',
                            marginTop: '0.5rem',
                            fontWeight: 'normal'
                        }}>About Us</span>
                    </h1>

                    <div style={{ background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', padding: isMobile ? '1.5rem' : '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                        <section style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
                            <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1e293b', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                                オンラインデスクトップとは
                            </h2>
                            <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '1rem', fontSize: isMobile ? '0.875rem' : '1rem' }}>
                                オンラインデスクトップとは、様々な法人様向けシステムをインターネット経由のブラウザを使いレンタル形式でご利用いただくためのサービスです。<br />
                                デスクトップ画面上のアープリケーションソフトを使うような感覚で、様々なオンラインサービスをお気軽にご利用いただけたらと思っております。
                            </p>
                            <p style={{ color: '#94a3b8', fontSize: isMobile ? '0.75rem' : '0.875rem' }}>
                                ※オンラインデスクトップ、onlineDesktopは、弊社オンラインデスクトップ株式会社の登録商標です。
                            </p>
                        </section>

                        <section style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
                            <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#334155' }}>
                                自社用　月額課金システムの開発
                            </h3>
                            <p style={{ color: '#475569', lineHeight: 1.8, fontSize: isMobile ? '0.875rem' : '1rem' }}>
                                弊社は創業当初、システム開発会社としてスタートしましたが、その後、自社サービスとして月額課金のサービスを開始いたしました。その際、顧客管理、請求管理、入金管理を行うシステムが必要となりました。
                                当初は、市販のパッケージソフトや、ASPサービスを利用しておりましたが、帯に短し襷に長しで、なかなか自社の業務に合ったものが見つかりませんでした。
                                そこで、自社で利用するための月額課金システムを開発することにいたしました。
                            </p>
                        </section>

                        <section style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
                            <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#334155' }}>
                                月額課金システムの安定稼働へ向けて
                            </h3>
                            <p style={{ color: '#475569', lineHeight: 1.8, fontSize: isMobile ? '0.875rem' : '1rem' }}>
                                自社で開発した月額課金システムを利用し、数年が経過しました。
                                最初は、不具合が出ることもありましたが、その都度修正を行い、また、機能追加を行うことで、安定して稼働するようになりました。
                                また、毎月の請求業務にかかる時間も大幅に短縮され、業務効率化に大きく貢献いたしました。
                            </p>
                        </section>

                        <section style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
                            <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#334155' }}>
                                月額課金システムのサービス提供開始
                            </h3>
                            <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '1rem', fontSize: isMobile ? '0.875rem' : '1rem' }}>
                                自社で利用していた月額課金システムですが、他社様からも「利用したい」というお声をいただくようになりました。
                                そこで、自社用システムをベースに、汎用的な月額課金システムとしてサービス提供を開始することにいたしました。
                            </p>
                            <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', fontSize: isMobile ? '0.875rem' : '1rem' }}>
                                ＞＞月額課金システムはこちら
                            </Link>
                        </section>

                        <section>
                            <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#334155' }}>
                                月額課金　請求書作成サービス提供開始
                            </h3>
                            <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '1rem', fontSize: isMobile ? '0.875rem' : '1rem' }}>
                                月額課金システム機能の一部である、請求書作成機能を切り出し、単独のサービスとして提供を開始いたしました。
                                毎月の請求書発行業務にお困りの企業様に、ぜひご利用いただきたいと考えております。
                            </p>
                            <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', fontSize: isMobile ? '0.875rem' : '1rem' }}>
                                ＞＞月額課金　請求書発行サービスはこちら
                            </Link>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
