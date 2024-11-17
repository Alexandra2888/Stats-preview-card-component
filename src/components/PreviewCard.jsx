import { motion } from "framer-motion";
import StatItem from "./StatItem";

const PreviewCard = () => {
    const stats = [
        { value: '10k+', label: 'Companies' },
        { value: '314', label: 'Templates' },
        { value: '12M+', label: 'Queries' }
    ];

    // Animation variants for container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    // Animation variants for children
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    // Image animation variants
    const imageVariants = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    return (
        <main className="min-h-screen bg-primary-background p-6 grid place-items-center">
            <motion.section
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-6xl w-full overflow-hidden rounded-lg bg-primary-card"
            >
                <div className="flex flex-col md:flex-row-reverse">
                    {/* Image Container */}
                    <motion.div
                        variants={imageVariants}
                        className="relative w-full md:w-1/2 h-72 md:h-auto"
                    >
                        <div className="absolute inset-0 bg-[#AB5CDB] mix-blend-multiply" />
                        <picture>
                            <source
                                media="(min-width: 768px)"
                                srcSet="/images/image-header-desktop.jpg"
                            />
                            <img
                                src="/images/image-header-mobile.jpg"
                                alt="Business analytics"
                                className="w-full h-full object-cover"
                            />
                        </picture>
                    </motion.div>

                    {/* Content Container */}
                    <div className="w-full md:w-1/2 p-8 md:p-16 text-center md:text-left">
                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl md:text-4xl font-bold text-neutral-white mb-6"
                        >
                            Get <span className="text-primary-accent">insights</span> that help
                            your business grow.
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-white/75 mb-12 text-sm md:text-base leading-6 max-w-prose"
                        >
                            Discover the benefits of data analytics and make better decisions
                            regarding revenue, customer experience, and overall efficiency.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col md:flex-row gap-8 md:gap-12"
                        >
                            {stats.map((stat, index) => (
                                <StatItem key={index} {...stat} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </main>
    );
};

export default PreviewCard;
