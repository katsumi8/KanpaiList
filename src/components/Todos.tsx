import { Row } from "./Row";
import { AddTodo } from "./AddTodo";
import { useTodo } from "./useTodo";

export const Todos = () => {
  const {
    hasTodos,
    task,
    isBlank,
    todos,
    handleDeleteTodo,
    handleChange,
    handleSubmitTodo,
  } = useTodo();

  return (
    <section className="w-10/12 lg:w-1/2 max-w-2xl flex flex-col items-center">
      <AddTodo
        handleChange={handleChange}
        handleSubmitTodo={handleSubmitTodo}
        task={task}
      />
      {isBlank && (
        <p className="text-red-500 text-xs italic">
          Please provide a input / Bitte geben Sie eine Eingabe
        </p>
      )}
      <div className="h-10" />
      {todos.map((todo) => (
        <Row key={todo._id} todo={todo} handleDeleteTodo={handleDeleteTodo} />
      ))}
      {!hasTodos && (
        <p className="mb-5 text-xl text-blue-500">
          We have everything in stock. / Wir haben alles auf Lager
        </p>
      )}
    </section>
  );
};
