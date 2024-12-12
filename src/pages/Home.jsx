import promos from "../data/promoData";
import AccountBalance from "../components/AccountBalance";

function Home() {
  return (
    <section className="space-y-8">
      <AccountBalance />

      <div className="relative flex justify-center">
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <div className="flex space-x-4 w-max">
              {promos.map((promo, index) => (
                <div key={index} className="w-full">
                  <img src={promo.image} alt={promo.image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
