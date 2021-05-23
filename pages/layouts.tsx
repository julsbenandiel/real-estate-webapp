import { FC } from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

interface LayoutProps {}

const Layout:FC<LayoutProps> = (props) => {

  const { children } = props;

  return (
    <section className="">
      <Head>
        <title>Property Wizard | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar /> */}
      
      <main className="mb-20">
        { children }
      </main>

      <Footer />
    </section>
  )
} 

export default Layout;