import { motion } from 'framer-motion';

interface CountdownProps {
    timeLeft: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
}

export function Countdown({ timeLeft }: CountdownProps) {
    const fadeIn = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: .8, // Controls the fade-in duration
                ease: 'easeOut', // Easing function for smooth transition
                staggerChildren: 0.2, // Time between each label fading in
            },
        },
    };

    const fadeInChild = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.8, // Individual digit fade-in duration
                ease: 'easeOut',
            },
        },
    };

    if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        return null;
    }

    return (
        <motion.div
            className="grid grid-cols-4 min-h-[90vh] relative items-center justify-center"
            variants={fadeIn}
            initial="initial"
            animate="animate"
        >
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit, index) => (
                <motion.div
                    key={index}
                    className="text-center flex flex-col justify-center items-center"
                    variants={fadeInChild}
                >
                    <motion.span className="text-lg md:text-xl mb-4 md:mb-28">
                        {timeLeft[unit.toLowerCase() as keyof typeof timeLeft]}
                    </motion.span>
                    <motion.span className="text-xs md:text-base">{unit}</motion.span>
                </motion.div>
            ))}
        </motion.div>
    );
}
