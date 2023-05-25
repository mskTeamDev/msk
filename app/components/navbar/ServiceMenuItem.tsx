'use client';

interface ServiceMenuItemProps {
  label: String;
  onClick: () => void;
}

const ServiceMenuItem: React.FC<ServiceMenuItemProps> = ({
  label,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className='font-light text-xl px-4 py-3 hover:text-blue-800 hover:font-semibold transition cursor-pointer'
    >
      {label}
    </div>
  );
};
export default ServiceMenuItem;
