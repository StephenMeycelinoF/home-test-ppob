import { AtSign, Eye, EyeClosed, Lock } from "lucide-react";
import { illustrasi_login, logo } from "../assets";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useState } from "react";

function Login() {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const tooglePassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen ">
      <div className="space-y-8 md:space-y-12 max-w-xs md:max-w-lg mx-auto">
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="LOGO" className="h-8 w-auto" />
          <h3 className="text-2xl font-semibold">SIMS PPOB</h3>
        </div>
        <h1 className="font-bold text-3xl text-center">
          Masuk atau buat akun untuk memulai
        </h1>
        <div className="space-y-4 md:space-y-8">
          <Input
            id="email"
            name="email"
            leftIcon={AtSign}
            placeholder="masukkan email anda"
          />

          <Input
            id="password"
            name="password"
            leftIcon={Lock}
            rightIcon={isShowPassword ? EyeClosed : Eye}
            onClickRightIcon={tooglePassword}
            type={isShowPassword ? "text" : "password"}
            placeholder="masukkan password anda"
          />
        </div>

        <div className="space-y-4 md:space-y-8">
          <Button variant={"primary"} isLoading={false} onClick={() => {}}>
            Masuk
          </Button>

          <div className="flex items-center">
            <p className="mr-1">Belum punya akun? register</p>
            <span className="text-red-500 font-semibold hover:text-red-700">
              disini
            </span>
          </div>
        </div>
      </div>
      <img
        src={illustrasi_login}
        alt="illustrasi_login"
        className="w-full h-screen object-center object-cover hidden lg:block"
      />
    </section>
  );
}

export default Login;
