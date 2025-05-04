'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const TransparentPhoneScanner = () => {
    const [isScanning, setIsScanning] = useState(false);
    const [activeProductIndex, setActiveProductIndex] = useState(0);

    // Product images data
    const productImages = [
        {
            src: 'https://i.imgur.com/Ql4jRTk.png', // Red chips bag
            alt: 'BAYZ Chips',
            width: 180,
            height: 240,
        },
        {
            src: 'https://i.imgur.com/Ql4jRTk.png', // Protein bar
            alt: 'Protein Bar',
            width: 240,
            height: 120,
        },
        {
            src: 'https://i.imgur.com/Ql4jRTk.png', // Beverage can
            alt: 'STOIC Beverage',
            width: 140,
            height: 220,
        },
    ];

    // Auto-start scanning animation every few seconds
    useEffect(() => {
        const scanInterval = setInterval(() => {
            setIsScanning(true);
            // Change active product when scanning
            setActiveProductIndex((prev) => (prev + 1) % productImages.length);
            setTimeout(() => setIsScanning(false), 2000);
        }, 6000);

        return () => clearInterval(scanInterval);
    }, []);

    return (
        <div className="w-full max-w-3xl mx-auto my-12 relative" data-oid="bb-91nd">
            <div className="flex items-center justify-center" data-oid="__kt:p1" key="olk-oeca">
                {/* Product Items - Behind the phone */}
                <div
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ zIndex: -1 }}
                    data-oid="8k0cxu."
                >
                    {/* Animated product images that move right to left when not scanning */}
                    <motion.div
                        className="absolute w-full h-full"
                        animate={{
                            x: isScanning ? 0 : [0, -100, 0],
                            transition: {
                                x: {
                                    duration: 15,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    ease: 'linear',
                                    repeatDelay: 0,
                                },
                            },
                        }}
                        data-oid="t0buhrv"
                    >
                        {/* Chips bag */}
                        <motion.div
                            className="absolute"
                            style={{
                                top: '10%',
                                right: '15%',
                                opacity: 0.7,
                                filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.5))',
                            }}
                            animate={{
                                rotate: [-5, 5, -5],
                                y: [0, -10, 0],
                                transition: {
                                    duration: 8,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                },
                            }}
                            data-oid="lxqw9bz"
                        >
                            <Image
                                src="https://i.imgur.com/Ql4jRTk.png"
                                alt="BAYZ Chips"
                                width={180}
                                height={240}
                                className="object-contain"
                                data-oid="lwq39du"
                            />
                        </motion.div>

                        {/* Protein bar */}
                        <motion.div
                            className="absolute"
                            style={{
                                bottom: '25%',
                                left: '10%',
                                opacity: 0.7,
                                filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.5))',
                            }}
                            animate={{
                                rotate: [3, -3, 3],
                                y: [0, 15, 0],
                                transition: {
                                    duration: 10,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    delay: 2,
                                },
                            }}
                            data-oid="50zs--r"
                        >
                            <Image
                                src="https://i.imgur.com/Ql4jRTk.png"
                                alt="Protein Bar"
                                width={240}
                                height={120}
                                className="object-contain"
                                data-oid="_b26znl"
                            />
                        </motion.div>

                        {/* Beverage can */}
                        <motion.div
                            className="absolute"
                            style={{
                                top: '30%',
                                left: '25%',
                                opacity: 0.7,
                                filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.5))',
                            }}
                            animate={{
                                rotate: [-2, 2, -2],
                                y: [0, -5, 0],
                                transition: {
                                    duration: 6,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    delay: 1,
                                },
                            }}
                            data-oid="361n7ze"
                        >
                            <Image
                                src="https://i.imgur.com/Ql4jRTk.png"
                                alt="STOIC Beverage"
                                width={140}
                                height={220}
                                className="object-contain"
                                data-oid="_80nzpm"
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Phone Device */}
                <div className="relative" data-oid="3u2fuc1" key="olk-X_C5">
                    <div
                        className="border-2 border-green-400/50 rounded-[40px] relative flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm h-[590px] w-[351px] overflow-hidden"
                        data-oid="3grp.89"
                    >
                        {/* Background product images inside phone */}
                        <div
                            className="absolute inset-0 overflow-hidden"
                            style={{ zIndex: 0 }}
                            data-oid="kow_ky5"
                        >
                            <motion.div
                                className="absolute w-full h-full"
                                animate={{
                                    x: isScanning ? 0 : [-100, 0, -100],
                                    transition: {
                                        x: {
                                            duration: 20,
                                            repeat: Infinity,
                                            repeatType: 'loop',
                                            ease: 'linear',
                                            repeatDelay: 0,
                                        },
                                    },
                                }}
                                data-oid="oifnb7t"
                            >
                                {/* Current product being scanned */}
                                <AnimatePresence data-oid="xechmq_">
                                    {isScanning && (
                                        <motion.div
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 0.4, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            style={{
                                                filter: 'drop-shadow(0 0 10px rgba(74, 222, 128, 0.3))',
                                            }}
                                            data-oid="d84vu0b"
                                        >
                                            <Image
                                                src={productImages[activeProductIndex].src}
                                                alt={productImages[activeProductIndex].alt}
                                                width={
                                                    productImages[activeProductIndex].width * 0.8
                                                }
                                                height={
                                                    productImages[activeProductIndex].height * 0.8
                                                }
                                                className="object-contain"
                                                data-oid=":ho0qgs"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                        {/* Dynamic Island */}
                        <motion.div
                            className="w-[120px] h-[35px] bg-black rounded-full mt-2 mb-4 flex items-center justify-center relative overflow-hidden"
                            animate={{
                                width: isScanning ? 150 : 120,
                                transition: { duration: 0.3 },
                            }}
                            data-oid="dynamic-island"
                        >
                            {/* Camera dot */}
                            <div
                                className="w-2 h-2 rounded-full bg-gray-700 absolute right-4"
                                data-oid="k7d62d9"
                            ></div>

                            {/* Dynamic content */}
                            <AnimatePresence data-oid="kwyaw_2">
                                {isScanning && (
                                    <motion.div
                                        className="flex items-center space-x-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        data-oid="qj8hay1"
                                    >
                                        <div
                                            className="w-2 h-2 rounded-full bg-green-500 animate-pulse"
                                            data-oid=":g93354"
                                        ></div>
                                        <span
                                            className="text-[10px] text-green-400 font-mono"
                                            data-oid="4k0n4u2"
                                        >
                                            SCANNING
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Scanner in the middle */}
                        <div
                            className="border border-green-400/40 rounded-lg flex flex-col items-center justify-center relative overflow-hidden h-[85px] w-[179px] mt-[160px] mb-[160px]"
                            data-oid="u8b63vk"
                            key="olk-Qpea"
                        >
                            {/* Barcode lines */}

                            {/* Scanner light effect */}

                            <div
                                className="w-32 h-16 flex justify-center items-center"
                                data-oid="m369u8_"
                                key="olk--x76"
                            >
                                <div className="flex space-x-[2px]" data-oid="bj:kf41">
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-[1px] bg-green-400/80"
                                            style={{
                                                height: `${Math.max(8, Math.min(24, Math.random() * 24))}px`,
                                            }}
                                            data-oid="fr64zeo"
                                        />
                                    ))}
                                </div>
                            </div>
                            <AnimatePresence data-oid="1a45zq6">
                                {isScanning && (
                                    <motion.div
                                        className="absolute w-full h-4 bg-gradient-to-b from-green-400/0 via-green-400/60 to-green-400/0 pointer-events-none"
                                        initial={{ top: 0 }}
                                        animate={{ top: '100%' }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 2, ease: 'linear' }}
                                        data-oid="32nkuhz"
                                    />
                                )}
                            </AnimatePresence>

                            {/* Status text */}
                            <div
                                className="absolute bottom-2 text-xs text-green-400/80 font-mono"
                                data-oid="szfx39k"
                            >
                                {isScanning ? 'SCANNING...' : 'READY'}
                            </div>
                        </div>

                        {/* Barcode Scanner Area */}

                        {/* Screen Text */}
                        <div
                            className="text-center absolute bottom-[100px] w-full"
                            data-oid="eh1.ux3"
                            key="olk-wzIa"
                        >
                            <div className="text-sm text-green-400/80 font-mono" data-oid="yk745r7">
                                {isScanning ? 'Processing...' : 'Aim at barcode'}
                            </div>
                        </div>

                        {/* Home Button / Scanner */}

                        {/* Launch Market Button */}
                        <motion.button
                            className="absolute bottom-12 px-6 py-3 bg-green-600 text-white font-medium rounded-full border border-green-500 shadow-lg"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 15px rgba(74, 222, 128, 0.5)',
                            }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.3 },
                            }}
                            onClick={() => alert('Market launched!')}
                            data-oid="launch-market-btn"
                            key="olk-kdNc"
                        >
                            Launch Market
                        </motion.button>

                        {/* Scanner Label */}
                    </div>
                </div>
            </div>

            {/* Glow Effects */}

            <div
                className="absolute -z-10 w-32 h-32 bg-green-500/10 rounded-full blur-2xl top-1/3 left-1/3"
                data-oid="for.are"
                key="olk-0wep"
            ></div>
        </div>
    );
};
export default TransparentPhoneScanner;
