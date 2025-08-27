import React, { memo, useCallback, useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: string
}

const ImageWithFallback =  memo((props: ImageWithFallbackProps) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);
  const handleError = useCallback(() => {
    setImgSrc(fallbackSrc);
  }, []);
  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={handleError}
    />
  );
}, (prevProps, nextProps) => {
  return false;
});

export default ImageWithFallback