import { motion } from 'framer-motion';


const services = [
    {
        title: '月額課金システム',
        description: '会員管理から決済まで一元管理できる月額課金システム。',
        link: '/service/service01',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
        )
    },
    {
        title: 'サーバー',
        description: 'お客様の用途に合わせた最適なサーバー環境を構築・提供します。',
        link: '/service/service02',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
        )
    },
    {
        title: 'システム',
        description: '業務効率化を実現する各種Webシステムの開発・運用。',
        link: '/service/service03',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
        )
    },
    {
        title: 'Webデザイン',
        description: '使いやすさと美しさを兼ね備えたWebサイトの制作。',
        link: '/service/service04',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        )
    },
    {
        title: '運用サポート',
        description: 'システム導入後の運用保守やトラブル対応も万全の体制でサポート。',
        link: '/service/service05',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
        )
    },
    {
        title: '月額課金用 請求書作成サービス',
        description: '毎月の煩雑な請求書作成・発行業務を自動化します。',
        link: '/service/service06',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        )
    }
];

export const ServicePage = () => {
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
                            Service
                        </h1>
                        <p className="text-blue-600 mt-4 font-medium tracking-wide text-lg">
                            事業内容
                        </p>
                    </header>

                    {/* Service List Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <div className="flex items-center text-sm font-semibold text-slate-300 bg-slate-50 px-3 py-1 rounded-full w-fit">
                                    <span className="w-2 h-2 rounded-full bg-slate-300 mr-2"></span>
                                    Detail coming soon
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Monthly Billing System Details */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"
                    >
                        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:p-12 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                請求書発行業務の自動化
                            </h2>
                            <p className="text-blue-100 font-medium">
                                三菱東京ＵＦＪ銀行様の「おまかせバンク」サービスとの連携により実現
                            </p>
                        </div>

                        <div className="p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <BenefitItem title="請求先ごとの専用口座" description="三菱東京ＵＦＪ銀行様 1,000口座単位の集中口座と連携" />
                                <BenefitItem title="コンビニ支払" description="三菱東京ＵＦＪニコス様サービスと連携" />
                                <BenefitItem title="銀行口座引落" description="三菱東京ＵＦＪニコス様サービスと連携" />
                                <BenefitItem title="郵便局支払" description="三菱東京ＵＦＪニコス様サービスと連携" />
                            </div>

                            <div className="border-t border-slate-100 pt-8 text-xs text-slate-400 space-y-1">
                                <p>※「おまかせバンク」は三菱東京ＵＦＪ銀行様の商品名称、商標または登録商標です。</p>
                                <p>※「秘文」は株式会社日立ソリューションズ様の商品名称、商標または登録商標です。</p>
                                <p>※「セキュアホスティング」および「セキュアホスティングサービス」は株式会社朝日ネット様の商品名称、商標または登録商標です。</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

const BenefitItem = ({ title, description }: { title: string, description: string }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        </div>
        <div>
            <h4 className="font-bold text-slate-800 mb-1">{title}</h4>
            <p className="text-sm text-slate-500">{description}</p>
        </div>
    </div>
);
