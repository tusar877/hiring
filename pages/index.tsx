import { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  useEffect(() => {
    window.location.href = 'https://902acmr5onu7un0gx7k5ui61vt.hop.clickbank.net';
  }, []);

  return null;
};

export default Home;
