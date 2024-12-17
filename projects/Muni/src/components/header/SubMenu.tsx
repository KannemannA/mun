import { useEffect, useRef, useState } from "react";

interface SubMenuProps {
  children: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = ({ children }) => {
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const intervalRef = useRef<number | null>(null);

  const checkOverflow = () => {
    if (menuRef.current) {
      const {scrollTop, scrollHeight, clientHeight} = menuRef.current;
      const viewportHeight = window.innerHeight - menuRef.current.getBoundingClientRect().top;
      menuRef.current.style.maxHeight = `${viewportHeight}px`;
      setShowDownArrow(scrollHeight > viewportHeight && Math.round(scrollTop + viewportHeight) < scrollHeight);
      setShowUpArrow(scrollTop > 0);
    }
  };

  useEffect(() => {
    if (menuRef.current) {
      checkOverflow();
      menuRef.current.addEventListener("scroll", checkOverflow)
    }
    window.addEventListener('resize', checkOverflow);
    
    return () => {
      window.removeEventListener('resize', checkOverflow);
      menuRef?.current.removeEventListener("scroll", checkOverflow)
    };
  }, []);

  const handleScroll = (direction: "up" | "down") => {
    if (!intervalRef.current) {
      intervalRef.current = window.setInterval(() => {
        if (menuRef.current) {
          const scrollAmount = direction === "down" ? 10 : -10;
          const { scrollTop, scrollHeight, clientHeight } = menuRef.current;
          if (
            (direction === "down" && scrollTop + clientHeight < scrollHeight) ||
            (direction === "up" && scrollTop > 0)
          ) {
            menuRef.current.scrollBy({
              top: scrollAmount,
              behavior: "smooth",
            });
          } else {
            handleMouseLeave();
          }
        }
      }, 20);
    }
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  return (
    <ul ref={menuRef} 
    className="absolute invisible group-hover:visible inset-x-0 text-black bg-white text-[13px] transition-all delay-[400ms]"
    style={{
      overflowY:"scroll",
      scrollbarWidth: "none",
      display: "block"
    }}
    >
      {showUpArrow && (
      <span
        className="sticky top-0 left-1/2 bg-white transform -translate-x-1/2 z-10 cursor-pointer"
        onMouseEnter={()=> handleScroll("up")}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fa-solid fa-caret-up fa-2xl text-gray-700"></i>
      </span>
      )}
      {children}
      {showDownArrow && (
      <span
        className="sticky bottom-0 left-1/2 transform -translate-x-1/2 z-10 bg-white cursor-pointer"
        onMouseEnter={()=> handleScroll("down")}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fa-solid fa-caret-down fa-2xl text-gray-700"></i>
      </span>
      )}
    </ul>
  );
};

export default SubMenu;
