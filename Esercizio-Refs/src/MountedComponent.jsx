import { StrictMode, useEffect, useRef } from "react";

function MountedComponent() {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Mounted for the first time!");
    } else {
      console.log("Mounted for the second time!");
    }
  });

  return (
    <>
      <p className="p1">This is a check for the mounted Component.</p>
      <p className="p2">Check the console to know if the Component has been mounted!</p>
    </>
  );
}

export default MountedComponent;
