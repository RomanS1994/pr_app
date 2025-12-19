import React from "react";

if (__DEV__) {
  console.log("WDYR init");
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
