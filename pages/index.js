import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/dist/client/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>People | Home</title>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text} >Et eiusmod voluptate in ullamco aliqua occaecat officia id esse quis ex velit aute.</p>
      <p className={styles.text} >Et eiusmod voluptate in ullamco aliqua occaecat officia id esse quis ex velit aute.</p>
      <Link href="/people">
        <a className={styles.btn}>See People</a>
      </Link>
    </div>
    </>
  )
}
