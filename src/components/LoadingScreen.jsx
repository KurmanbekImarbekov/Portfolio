import { AnimatePresence, motion } from 'framer-motion'

export function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 bg-radial-grid opacity-90" />
          <motion.div
            className="relative h-32 w-32 rounded-full border border-white/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute inset-3 rounded-full border border-cyan-300/30 shadow-neon" />
            <div className="absolute -right-1 top-9 h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(56,189,248,.95)]" />
            <div className="absolute bottom-7 left-1 h-3 w-3 rounded-full bg-acid shadow-[0_0_24px_rgba(163,230,53,.75)]" />
          </motion.div>
          <motion.p
            className="relative mt-8 font-display text-sm uppercase tracking-[0.5em] text-white/70"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Kurmanbek
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
