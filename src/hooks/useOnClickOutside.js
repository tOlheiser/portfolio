import {useEffect} from 'react';

/*  Purpose: Close the burger menu when user clicks outside of it.
    When a user clicks, we need to check whether the clicked element is our current element (in this case, the div element that wraps the burger and menu components). If so, do nothing. Otherwise, call a function.*/

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};

export default useOnClickOutside;