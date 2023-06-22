import { useQuery } from "@tanstack/react-query";
import { getOpenBugsCount } from "../api";
import { ChartKey } from "../types";
import BarChart from "../components/BarChart";
import ChaartSkeletonWrapper from "../components/ChartSkeleton";

const Bugs = () => {
  const bugsQuery = useQuery({
    queryKey: ["bugs"],
    queryFn: getOpenBugsCount
  });

  if (bugsQuery.isLoading) return <ChaartSkeletonWrapper />;

  const graphData = {
    title: ChartKey.Bugs,
    success: bugsQuery.data.opened,
    failure: bugsQuery.data.closed
  };
  return <BarChart graphData={graphData} key={graphData.title} />;
};

export default Bugs;
