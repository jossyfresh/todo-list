import React, { useState } from "react";
import Addtodo from "./Add-to-do";
import Todolists from "./To-do-lists";
import Edittodo from "./Edit-todo";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [opened, setOpened] = useState<boolean>(false);

  const addTodo = (text: string) => {
    const newTodos = [...todos, { id: todos.length, text, completed: false }];
    setTodos(newTodos);
  };

  const edit = (id: number, text: string) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: text } : todo
    );
    setTodos(newTodos);
    setOpened(false);
  };

  const close = () => {
    setOpened(false);
  };

  return (
    <div className="ml-52 mt-10">
      <div className="bg-green-500 w-3/4 flex items-center self-center justify-center rounded-md text-3xl text-white">
        My To-do list
      </div>
      <div className="w-3/4 flex justify-center mt-4">
        <Addtodo add={addTodo} />
      </div>
      <div className="w-3/4 mt-3">
        {todos.map((todo) => (
          <div className="flex justify-between mb-4">
            {opened ? (
              <Edittodo
                opened={opened}
                edit={edit}
                close={close}
                id={todo.id}
                text={todo.text}
              />
            ) : null}
            <div className="border border-black w-[80%] rounded-md">
              <Todolists key={todo.id} {...todo} />
            </div>
            <div className="flex w-[10%] gap-6  justify-center items-center mt-1">
              <div className="">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => {
                    setTodos(
                      todos.map((t) =>
                        t.id === todo.id ? { ...t, completed: !t.completed } : t
                      )
                    );
                  }}
                  className="w-7 h-7 justify-center items-center text-xl text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="">
                <button
                  onClick={() => {
                    setTodos(todos.filter((t) => t.id !== todo.id));
                  }}
                >
                  <svg
                    className="w-7 h-7 shrink-0 justify-center items-center"
                    viewBox="0 -0.5 21 21"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>delete [#1487]</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-179.000000, -360.000000)"
                        fill="#FF0000"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z"
                            id="delete-[#1487]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => {
                    setOpened(true);
                  }}
                >
                  <svg
                    className="w-7 h-8 shrink-0 justify-center items-center"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
