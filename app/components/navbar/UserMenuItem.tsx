'use client';

interface UserMenuItemProps {
  onClick: () => void;
  label: String;
}

const UserMenuItem: React.FC<UserMenuItemProps> = ({ label, onClick }) => {
  return (
    <div
      onClick={() => {}}
      className='px-4 py-3 hover:bg-neutral-100 transition font-light text-lg md:text-xl text-center'
    >
      {label}
    </div>
  );
};
export default UserMenuItem;
