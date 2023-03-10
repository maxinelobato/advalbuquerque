'use client';

export function VideoAdv() {
  return (
    <>
      <video
        width={600}
        height={300}
        src={'./video/video1.webm'}
        poster={'./img/capa.webp'}
        playsInline
        controls
      />
    </>
  );
}
