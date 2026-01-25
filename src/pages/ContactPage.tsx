
import { motion } from 'framer-motion';

export const ContactPage = () => {
    return (
        <div className="min-h-screen bg-stone-50 pt-[100px] pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <header className="text-center mb-20">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
                            Contact
                        </h1>
                        <p className="text-amber-600 mt-4 font-medium tracking-wide text-lg">
                            お問い合わせ
                        </p>
                    </header>

                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-200">
                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-stone-700 mb-2">
                                        お名前 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                        placeholder="山田 太郎"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-stone-700 mb-2">
                                        メールアドレス <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                        placeholder="taro.yamada@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-bold text-stone-700 mb-2">
                                    件名
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                    placeholder="お問い合わせ件名"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-stone-700 mb-2">
                                    お問い合わせ内容 <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                                    placeholder="お問い合わせ内容をご記入ください"
                                    required
                                ></textarea>
                            </div>

                            <div className="text-center pt-4">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
                                >
                                    送信する
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
