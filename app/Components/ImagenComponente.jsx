
import React from 'react';
import Image from 'next/image';


const ImagenComponente = ({ src, alt, width, height }) => {
  return <Image src={src} alt={alt} width={width} height={height} priority={true} />;
};

export default ImagenComponente;
