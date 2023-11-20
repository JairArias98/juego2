
import React from 'react';
import Image from 'next/image';
import styles from "./InputComponent.module.css"

const ImagenComponente = ({ src, alt, width, height }) => {
  return <Image className={styles.tamanioImagen} src={src} alt={alt} width={width} height={height} priority={true} />;
};

export default ImagenComponente;
