import React, { useState, useEffect } from "react";

const withDelay = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  delay: number
) => {
  return (props: P) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    }, [delay]);

    if (!visible) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withDelay;
