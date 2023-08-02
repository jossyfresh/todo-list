import React from "react";

interface Props {
  add: (text: string) => void;
}

const Addtodo = (props: Props) => {
  const [text, setText] = React.useState<string>("");

  const submit = () => {
    setText("");
  };

  return (
    <div className="flex justify-between w-full">
      <input
        className="w-[80%] border border-black rounded-md h-9 p-2 focus:bg-none focus:outline-none"
        onChange={(e) => setText(e.target.value)}
        type={text}
      />
      <button
        className="w-[10%] rounded-md bg-green-600 text-white"
        onClick={() => {
          props.add(text);
          submit();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Addtodo;
