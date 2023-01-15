import { motion } from 'framer-motion'
import React from 'react'
import Popular from '../components/Popular'
import Veggie from '../components/Veggie'

function Home() {
    return (
        <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 1}}
            transition={{duration: 0.5}}
        >
            <Popular />
            <Veggie />
        </motion.div>
    )
}

export default Home