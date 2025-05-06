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
        <div className="w-full max-w-3xl mx-auto my-12 relative">
            <div className="flex items-center justify-center">
                {/* Product Items - Behind the phone */}

                {/* Phone Device */}
                <div className="relative">
                    <div className="border-2 border-green-400/50 rounded-[40px] relative flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm h-[590px] w-[290px] sm:w-[320px] md:w-[351px] transform scale-[0.85] sm:scale-90 md:scale-100">
                        {/* Dynamic Island */}
                        <motion.div
                            className="w-[120px] h-[35px] bg-black rounded-full mt-2 mb-4 flex items-center justify-center relative overflow-hidden"
                            animate={{
                                width: isScanning ? 150 : 120,
                                transition: { duration: 0.3 },
                            }}
                        >
                            {/* Camera dot */}
                            <div className="w-2 h-2 rounded-full bg-gray-700 absolute right-4"></div>

                            {/* Dynamic content */}
                            <AnimatePresence>
                                {isScanning && (
                                    <motion.div
                                        className="flex items-center space-x-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-[10px] text-green-400 font-mono">
                                            SCANNING
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Scanner in the middle */}
                        <div className="border border-green-400/40 rounded-lg flex flex-col items-center justify-center relative overflow-hidden h-[85px] w-[179px] mt-[160px] mb-[160px]">
                            {/* Barcode lines */}

                            {/* Scanner light effect */}

                            <div className="w-32 h-16 flex justify-center items-center">
                                <div className="flex space-x-[2px]">
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-[1px] bg-green-400/80"
                                            style={{
                                                height: `${Math.max(8, Math.min(24, Math.random() * 24))}px`,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <AnimatePresence>
                                {isScanning && (
                                    <motion.div
                                        className="absolute w-full h-4 bg-gradient-to-b from-green-400/0 via-green-400/60 to-green-400/0 pointer-events-none"
                                        initial={{ top: 0 }}
                                        animate={{ top: '100%' }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 2, ease: 'linear' }}
                                    />
                                )}
                            </AnimatePresence>

                            {/* Status text */}
                            <div className="absolute bottom-2 text-xs text-green-400/80 font-mono">
                                {isScanning ? 'SCANNING...' : 'READY'}
                            </div>
                        </div>

                        {/* Barcode Scanner Area */}

                        {/* Screen Text */}
                        <div className="text-center absolute bottom-[100px] w-full">
                            <div className="text-sm text-green-400/80 font-mono">
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
                        >
                            Launch Market
                        </motion.button>

                        {/* Scanner Label */}
                    </div>
                </div>
            </div>

            {/* Glow Effects */}
        </div>
    );
};
export default TransparentPhoneScanner;
