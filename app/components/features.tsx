'use client'
import { motion } from "framer-motion";
import { Brain, Layers, Sparkles, Zap } from 'lucide-react'
import React from 'react'

export default function Features() {
    const features = [
        {
            icon: <Sparkles size={36} className="text-yellow-500" />,
            title: 'Autonomous Decision-Making',
            description: 'Our AI adapts, learns, and makes real-time decisions with precision.'
        },
        {
            icon: <Brain size={36} className="text-blue-500" />,
            title: 'Deep Learning',
            description: 'Our AI adapts, learns, and makes real-time decisions with precision.'
        },
        {
            icon: <Layers size={36} className="text-green-500" />,
            title: 'Multi-layer processing',
            description: 'Our AI adapts, learns, and makes real-time decisions with precision.'
        },
        {
            icon: <Zap size={36} className="text-red-500"  />,
            title: 'High speed excecution',
            description: 'Our AI adapts, learns, and makes real-time decisions with precision.'
        }
    ]
    return (
        <section className=' w-full py-20 bg-[#1e9496] text-white'>
                <div className='max-w-[1280px] mx-auto px-6 lg:px-12 text-center '>
                    <motion.h2 className="text-4xl  md:text-5xl font-bold bg-[#122323] text-transparent bg-clip-text"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        The Future of AI Autonomy
                    </motion.h2>

                    <p className="mt-4 text-lg text-gray-900">
                        Agentic Ai that thinks, adapts, and colloborates-design for the next era of Automation.
                    </p>
                    <div className="mt-12 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-3     ">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 mt-6"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.2, delay: index * 2 }}
                            >
                                <div className="flex items-center justify-center text-blue-400 mb-4 ">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-[#131e1f]">{feature.title}</h3>
                                <p className=" text-gray-900 mb-2">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>

            </div>      

        </section>
    )
}
