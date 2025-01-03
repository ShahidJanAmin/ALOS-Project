import { FaBars, FaTimes } from "react-icons/fa"; // We will use these icons from react-icons

const ToggleButton = ({ onClick , isOpen}) => {

  
  
    return (
      <button
        onClick={onClick}
        className="p-3 text-2xl text-black z-20 focus:outline-none duration-300 transition-all"
      >
        {isOpen ? <FaTimes /> : <FaBars />} {/* Show different icons based on state */}
      </button>
    );
  };
  
  export default ToggleButton