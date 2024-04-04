import React from "react";

const Spacer = ({ height, width }) => {
  const styles = {
    height: height || 0,
    width: width || 0,
  };

  return <div style={styles} />;
};

export default Spacer;
