import React from "react";
import { Button } from "reactstrap";

const Buttons = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-2 px-4 h-full text-lg gap-3">
      <Button color="primary" size="sm">
        Register
      </Button>
      <span>or</span>
      <Button color="primary" size="sm">
        Sign In
      </Button>
    </div>
  );
};

export default Buttons;
