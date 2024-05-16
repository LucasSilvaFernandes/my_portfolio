import { useState, useEffect } from "react";
import { HiChevronDoubleUp } from "react-icons/hi";
import "./styles.css";
import { Link } from "react-scroll";

export const ScrollToTop = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollToTop && (
        <Link
          to="#"
          smooth="true"
          duration={500}
          className="scroll__to__top"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToTop();
          }}
        >
          <HiChevronDoubleUp />
        </Link>
      )}
    </div>
  );
};
