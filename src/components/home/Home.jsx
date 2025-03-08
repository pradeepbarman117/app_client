import { useEffect, useState } from "react";
import HomeSkeleton from "./HomeSkeleton";
import "./Home.css";
import TransactionTable from "./HomeTransactionTable";

const Home = () => {
  const [loading, setLoading] = useState(true);
  // Simulate data fetching (e.g., API call)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // After 2 seconds, stop loading
    }, 300);

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  if (loading) {
    return <HomeSkeleton />;
  }

  return (
    <>
      <div className="sm:p-4 pt-3">
        <div className="flex flex-wrap gap-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#F0F2F5]">
            <p className="text-[#121417] text-base font-medium leading-normal">
              Active Users
            </p>
            <p className="text-[#121417] tracking-light text-2xl font-bold leading-tight">
              2.3k
            </p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#F0F2F5]">
            <p className="text-[#121417] text-base font-medium leading-normal">
              New Users
            </p>
            <p className="text-[#121417] tracking-light text-2xl font-bold leading-tight">
              1.5k
            </p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#F0F2F5]">
            <p className="text-[#121417] text-base font-medium leading-normal">
              DAU
            </p>
            <p className="text-[#121417] tracking-light text-2xl font-bold leading-tight">
              1.8k
            </p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#F0F2F5]">
            <p className="text-[#121417] text-base font-medium leading-normal">
              MAU
            </p>
            <p className="text-[#121417] tracking-light text-2xl font-bold leading-tight">
              5.2k
            </p>
          </div>
        </div>
        
        <TransactionTable/>
      </div>
    </>
  );
};

export default Home;
