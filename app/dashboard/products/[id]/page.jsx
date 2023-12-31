import React from 'react'
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image"

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src="/noavatar.png" alt='' fill />
                </div>
                Iphone
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type="text" name='title' placeholder='John doe' />
                    <label>Price</label>
                    <input type="number" name='email' placeholder='Johndoe@email.com' />
                    <label>Stock</label>
                    <input type="number" name='stock' placeholder='23' />
                    <label>Color</label>
                    <input type="number" name='color' placeholder='red' />
                    <label>Size</label>
                    <textarea type="text" name='size' placeholder='6' />
                    <label>IsAdmin?</label>
                    <select name="isadmin" id="isadmin">
                        <option value="Kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea name="desc" id="desc" cols="30" rows="10" placeholder='desctiption'></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>

    )
}

export default SingleProductPage