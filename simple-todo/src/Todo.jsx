import React from "react";

export default function Todo({ name, id, completed, setTodos, toggleTodo }) {
	return (
		<li key={id} className="list-item">
			<label className="list-item-label">
				<input
					type="checkbox"
					data-list-item-checkbox
					onChange={(e) => toggleTodo(id, e.target.checked)}
					checked={completed}
				/>
				<span data-list-item-text>{name}</span>
			</label>
			<button
				data-button-delete
				onClick={() =>
					setTodos((currentTodos) => currentTodos.filter((t) => t.id !== id))
				}
			>
				Delete
			</button>
		</li>
	);
}
