'use client'
import styles from "./page.module.css";
import sendPageViewEvent from './sendViewEvent'
import { engage } from '@/pages/api/engage'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      engage && sendPageViewEvent(engage, "abc");
    }
  }, []);
  return <main className={styles.main}>CDP</main>;
}
