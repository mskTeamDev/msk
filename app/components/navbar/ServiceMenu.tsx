'use client';

import ServiceMenuItem from './ServiceMenuItem';

interface ServiceMenuProps {}

const ServiceMenu: React.FC<ServiceMenuProps> = ({}) => {
  return (
    <div className=' hidden md:flex flex-row gap-3 '>
      <ServiceMenuItem label='租房' onClick={() => {}} />
      <ServiceMenuItem label='找室友' onClick={() => {}} />
      <ServiceMenuItem label='活动' onClick={() => {}} />
    </div>
  );
};
export default ServiceMenu;
