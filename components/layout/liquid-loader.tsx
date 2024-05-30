import Image from 'next/image';
import React from 'react';

import './liquid-loader.css';

export default function LiquidLoader() {
  return (
    <div className="liquidLoader relative z-50">
      <div className="liquidContainer relative w-[340px] h-[340px] flex justify-center items-center bg-black bg-opacity-20 dark:bg-opacity-30">
        { [0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
          <span key={ item } style={{ '--i': item } as React.CSSProperties} />
        )) }

        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-20 w-20 h-20 bg-white rounded-[50%]" />
      </div>

      <Image
        alt="ahmad-iqbal"
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        height={ 60 }
        src="/logo.svg"
        width={ 60 }
      />

      <svg>
        <filter id="Gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />

          <feColorMatrix
            values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 20 -10"
          />
        </filter>
      </svg>
    </div>
  );
}
