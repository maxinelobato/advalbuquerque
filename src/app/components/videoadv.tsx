'use client';

import styles from './videoadv.module.css';

export function VideoAdv() {
  return (
    <>
      <video src={'./video/video1.mp4'} poster={'./img/capa.jpg'} autoPlay controls />
    </>
  );
}
