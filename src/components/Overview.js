import React from "react";

const Overview = (props) => {
    const { tasks } = props;
  
    return (
      <ol>
        {tasks.map((task) => {
          return <li key={task.id}>{task.text}</li>;
        })}
      </ol>
    );
};

export default Overview;