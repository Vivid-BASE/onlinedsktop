import { motion } from 'framer-motion';

const newsData = [
    {
        date: '2017.04.18',
        title: '資本金増資のお知らせ',
        content: '資本金を1,000万円に増資しました。',
        link: 'https://www.onlinedesktop.co.jp/aboutus/',
        linkText: '会社概要はこちら'
    },
    {
        date: '2012.03.16',
        title: 'Webディレクション標準スキル152 ASCIIより発売！',
        content: '一般社団法人 日本WEBデザイナーズ協会著 ～企画・提案からプロジェクト管理、運用まで～ 弊社でも執筆を担当させていただきました。',
        link: 'http://www.amazon.co.jp/dp/4048687468/',
        linkText: '「Webディレクション標準スキル152」 Amazonで好評発売中！！'
    },
    {
        date: '2011.10.01',
        title: '月額課金用請求書作成サービス スタート！',
        content: '毎月の請求書作成業務を効率化。自社で開発・運用してきた月額課金システムを利用して、毎月の請求書作成業務をサービスとして提供します。',
        link: 'https://onlinedesktop.co.jp/service/service06',
        linkText: '請求書作成サービスの詳細はこちら'
    },
    {
        date: '2010.12.10',
        title: 'ASCII.jpサイトに、オンラインサービスを選ぶ上でのポイントを掲載中',
        content: 'ASCII.jp Web Professioanl「Webディレクション最新キーワード」コーナーで、各種オンラインサービスを選ぶ上でのポイントを第12回目の「 ASP／SaaS」で掲載中です。',
        link: 'http://ascii.jp/elem/000/000/570/570032/',
        linkText: 'ASCII.jp：Webディレクション最新キーワード【目次】'
    },
    {
        date: '2010.11.29',
        title: 'ASCII.jp Webディレクションに役立つキーワード 企画提案／要件定義／見積がアップ',
        content: '第5回「見積書の作成」、第4回「要件定義書の作成」、第3回「企画提案書の作成」などが公開されました。',
        link: 'http://ascii.jp/elem/000/000/570/570032/',
        linkText: 'ASCII.jp：Webディレクション最新キーワード'
    },
    {
        date: '2010.11.24',
        title: 'ASCII.jp Web Professioanl「第2回：ヒアリングシートの作成」公開中',
        content: 'Webサイト制作における打ち合わせ時のヒアリングシートに関して書かせていただきました。',
        link: 'http://ascii.jp/elem/000/000/571/571408/',
        linkText: '記事を読む'
    },
    {
        date: '2010.11.22',
        title: 'ASCII.jp Web Professioanlで「Webディレクション最新キーワード」がスタート',
        content: '第1回は、オリエンテーションとヒアリングと題して担当しました。',
        link: 'http://ascii.jp/elem/000/000/560/560835/',
        linkText: '記事を読む'
    },
    {
        date: '2010.11.16',
        title: 'AR／Androidのイベントが11月26日（金）に開催されます',
        content: '一般社団法人日本WEBデザイナーズ協会主催で、AR／Androidのイベントが開催されます。',
        link: 'http://www.jwda.jp',
        linkText: '詳しくはこちら'
    },
    {
        date: '2010.04.18',
        title: 'Webデザインアワード授賞式；USTREAM アーカイブ',
        content: '第6回 Webデザインアワード授賞式が行われました。',
        link: 'http://www.jwda.jp/event/award.html',
        linkText: '詳しくはこちら'
    }
];

export const NewsPage = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)' }}>
            <div className="container">
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
                        ニュース
                        <span style={{
                            display: 'block',
                            fontSize: '1rem',
                            color: '#3b82f6',
                            marginTop: '0.5rem',
                            fontWeight: 'normal'
                        }}>Latest News</span>
                    </h1>

                    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem', paddingBottom: '4rem' }}>
                        {newsData.map((item, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '2rem',
                                    borderRadius: '1rem',
                                    border: '1px solid rgba(255, 255, 255, 0.5)',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                                }}
                            >
                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.25rem 0.75rem',
                                    background: '#eff6ff',
                                    color: '#3b82f6',
                                    borderRadius: '9999px',
                                    fontSize: '0.875rem',
                                    marginBottom: '1rem'
                                }}>
                                    {item.date}
                                </div>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1e293b' }}>
                                    {item.title}
                                </h2>
                                <p style={{ color: '#64748b', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    {item.content}
                                </p>
                                {item.link && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            color: '#3b82f6',
                                            textDecoration: 'none',
                                            fontWeight: '500',
                                            fontSize: '0.875rem'
                                        }}
                                    >
                                        {item.linkText} →
                                    </a>
                                )}
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
