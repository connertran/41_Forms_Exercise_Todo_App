import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

// smoke test
it("renders without crashing", function () {
  render(<TodoList />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new task", function () {
  const { getByLabelText, queryByText } = render(<TodoList />);

  // no tasks yet
  expect(queryByText("X")).not.toBeInTheDocument();

  const taskInput = getByLabelText("Task:");
  const addBtn = queryByText("Add Task!");

  // fill out the form
  fireEvent.change(taskInput, { target: { value: "homework" } });
  fireEvent.click(addBtn);

  // delete button next the task exists!
  expect(queryByText("homework")).toBeInTheDocument();
  expect(queryByText("X")).toBeInTheDocument();
});

it("can delete a task", function () {
  const { getByLabelText, queryByText } = render(<TodoList />);

  // no tasks yet
  expect(queryByText("X")).not.toBeInTheDocument();

  const taskInput = getByLabelText("Task:");
  const addBtn = queryByText("Add Task!");

  // fill out the form
  fireEvent.change(taskInput, { target: { value: "homework" } });
  fireEvent.click(addBtn);

  // delete button next the task exists!
  expect(queryByText("homework")).toBeInTheDocument();
  expect(queryByText("X")).toBeInTheDocument();

  //   delete the task
  const deleteBtn = queryByText("X");
  fireEvent.click(deleteBtn);
  //   the task is deleted
  expect(queryByText("X")).not.toBeInTheDocument();
  expect(queryByText("homework")).not.toBeInTheDocument();
});

it("can edit a task", function () {
  const { getByLabelText, queryByText } = render(<TodoList />);

  // no tasks yet
  expect(queryByText("X")).not.toBeInTheDocument();

  const taskInput = getByLabelText("Task:");
  const addBtn = queryByText("Add Task!");

  // fill out the form
  fireEvent.change(taskInput, { target: { value: "homework" } });
  fireEvent.click(addBtn);

  // delete button next the task exists!
  expect(queryByText("homework")).toBeInTheDocument();
  expect(queryByText("X")).toBeInTheDocument();

  //   edit the task
  const editBtn = queryByText("Edit");
  fireEvent.click(editBtn);
  const editInput = getByLabelText("Edit Task:");
  const saveBtn = queryByText("Save");
  fireEvent.change(editInput, { target: { value: "coding" } });
  fireEvent.click(saveBtn);
  //   the task is changed
  expect(queryByText("homework")).not.toBeInTheDocument();
  expect(queryByText("coding")).toBeInTheDocument();
});
