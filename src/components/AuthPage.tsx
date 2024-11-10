import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { logIn } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

export const AuthPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<FieldValues>();

	const onSubmit = (data: FieldValues) => {
		if (data.username !== "admin") {
			setError("username", {
				type: "manual",
				message: "Неверный логин",
			});
			return;
		}
		if (data.password !== "admin") {
			setError("password", {
				type: "manual",
				message: "Неверный пароль",
			});
			return;
		}
		dispatch(logIn(data));
		navigate("/");
	};

	return (
		<div className="border border-slate-500 rounded-2xl p-7">
			<h2 className="text-3xl text-center text-slate-100">Авторизация</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mt-6 flex flex-col gap-5 items-center"
			>
				<label htmlFor="username" className="hidden">
					Имя пользователя
				</label>
				<input
					id="username"
					className="p-2 w-3/4"
          placeholder='Введите имя пользователя . . .'
					{...register("username", { required: "Это поле обязательно" })}
				/>
				{errors.username && <span className='text-red-400'>{errors.username.message as string}</span>}
				<label htmlFor="password" className="hidden">
					Пароль
				</label>
				<input
					id="password"
					type="password"
					className="p-2 w-3/4"
          placeholder='Введите пароль . . .'
					{...register("password", { required: "Это поле обязательно" })}
				/>
				{errors.password && <span className='text-red-400'>{errors.password.message as string}</span>}
				<button type="submit" className="text-2xl text-center text-slate-100">
					Войти
				</button>
			</form>
		</div>
	);
};
