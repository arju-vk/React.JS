import React from "react";

const CompB = (props) => {
  let { greet, emp_Id } = props; //Object Destructuring
  return (
    <div>
      <h3>Component B</h3>
      <h3>{JSON.stringify(props)}</h3>
      <h4>{greet()}</h4>
      <h4>{emp_Id}</h4>
    </div>
  );
};
export default CompB;
