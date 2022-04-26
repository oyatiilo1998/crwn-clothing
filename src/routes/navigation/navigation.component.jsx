import { Outlet } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div>
        <h1>navbar</h1>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
