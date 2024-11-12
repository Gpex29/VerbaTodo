import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { logIn } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";

export const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit = (data: FieldValues) => {
    if (data.username !== "admin" || data.password !== "admin") {
      setError("user", {
        type: "manual",
        message: "Неверный логин или пароль",
      });
      return;
    }
    dispatch(logIn(data));
    navigate("/");
  };

  const handleInputChange = () => {
    clearErrors("user");
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
          {...register("username", { 
            required: "Это поле обязательно",
            onChange: handleInputChange
          })}
        />
        <label htmlFor="password" className="hidden">
          Пароль
        </label>
        <input
          id="password"
          type="password"
          className="p-2 w-3/4"
          placeholder='Введите пароль . . .'
          {...register("password", { 
            required: "Это поле обязательно",
            onChange: handleInputChange
          })}
        />
        {errors.user && <p className='text-red-400'>{errors.user.message as string}</p>}
        <button type="submit" className="text-2xl text-center text-slate-100">
          Войти
        </button>
      </form>
    </div>
  );
};
