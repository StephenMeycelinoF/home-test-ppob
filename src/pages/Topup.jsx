import { RectangleEllipsisIcon } from "lucide-react";
import AccountBalance from "../components/AccountBalance";
import Title from "../components/ui/Title";
import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Topup() {
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSelectAmount = (value) => {
    setAmount(value);
  };

  const topUpOptions = [10000, 20000, 50000, 100000, 250000, 500000];

  return (
    <section className="space-y-8">
      <AccountBalance />

      <div>
        <Title title={"Silahkan masukkan"} subtitle={"Nominal Top Up"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[50%_50%] xl:grid-cols-[65%_35%] gap-6 items-center">
        <form className="space-y-4">
          <div className="relative">
            <Input
              id="top-up-input"
              name="topUpAmount"
              leftIcon={RectangleEllipsisIcon}
              placeholder="Masukkan Nominal Top Up"
              value={amount}
              onChange={handleChange}
            />
          </div>
          <Button
            variant={amount ? "primary" : "secondary"}
            isDisabled={!amount}
            isLoading={false}
            onClick={() => {}}
          >
            Top Up
          </Button>
        </form>

        <div className="grid grid-cols-3 gap-4">
          {topUpOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleSelectAmount(option)}
              className="border text-gray-600 rounded-lg p-3 text-center text-sm lg:text-base font-medium cursor-pointer hover:bg-gray-200"
            >
              Rp{option.toLocaleString("id-ID")}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Topup;
