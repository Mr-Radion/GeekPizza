import React from 'react';
import classNames from "classnames";

function Button ({children, outline, onClick, className}) {
  // console.log(props);
  return(
    <button 
    onClick={onClick}
    className={classNames('button', className, {
      'button--outline': outline,
    })}>{children}</button>
  );
}

export default Button;