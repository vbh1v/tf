'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProductMarqueeProps {
    direction?: 'left' | 'right';
    speed?: number;
}

const ProductMarquee: React.FC<ProductMarqueeProps> = ({ direction = 'left', speed = 40 }) => {
    const productImages = [
        {
            src: '/images/BCAC8BC8-6BF1-4971-89A4-3F559F979759.PNG',
            alt: 'Product 1',
            width: 180,
            height: 180,
        },
        {
            src: '/images/7C25F01E-8DA3-447B-847B-08DDB06DAEF4.PNG',
            alt: 'Product 2',
            width: 220,
            height: 220,
        },
        {
            src: '/images/E3A69F0C-BC02-4430-A0EA-BF7566F61877.PNG',
            alt: 'Product 3',
            width: 180,
            height: 180,
        },
    ];

    // Duplicate the products to create a seamless loop
    const allProducts = [...productImages, ...productImages, ...productImages];

    return (
        <div className="overflow-hidden w-full h-full absolute inset-0 pointer-events-none">
            <motion.div
                className="flex items-center gap-16 absolute"
                style={{
                    y: '50%',
                    translateY: '-50%',
                }}
                animate={{
                    x: direction === 'left' ? [0, -1500] : [-1500, 0],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: speed,
                        ease: 'linear',
                    },
                }}
            >
                {allProducts.map((product, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 relative"
                        style={{
                            width: product.width,
                            height: product.height,
                            opacity: 0.8,
                        }}
                    >
                        <Image
                            src={product.src}
                            alt={product.alt}
                            width={product.width}
                            height={product.height}
                            className="object-contain"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default ProductMarquee;
