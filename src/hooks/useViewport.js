import { useState, useEffect } from 'react';

// 
const useViewport = () => {
  // Declare the viewport width, and a method to update its state.
  const [viewportWidth, setWidth] = useState(window.innerWidth);

  // useEffect hook listens for changes in the width of the window
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    // When the window resizes, update the viewportWidth's state.
    window.addEventListener("resize", handleWindowResize);
    // returns a function from the effect that removes the event listener, freeing up memory when the component unmounts 
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  // Passing an empty array as the dependencies of the effect causes the effect only to run when the component mounts -> NOT each time it updates 

  return { viewportWidth };
}

export default useViewport;