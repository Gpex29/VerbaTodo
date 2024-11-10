import type React from "react";
import { all, btnsArray } from "../helpers/constants";
import { useSelector } from "react-redux";
import type { RootState } from "../slices";
import { useState } from "react";
import type { Todo } from "../helpers/todoInterface";
import { List } from "./List";
import Button from "./Button";

export const Main: React.FC = () => {
	const [state, setState] = useState(all);

	let todos: Todo[];
	const allTodos = useSelector((state: RootState) => state.todos.todos);

	if (state === all) {
		todos = allTodos;
	} else {
		todos = allTodos.filter((todo) => todo.status === state);
	}

	const findCount = (status: string) => {
		if (status === all) {
			return allTodos.length;
		}
			return allTodos.filter((todo) => todo.status === status).length;
	};

	return (
		<div className="bg-stone-400 rounded-2xl p-7">
			<div className="flex justify-center items-baseline sticky space-x-1 sm:space-x-3 gap-10 text-gray-500">
				{btnsArray.map((btn) => (
					<Button key={btn.text} btn={btn} state={state} count={findCount(btn.status)} setState={setState} />
				))}
			</div>
			<div>
				<ul>
					{todos.map((todo: Todo) => (
						<List
							key={todo.id}
							todo={todo}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};
