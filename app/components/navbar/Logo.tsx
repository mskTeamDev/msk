'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  const router = useRouter();
  return (
    <div className='flex flex-row items-center gap-2'>
      <Image
        className='cursor-pointer'
        src='/images/logo.png'
        width={64}
        height={64}
        alt='logo'
      />
      <span className='hidden md:block text-xl text-blue-800 cursor-pointer font-semibold'>
        MSK
      </span>
    </div>
  );
};
export default Logo;
