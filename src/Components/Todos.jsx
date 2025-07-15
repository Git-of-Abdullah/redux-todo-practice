import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveTodo, UpdateTodo } from '../features/TodoSlice';

export const Todos = () => {
  const todos = useSelector((state) => state.TodoSlice.todos);
  const dispatch = useDispatch();

  
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  return (
    <>
      {todos.map((todo) => {
        const isEditing = editId === todo.id;

        return (
          <div
            key={todo.id}
            className="w-full bg-black/80 mt-2 py-[7px] px-[5px] rounded flex items-center justify-between"
          >
            {isEditing ? (
              <input
                type="text"
                className="px-3 py-2 text-white rounded w-[70%]"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <li className="px-[15px] text-white py-[7px] text-base font-semibold list-none w-[70%]">
                {todo.text}
              </li>
            )}

            <div className="flex gap-2">
              {isEditing ? (
                <button
                  onClick={() => {
                    dispatch(UpdateTodo({ id: todo.id, text: editText }));
                    setEditId(null);
                  }}
                  className="px-3 py-1 text-white bg-green-600 rounded hover:bg-green-700"
                >
                  Update
                </button>
              ) : (
                <>
                  
                  <button
                    onClick={() => {
                      setEditId(todo.id);
                      setEditText(todo.text);
                    }}
                    className="flex items-center justify-center w-[30px] h-[30px] rounded cursor-pointer hover:bg-yellow-500 bg-yellow-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"
                      />
                    </svg>
                  </button>

                  
                  <button
                    onClick={() => dispatch(RemoveTodo(todo.id))}
                    className="flex items-center justify-center w-[30px] h-[30px] rounded cursor-pointer hover:bg-red-500 bg-red-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 011-1h6a1 1 0 011 1v1h3a1 1 0 110 2h-1v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5H2a1 1 0 110-2h3V2zm2 3a1 1 0 112 0v8a1 1 0 11-2 0V5zm4 0a1 1 0 112 0v8a1 1 0 11-2 0V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
