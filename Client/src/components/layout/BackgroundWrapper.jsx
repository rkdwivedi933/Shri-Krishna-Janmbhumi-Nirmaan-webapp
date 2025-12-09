import { motion } from "framer-motion";

const BackgroundWrapper = ({ children }) => {
  const leaves = Array.from({ length: 14 });

  const LeafSVG = () => (
    <svg
      width="34"
      height="34"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-60"
    >
      <path
        d="M12 52C12 30 28 12 52 12C52 36 34 52 12 52Z"
        fill="rgba(0,255,120,0.35)"
      />
      <path
        d="M20 44C20 30 30 20 44 20"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className="relative w-full min-h-full overflow-hidden bg-[#cfc6ec]">
      {/* Floating Leaves */}
      {leaves.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: Math.random() * 0.4 + 0.8,
            rotate: Math.random() * 360,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 1,
            rotate: Math.random() * 360 + 360,
          }}
          transition={{
            duration: Math.random() * 12 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
          className="absolute pointer-events-none"
        >
          <LeafSVG />
        </motion.div>
      ))}

      {/* Page Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
// from-[#0a2f1a] via-[#061d0f] to-[#000000]
