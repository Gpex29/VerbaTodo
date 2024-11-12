import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../slices";
import { switchStatus } from "../slices/todosSlice";

interface MenuButtonProps {
	btn: { text: string; status: string };
	count: number;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ btn, count }) => {
	const status = useSelector((state: RootState) => state.todos.status);
	const dispatch = useDispatch();
	const handleClick = (status: string) => dispatch(switchStatus(status));

	return (
		<button
			type="button"
			className={classNames({
				"border-b-2 border-sky-600 p-1 text-slate-100": status === btn.status,
			})}
			onClick={() => handleClick(btn.status)}
		>
			{`${btn.text}${count !== 0 ? `(${count})` : ""}`}
		</button>
	);
};
