import React from 'react';
import styles from './Logo.module.scss';

function Logo({ big, primary, secondary }) {
  return (
    <h1 className={big ? styles.big : styles.root}>
      <span style={{ color: primary }}>find</span>
      <span style={{ color: secondary }}>Us</span>
    </h1>
  );
}

export default Logo;
