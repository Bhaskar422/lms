import { getAnalytics } from "@/actions/get-analytics";
import { Chart } from "@/app/(dashboard)/(routes)/teacher/analytics/_components/chart";
import { DataCard } from "@/app/(dashboard)/(routes)/teacher/analytics/_components/data-card";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AnalyticsPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }
  const { data, totalRevenue, totalSales } = await getAnalytics(userId);
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <DataCard label="Total Revenue" value={totalRevenue} shouldFomat />
        <DataCard label="Total Sales" value={totalSales} />
      </div>
      <Chart data={data} />
    </div>
  );
};

export default AnalyticsPage;
