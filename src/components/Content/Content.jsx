import { Card } from '../Card/Card'
import styles from './Content.module.css'

export const Content = () => {
  return (
    <>
      <div className={styles.contentContainer}>
        <h2>Casual Shoes</h2>
        <div className={styles.cardContainer}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  )
}
