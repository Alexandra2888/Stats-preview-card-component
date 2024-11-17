import { motion } from "framer-motion";

const StatItem = ({ value, label }) => {
    const statVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            variants={statVariants}
            whileHover={{ scale: 1.05 }}
            className="text-center md:text-left"
        >
            <div className="text-2xl font-bold text-neutral-white mb-1">{value}</div>
            <div className="font-lexend text-xs uppercase text-white/60 tracking-wider">
                {label}
            </div>
        </motion.div>
    );
};

export default StatItem;