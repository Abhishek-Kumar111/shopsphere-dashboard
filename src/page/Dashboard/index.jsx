import React from "react";
import DashboardBox from "../../component/Dashboardbox";
import Recharts from "../../component/ReCharts";
import ProductTable from "../../component/ProductTable";
import RecentOrdersTable from "../../component/RecentOrderedTable";

// import RecentOrdersTable from "../../component/RecentOrdered";
// import ProductStorageTable from "../../component/ProductTable";

const Dashboard = () => {
    return (
        <>
        <DashboardBox />
        <ProductTable />
        <RecentOrdersTable />
        <Recharts />
        </>
    )
}
export default Dashboard;