import { FC, ChangeEvent, SyntheticEvent, useState, useEffect } from "react";
import { login, registration } from "@/services/api/userAPI";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "@/router";
import axios from "axios";
import { IAuthData, IUserData } from "@/types/auth";
import { userSlice } from "@/store/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

const registerSchema = z
  .object({
    name: z
      .string({ required_error: "Необходимо заполнить имя" })
      .min(1, { message: "Необходимо заполнить имя" })
      .max(64, { message: "Длина имени не может превышать 64 символа" })
      .trim(),
    surname: z
      .string({ required_error: "Необходимо заполнить фамилию" })
      .min(1, { message: "Необходимо заполнить фамилию" })
      .max(64, { message: "Длина фамилии не может превышать 64 символа" })
      .trim(),
    email: z
      .string({ required_error: "Необходимо заполнить адрес почты" })
      .min(1, { message: "Необходимо заполнить адрес почты" })
      .max(64, { message: "Длина адреса почты не может превышать 64 символа" })
      .email({ message: "Некорректный адрес почты" }),
    password: z
      .string({ required_error: "Необходимо ввести пароль" })
      .min(6, { message: "Пароль должен включать не менее 6-ти символов" })
      .max(32, { message: "Длина пароля не может превышать 64 символа" })
      .trim(),
    passwordConfirm: z
      .string({ required_error: "Необходимо ввести пароль" })
      .min(6, { message: "Пароль должен включать не менее 6-ти символов" })
      .max(32, { message: "Длина пароля не может превышать 64 символа" })
      .trim(),
  })
  .superRefine(({ passwordConfirm, password }, ctx) => {
    if (passwordConfirm !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Пароли не совпадают",
        path: ["password"],
      });
      ctx.addIssue({
        code: "custom",
        message: "Пароли не совпадают",
        path: ["passwordConfirm"],
      });
    }
  });

const loginSchema = z.object({
  email: z
    .string({ required_error: "Необходимо заполнить адрес почты" })
    .min(1, { message: "Необходимо заполнить адрес почты" })
    .max(64, { message: "Длина адреса почты не может превышать 64 символа" })
    .email({ message: "Некорректный адрес почты" }),
  password: z
    .string({ required_error: "Необходимо ввести пароль" })
    .min(6, { message: "Пароль должен включать не менее 6-ти символов" })
    .max(32, { message: "Длина пароля не может превышать 64 символа" })
    .trim(),
});

const AuthPage: FC = () => {
  const { user } = useAppSelector((state) => state.userReducer);
  const { setUser } = userSlice.actions;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== undefined) {
      navigate(RouteNames.CALENDAR);
    }
  }, []);

  const [isRegisterForm, setIsRegisterForm] = useState(true);
  const [formData, setFormData] = useState<IAuthData>({
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState<Record<string, string[]> | undefined>(
    undefined
  );
  const [requestError, setRequestError] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function resetFormData() {
    setFormData({
      name: "",
      surname: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });
  }

  function switchForms(e: SyntheticEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsRegisterForm(!isRegisterForm);
    resetFormData();
    setErrors(undefined);
    setRequestError("");
  }

  function validateForm() {
    try {
      if (isRegisterForm) {
        registerSchema.parse(formData);
      } else {
        loginSchema.parse(formData);
      }
      setErrors(undefined);
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errors: Record<string, string[]> = err.flatten()
          .fieldErrors as Record<string, string[]>;
        setErrors(errors);
        return false;
      }
    }
  }

  async function submitForm(e: SyntheticEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (validateForm()) {
      try {
        let data: IUserData;
        if (isRegisterForm) {
          const { passwordConfirm, ...rest } = formData;
          data = await registration(rest);
        } else {
          const { email, password } = formData;
          data = await login({ email, password });
        }
        dispatch(setUser(data));
        navigate(RouteNames.PROFILE);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setRequestError(err.response.data.message);
        } else if (err instanceof Error) {
          setRequestError(err.message);
        }
      }
    }
  }

  return (
    <div>
      <main>
        <div className="h-screen flex justify-center items-center bg-white sm:bg-gray-100">
          <form className="flex flex-col mt-8 items-center bg-white shadow-none sm:shadow-md w-[400px] rounded-lg px-10 py-8">
            {isRegisterForm ? (
              <h1 className="text-4xl font-bold">Регистрация</h1>
            ) : (
              <h1 className="text-4xl font-bold">Авторизация</h1>
            )}
            <div className="text-red-500 text-center mt-6">{requestError}</div>
            <div className="mt-2 w-full">
              <div>
                {isRegisterForm ? (
                  <div className="mb-6">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input input-lg input-block border-indigo-600"
                      placeholder="Имя"
                    />
                    {errors?.name ? (
                      <div className="block mt-1 text-red-500">
                        {errors?.name[0]}
                      </div>
                    ) : (
                      <div />
                    )}
                    <div className="mt-6">
                      <input
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        className="input input-lg input-block border-indigo-600"
                        placeholder="Фамилия"
                      />
                      {errors?.surname ? (
                        <div className="block mt-1 text-red-500">
                          {errors?.surname[0]}
                        </div>
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>
                ) : (
                  <div />
                )}
              </div>
              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-lg input-block border-indigo-600"
                  placeholder="Почта"
                />
                {errors?.email ? (
                  <div className="block mt-1 text-red-500">
                    {errors?.email[0]}
                  </div>
                ) : (
                  <div />
                )}
              </div>
              <div className="mt-6">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  className="input input-lg input-block border-indigo-600"
                  placeholder="Пароль"
                />
                {errors?.password ? (
                  <div className="block mt-1 text-red-500">
                    {errors?.password[0]}
                  </div>
                ) : (
                  <div />
                )}
              </div>
              {isRegisterForm ? (
                <div className="mt-6">
                  <input
                    name="passwordConfirm"
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                    type="password"
                    className="input input-lg input-block border-indigo-600"
                    placeholder="Повтор пароля"
                  />
                  {errors?.passwordConfirm ? (
                    <div className="block mt-1 text-red-500">
                      {errors?.passwordConfirm[0]}
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              ) : (
                <div />
              )}
              <div className="flex justify-center mt-6">
                <div className="flex flex-col w-full items-start">
                  <button className="font-bold mb-1" onClick={switchForms}>
                    {isRegisterForm ? (
                      <span>Есть аккаунт</span>
                    ) : (
                      <span>Создать аккаунт</span>
                    )}
                  </button>
                  <button
                    onClick={submitForm}
                    className="btn btn-primary bg-indigo-600 hover:bg-indigo-700"
                  >
                    {isRegisterForm ? (
                      <span>Зарегистрироваться</span>
                    ) : (
                      <span>Войти</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
