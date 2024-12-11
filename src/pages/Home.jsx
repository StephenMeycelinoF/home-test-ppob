import { profile_photo } from "../assets";

export const Home = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1">
        <div className="flex flex-col">
          <img src={profile_photo} alt="USER PROFILE" className="w-16 h-16 rounded-full" />
          <div className="mt-4">
            <h3 className="text-xl" >Selamat Datang,</h3>
            <p className="font-semibold text-3xl">Stephen Meycelino</p>
          </div>
        </div>
      </div>
    </div>
  );
};
