import Link from 'next/link';

const CustomButton = ({ title, bgcolor = false, link, color, bg = true, icon = true, Icon}) => {
  // Hide the button completely if icon is false and the screen is small


  return (
    <Link
      href={link}
      className={`sm:px-2 py-2 ${!icon?'hidden md:block':'lg:block'} rounded-xl transition duration-300 ease-in-out hover:opacity-80 flex items-center justify-center`}
      style={bg ? { backgroundColor: bgcolor, color: color } : { color: color }}
    >
      {/* Text for larger screens */}
      <span className="hidden sm:block">{title}</span>

      {/* Icon for smaller screens */}
      {icon && <span className="block sm:hidden">{Icon}</span>}
    </Link>
  );
};

export default CustomButton;
