// withCustomProps.js 
import React from 'react'; 
const HOC = (WrappedComponent, customProps) => { 
  return (props) => { 
    return ( 
      <WrappedComponent {...props} {...customProps} /> 
    ); 
  }; 
}; 
export default HOC; 