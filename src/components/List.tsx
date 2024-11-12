import classNames from "classnames";
import type { Todo } from "../helpers/todoInterface";
import { basket, completed } from "../helpers/constants";
import { CheckSVG } from "../svg/Check";
import { BasketSVG } from "../svg/Basket";
import {
	deleteTodo,
	removeTodoToBasket,
	toggleTodo,
} from "../slices/todosSlice";
import { useDispatch } from "react-redux";

interface ListProps {
	todo: Todo;
}

export const List: React.FC<ListProps> = ({ todo }) => {
	const dispatch = useDispatch();
	const handleClickToggle = (id: string) => {
		dispatch(toggleTodo(id));
	};

	const handleClicktoBasket = (id: string) => {
		dispatch(removeTodoToBasket(id));
	};

	const handleClickDeleteTodo = (id: string) => {
		dispatch(deleteTodo(id));
	};
	
	return (
		<li
			className="flex justify-between items-center break-words overflow-clip text-ellipsis text-slate-100 gap-2 m-4 border border-slate-300 rounded-tr-2xl rounded-bl-2xl p-2 md:p-5"
			key={todo.id}
		>
			<p
				className={classNames("break-all", {
					"line-through text-green-300": todo.status === completed,
					"line-through text-red-300": todo.status === basket,
				})}
			>
				{todo.text}
			</p>

			<div className="flex gap-2">
				<button
					type="button"
					className="text-zinc-700"
					onClick={() => handleClickToggle(todo.id)}
				>
					<CheckSVG />
				</button>
				<button
					type="button"
					className="text-zinc-700"
					onClick={() => handleClicktoBasket(todo.id)}
				>
					<BasketSVG />
				</button>
				{todo.status === basket && (
					<button
						type="button"
						className="text-zinc-700"
						onClick={() => handleClickDeleteTodo(todo.id)}
					>
						X
					</button>
				)}
			</div>
		</li>
	);
};
