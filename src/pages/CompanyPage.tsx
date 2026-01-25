import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CompanyPage = () => {
    return (
        <div className="min-h-screen bg-stone-50 pt-[100px] pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <header className="text-center mb-16">
                        <h1 className="text-3xl font-bold text-stone-900 mb-4">会社概要</h1>
                        <p className="text-stone-500">Company Overview</p>
                    </header>

                    <div className="space-y-12">
                        {/* Corporate Philosophy */}
                        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
                            <h2 className="text-xl font-bold text-stone-900 mb-8 border-l-4 border-amber-500 pl-4">企業理念</h2>
                            <div className="text-center py-4">
                                <p className="text-2xl font-bold text-stone-800 leading-relaxed mb-4">
                                    インターネットオンラインサービスを<br className="hidden md:block" />
                                    水道のように安価に大量に社会に供給する
                                </p>
                                <p className="text-stone-500 mt-4">
                                    Better surprise for the world.<br />
                                    テクノロジーで、ビジネスの現場に「快適」な驚きを。
                                </p>
                            </div>
                        </section>

                        {/* Company Profile */}
                        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
                            <h2 className="text-xl font-bold text-stone-900 mb-8 border-l-4 border-amber-500 pl-4">会社概要</h2>
                            <dl className="divide-y divide-stone-100">
                                <ProfileRow label="会社名" value="オンラインデスクトップ株式会社" />
                                <ProfileRow label="住所" value={
                                    <>
                                        〒180-0004<br />
                                        東京都武蔵野市吉祥寺本町1-20-1<br />
                                        吉祥寺永谷シティプラザ1002
                                    </>
                                } />
                                <ProfileRow label="資本金" value="10,000,000円" />
                                <ProfileRow label="設立" value="2006年5月8日" />
                                <ProfileRow label="事業内容" value="インターネット関連事業 ／ ASP販売 ／ サーバ設定管理 ／ Webシステム開発 ／ ホームページ制作" />
                                <ProfileRow label="取引銀行" value="三菱東京UFJ銀行 元住吉支店" />
                            </dl>
                        </section>

                        <div className="text-center mt-12">
                            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-amber-600 rounded-full hover:bg-amber-700 transition-colors shadow-lg shadow-amber-200">
                                お問い合わせはこちら
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const ProfileRow = ({ label, value }: { label: string, value: React.ReactNode }) => (
    <div className="py-5 grid grid-cols-1 md:grid-cols-4 gap-4">
        <dt className="font-bold text-stone-700">{label}</dt>
        <dd className="text-stone-600 md:col-span-3 leading-relaxed">{value}</dd>
    </div>
);
