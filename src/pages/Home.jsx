import { EyeIcon, EyeOffIcon } from "lucide-react";
import { profile_photo } from "../assets";
import { useState } from "react";
import menuData from "../data/menuData";
import promos from "../data/promoData";

export const Home = () => {
  const [showSaldo, setShowSaldo] = useState(false);

  const toogleSaldo = () => {
    setShowSaldo((prev) => !prev);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile */}
        <div className="flex flex-col w-full">
          <img
            src={profile_photo}
            alt="USER PROFILE"
            className="w-16 h-16 rounded-full"
          />
          <div className="mt-4">
            <h3 className="text-xl">Selamat Datang,</h3>
            <p className="font-semibold text-3xl">Stephen Meycelino</p>
          </div>
        </div>

        {/* Account Balance */}
        <div className="bg-saldo bg-cover bg-right w-full h-fit flex items-center rounded-xl ">
          <div className="p-6 text-white space-y-2">
            <span>Saldo Anda</span>
            <div className="flex items-center w-full font-bold text-3xl">
              <span className="mr-1">Rp</span>
              <input
                type={showSaldo ? "text" : "password"}
                value="500.000"
                readOnly
                className="bg-transparent border-none font-bold text-3xl max-w-[9.375rem]  text-white w-auto outline-none"
              />
            </div>
            <div className="flex items-center gap-1" onClick={toogleSaldo}>
              <p>{showSaldo ? "Tutup Saldo" : "Lihat Saldo"}</p>
              {showSaldo ? (
                <EyeOffIcon className="w-4 h-4" />
              ) : (
                <EyeIcon className="w-4 h-4" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 ">
        {menuData.map((menu) => (
          <div
            key={menu.id}
            className="flex items-center justify-start flex-col gap-1"
          >
            <img src={menu.image} alt={menu.name} className="w-16 h-16" />
            <p className="text-center">{menu.name}</p>
          </div>
        ))}
      </div>

      <div className="relative flex justify-center">
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <div className="flex space-x-4 w-max">
              {promos.map((promo, index) => (
                <div key={index} className="w-full">
                  <img src={promo.image} alt={promo.image}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
