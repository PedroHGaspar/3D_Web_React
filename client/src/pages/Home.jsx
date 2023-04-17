import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'
import state from '../store'
import { CustomButton } from '../components';

import React from 'react'

const Home = () => {

    const snap = useSnapshot(state)

    return (
        <AnimatePresence>{/* enables the animation of components that have been removed from the tree.*/}
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img
                            src='./threejs.png'
                            alt='logo'
                            className="w-8 h-8 object-contain"
                        />
                    </motion.header>
                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">
                                LET'S <br className="xl:block hidden" /> DO IT!
                            </h1>
                        </motion.div>
                        <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                            <p className="max-w-md font-normal text-gray-600 text-base">
                                Create your inique and exclusive whirt with our new 3D customization tool.
                            </p>
                            <CustomButton
                                type="filled"
                                title="Customize It"
                                handleClick={() => state.intro = false}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home