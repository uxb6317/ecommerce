import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-Spinner.style";

// isLoading, ...otherProps are parameters on WrappedComponent
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
