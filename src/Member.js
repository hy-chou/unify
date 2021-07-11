import React from 'react';

function Member(props) {
  return (
    <div className="member flex-item" onClick={props.onClick}>
      {props.value}
    </div>
  );
}

export default Member