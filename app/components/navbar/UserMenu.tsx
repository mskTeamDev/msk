'use client';

import { useCallback, useState } from 'react';
import UserMenuItem from './UserMenuItem';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

interface UserMenuProps {}

const UserMenu: React.FC<UserMenuProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className='relative'>
      <div
        onClick={toggleOpen}
        className='flex flex-row gap-2 justify-center items-center p-4 md:py-1 md:px-3 border border-neutral-200 rounded-full cursor-pointer hover:shadow-md transition'
      >
        <AiOutlineMenu size={24} />
        <FaUserCircle size={30} />
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-20 bg-white overflow-hidden right-0 top-15 md:top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <>
              <UserMenuItem label='登陆' onClick={() => {}} />
              <UserMenuItem label='注册' onClick={() => {}} />
            </>
          </div>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
