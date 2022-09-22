import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { TodoGetData } from "../types";
import { useErrorHandler } from "./useErrorHandler";

export const useTodo = () => {
  const [todos, setTodos] = useState<TodoGetData[]>([]);
  const [task, setTask] = useState<string>("");
  const [isBlank, setIsBlank] = useState<boolean>(false);
  const { errorHandler } = useErrorHandler();
  const hasTodos = todos.length > 0;
  const { REACT_APP_BACKEND_URL } = process.env;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get<TodoGetData[]>(
        `${REACT_APP_BACKEND_URL}/todos/`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      setTodos(data);
    };
    try {
      fetchData();
    } catch (err) {
      errorHandler(err);
    }
  }, []);

  const handleAddTodo = (todo: TodoGetData) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTask("");
  };

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setIsBlank(false);
    setTask(value);
  };

  const handleDeleteTodo = async (id: string) => {
    const updatedTodos = todos.filter((todo) => todo._id !== id);
    setTodos(updatedTodos);
    try {
      await axios.delete(`${REACT_APP_BACKEND_URL}/todos/${id}`, {
        headers: {
          Accept: "application/json",
        },
      });
    } catch (err) {
      errorHandler(err);
    }
  };

  const handleSubmitTodo = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (task) {
        const { data } = await axios.post<TodoGetData>(
          `${REACT_APP_BACKEND_URL}/todos/`,
          {
            text: task,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        handleAddTodo(data);
      } else {
        setIsBlank(true);
      }
    } catch (err) {
      errorHandler(err);
    }
  };

  return {
    hasTodos,
    task,
    isBlank,
    todos,
    handleDeleteTodo,
    handleChange,
    handleSubmitTodo,
  };
};
