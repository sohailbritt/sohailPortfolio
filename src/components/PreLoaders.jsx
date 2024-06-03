import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function PreLoaders(props) {
  const {stats} = props;
  const color = '#4bffa5';

  return (
    <div style={{display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
       <PacmanLoader
        color={color}
        loading={stats}
        cssOverride={override}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>

  );
}

export default PreLoaders;