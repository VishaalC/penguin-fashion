import image from '../../assets/penguin_fashion.png'
import styles from './Header.module.css'
import design from '../../assets/design.png'
import hamburger from '../../assets/hamburger.png'
import niketext from '../../assets/niketext.png'
export const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src={image} alt="logo" className={styles.image} />
        </div>
        <div className={styles.designContainer}>
          <img src={design} alt="checkered-box" className={styles.design} />
        </div>
        <div>
          <ul className={styles.linksContainer}>
            <li>Home</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <img src={hamburger} alt="hamburger" className={styles.hamburger} />
      </div>
    </>
  )
}
