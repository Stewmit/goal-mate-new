import Header from "@/components/header/Header";
import { useAppSelector } from "@/hooks/redux";
import { FC } from "react";

const ProfilePage: FC = () => {
  const { user } = useAppSelector((state) => state.userReducer);

  return (
    <div>
      <Header />
      <div className="mt-[60px]">ProfilePage</div>
      <div>{user?.id}</div>
      <div>{user?.name}</div>
      <div>{user?.surname}</div>
      <div>{user?.email}</div>
      <div>{user?.avatar}</div>
    </div>
  );
};

export default ProfilePage;
