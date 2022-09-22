import { TodoProps } from "../types";

export const Row = ({ todo: { _id, text:todo }, handleDeleteTodo }: TodoProps) => (
  <div className="flex w-full p-4 mb-2 justify-between items-center bg-green-300">
    <p className="ml-2 text-xl font-sans font-medium text-gray-700">{todo}</p>
    <button
      aria-label="Delete a todo"
      className="h-10 w-20 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold  rounded"
      onClick={() => handleDeleteTodo(_id)}
    >
      delete
    </button>
  </div>
);
