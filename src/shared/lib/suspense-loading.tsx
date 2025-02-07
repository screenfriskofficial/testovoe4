import React, { Suspense } from "react";

const SuspenseLoading = <P extends object>(
  Component: React.ComponentType<P>,
): React.FC<P> => {
  return (props: P) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export { SuspenseLoading };
