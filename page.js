'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const galleryImages = [
    '/auto.png',
    '/AUTO1.png',
    '/AUTO2.png',
    '/AUTO3.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <div className={styles.bannerWrapper}>
          <img src="/banner.png" alt="Banner" className={styles.bannerImage} />
          <div className={styles.bannerOverlay}></div>
          <div className={styles.headerText}>
            <h1>AUTOCUT</h1>
            <p>PRECISION CUTTING</p>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.infoCard}>
          <div className={styles.imageSection}>
            <button className={styles.arrow} onClick={handlePrev}>&lt;</button>
            <img src={galleryImages[currentIndex]} alt="AutoCut Machine" className={styles.galleryImage} />
            <button className={styles.arrow} onClick={handleNext}>&gt;</button>
          </div>
          <div className={styles.textSection}>
            <h2>AutoCut Precision Cutting</h2>
            <p>
              The AutoCut is a high-precision automatic cutting machine designed for metallographic and
              materialographic sample preparation. It features motorized XYZ motions and automatic serial
              cutting for efficient and accurate sectioning.
            </p>
            <h3>AutoCut Key Benefits</h3>
            <ul>
              <li>Motorized XYZ motions for precise positioning</li>
              <li>Automatic serial cutting for high throughput</li>
              <li>T‑slotted bed with swiveling option for flexible setups</li>
              <li>Laser marking for accurate cut alignment</li>
              <li>Smart cutting feed for optimized performance</li>
              <li>Variable speed control (200 to 4000 rpm)</li>
            </ul>
          </div>
        </section>

        <section className={styles.bottomGrid}>
          <div className={styles.featureBox}>
            <h2>Additional Features</h2>
            <ul>
              <li>Compact design for efficient use of lab space</li>
              <li>User-friendly interface with programmable settings</li>
              <li>Robust construction for long-term durability</li>
            </ul>
          </div>

          <div className={styles.accessoryBox}>
            <h2>Consumables & Accessories</h2>
            <div className={styles.productRow}>
              <div className={styles.productCard}>
                <img src="/cutting-wheel.png" alt="Cutting Wheel" />
                <h3>Cutting Wheels</h3>
                <p>250mm and 300mm abrasive wheels</p>
                <button>View Details</button>
              </div>
              <div className={styles.productCard}>
                <img src="/cutting-fluid.png" alt="Cutting Fluid" />
                <h3>Cutting Fluid</h3>
                <p>For precision cutting</p>
                <button>View Details</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
