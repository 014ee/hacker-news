import { useState, useRef, useEffect } from "react";
import CommentItem from "components/Story/CommentItem";
import CommentItemSkeleton from "components/Story/CommentItem.Skeleton";

const LazyCommentItem = ({ index, id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const targetRef = useRef(null);
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionOberserver);
    targetRef.current && observerRef.current.observe(targetRef.current);
  }, []);

  const intersectionOberserver = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        setIsLoading(true);
      }
    });
  };
  return (
    <div ref={targetRef}>
      {isLoading ? (
        <CommentItem key={index} id={id} />
      ) : (
        <CommentItemSkeleton />
      )}
    </div>
  );
};

export default LazyCommentItem;
