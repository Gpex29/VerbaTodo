import { addTodo, deleteAllTodosFromBasket } from "../slices/todosSlice";
import { useDispatch } from "react-redux";
import { ClearSVG } from "../svg/Clear";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

export const Header: React.FC = () => {
	const dispatch = useDispatch();
	const {
    register,
    handleSubmit,
    resetField,
  } = useForm<FieldValues>();

  const onSubmit = (data: FieldValues) => {
    dispatch(addTodo(data.todo));
		resetField('todo');
  };

	const handleClick = () => {
		dispatch(deleteAllTodosFromBasket())
	}

	return (
		<div className="bg-stone-400 rounded-2xl">
			<form
				className="border-1 border-zinc-800 p-4 flex gap-1 sm:gap-2 md:gap-20 rounded-lg sticky top-0 text-slate-100"
				onSubmit={handleSubmit(onSubmit)}
			>
				<button type="submit" className="bg-sky-600 rounded-md text-nowrap p-1 sm:p-2">
					+ ДОБАВИТЬ
				</button>
				<input
					type="text"
					id="todo"
					placeholder="Пополните список . . ."
					className="w-full p-2 border-b border-black outline-none bg-stone-400 placeholder:text-slate-100"
          {...register("todo", { 
            required: "Это поле обязательно",
          })}
				/>
				<label htmlFor="todo" className="hidden">
					Напишите новую задачу
				</label>
				<button type="button" onClick={handleClick} className="bg-red-600 rounded-md p-1 sm:p-2 flex gap-1 items-center">
					ОЧИСТИТЬ
					<ClearSVG />
				</button>
			</form>
		</div>
	);
};
