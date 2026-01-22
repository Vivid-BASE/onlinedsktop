import { motion } from 'framer-motion';


const cases = [
    {
        id: 'case01',
        title: '事例01 (予約システム)',
        description: '宿泊予約のオンライン化と在庫管理の自動化を実現。',
        href: '#case01'
    },
    {
        id: 'case02',
        title: '事例02 (会員システム)',
        description: '会員情報のデータベース化と管理業務の効率化。',
        href: '#case02'
    },
    {
        id: 'case03',
        title: '事例03 (AccessをWeb化)',
        description: '社内AccessシステムをWeb化し、場所を選ばない業務環境を構築。',
        href: '#case03'
    }
];

export const CasePage = () => {
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
                        導入事例
                        <span style={{
                            display: 'block',
                            fontSize: '1rem',
                            color: '#3b82f6',
                            marginTop: '0.5rem',
                            fontWeight: 'normal'
                        }}>Case Studies</span>
                    </h1>

                    {/* Case Studies Grid Navigation */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                        {cases.map((item, index) => (
                            <motion.a
                                key={item.id}
                                href={item.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    display: 'block',
                                    background: 'white',
                                    padding: '2rem',
                                    borderRadius: '1rem',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid #e2e8f0',
                                    textDecoration: 'none',
                                    cursor: 'pointer'
                                }}
                                whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                            >
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1e293b' }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: '#64748b', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                    {item.description}
                                </p>
                                <span style={{ color: '#3b82f6', fontWeight: '500', display: 'inline-flex', alignItems: 'center' }}>
                                    詳細を見る ↓
                                </span>
                            </motion.a>
                        ))}
                    </div>

                    {/* Case 01 Details */}
                    <div id="case01" style={{ background: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '2rem', color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '1rem' }}>
                            事例01 (予約システム)
                        </h2>

                        <div style={{ marginBottom: '3rem' }}>
                            <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                宿泊施設のお客様からのご要望：<br />
                                「電話、ＦＡＸ、メールで受け付けていた宿泊予約をインターネットからも受け付けたい。」<br />
                                「空室在庫を極力減らしたいが、オーバーブッキングが心配だ。」<br />
                                「新着情報を、もっと頻繁に更新したい。」
                            </p>
                            <a
                                href="http://www.tsumari-artfield.com/sansyo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#3b82f6', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}
                            >
                                http://www.tsumari-artfield.com/sansyo/
                            </a>
                        </div>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ width: '6px', height: '24px', background: '#3b82f6', borderRadius: '2px' }}></span>
                                予約受付部分：オンライン宿泊予約システム 連携
                            </h3>
                            <p style={{ color: '#64748b', lineHeight: 1.8, paddingLeft: '1rem' }}>
                                アビリティコンサルタント社『 予約プロ 』を活用して日付ごとの在庫と連動したオンライン受付にしました。<br />
                                これは主に予約受付業務を自動化するためのシステムです。オンライン予約を可能にすることで、インターネットで自動的に予約受付ができます。
                            </p>
                        </section>

                        <section>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ width: '6px', height: '24px', background: '#3b82f6', borderRadius: '2px' }}></span>
                                お知らせ部分：お知らせ更新システム 利用
                            </h3>
                            <p style={{ color: '#64748b', lineHeight: 1.8, paddingLeft: '1rem' }}>
                                Six Apart社『 Ｍｏｖａｂｌｅ Ｔｙｐｅ 』を活用してお客様側で更新。<br />
                                お知らせの更新作業をお客さま自身で行うことが可能になりますので、月額のランニング費用のコスト削減にもつながります。
                            </p>
                        </section>
                    </div>

                    {/* Case 02 Details */}
                    <div id="case02" style={{ background: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '2rem', color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '1rem' }}>
                            事例02 (会員システム)
                        </h2>

                        <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '2rem' }}>
                            インターネット上で会員の告知を行い、クレジットカードでオンライン決済をする仕組みです。<br />
                            クレジットで決済をいただいた方への会員サイトへの招待を自動化してあります。
                        </p>

                        <section>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ width: '6px', height: '24px', background: '#10b981', borderRadius: '2px' }}></span>
                                既存Webパッケージの活用
                            </h3>
                            <p style={{ color: '#64748b', lineHeight: 1.8, paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                                すべてのシステムを新規開発するのではなく、既存のＷｅｂパッケージシステムを活用して、短期間で効率的な開発を行いました。
                            </p>
                            <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                                ※モバイルプロは、株式会社ヴイワン様の商品名称、商標または、登録商標です。<br />
                                ※他のすべての社名および製品名はそれぞれの企業の商標もしくは登録商標です。
                            </p>
                        </section>
                    </div>

                    {/* Case 03 Details */}
                    <div id="case03" style={{ background: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '2rem', color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '1rem' }}>
                            事例03 (AccessをWeb化)
                        </h2>

                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <section>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ width: '6px', height: '24px', background: '#f59e0b', borderRadius: '2px' }}></span>
                                    課題：Microsoft Accessを複数人で利用したい
                                </h3>
                                <p style={{ color: '#64748b', lineHeight: 1.8, paddingLeft: '1rem' }}>
                                    お客様データ（Microsoft社製 Accessデータベース）を複数人で、ローカルサーバー上で運用されていました。<br />
                                    しかし、Accessは本来複数での同時使用には適さないため、運用に課題がありました。
                                </p>
                            </section>

                            <section>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ width: '6px', height: '24px', background: '#f59e0b', borderRadius: '2px' }}></span>
                                    解決：レンタルサーバー／ブラウザ入力へ移行
                                </h3>
                                <p style={{ color: '#64748b', lineHeight: 1.8, paddingLeft: '1rem' }}>
                                    AccessデータをWebサーバー上のMySQLデータベースへ移行しました。<br />
                                    これにより、インターネット経由でブラウザから利用することができるようになり、複数の方での同時使用が可能になりました。
                                </p>
                            </section>

                            <section>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ width: '6px', height: '24px', background: '#f59e0b', borderRadius: '2px' }}></span>
                                    セキュリティ：事務所の固定IPアドレスによるアクセス制限
                                </h3>
                                <p style={{ color: '#64748b', lineHeight: 1.8, paddingLeft: '1rem' }}>
                                    インターネット経由での利用に伴うセキュリティリスクに対しては、ＩＤ・パスワードだけでなく、事務所のグローバル固定ＩＰ制限をかけることにより、事務所外からの不正アクセスをガードしています。
                                </p>
                            </section>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
