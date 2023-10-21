import { IAuthData, IUserData } from "@/types/auth.ts";
import { $host, $authHost } from "./index.ts";
import jwtDecode from "jwt-decode";

interface IJwtPayload extends IUserData {
  [key: string]: any;
}

const extractData = (token: string): IUserData => {
  const decodedToken: IJwtPayload = jwtDecode(token);
  const result: IUserData = {
    id: decodedToken.id,
    name: decodedToken.name,
    surname: decodedToken.surname,
    email: decodedToken.email,
  };
  if ("avatar" in decodedToken) {
    result.avatar = decodedToken.avatar;
  }
  return result;
};

export const registration = async (formData: IAuthData): Promise<IUserData> => {
  const { data } = await $host.post("api/user/registration", formData);
  localStorage.setItem("token", data.token);
  return extractData(data.token);
};

export const login = async (formData: IAuthData): Promise<IUserData> => {
  const { data } = await $host.post("api/user/login", formData);
  localStorage.setItem("token", data.token);
  return extractData(data.token);
};

export const check = async (): Promise<IUserData> => {
  const { data } = await $authHost.get("api/user/check");
  localStorage.setItem("token", data.token);
  return extractData(data.token);
};

// export const updateUser = async (user) => {
//   const { data } = await $authHost.put("api/user", user);
//   localStorage.setItem("token", data.token);
//   return jwtDecode(data.token);
// };

// const formData = new FormData()
// formData.append('img', e.target.files[0])
// let data = await changeAvatar(formData)

// export const changeAvatar = async (avatar) => {
//   const { data } = await $authHost.put("api/user/avatar", avatar);
//   localStorage.setItem("token", data.token);
//   return jwtDecode(data.token);
// };

// export const changePassword = async (id, oldPassword, newPassword) => {
//   const { data } = await $authHost.put("api/user/password", {
//     id,
//     oldPassword,
//     newPassword,
//   });
//   return data;
// };

// export const deleteUser = async () => {
//   const { data } = await $authHost.delete("api/user");
//   return data;
// };
