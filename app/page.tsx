'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TransparentPhoneScanner from '@/components/TransparentPhoneScanner';

export default function Page() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <div
            className="min-h-screen bg-black text-white font-mono relative overflow-hidden"
            data-oid="7i6ufa3"
        >
            {/* Gradient background */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80 z-0"
                data-oid="wfvtttl"
            ></div>

            {/* Interactive cursor effect */}
            <div
                className="pointer-events-none fixed w-64 h-64 rounded-full bg-green-500/10 blur-3xl z-0 transition-all duration-300 ease-out"
                style={{
                    left: `${cursorPos.x - 128}px`,
                    top: `${cursorPos.y - 128}px`,
                    opacity: isHovering ? 0.3 : 0.1,
                    transform: isHovering ? 'scale(1.5)' : 'scale(1)',
                }}
                data-oid="oql.3hc"
            ></div>

            <div className="relative z-10" data-oid="nbqxxis">
                <nav
                    className="flex justify-between items-center py-8 px-6 md:px-12 lg:px-24"
                    data-oid="n1srpx-"
                >
                    <div className="flex items-center" data-oid="oj4nhup">
                        <span className="text-2xl font-bold tracking-tighter" data-oid="ap49qil">
                            taste.fun
                        </span>
                        <span
                            className="ml-2 text-xs text-green-400 uppercase tracking-widest"
                            data-oid="eb2pvrz"
                        >
                            beta
                        </span>
                    </div>
                    <button
                        className="px-4 py-2 border border-green-500 text-green-400 hover:bg-green-500/10 transition-all duration-300 rounded-none"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        data-oid="pt31f:d"
                    >
                        Join Waitlist
                    </button>
                </nav>

                <main className="px-6 md:px-12 lg:px-24 py-16 md:py-24" data-oid="z7r8icl">
                    {/* Hero Section */}
                    <section
                        className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-8 relative"
                        data-oid="j:1svtl"
                    >
                        {/* Background product images */}
                        <div
                            className="absolute inset-0 overflow-hidden pointer-events-none"
                            style={{ zIndex: -1 }}
                            data-oid="mlrdqr2"
                        >
                            <motion.div
                                className="absolute w-full h-full"
                                animate={{
                                    x: [-200, 0, -200],
                                    transition: {
                                        x: {
                                            duration: 40,
                                            repeat: Infinity,
                                            repeatType: 'loop',
                                            ease: 'linear',
                                        },
                                    },
                                }}
                                data-oid=".tc5:6o"
                            >
                                {/* Chips bag */}

                                {/* Protein bar */}

                                {/* Beverage can */}
                            </motion.div>
                        </div>
                        <div className="md:col-span-6 md:col-start-2" data-oid="qqj5hmw">
                            <h1
                                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                                data-oid="rr81c0k"
                                key="olk-bErX"
                            >
                                Scan. Bet. <br data-oid="2:99lg7" />
                                <span className="text-green-400" data-oid="x-yxlr-">
                                    Expose the Truth.
                                </span>
                            </h1>
                            <p
                                className="text-xl md:text-2xl text-gray-400 mb-8"
                                data-oid="e6gphjz"
                                key="olk-TG0Y"
                            >
                                The label speaks. We verify.
                            </p>
                            <div className="mb-12" data-oid="4:lh-qr" key="olk-zy7S">
                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col sm:flex-row gap-4 max-w-md"
                                    data-oid="yi:p39:"
                                >
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className="bg-gray-900/50 border border-gray-700 px-4 py-3 focus:outline-none focus:border-green-500 flex-grow"
                                        required
                                        data-oid="qsi9sgs"
                                    />

                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-green-600 hover:bg-green-700 transition-colors duration-300 text-white font-medium"
                                        onMouseEnter={() => setIsHovering(true)}
                                        onMouseLeave={() => setIsHovering(false)}
                                        data-oid="kzwy49."
                                    >
                                        {submitted ? "You're In" : 'Join Waitlist'}
                                    </button>
                                </form>
                            </div>
                            <img
                                className="w-[373px] h-[358px]"
                                data-oid="kv3gklj"
                                src="/images/7C25F01E-8DA3-447B-847B-08DDB06DAEF4.PNG"
                                alt="7C25F01E-8DA3-447B-847B-08DDB06DAEF4.PNG"
                                key="olk-23bY"
                            />
                        </div>

                        <div
                            className="md:col-span-4 flex items-center justify-center"
                            data-oid="uh-ws_5"
                        >
                            <div
                                className="transform hover:scale-105 transition-transform duration-500 hover:rotate-1"
                                data-oid="1k0ikp_"
                            >
                                <TransparentPhoneScanner data-oid=":1qvc9m" />
                            </div>
                        </div>
                    </section>

                    {/* Mission Statement */}
                    <section className="mb-32 relative" data-oid="tbmcqkg">
                        <div
                            className="absolute -left-24 top-0 w-16 h-16 border-t border-l border-green-500/30"
                            data-oid="m9.gxxb"
                        ></div>
                        <div className="max-w-4xl mx-auto" data-oid="523gggc">
                            <h2
                                className="text-3xl md:text-5xl font-bold mb-12 text-center"
                                data-oid="y2a33py"
                            >
                                Food labels lie. <br data-oid="ggjh1dy" />
                                We built a game to prove it.
                            </h2>
                        </div>
                    </section>

                    {/* Explainer */}
                    <section
                        className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-12"
                        data-oid="l_-4.26"
                    >
                        <div className="md:col-span-5 md:col-start-2" data-oid="ogm3gqz">
                            <h3
                                className="text-2xl font-bold mb-6 text-green-400"
                                data-oid="k8t_k2_"
                            >
                                How it works
                            </h3>
                            <p className="text-lg text-gray-300 mb-6" data-oid="s.h_:ty">
                                Scan any barcode. Create a market. Bet on the truth. It's that
                                simple.
                            </p>
                            <p className="text-lg text-gray-300" data-oid="iiikax9">
                                When companies make claims, we turn them into bets. When the truth
                                comes out, winners get paid.
                            </p>
                        </div>
                        <div className="md:col-span-5" data-oid="7vcyhlj">
                            <div
                                className="border border-gray-800 p-8 bg-gray-900/30 relative overflow-hidden group"
                                data-oid="f0f9_3e"
                            >
                                <div
                                    className="absolute -right-12 -top-12 w-24 h-24 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-all duration-500"
                                    data-oid="kunb4vv"
                                ></div>
                                <h3 className="text-2xl font-bold mb-6" data-oid="xrgpphd">
                                    The game is simple
                                </h3>
                                <ul className="space-y-4" data-oid="s.fggmo">
                                    <li className="flex items-start" data-oid="dldd8rg">
                                        <span className="text-green-400 mr-3" data-oid="am08y6w">
                                            01.
                                        </span>
                                        <span data-oid="jmui90f">Scan a product's barcode</span>
                                    </li>
                                    <li className="flex items-start" data-oid="tp5dt4j">
                                        <span className="text-green-400 mr-3" data-oid="u5nucoi">
                                            02.
                                        </span>
                                        <span data-oid="j9j-dml">
                                            Bet on or against label claims
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="g7mgpnk">
                                        <span className="text-green-400 mr-3" data-oid="mzmftbl">
                                            03.
                                        </span>
                                        <span data-oid="z.u4exx">
                                            Win when the truth is revealed
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Social Element */}
                    <section className="mb-32 relative" data-oid="dpb2pt1">
                        <div
                            className="absolute -right-24 top-1/2 w-16 h-16 border-b border-r border-green-500/30"
                            data-oid="xtdyn.5"
                        ></div>
                        <div className="max-w-3xl mx-auto text-center" data-oid="q78wq4.">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8" data-oid="urn54u2">
                                It's not just verification. It's a movement.
                            </h2>
                            <p className="text-xl text-gray-300 mb-6" data-oid="bi5.09b">
                                Share your wins. Expose corporate lies. Build a reputation as a
                                truth-seeker.
                            </p>
                            <p className="text-xl text-gray-300" data-oid="2bqfg_2">
                                The more we play, the more companies have to tell the truth.
                            </p>
                        </div>
                    </section>

                    {/* Closing CTA */}
                    <section className="mb-16" data-oid="--bs5-l">
                        <div className="max-w-4xl mx-auto text-center" data-oid="71o1sgv">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8" data-oid="byhu10w">
                                Ready to play with truth?
                            </h2>
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
                                data-oid="hmhlukd"
                            >
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="bg-gray-900/50 border border-gray-700 px-4 py-3 focus:outline-none focus:border-green-500 flex-grow"
                                    required
                                    data-oid="oiaq1iu"
                                />

                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-green-600 hover:bg-green-700 transition-colors duration-300 text-white font-medium"
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                    data-oid="wo8tdhm"
                                >
                                    {submitted ? "You're In" : 'Join Waitlist'}
                                </button>
                            </form>
                        </div>
                    </section>
                </main>

                <footer
                    className="px-6 md:px-12 lg:px-24 py-12 border-t border-gray-800"
                    data-oid="20qm.r0"
                >
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="m8tgxxm"
                    >
                        <div className="mb-6 md:mb-0" data-oid="22e58b6">
                            <span className="text-xl font-bold tracking-tighter" data-oid="130qcia">
                                taste.fun
                            </span>
                            <span className="ml-2 text-xs text-green-400" data-oid="anbvw4-">
                                © 2025
                            </span>
                        </div>
                        <div className="text-gray-500 text-sm" data-oid="kvedl2.">
                            Not affiliated with any food corporation.{' '}
                            <br className="md:hidden" data-oid="m:wk594" />
                            That's kind of the point.
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
