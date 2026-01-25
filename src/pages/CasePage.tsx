import { motion } from 'framer-motion';

const cases = [
    {
        id: 'case01',
        title: '宿泊施設様',
        subtitle: '予約システム連携',
        problem: [
            '「電話、FAX、メールで受け付けていた宿泊予約をインターネットからも受け付けたい」',
            '「空室在庫を極力減らしたいが、オーバーブッキングが心配だ」',
            '「新着情報を、もっと頻繁に更新したい」'
        ],
        solution: {
            title: 'オンライン宿泊予約システム連携',
            description: '「予約プロ」を活用して日付ごとの在庫と連動したオンライン受付を実現。予約受付業務を自動化し、オーバーブッキングのリスクを低減。',
            subSolution: {
                title: 'お知らせ更新システム',
                description: '「Movable Type」を活用し、お客様自身で簡単に新着情報を更新できる環境を構築。ランニングコストの削減にも貢献。'
            }
        },
        link: '',
        linkText: ''
    },
    {
        id: 'case02',
        title: '会員制サービス様',
        subtitle: '会員システム導入',
        problem: [
            '「インターネット上で会員の告知を行い、そのままオンライン決済したい」',
            '「決済完了後の会員登録やサイトへの招待を自動化したい」'
        ],
        solution: {
            title: '既存Webパッケージの活用',
            description: '会員管理とクレジット決済を連動させる既存Webパッケージシステムを活用。スクラッチ開発と比較して、短期間かつ低コストでの導入を実現しました。',
        },
        footerText: '※モバイルプロは、株式会社ヴイワン様の商品名称、商標または登録商標です。'
    },
    {
        id: 'case03',
        title: '一般企業様',
        subtitle: 'AccessデータベースのWeb化',
        problem: [
            '「社内の顧客データをAccessで管理しているが、複数人で同時に利用したい」',
            '「ローカルサーバーでの運用に限界を感じている」'
        ],
        solution: {
            title: 'レンタルサーバー／ブラウザ入力へ移行',
            description: 'AccessデータをWebサーバー上のMySQLデータベースへ移行。インターネット経由でブラウザから利用可能になり、複数人での同時アクセスを実現。',
            security: 'セキュリティ対策として、ID・パスワードに加え、事務所のグローバル固定IPアドレスによるアクセス制限を導入。'
        }
    }
];

export const CasePage = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-[100px] pb-20">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <header className="text-center mb-20">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                            Case Studies
                        </h1>
                        <p className="text-blue-600 mt-4 font-medium tracking-wide text-lg">
                            導入事例
                        </p>
                    </header>

                    <div className="space-y-24">
                        {cases.map((item) => (
                            <motion.section
                                key={item.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"
                            >
                                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <div className="text-blue-100 font-bold mb-1 tracking-wider text-sm opacity-90">{item.id.toUpperCase()}</div>
                                        <h2 className="text-2xl md:text-3xl font-bold">{item.title}</h2>
                                        <p className="text-blue-50 mt-1 font-medium">{item.subtitle}</p>
                                    </div>
                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-colors text-sm"
                                        >
                                            {item.linkText}
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                        </a>
                                    )}
                                </div>

                                <div className="grid md:grid-cols-2">
                                    {/* Problem Section */}
                                    <div className="p-8 md:p-10 bg-slate-50 border-r border-slate-100">
                                        <h3 className="flex items-center text-lg font-bold text-slate-700 mb-6 uppercase tracking-wider">
                                            <span className="w-8 h-8 bg-red-100 text-red-500 rounded-full flex items-center justify-center mr-3 font-extrabold">!</span>
                                            Challenge
                                        </h3>
                                        <ul className="space-y-4">
                                            {item.problem.map((prob, i) => (
                                                <li key={i} className="flex items-start text-slate-600 leading-relaxed">
                                                    <span className="text-red-400 mr-2 mt-1.5">•</span>
                                                    {prob}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Solution Section */}
                                    <div className="p-8 md:p-10 bg-white">
                                        <h3 className="flex items-center text-lg font-bold text-blue-600 mb-6 uppercase tracking-wider">
                                            <span className="w-8 h-8 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mr-3 font-extrabold">✓</span>
                                            Solution
                                        </h3>

                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="font-bold text-slate-800 mb-2">{item.solution.title}</h4>
                                                <p className="text-slate-600 leading-relaxed text-sm">
                                                    {item.solution.description}
                                                </p>
                                            </div>

                                            {item.solution.subSolution && (
                                                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                                    <h4 className="font-bold text-blue-800 text-sm mb-1">{item.solution.subSolution.title}</h4>
                                                    <p className="text-blue-700 text-sm leading-relaxed">
                                                        {item.solution.subSolution.description}
                                                    </p>
                                                </div>
                                            )}

                                            {item.solution.security && (
                                                <div className="mt-4 flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                                                    <svg className="w-5 h-5 text-slate-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                                    <p className="text-slate-500 text-sm leading-relaxed">
                                                        {item.solution.security}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {item.footerText && (
                                    <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 text-xs text-slate-400">
                                        {item.footerText}
                                    </div>
                                )}
                            </motion.section>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
