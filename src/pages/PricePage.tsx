import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
    {
        title: '月額課金 請求書作成サービス',
        provider: 'オンラインデスクトップ社',
        description: '月額課金ビジネスに特化した請求書作成・発行代行サービス。毎月の面倒な請求業務から解放されます。',
        features: ['請求書自動作成', 'メール送付代行', '入金消込', '未回収管理'],
        recommended: true
    },
    {
        title: 'ＢＣ－ＰＯＳ',
        provider: 'ＢＵＳＩＣＯＭ社製',
        description: 'パソコンがPOSレジに。高機能・低価格なパソコンPOSシステム。小売店・飲食店など幅広い業種に対応。',
        features: ['在庫管理', '顧客管理', 'ポイント発行', '売上分析']
    },
    {
        title: '予約プロプラス',
        provider: 'アビリティコンサルタント社製',
        description: '宿泊施設向けの多機能な予約システム。公式サイトからの直販比率を高め、利益率向上に貢献します。',
        features: ['空室連動', 'プラン管理', '事前カード決済', 'サイトコントローラー連携']
    },
    {
        title: 'ブレインフォーム',
        provider: 'ブレイン社製',
        description: '専門知識不要で、誰でも簡単にフォーム作成ができるツール。問合せフォームやアンケートフォームを短時間で作成。',
        features: ['ドラッグ＆ドロップ', 'スマホ対応', 'SSL暗号化', 'CSVダウンロード']
    }
];

export const PricePage = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-[100px] pb-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <header className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                            Price & Products
                        </h1>
                        <p className="text-blue-600 mt-4 font-medium tracking-wide text-lg">
                            料金・取り扱い製品
                        </p>
                    </header>

                    <div className="grid md:grid-cols-2 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col bg-white rounded-2xl p-8 border ${product.recommended ? 'border-blue-500 ring-4 ring-blue-50 shadow-xl' : 'border-slate-200 shadow-sm hover:shadow-lg'} transition-shadow duration-300`}
                            >
                                {product.recommended && (
                                    <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                                        Recommended
                                    </div>
                                )}

                                <div className="mb-6">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                                        {product.provider}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                                        {product.title}
                                    </h3>
                                </div>

                                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                                    {product.description}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-slate-500 font-medium">
                                            <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto pt-6 border-t border-slate-100">
                                    <Link
                                        to="/"
                                        className={`block w-full text-center py-3 rounded-xl font-bold transition-all transform hover:scale-[1.02] ${product.recommended ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800'}`}
                                    >
                                        お問い合わせ・お見積もり
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center bg-blue-50 rounded-3xl p-10 md:p-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            導入のご相談はこちら
                        </h2>
                        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                            お客様の業務内容や課題に合わせて、最適なプランをご提案させていただきます。<br className="hidden md:inline" />
                            まずはお気軽にお問い合わせください。
                        </p>
                        <Link to="/" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors shadow-xl shadow-slate-200">
                            お問い合わせフォームへ
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
