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

    const handleClick = async () => {
    console.log("custom event sent")
    const eventData = {
      channel: "WEB",
      currency: "USD",
      pointOfSale: "ngc",
      language: "EN",
      page: "home"
    };
    engage && await engage.event("CLICKED_SECURITY", eventData);
};

    return (
    <main className={styles.main}>
      <h1>CDP DEMO</h1>
      <div className="my-4 subtitle">Lorem Ipsum</div>
      <div>Lorem ipsum dolor sit.</div>
    </main>
  );
}
