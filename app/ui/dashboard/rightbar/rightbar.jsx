import React from 'react'
import styles from "./rightbar.module.css"
import Image from "next/image"
import { MdPlayCircle, MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt='' fill className={styles.bg} />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>Available Now</span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sint inventore sapiente tenetur quam delectus culpa ab dignissimos est officiis.</p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.texts}>
                    <span className={styles.notification}>Coming soon</span>
                    <h3 className={styles.title}>New server actions available, partial pre-rendering is coming up</h3>
                    <span className={styles.subtitle}>Boost your productivity</span>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sint inventore sapiente tenetur quam delectus culpa ab dignissimos est officiis.</p>
                    <button className={styles.button}>
                        <MdReadMore />
                        Watch
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rightbar