import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
    return (
        <div className="min-h-screen bg-stone-50 pt-[100px] pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Hero Section */}
                    <header className="text-center mb-20">
                        <p className="mt-6 text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                            インターネットを通じて、企業の業務効率化と<br className="hidden md:block" />
                            新しい価値の創造を支援します。
                        </p>
                    </header>

                    {/* Content Blocks */}
                    <div className="space-y-16">
                        {/* Section 1: Who We Are */}
                        <Section title="オンラインデスクトップとは">
                            <p className="text-lg text-slate-700 leading-8">
                                オンラインデスクトップとは、様々な法人様向けシステムをインターネット経由のブラウザを使いレンタル形式でご利用いただくためのサービスです。<br />
                                デスクトップ画面上のアプリケーションソフトを使うような感覚で、様々なオンラインサービスをお気軽にご利用いただけたらと思っております。
                            </p>
                            <p className="mt-4 text-sm text-slate-400">
                                ※オンラインデスクトップ、onlineDesktopは、弊社オンラインデスクトップ株式会社の登録商標です。
                            </p>
                        </Section>

                        {/* Section 2: Origin */}
                        <Section title="開発の背景">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <span className="w-1.5 h-6 bg-blue-500 rounded-full mr-3"></span>
                                    自社用 月額課金システムの開発
                                </h3>
                                <p className="text-slate-600 leading-7">
                                    弊社は創業当初、システム開発会社としてスタートしましたが、その後、自社サービスとして月額課金のサービスを開始いたしました。その際、顧客管理、請求管理、入金管理を行うシステムが必要となりました。<br />
                                    当初は、市販のパッケージソフトや、ASPサービスを利用しておりましたが、帯に短し襷に長しで、なかなか自社の業務に合ったものが見つかりませんでした。<br />
                                    そこで、自社で利用するための月額課金システムを開発することにいたしました。
                                </p>
                            </div>
                        </Section>

                        {/* Section 3: Evolution */}
                        <Section title="進化と安定">
                            <div className="grid md:grid-cols-2 gap-6">
                                <Card>
                                    <h3 className="font-bold text-slate-800 mb-2">安定稼働へ向けて</h3>
                                    <p className="text-sm text-slate-600 leading-6">
                                        自社で開発した月額課金システムを利用し、数年が経過しました。
                                        最初は不具合が出ることもありましたが、その都度修正を行い、また機能追加を行うことで、安定して稼働するようになりました。
                                        毎月の請求業務にかかる時間も大幅に短縮され、業務効率化に大きく貢献いたしました。
                                    </p>
                                </Card>
                                <Card>
                                    <h3 className="font-bold text-slate-800 mb-2">サービス提供開始</h3>
                                    <p className="text-sm text-slate-600 leading-6">
                                        自社で利用していた月額課金システムですが、他社様からも「利用したい」というお声をいただくようになりました。
                                        そこで、自社用システムをベースに、汎用的な月額課金システムとしてサービス提供を開始することにいたしました。
                                    </p>
                                </Card>
                            </div>
                            <div className="mt-6 text-center">
                                <Link to="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                                    月額課金システムについて詳しく見る
                                </Link>
                            </div>
                        </Section>

                        {/* Section 4: New Service */}
                        <Section title="新たな展開">
                            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-xl">
                                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-500 opacity-20 blur-2xl"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">月額課金 請求書作成サービス</h3>
                                <p className="text-slate-300 leading-7 mb-6 relative z-10">
                                    月額課金システム機能の一部である、請求書作成機能を切り出し、単独のサービスとして提供を開始いたしました。
                                    毎月の請求書発行業務にお困りの企業様に、ぜひご利用いただきたいと考えております。
                                </p>
                                <Link to="/" className="inline-flex items-center font-bold text-blue-400 hover:text-blue-300 transition-colors relative z-10">
                                    サービス詳細はこちら
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                            </div>
                        </Section>

                        {/* Section 5: Corporate Philosophy */}
                        <Section title="企業理念">
                            <Card>
                                <p className="text-xl font-bold text-stone-800 text-center py-6 leading-normal">
                                    インターネットオンラインサービスを<br className="hidden md:block" />
                                    水道のように安価に大量に社会に供給する
                                </p>
                            </Card>
                        </Section>

                        {/* Section 6: Company Overview */}
                        <Section title="会社概要">
                            <div className="bg-white p-2 rounded-xl border border-stone-100">
                                <dl>
                                    <CompanyProfileRow label="会社名" value="オンラインデスクトップ株式会社" />
                                    <CompanyProfileRow label="住所" value="〒180-0004 東京都武蔵野市吉祥寺本町1-20-1 吉祥寺永谷シティプラザ1002" />
                                    <CompanyProfileRow label="資本金" value="10,000,000円" />
                                    <CompanyProfileRow label="設立" value="2006年5月8日" />
                                    <CompanyProfileRow label="事業内容" value="インターネット関連事業 ／ ASP販売 ／ サーバ設定管理 ／ Webシステム開発 ／ ホームページ制作" />
                                    <CompanyProfileRow label="取引銀行" value="三菱東京UFJ銀行 元住吉支店" />
                                </dl>
                            </div>
                        </Section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
    >
        <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-100 pb-2 inline-block">
            {title}
        </h2>
        {children}
    </motion.section>
);

const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
        {children}
    </div>
);

const CompanyProfileRow = ({ label, value }: { label: string, value: string }) => (
    <div className="py-4 border-b border-stone-100 last:border-0 grid grid-cols-1 md:grid-cols-3 gap-2">
        <dt className="font-bold text-stone-800">{label}</dt>
        <dd className="text-stone-600 md:col-span-2">{value}</dd>
    </div>
);
