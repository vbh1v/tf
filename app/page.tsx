'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TransparentPhoneScanner from '@/components/TransparentPhoneScanner';

export default function Page() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className="min-h-screen bg-black text-white font-mono relative overflow-hidden"
            data-oid="whiaz_5"
        >
            {/* Gradient background */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80 z-0"
                data-oid="3-yrhxm"
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
                data-oid="qpvt8h."
            ></div>

            <div className="relative z-10" data-oid="l.dc8df">
                <nav
                    className="flex justify-between items-center py-8 px-6 md:px-12 lg:px-24"
                    data-oid=":phkrjw"
                >
                    <div className="flex items-center" data-oid="ur:zr.f">
                        <span className="text-2xl font-bold tracking-tighter" data-oid="p:apw3j">
                            taste.fun
                        </span>
                        <span
                            className="ml-2 text-xs text-green-400 uppercase tracking-widest"
                            data-oid="tgy:h.l"
                        >
                            beta
                        </span>
                    </div>
                    <div
                        className="hidden sm:block"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        data-oid="eszi6-7"
                    ></div>
                </nav>

                <main className="px-6 md:px-12 lg:px-24 py-16 md:py-24" data-oid="rxx:fl6">
                    {/* Hero Section */}
                    <section
                        className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-8 relative"
                        data-oid="fuwzh76"
                    >
                        {/* Background product images */}
                        <div
                            className="absolute inset-0 overflow-hidden pointer-events-none"
                            style={{ zIndex: -1 }}
                            data-oid="43p:d.8"
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
                                data-oid="808t8ej"
                            >
                                {/* Product images floating in background */}

                                <motion.img
                                    className="absolute opacity-40 w-[149px] h-[262px]"
                                    src="/images/E3A69F0C-BC02-4430-A0EA-BF7566F61877.PNG"
                                    alt="Product 3"
                                    style={{ bottom: '15%', left: '25%' }}
                                    animate={{
                                        y: [0, 15, 0],
                                        rotate: [0, 8, 0],
                                        transition: {
                                            y: {
                                                duration: 9,
                                                repeat: Infinity,
                                                repeatType: 'reverse',
                                            },
                                            rotate: {
                                                duration: 11,
                                                repeat: Infinity,
                                                repeatType: 'reverse',
                                            },
                                        },
                                    }}
                                    data-oid="bm3:xsp"
                                />

                                <motion.img
                                    className="absolute opacity-30 w-[359px] h-[521px]"
                                    src="/images/7C25F01E-8DA3-447B-847B-08DDB06DAEF4.PNG"
                                    alt="Product 2"
                                    style={{ top: '30%', right: '5%' }}
                                    animate={{
                                        y: [0, 30, 0],
                                        rotate: [0, -3, 0],
                                        transition: {
                                            y: {
                                                duration: 12,
                                                repeat: Infinity,
                                                repeatType: 'reverse',
                                            },
                                            rotate: {
                                                duration: 15,
                                                repeat: Infinity,
                                                repeatType: 'reverse',
                                            },
                                        },
                                    }}
                                    data-oid="6p:jm4l"
                                />

                                <motion.img
                                    className="absolute opacity-40 h-[121px] w-[203px]"
                                    src="/images/BCAC8BC8-6BF1-4971-89A4-3F559F979759.PNG"
                                    alt="Product 1"
                                    style={{ top: '10%', left: '15%' }}
                                    animate={{
                                        y: [0, -20, 0],
                                        rotate: [0, 5, 0],
                                        transition: {
                                            y: {
                                                duration: 8,
                                                repeat: Infinity,
                                                repeatType: 'reverse',
                                            },
                                            rotate: {
                                                duration: 10,
                                                repeat: Infinity,
                                                repeatType: 'reverse',
                                            },
                                        },
                                    }}
                                    data-oid="ay6r851"
                                />
                            </motion.div>
                        </div>
                        <div className="md:col-span-6 md:col-start-2 px-2" data-oid="9hx05gm">
                            <h1
                                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                                data-oid="9fwyhki"
                            >
                                Scan. Bet. <br data-oid="j8fny9n" />
                                <span className="text-green-400" data-oid="1_7za.9">
                                    Expose the Truth.
                                </span>
                            </h1>
                            <p
                                className="text-xl md:text-2xl text-gray-400 mb-8"
                                data-oid="shhgyf-"
                            >
                                The label speaks. We verify.
                            </p>
                            <div className="mb-12" data-oid="0_5fugx">
                                <form
                                    className="launchlist-form flex flex-col sm:flex-row gap-4 max-w-full sm:max-w-md"
                                    action="https://getlaunchlist.com/s/nTWJuR"
                                    method="POST"
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                    data-oid="7zm-.bt"
                                >
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        className="bg-gray-900/50 border border-gray-700 px-4 py-3 focus:outline-none focus:border-green-500 flex-grow"
                                        required
                                        data-oid="n7geag6"
                                    />

                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-green-600 hover:bg-green-700 transition-colors duration-300 text-white font-medium"
                                        data-oid="h10eh:p"
                                    >
                                        Join Waitlist
                                    </button>
                                </form>
                            </div>

                            {/* Images moved to background */}
                        </div>

                        <div
                            className="md:col-span-4 flex items-center justify-center mt-8 md:mt-0"
                            data-oid="gat9dnj"
                        >
                            <div
                                className="transform hover:scale-105 transition-transform duration-500 hover:rotate-1"
                                data-oid="q82fq89"
                            >
                                <TransparentPhoneScanner data-oid="i9bpns-" />
                            </div>
                        </div>
                    </section>

                    {/* Mission Statement */}
                    <section className="mb-32 relative" data-oid="xh_gg23">
                        <div
                            className="absolute -left-24 top-0 w-16 h-16 border-t border-l border-green-500/30"
                            data-oid="1x-2e:v"
                        ></div>
                        <div className="max-w-4xl mx-auto" data-oid="on.y:xv">
                            <h2
                                className="text-3xl md:text-5xl font-bold mb-12 text-center"
                                data-oid="ka07e55"
                            >
                                Food labels lie. <br data-oid="1gat-iy" />
                                We built a game to prove it.
                            </h2>
                        </div>
                    </section>

                    {/* Explainer */}
                    <section className="mb-32 relative py-16" data-oid="q-qb8fr">
                        {/* Background decorative elements */}
                        <div
                            className="absolute inset-0 overflow-hidden pointer-events-none opacity-20"
                            data-oid="6wly.jm"
                        >
                            <div
                                className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-green-500/30 -translate-x-1/2 -translate-y-1/2"
                                data-oid="fxn4:.u"
                            ></div>
                            <div
                                className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-green-500/30 translate-x-1/2 translate-y-1/2"
                                data-oid="2g-epla"
                            ></div>
                            <motion.div
                                className="absolute top-1/4 right-1/4 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.1, 0.2, 0.1],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                data-oid="oi2egi2"
                            ></motion.div>
                        </div>

                        <div className="container mx-auto px-6" data-oid="8.p3ikb">
                            <div className="text-center mb-16" data-oid="f5zr3dn">
                                <h2
                                    className="text-3xl md:text-4xl font-bold mb-4 inline-block relative"
                                    data-oid="vvzyfh_"
                                >
                                    <span className="relative z-10" data-oid="g6ckmey">
                                        How It Works
                                    </span>
                                    <div
                                        className="absolute bottom-0 left-0 w-full h-1 bg-green-500/30"
                                        data-oid="uoiunxy"
                                    ></div>
                                </h2>
                                <p
                                    className="text-xl text-gray-400 max-w-2xl mx-auto"
                                    data-oid="i1oqgzf"
                                >
                                    A simple game with powerful consequences
                                </p>
                            </div>

                            <div
                                className="grid grid-cols-1 md:grid-cols-12 gap-12"
                                data-oid="1q5.5.:"
                            >
                                <div className="md:col-span-5 md:col-start-2" data-oid="ych0moz">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        data-oid="91qe:ka"
                                    >
                                        <h3
                                            className="text-2xl font-bold mb-6 text-green-400 flex items-center"
                                            data-oid="9x7mb_."
                                        >
                                            <div
                                                className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3"
                                                data-oid="1.wh2i9"
                                            >
                                                <span
                                                    className="text-green-400 text-sm"
                                                    data-oid="ndpluft"
                                                >
                                                    →
                                                </span>
                                            </div>
                                            The Concept
                                        </h3>
                                        <p
                                            className="text-lg text-gray-300 mb-6 pl-11"
                                            data-oid="gtcvo-q"
                                        >
                                            Scan any barcode. Create a market. Bet on the truth.
                                            It&apos;s that simple.
                                        </p>
                                        <p
                                            className="text-lg text-gray-300 pl-11"
                                            data-oid=":7:6eif"
                                        >
                                            When companies make claims, we turn them into bets. When
                                            the truth comes out, winners get paid.
                                        </p>
                                    </motion.div>
                                </div>
                                <div className="md:col-span-5" data-oid="xcv_qk-">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className="border border-gray-800 p-8 bg-gray-900/30 relative overflow-hidden group rounded-sm backdrop-blur-sm"
                                        whileHover={{
                                            boxShadow: '0 0 30px rgba(74, 222, 128, 0.1)',
                                            borderColor: 'rgba(74, 222, 128, 0.3)',
                                        }}
                                        data-oid="yja4i_f"
                                    >
                                        <div
                                            className="absolute -right-12 -top-12 w-32 h-32 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-all duration-500"
                                            data-oid="mf435tx"
                                        ></div>
                                        <h3
                                            className="text-2xl font-bold mb-8 relative"
                                            data-oid="69drcgm"
                                        >
                                            <span className="relative z-10" data-oid="4m3.1g4">
                                                The game is simple
                                            </span>
                                            <div
                                                className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"
                                                data-oid="4ocfjju"
                                            ></div>
                                        </h3>
                                        <ul className="space-y-6" data-oid="id3voop">
                                            <motion.li
                                                className="flex items-start group/item"
                                                whileHover={{ x: 5 }}
                                                transition={{ type: 'spring', stiffness: 300 }}
                                                data-oid="gpqbs5i"
                                            >
                                                <span
                                                    className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-400 mr-4 group-hover/item:bg-green-500/30 transition-colors duration-300"
                                                    data-oid="97apk1r"
                                                >
                                                    01
                                                </span>
                                                <span className="text-lg" data-oid="rsb500f">
                                                    Scan a product&apos;s barcode
                                                </span>
                                            </motion.li>
                                            <motion.li
                                                className="flex items-start group/item"
                                                whileHover={{ x: 5 }}
                                                transition={{ type: 'spring', stiffness: 300 }}
                                                data-oid="26fnlzn"
                                            >
                                                <span
                                                    className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-400 mr-4 group-hover/item:bg-green-500/30 transition-colors duration-300"
                                                    data-oid="toc0pso"
                                                >
                                                    02
                                                </span>
                                                <span className="text-lg" data-oid="8s07zqv">
                                                    Bet on or against label claims
                                                </span>
                                            </motion.li>
                                            <motion.li
                                                className="flex items-start group/item"
                                                whileHover={{ x: 5 }}
                                                transition={{ type: 'spring', stiffness: 300 }}
                                                data-oid="d352b17"
                                            >
                                                <span
                                                    className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-400 mr-4 group-hover/item:bg-green-500/30 transition-colors duration-300"
                                                    data-oid=":60724m"
                                                >
                                                    03
                                                </span>
                                                <span className="text-lg" data-oid="omt4hmw">
                                                    Win when the truth is revealed
                                                </span>
                                            </motion.li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Social Element */}
                    <section className="mb-32 relative py-20" data-oid="jzkoy1t">
                        {/* Background decorative elements */}
                        <div
                            className="absolute inset-0 overflow-hidden pointer-events-none"
                            data-oid="srg9we1"
                        >
                            <motion.div
                                className="absolute top-1/3 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-[100px]"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.1, 0.15, 0.1],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                data-oid="m6qyypz"
                            ></motion.div>
                            <motion.div
                                className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-[100px]"
                                animate={{
                                    scale: [1.2, 1, 1.2],
                                    opacity: [0.15, 0.1, 0.15],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 5,
                                }}
                                data-oid="8en.:12"
                            ></motion.div>
                            <div
                                className="absolute -right-24 top-1/2 w-16 h-16 border-b border-r border-green-500/30"
                                data-oid="99cwa1v"
                            ></div>
                        </div>

                        <div className="container mx-auto px-6" data-oid="z:6m0wg">
                            <motion.div
                                className="max-w-3xl mx-auto text-center relative z-10 backdrop-blur-sm py-10 px-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                data-oid="u-s1613"
                            >
                                <div
                                    className="mb-2 text-green-400 font-medium tracking-wider text-sm uppercase"
                                    data-oid="97zdpvd"
                                >
                                    The Vision
                                </div>
                                <h2
                                    className="text-3xl md:text-5xl font-bold mb-10 leading-tight relative inline-block"
                                    data-oid="sec4ac-"
                                >
                                    <span className="relative" data-oid="5-9qsqw">
                                        It&apos;s not just verification.
                                        <br className="hidden md:block" data-oid="_sm5l5_" />
                                        It&apos;s a movement.
                                        <div
                                            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500/30"
                                            data-oid="pd5.awt"
                                        ></div>
                                    </span>
                                </h2>

                                <div className="grid md:grid-cols-3 gap-8 mt-12" data-oid="mh8tm9f">
                                    <motion.div
                                        className="text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        data-oid="2z2jrgo"
                                    >
                                        <div
                                            className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center"
                                            data-oid="xllor4g"
                                        >
                                            <span
                                                className="text-green-400 text-xl"
                                                data-oid="gdwq_4x"
                                            >
                                                ↗
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3" data-oid="v3:q0k2">
                                            Share Your Wins
                                        </h3>
                                        <p
                                            className="text-gray-300 leading-relaxed"
                                            data-oid="hcn96to"
                                        >
                                            Celebrate victories when your predictions are proven
                                            right.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className="text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        data-oid="spga1lx"
                                    >
                                        <div
                                            className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center"
                                            data-oid="d:o-57r"
                                        >
                                            <span
                                                className="text-green-400 text-xl"
                                                data-oid=":qee2c1"
                                            >
                                                ⚠
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3" data-oid="k.cnfww">
                                            Expose Lies
                                        </h3>
                                        <p
                                            className="text-gray-300 leading-relaxed"
                                            data-oid="b919ain"
                                        >
                                            Bring corporate misinformation into the light.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className="text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                        data-oid="bx8qlsg"
                                    >
                                        <div
                                            className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center"
                                            data-oid="fo:2ex7"
                                        >
                                            <span
                                                className="text-green-400 text-xl"
                                                data-oid="d1w9hsk"
                                            >
                                                ★
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3" data-oid="kzdadbn">
                                            Build Reputation
                                        </h3>
                                        <p
                                            className="text-gray-300 leading-relaxed"
                                            data-oid="r05b-3c"
                                        >
                                            Become known as a trusted truth-seeker.
                                        </p>
                                    </motion.div>
                                </div>

                                <motion.p
                                    className="text-xl text-gray-300 mt-12 max-w-2xl mx-auto font-medium leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    data-oid="rsotmo2"
                                >
                                    The more we play, the less they can lie.
                                </motion.p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Closing CTA */}
                    <section className="mb-16" data-oid="fjqx.m0">
                        <div className="max-w-4xl mx-auto text-center" data-oid="6-x_24_">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8" data-oid="fv6_20k">
                                Ready to play with truth?
                            </h2>
                            <form
                                className="launchlist-form flex flex-col sm:flex-row justify-center gap-4 max-w-full sm:max-w-md mx-auto px-4 sm:px-0"
                                action="https://getlaunchlist.com/s/nTWJuR"
                                method="POST"
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                                data-oid="j7maemb"
                            >
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    className="bg-gray-900/50 border border-gray-700 px-4 py-3 focus:outline-none focus:border-green-500 flex-grow"
                                    required
                                    data-oid="g3v2got"
                                />

                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-green-600 hover:bg-green-700 transition-colors duration-300 text-white font-medium"
                                    data-oid="rca6s_6"
                                >
                                    Join Waitlist
                                </button>
                            </form>
                        </div>
                    </section>
                </main>

                <footer
                    className="px-6 md:px-12 lg:px-24 py-12 border-t border-gray-800"
                    data-oid="6u_jrt7"
                >
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid=":kx7qem"
                    >
                        <div className="mb-6 md:mb-0" data-oid="0yd:bod">
                            <span className="text-xl font-bold tracking-tighter" data-oid="b:yd2qo">
                                taste.fun
                            </span>
                            <span className="ml-2 text-xs text-green-400" data-oid="xpnyapq">
                                © 2025
                            </span>
                        </div>
                        <div className="text-gray-500 text-sm" data-oid="9hba:e7">
                            Not affiliated with any food corporation.{' '}
                            <br className="md:hidden" data-oid="ggfvqxx" />
                            That&apos;s kind of the point.
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
