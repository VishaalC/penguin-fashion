import shoe from '../../assets/shoe.png'
import styles from './Card.module.css'
import shoppingCart from '../../assets/shoppingCart.png'

export const Card = () => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <img src={shoe} alt="" className={styles.shoeImage} />
        </div>

        <div className={styles.cardMain}>
          <h3>Nike Shoe</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className={styles.cardAside}>
          <h3>$234</h3>
          <div className={styles.button}>
            <img src={shoppingCart} alt="" className={styles.shoppingCart} />
            <p>BUY NOW</p>
          </div>
        </div>
      </div>
    </>
  )
}
