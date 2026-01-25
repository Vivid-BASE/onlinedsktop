import { motion } from 'framer-motion';


const newsData = [
    {
        date: '2017.04.18',
        title: '資本金増資のお知らせ',
        content: '資本金を1,000万円に増資しました。',
        link: 'https://vivid-base.github.io/onlinedsktop/aboutus/',
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
        link: 'https://onlinedsktop.co.jp/service/service06',
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
        <div className="min-h-screen bg-slate-50 pt-[100px] pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <header className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                            News
                        </h1>
                        <p className="text-blue-600 mt-4 font-medium tracking-wide text-lg">
                            最新のお知らせ
                        </p>
                    </header>

                    <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-12">
                        {newsData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="relative pl-8 md:pl-12"
                            >
                                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-50"></span>

                                <div className="group">
                                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-6 mb-2">
                                        <time className="text-sm font-bold text-blue-600 font-mono">
                                            {item.date}
                                        </time>
                                        <h2 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                                            {item.title}
                                        </h2>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                        <p className="text-slate-600 leading-relaxed mb-4">
                                            {item.content}
                                        </p>

                                        {item.link && (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                                            >
                                                {item.linkText}
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
