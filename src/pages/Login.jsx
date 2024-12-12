import { AtSign, Eye, EyeClosed, Lock } from "lucide-react";
import { illustrasi_login, logo } from "../assets";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const { isLoading, errorMessage } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tooglePassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset error messages sebelum validasi
    setEmailError("");
    setPasswordError("");

    let isValid = true;

    // Validasi Email
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    }

    // Validasi Password
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    // Jika validasi gagal, tidak lanjutkan ke dispatch
    if (!isValid) return;

    let userCredentials = {
      email,
      password,
    };

    // Dispatch login jika validasi berhasil
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setEmail("");
        setPassword("");
        navigate("/"); // Arahkan ke halaman utama setelah login sukses
      }
    });
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen">
      <div className="space-y-8 md:space-y-12 max-w-xs md:max-w-lg mx-auto">
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="LOGO" className="h-8 w-auto" />
          <h3 className="text-2xl font-semibold">SIMS PPOB</h3>
        </div>
        <h1 className="font-bold text-3xl text-center">
          Masuk atau buat akun untuk memulai
        </h1>
        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-4 md:space-y-8">
            <Input
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={AtSign}
              placeholder="masukkan email anda"
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

            <Input
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftIcon={Lock}
              rightIcon={isShowPassword ? EyeClosed : Eye}
              onClickRightIcon={tooglePassword}
              type={isShowPassword ? "text" : "password"}
              placeholder="masukkan password anda"
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
          </div>

          <div className="space-y-4 md:space-y-8">
            <Button
              type="submit"
              variant={"primary"}
              isLoading={isLoading ? true : false}
            >
              Masuk
            </Button>

            <div className="flex items-center">
              <p className="mr-1">Belum punya akun? register</p>
              <span className="text-red-500 font-semibold hover:text-red-700">
                disini
              </span>
            </div>
          </div>
        </form>
        {errorMessage && <p role="alert">{errorMessage}</p>}
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
