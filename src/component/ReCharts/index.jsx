import React, { useState } from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Recharts = () => {
    const [chart1Data, setChart1Data] = useState([
        {
            name: 'JAN',
            TotalSale: 4000,
            TotalUsers: 4300,
            amt: 2400,
        },
        {
            name: 'FEB',
            TotalSale: 3000,
            TotalUsers: 4300,
            amt: 2210,
        },
        {
            name: 'MAR',
            TotalSale: 2000,
            TotalUsers: 4300,
            amt: 2290,
        },
        {
            name: 'APR',
            TotalSale: 2780,
            TotalUsers: 4300,
            amt: 2000,
        },
        {
            name: 'MAY',
            TotalSale: 1890,
            TotalUsers: 4300,
            amt: 2181,
        },
        {
            name: 'JUN',
            TotalSale: 2390,
            TotalUsers: 4300,

            amt: 2500,
        },
        {
            name: 'JULY',
            TotalSale: 3490,
            TotalUsers: 4300,
            amt: 2100,
        },
        {
            name: 'AUGUST',
            TotalSale: 3490,
            TotalUsers: 4300,

            amt: 2100,
        },
        {
            name: 'SEPTEMBER',
            TotalSale: 3490,
            TotalUsers: 4300,
            amt: 2100,
        },
        {
            name: 'OCTOBER',
            TotalSale: 3490,
            TotalUsers: 4300,
            amt: 2100,
        },
        {
            name: 'NOVEMBER',
            TotalSale: 3490,
            TotalUsers: 4300,
            amt: 2100,
        },
        {
            name: 'DECEMBER',
            TotalSale: 3490,
            TotalUsers: 4300,
            amt: 2100,
        },
    ]);

    return (
        <div className="card bg-[#f1fafa] my-4 shadow-md sm:rounded-lg">
            <div className="flex items-center justify-between px-4 py-3">
                <h3 className="text-[18px] font-[500]">Total Users & Total Sales</h3>
            </div>
            <div className="flex items-center px-4 pb-2 gap-4">
                <span className="flex items-center gap-1 text-[15px]">
                    <span className="rounded-full w-2 h-2 bg-[#3c1bc0ff]"></span> Total Users
                </span>
                <span className="flex items-center gap-1 text-[15px]">
                    <span className="rounded-full w-2 h-2 bg-[#2f870cff]"></span> Total Sales
                </span>
            </div>
            <BarChart
                width={700}
                height={400}
                data={chart1Data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >

                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip cursor={false} contentStyle={{ fontSize: 12 }}
                    labelStyle={{ fontSize: 12 }} />
                <Legend />
                
                <Bar dataKey="TotalSale" fill="#2f870cff" barSize={20} />
            </BarChart>

        </div>
    )
}

export default Recharts;