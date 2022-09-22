import { ChangeEvent, FormEvent } from "react";

export type TodoProps = {
  todo: TodoGetData;
  handleDeleteTodo: (id: string) => void;
};

export type AddTodoProps = {
  task: string;
  handleSubmitTodo: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
};

export type TodoGetData = {
  _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};
