import React from "react";

function Member(props) {
  const d0 = props.style < 0.5 ? "0" : "#";
  const d1 = props.style < 0.5 ? "1" : "-";

  return (
    <div className="member item" onClick={props.onClick}>
      {props.value ? d1 : d0}
    </div>
  );
}

export default Member;
