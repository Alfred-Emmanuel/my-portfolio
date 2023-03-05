import React from "react";

function ComingSoon(props) {
  return (
    <div style={{ position: "relative" }}>
      <div className="coming-soon">COMING SOON</div>
      {props.children}
    </div>
  );
}

export default ComingSoon;
