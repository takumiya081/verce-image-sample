import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const url = 'https://stg.api-canbright.jp/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcEVJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9c9ef43c335599a95a31c9c6622b22a13498b2ff/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJOEFXa0NGQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--03ee8b17399b66acdffd6be7a7afd93843d52afa/XFohNixjoVBXlY1Os6jNfQgiJdYc6HeFkE8ucfvAo0WiAlfKr4edjW0xPiKgrdRVC0pVMglG7gJaOQedpWbufv1gDaJ56kR6A2xvBRtjPxHBmcBpls0CFywJPmyVdCmRQtv06EFpBxIo3mo4wy081HGgwurgtMOnvTStVXTXsI.png';
  return (
    <div className={styles.container}>
      <Image src={url} width="104" height="104" alt="" />
    </div>
  )
}

export default Home
