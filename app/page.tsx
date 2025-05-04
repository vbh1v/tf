'use client';

import { useState, useEffect } from 'react';

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
            data-oid="679rg6_"
        >
            {/* Gradient background */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80 z-0"
                data-oid="s2o.9:f"
            ></div>

            {/* Interactive cursor effect */}
            <div
                className="pointer-events-none fixed w-64 h-64 rounded-full bg-purple-500/10 blur-3xl z-0 transition-all duration-300 ease-out"
                style={{
                    left: `${cursorPos.x - 128}px`,
                    top: `${cursorPos.y - 128}px`,
                    opacity: isHovering ? 0.3 : 0.1,
                    transform: isHovering ? 'scale(1.5)' : 'scale(1)',
                }}
                data-oid="w5wj_x4"
            ></div>

            <div className="relative z-10" data-oid=":2c8yk0">
                <nav
                    className="flex justify-between items-center py-8 px-6 md:px-12 lg:px-24"
                    data-oid="en4lryw"
                >
                    <div className="flex items-center" data-oid="8yxkgsx">
                        <span className="text-2xl font-bold tracking-tighter" data-oid="f5q01yp">
                            taste.fun
                        </span>
                        <span
                            className="ml-2 text-xs text-purple-400 uppercase tracking-widest"
                            data-oid=":kh3m9r"
                        >
                            beta
                        </span>
                    </div>
                    <button
                        className="px-4 py-2 border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 rounded-none"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        data-oid="_mjcs.g"
                    >
                        Join Waitlist
                    </button>
                </nav>

                <main className="px-6 md:px-12 lg:px-24 py-16 md:py-24" data-oid="_bd6f43">
                    {/* Hero Section */}
                    <section
                        className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-8"
                        data-oid="bl.21b5"
                    >
                        <div className="md:col-span-7 md:col-start-2" data-oid="9k5.gaq">
                            <h1
                                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                                data-oid="ffy889a"
                            >
                                Scan. Bet. <br data-oid="fl1fuj:" />
                                <span className="text-purple-400" data-oid="77b8_.a">
                                    Expose the Truth.
                                </span>
                            </h1>
                            <p
                                className="text-xl md:text-2xl text-gray-400 mb-8"
                                data-oid="sc590eq"
                            >
                                The label speaks. We verify.
                            </p>
                            <div className="mb-12" data-oid=":1klhpv">
                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col sm:flex-row gap-4 max-w-md"
                                    data-oid="h6pi5uy"
                                >
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className="bg-gray-900/50 border border-gray-700 px-4 py-3 focus:outline-none focus:border-purple-500 flex-grow"
                                        required
                                        data-oid="sr66k1a"
                                    />

                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition-colors duration-300 text-white font-medium"
                                        onMouseEnter={() => setIsHovering(true)}
                                        onMouseLeave={() => setIsHovering(false)}
                                        data-oid="a8_27bd"
                                    >
                                        {submitted ? "You're In" : 'Join Waitlist'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>

                    {/* Mission Statement */}
                    <section className="mb-32 relative" data-oid="ohzlinc">
                        <div
                            className="absolute -left-24 top-0 w-16 h-16 border-t border-l border-purple-500/30"
                            data-oid="daw300g"
                        ></div>
                        <div className="max-w-4xl mx-auto" data-oid="_r.al9l">
                            <h2
                                className="text-3xl md:text-5xl font-bold mb-12 text-center"
                                data-oid="t07rezh"
                            >
                                Food labels lie. <br data-oid="2sg34h6" />
                                We built a game to prove it.
                            </h2>
                        </div>
                    </section>

                    {/* Explainer */}
                    <section
                        className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-12"
                        data-oid="sx.9-xd"
                    >
                        <div className="md:col-span-5 md:col-start-2" data-oid="f_0.8w2">
                            <h3
                                className="text-2xl font-bold mb-6 text-purple-400"
                                data-oid="ijnozhf"
                            >
                                How it works
                            </h3>
                            <p className="text-lg text-gray-300 mb-6" data-oid="cl2e-p.">
                                Scan any barcode. Create a market. Bet on the truth. It's that
                                simple.
                            </p>
                            <p className="text-lg text-gray-300" data-oid="s:6z4mi">
                                When companies make claims, we turn them into bets. When the truth
                                comes out, winners get paid.
                            </p>
                        </div>
                        <div className="md:col-span-5" data-oid=":ql717s">
                            <div
                                className="border border-gray-800 p-8 bg-gray-900/30 relative overflow-hidden group"
                                data-oid="ni74oeq"
                            >
                                <div
                                    className="absolute -right-12 -top-12 w-24 h-24 bg-purple-500/10 rounded-full group-hover:bg-purple-500/20 transition-all duration-500"
                                    data-oid="calj0k:"
                                ></div>
                                <h3 className="text-2xl font-bold mb-6" data-oid="hs8kv56">
                                    The game is simple
                                </h3>
                                <ul className="space-y-4" data-oid="ri9_g2l">
                                    <li className="flex items-start" data-oid="mf7tc6p">
                                        <span className="text-purple-400 mr-3" data-oid="lo1cvv2">
                                            01.
                                        </span>
                                        <span data-oid=".6920kb">Scan a product's barcode</span>
                                    </li>
                                    <li className="flex items-start" data-oid="ik28huh">
                                        <span className="text-purple-400 mr-3" data-oid="vicj3sh">
                                            02.
                                        </span>
                                        <span data-oid="3jpg5eu">
                                            Bet on or against label claims
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="ujq0jav">
                                        <span className="text-purple-400 mr-3" data-oid="d4r9uzd">
                                            03.
                                        </span>
                                        <span data-oid="6bntmbx">
                                            Win when the truth is revealed
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials/Quips */}
                    <section className="mb-32" data-oid="iwr:nnc">
                        <div
                            className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
                            data-oid="6wl4wp:"
                        >
                            <div className="border-t border-gray-800 pt-6" data-oid="o:velvu">
                                <p className="text-lg mb-4" data-oid="m:0dk9m">
                                    "Finally, a way to call BS on 'all-natural' claims without a law
                                    degree."
                                </p>
                                <p className="text-sm text-gray-500" data-oid="gf0yl9c">
                                    — Skeptical shopper
                                </p>
                            </div>
                            <div className="border-t border-gray-800 pt-6" data-oid="zu2ex3p">
                                <p className="text-lg mb-4" data-oid="txb8s2s">
                                    "Made $200 betting against 'sustainably sourced' palm oil. Truth
                                    pays."
                                </p>
                                <p className="text-sm text-gray-500" data-oid="qq0pw_l">
                                    — Environmental activist
                                </p>
                            </div>
                            <div className="border-t border-gray-800 pt-6" data-oid="x4m.e-c">
                                <p className="text-lg mb-4" data-oid="b7waehk">
                                    "Our marketing team is terrified of this app. Good."
                                </p>
                                <p className="text-sm text-gray-500" data-oid="0t.ms0m">
                                    — Anonymous CPG executive
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Social Element */}
                    <section className="mb-32 relative" data-oid=".a7m52:">
                        <div
                            className="absolute -right-24 top-1/2 w-16 h-16 border-b border-r border-purple-500/30"
                            data-oid="wn94thx"
                        ></div>
                        <div className="max-w-3xl mx-auto text-center" data-oid="49s3a8i">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8" data-oid="owz-.yv">
                                It's not just verification. It's a movement.
                            </h2>
                            <p className="text-xl text-gray-300 mb-6" data-oid="q9xh-0t">
                                Share your wins. Expose corporate lies. Build a reputation as a
                                truth-seeker.
                            </p>
                            <p className="text-xl text-gray-300" data-oid="rmuem9-">
                                The more we play, the more companies have to tell the truth.
                            </p>
                        </div>
                    </section>

                    {/* Closing CTA */}
                    <section className="mb-16" data-oid="cmx0.b2">
                        <div className="max-w-4xl mx-auto text-center" data-oid="npc0czh">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8" data-oid="7cr6s1a">
                                Ready to play with truth?
                            </h2>
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
                                data-oid="173qmi_"
                            >
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="bg-gray-900/50 border border-gray-700 px-4 py-3 focus:outline-none focus:border-purple-500 flex-grow"
                                    required
                                    data-oid="qd0uueq"
                                />

                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition-colors duration-300 text-white font-medium"
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                    data-oid="xuoupr6"
                                >
                                    {submitted ? "You're In" : 'Join Waitlist'}
                                </button>
                            </form>
                        </div>
                    </section>
                </main>

                <footer
                    className="px-6 md:px-12 lg:px-24 py-12 border-t border-gray-800"
                    data-oid="s105qvr"
                >
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="nux8z4k"
                    >
                        <div className="mb-6 md:mb-0" data-oid="yh:im:q">
                            <span className="text-xl font-bold tracking-tighter" data-oid="6.3ugqt">
                                taste.fun
                            </span>
                            <span className="ml-2 text-xs text-purple-400" data-oid=":pcln-g">
                                © 2023
                            </span>
                        </div>
                        <div className="text-gray-500 text-sm" data-oid="my0j5:v">
                            Not affiliated with any food corporation.{' '}
                            <br className="md:hidden" data-oid="rdpvuq5" />
                            That's kind of the point.
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
