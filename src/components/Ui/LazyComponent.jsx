import React, { useRef, useEffect, useState } from "react";

const LazyComponent = ({ children }) => {
  const [isInView, setIsInView] = useState(false);
  const targetRef = useRef(null);

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        console.log(entry.target);
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, { threshold: 0 });

  useEffect(() => {
    observer.observe(targetRef.current);
  }, []);

  return (
    <div ref={targetRef}>{React.cloneElement(children, { isInView })}</div>
  );
};

export default LazyComponent;
