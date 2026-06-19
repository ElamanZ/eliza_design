'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import styles from './SafeImage.module.css';

type SafeImageProps = Omit<ImageProps, 'onError'>;

export default function SafeImage({ className, ...props }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`${styles.placeholder} ${className ?? ''}`} />;
  }

  return (
    <Image
      {...props}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
