'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

// Types for our products
interface Product {
    id: string;
    name: string;
    type: 'protein-bar' | 'protein-chips' | 'diet-beverage';
    nutritionInfo: {
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
    };
    ingredients: string[];
}

export default function TransparentPhoneScanner() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeProduct, setActiveProduct] = useState<Product | null>(null);
    const [isScanning, setIsScanning] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Animation controls
    const phoneControls = useAnimation();
    const scannerControls = useAnimation();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    // Sample products data
    const products: Product[] = [
        {
            id: 'protein-bar-1',
            name: 'Ultra Protein Bar',
            type: 'protein-bar',
            nutritionInfo: {
                calories: 220,
                protein: 20,
                carbs: 25,
                fat: 8,
            },
            ingredients: ['Whey Protein Isolate', 'Almonds', 'Honey', 'Cocoa'],
        },
        {
            id: 'protein-chips-1',
            name: 'Protein Crisps',
            type: 'protein-chips',
            nutritionInfo: {
                calories: 140,
                protein: 15,
                carbs: 12,
                fat: 6,
            },
            ingredients: ['Pea Protein', 'Rice', 'Sunflower Oil', 'Sea Salt'],
        },
        {
            id: 'diet-beverage-1',
            name: 'Zero Calorie Cola',
            type: 'diet-beverage',
            nutritionInfo: {
                calories: 0,
                protein: 0,
                carbs: 0,
                fat: 0,
            },
            ingredients: ['Carbonated Water', 'Natural Flavors', 'Sweetener', 'Caffeine'],
        },
    ];

    // Transform values based on scroll
    const carouselRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const phoneScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
    const phoneOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    // Handle mouse movement for parallax effects
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const { clientX, clientY } = e;
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();

            // Calculate mouse position relative to container center
            const x = ((clientX - left) / width - 0.5) * 20; // -10 to 10 range
            const y = ((clientY - top) / height - 0.5) * 20;

            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Scanning animation sequence
    const startScanningSequence = async (product: Product) => {
        setIsScanning(true);
        setActiveProduct(product);

        // Pulse scanner light
        await scannerControls.start({
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
            transition: { duration: 1.5, ease: 'easeInOut' },
        });

        // Short delay to show results
        await new Promise((resolve) => setTimeout(resolve, 500));

        setIsScanning(false);
    };

    // Simulate scanning when a product passes behind the phone
    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * products.length);
            startScanningSequence(products[randomIndex]);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background gradient and particles */}
            <div className="absolute inset-0 bg-gradient-radial from-gray-900 to-black opacity-80"></div>
            <div className="absolute inset-0 bg-[url('/particles.png')] bg-repeat opacity-20"></div>

            {/* 3D Carousel of products */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
                style={{ rotate: carouselRotate }}
            >
                {products.map((product, index) => {
                    // Position products in a circle around the center
                    const angle = (index / products.length) * Math.PI * 2;
                    const radius = 300;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <motion.div
                            key={product.id}
                            className="absolute w-40 h-40 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                x: x,
                                y: y,
                                zIndex: activeProduct?.id === product.id ? 10 : 0,
                                filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.3))',
                            }}
                            animate={{
                                scale: activeProduct?.id === product.id ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="relative w-full h-full bg-gray-800/50 rounded-lg backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center">
                                <p className="text-cyan-400 font-medium text-center">
                                    {product.name}
                                </p>
                                {/* Product barcode */}
                                <div className="absolute bottom-2 w-16 h-8 bg-white/80 rounded-sm flex flex-col justify-center">
                                    <div className="flex space-x-[1px]">
                                        {Array.from({ length: 12 }).map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-[1px] h-6"
                                                style={{
                                                    backgroundColor: 'black',
                                                    height: `${Math.random() * 20 + 10}px`,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Central phone with transparent screen */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[560px]"
                style={{
                    scale: phoneScale,
                    opacity: phoneOpacity,
                    x: mousePosition.x,
                    y: mousePosition.y,
                }}
            >
                {/* Phone frame */}
                <div className="relative w-full h-full rounded-[40px] border-4 border-gray-700 bg-black/20 backdrop-blur-sm overflow-hidden">
                    {/* Phone notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>

                    {/* Transparent screen with UI elements */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        {/* Scanner UI */}
                        <div className="relative w-48 h-48 border-2 border-cyan-500/50 rounded-lg flex items-center justify-center">
                            {/* Scanner crosshairs */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>

                            {/* Scanner light effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-cyan-500/20 to-cyan-500/0"
                                animate={scannerControls}
                            ></motion.div>

                            {/* Barcode text */}
                            <div className="absolute -bottom-8 text-cyan-400 text-xs">
                                {isScanning ? 'SCANNING...' : 'READY TO SCAN'}
                            </div>
                        </div>

                        {/* Nutrition data visualization (appears when product is scanned) */}
                        {activeProduct && (
                            <motion.div
                                className="absolute bottom-20 w-full px-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isScanning ? 0 : 1, y: isScanning ? 20 : 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <h3 className="text-cyan-400 text-center text-lg font-medium mb-2">
                                    {activeProduct.name}
                                </h3>

                                {/* Nutrition bars */}
                                <div className="space-y-2">
                                    <div className="flex items-center text-xs">
                                        <span className="w-16 text-gray-300">Protein</span>
                                        <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-cyan-500"
                                                initial={{ width: 0 }}
                                                animate={{
                                                    width: `${(activeProduct.nutritionInfo.protein / 30) * 100}%`,
                                                }}
                                                transition={{ duration: 1, delay: 0.7 }}
                                            ></motion.div>
                                        </div>
                                        <span className="ml-2 text-cyan-400">
                                            {activeProduct.nutritionInfo.protein}g
                                        </span>
                                    </div>

                                    <div className="flex items-center text-xs">
                                        <span className="w-16 text-gray-300">Carbs</span>
                                        <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-blue-500"
                                                initial={{ width: 0 }}
                                                animate={{
                                                    width: `${(activeProduct.nutritionInfo.carbs / 50) * 100}%`,
                                                }}
                                                transition={{ duration: 1, delay: 0.8 }}
                                            ></motion.div>
                                        </div>
                                        <span className="ml-2 text-blue-400">
                                            {activeProduct.nutritionInfo.carbs}g
                                        </span>
                                    </div>

                                    <div className="flex items-center text-xs">
                                        <span className="w-16 text-gray-300">Fat</span>
                                        <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-purple-500"
                                                initial={{ width: 0 }}
                                                animate={{
                                                    width: `${(activeProduct.nutritionInfo.fat / 20) * 100}%`,
                                                }}
                                                transition={{ duration: 1, delay: 0.9 }}
                                            ></motion.div>
                                        </div>
                                        <span className="ml-2 text-purple-400">
                                            {activeProduct.nutritionInfo.fat}g
                                        </span>
                                    </div>
                                </div>

                                {/* Ingredients list */}
                                <div className="mt-4">
                                    <p className="text-gray-400 text-xs">Ingredients:</p>
                                    <p className="text-cyan-300 text-xs">
                                        {activeProduct.ingredients.join(', ')}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Phone home button/scanner */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center">
                        <motion.div
                            className="w-8 h-8 rounded-full bg-cyan-500/30"
                            animate={{
                                boxShadow: isScanning
                                    ? [
                                          '0 0 0px rgba(6, 182, 212, 0.5)',
                                          '0 0 20px rgba(6, 182, 212, 0.8)',
                                          '0 0 0px rgba(6, 182, 212, 0.5)',
                                      ]
                                    : '0 0 10px rgba(6, 182, 212, 0.3)',
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: isScanning ? Infinity : 0,
                                repeatType: 'loop',
                            }}
                        ></motion.div>
                    </div>

                    {/* Realistic hand holding the phone */}
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 opacity-70">
                        <div className="relative w-full h-full">
                            <div className="absolute bottom-20 right-20 w-16 h-40 bg-gradient-to-t from-gray-700 to-gray-800 rounded-full transform rotate-12"></div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Floating particles connecting products to phone */}
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 50 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-cyan-500/50"
                        initial={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.2,
                        }}
                        animate={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                    />
                ))}
            </div>

            {/* Instructional text */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                <p className="text-gray-400 text-sm">
                    Scroll to rotate products | Move mouse to adjust view
                </p>
            </div>
        </div>
    );
}
