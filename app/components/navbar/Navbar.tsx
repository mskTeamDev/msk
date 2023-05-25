'use client';

import Container from '../Container';
import Logo from './Logo';
import ServiceMenu from './ServiceMenu';
import UserMenu from './UserMenu';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className='w-full bg-white shadow-sm z-10'>
      <div className='py-4 border-b'>
        <Container>
          <div className='flex flex-row justify-between items-center'>
            <Logo />
            <ServiceMenu />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
