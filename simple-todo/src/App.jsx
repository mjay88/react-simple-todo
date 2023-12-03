import { useState } from "react";
import "./styles.css";
import Todo from "./Todo";

function App() {
	const [todos, setTodos] = useState([]);
	console.log(todos, "todos");
	const [newTodo, setNewTodo] = useState("");
	console.log(newTodo, "newTodo");
	// const [isChecked, setIsChecked] = useState(false);

	function addTodo() {
		if (newTodo === "") return;
		setTodos((currentTodos) => [
			...currentTodos,
			{ name: newTodo, id: crypto.randomUUID(), completed: false },
		]);
		setNewTodo("");
	}
	//nicer than doing it inline, duh
	function toggleTodo(todoId, completed) {
		setTodos((currentTodos) =>
			currentTodos.map((todo) => {
				if (todoId === todo.id) {
					return { ...todo, completed: completed };
				} else {
					return todo;
				}
			})
		);
	}

	return (
		<>
			<ul id="list">
				{todos.map((todo) => {
					return (
						<Todo
							key={todo.id}
							{...todo}
							setTodos={setTodos}
							toggleTodo={toggleTodo}
						/>
					);
				})}
			</ul>

			<div id="new-todo-form">
				<label htmlFor="todo-input">New Todo</label>
				<input
					type="text"
					id="todo-input"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
				/>
				<button onClick={() => addTodo()}>Add Todo</button>
			</div>
		</>
	);
}

export default App;
