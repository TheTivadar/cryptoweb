import Image from 'next/image';
import React from 'react';

// Define the props interface
interface CryptoImageIconProps {
  src: string;
}

const CryptoImageIcon = ({ src }: CryptoImageIconProps) => {
  switch (src) {
    case 'solana':
      return (
        <Image
          width={100}
          height={100}
          src="/solana.png"
          alt="Token Img"
          className="size-5 ml-2"
        />
      );
    case 'bsc':
      return (
        <Image
          width={100}
          height={100}
          src="/bnb.png"
          alt="Token Img"
          className="size-5 ml-2"
        />
      );
    case 'ethereum':
      return (
        <Image
          width={100}
          height={100}
          src="/eth.webp"
          alt="Token Img"
          className="size-5 ml-2"
        />
      );
    case 'pulsechain':
      return (
        <Image
          width={100}
          height={100}
          src="/pulsechain.png"
          alt="Token Img"
          className="size-5 ml-2"
        />
      );
    case 'base':
      return (
        <Image
          width={100}
          height={100}
          src="/base.png"
          alt="Token Img"
          className="size-5 ml-2"
        />
      );
    case 'flowevm':
      return (
        <Image
          width={100}
          height={100}
          src="/flow.png"
          alt="Token Img"
          className="size-5 ml-2"
        />
      );
    case 'orca':
      return (
        <Image
          width={100}
          height={100}
          src="/orca.png"
          alt="Token Img"
          className="size-5 ml-2"
        />
      );
    case 'raydium':
      return (
        <Image
          width={100}
          height={100}
          src="/raydium.png"
          alt="Token Img"
          className="size-5 ml-2"
        />
      );
    case 'meteora':
      return (
        <Image
          width={100}
          height={100}
          src="/meteora.png"
          alt="Token Img"
          className="size-5 ml-2"
        />
      );
    case 'kyo-finance':
      return (
        <Image
          width={100}
          height={100}
          src="/kyo-finance.png"
          alt="Token Img"
          className="size-5 ml-2"
        />
      );
    case 'sonex':
      return (
        <Image
          width={100}
          height={100}
          src="/sonex.png"
          alt="Token Img"
          className="size-5 ml-2"
        />
      );
    case 'sonefi':
      return (
        <Image
          width={100}
          height={100}
          src="/sonefi.png"
          alt="Token Img"
          className="size-5 ml-2"
        />
      );
    case 'uniswap':
      return (
        <Image
          width={100}
          height={100}
          src="/uniswap.png"
          alt="Token Img"
          className="size-5 ml-2"
        />
      );
    case 'stonfi':
      return (
        <Image
          width={100}
          height={100}
          src="/stonfi.png"
          alt="Token Img"
          className="size-5 ml-2"
        />
      );
    case 'pancakeswap':
      return (
        <Image
          width={100}
          height={100}
          src="/pancakeswap.png"
          alt="Token Img"
          className="size-5 ml-2"
        />
      );
    case 'punchswap':
      return (
        <Image
          width={100}
          height={100}
          src="/punchswap.webp"
          alt="Token Img"
          className="size-5 ml-2"
        />
      );
    default:
      return (
        <div className="size-5 border-2 rounded-md border-gray-800 ml-2 place-content-center">
          ?
        </div>
      );
  }
};

export default CryptoImageIcon;