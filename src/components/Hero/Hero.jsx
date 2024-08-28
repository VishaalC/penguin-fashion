import HeroImage from '../../assets/heroimage.png'
import styles from './Hero.module.css'
import niketext from '../../assets/niketext.png'
import shoppingCart from '../../assets/shoppingCart.png'

export const Hero = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroImageContainer}>
          <img src={HeroImage} alt="hero-img" className={styles.heroImage} />
        </div>

        <div className={styles.asideText}>
          <img src={niketext} className={styles.textImage}></img>
          <p className={styles.asideMinorText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className={styles.button}>
            <img src={shoppingCart} alt="" className={styles.shoppingCart} />
            <p>BUY NOW</p>
          </div>
        </div>
      </div>
    </>
  )
}
