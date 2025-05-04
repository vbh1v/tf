'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TransparentPhoneScanner = () => {
    const [isScanning, setIsScanning] = useState(false);

    // Auto-start scanning animation every few seconds
    useEffect(() => {
        const scanInterval = setInterval(() => {
            setIsScanning(true);
            setTimeout(() => setIsScanning(false), 2000);
        }, 4000);

        return () => clearInterval(scanInterval);
    }, []);

    return (
        <div className="w-full max-w-3xl mx-auto my-12 relative" data-oid="bb-91nd">
            <div className="flex items-center justify-center" data-oid="__kt:p1" key="olk-oeca">
                {/* Product Items - Behind the phone */}

                {/* Phone Device */}
                <div className="relative" data-oid="3u2fuc1" key="olk-X_C5">
                    <div
                        className="border-2 border-green-400/50 rounded-[40px] relative flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm h-[590px] w-[351px]"
                        data-oid="3grp.89"
                    >
                        {/* Phone Header */}

                        {/* Phone Notch */}

                        <div
                            className="border border-green-400/40 rounded-lg flex flex-col items-center justify-center mt-12 mb-16 relative overflow-hidden h-[85px] w-[179px]"
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
                            className="text-center mt-8 mb-4"
                            data-oid="eh1.ux3"
                            key="olk-wzIa"
                        ></div>

                        {/* Home Button / Scanner */}

                        {/* Launch Market Button */}
                        <motion.button
                            className="absolute bottom-12 px-6 py-3 bg-green-600 text-white font-medium rounded-md border border-green-500 shadow-lg"
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
