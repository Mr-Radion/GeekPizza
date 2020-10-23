import React from 'react';
import classNames from "classnames";

function Button ({children, outline}) {
  // console.log(props);
  return(
    <button className={classNames('button', {
      'button--outline': outline,
    })}>{children}</button>
  );
}

export default Button;