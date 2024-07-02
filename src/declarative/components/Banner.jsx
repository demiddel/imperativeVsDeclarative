import React, { useEffect, useRef } from "react";
import { Button } from "./Button";

const Banner = ({ closeHandler, isVisible }) => {
  const dialogRef = useRef(null);
  const showDialog = useRef(false);

  useEffect(() => {
    if (isVisible) {
      if (!showDialog.current) {
        dialogRef.current.showModal();
      }
      showDialog.current = true;
    } else {
      if (showDialog.current) {
        dialogRef.current.close();
      }
      showDialog.current = false;
    }
  }, [isVisible]);

  return (
    <dialog ref={dialogRef} onKeyUp={closeHandler} onCancel={closeHandler}>
      <h1>Welcome to the site!</h1>
      <p>Click the button to close the banner.</p>
      <Button onClick={closeHandler}>Close Banner</Button>
    </dialog>
  );
};

export { Banner };
