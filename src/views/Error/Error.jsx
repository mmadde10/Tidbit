import React from "react";

import {
  RegularCard
} from "../../components";

function HandleError({ ...props }) {
    return (
      <RegularCard
        cardTitle={"ERROR!!"}
        cardSubtitle={"Created using Roboto Font Family"}
        content={
          <div>
              <h1>404</h1>
              <h1>Page Not Found</h1>
          </div>
        }
     />
  );
}

export default HandleError;