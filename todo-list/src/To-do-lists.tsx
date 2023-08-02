import React from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Todolists = (props: Todo) => {
  return (
    <div className="">
      <p className="ml-2 items-center mt-1.5">{props.text}</p>
    </div>
  );
};

export default Todolists;
