import type React from "react";
import { all, menuButtonsArray } from "../../helpers/constants";
import { useSelector } from "react-redux";
import type { RootState } from "../../slices";
import type { Todo } from "../../helpers/todoInterface";
import { List } from "../List";
import { MenuButton } from "../MenuButton";

export const Main: React.FC = () => {
	const todos = useSelector((state: RootState) => state.todos.todos);
	const status = useSelector((state: RootState) => state.todos.status);

	const findCount = (status: string) => {
		if (status === all) {
			return todos.length;
		}
		return todos.filter((todo) => todo.status === status).length;
	};

	return (
		<div className="bg-stone-400 rounded-2xl p-7">
			<div className="flex justify-center items-baseline sticky space-x-1 md:space-x-3 gap-1 sm:gap-10 text-gray-500">
				{menuButtonsArray.map((btn) => (
					<MenuButton
						key={btn.text}
						btn={btn}
						count={findCount(btn.status)}
					/>
				))}
			</div>
			<div>
				<ul>
					{status === all
						? todos.map((todo: Todo) => <List key={todo.id} todo={todo} />)
						: todos
								.filter((todo) => todo.status === status)
								.map((todo: Todo) => <List key={todo.id} todo={todo} />)}
				</ul>
			</div>
		</div>
	);
};
