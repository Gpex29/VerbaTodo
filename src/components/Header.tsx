import { useState } from "react";
import { addTodo, deleteAllTodosFromBasket } from "../slices/todosSlice";
import { useDispatch } from "react-redux";
import { ClearSVG } from "../svg/Clear";

export const Header: React.FC = () => {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (input.trim()) {
			dispatch(addTodo(input));
			setInput("");
		}
	};

	const handleClick = () => {
		dispatch(deleteAllTodosFromBasket())
	}

	return (
		<div className="bg-stone-400 rounded-2xl">
			<form
				className="border-1 border-zinc-800 p-4 flex gap-2 md:gap-20 rounded-lg sticky top-0 text-slate-100"
				onSubmit={handleSubmit}
			>
				<button type="submit" className="bg-sky-600 rounded-md text-nowrap p-2">
					+ ДОБАВИТЬ
				</button>
				<input
					type="text"
					id="todo-input"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Пополните список . . ."
					className="w-full p-2 border-b border-black outline-none bg-stone-400 placeholder:text-slate-100"
				/>
				<label htmlFor="todo-input" className="hidden">
					Напишите новую задачу
				</label>
				<button type="button" onClick={handleClick} className="bg-red-600 rounded-md p-2 flex gap-1">
					ОЧИСТИТЬ
					<ClearSVG />
				</button>
			</form>
		</div>
	);
};
