import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Plus, Users, Gift, Package, ChartNoAxesColumn, ChartPie } from 'lucide-react';
import Button from '@mui/material/Button';

const DashboardBox = () => {
    return (
        <>
            <div className="container shadow-md sm: rounded-lg mx-auto !bg-[#f1faff] p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                            Welcome,
                        </h1>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-300 mb-4 lg:mb-6">
                            Abhi Kr.
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
                            Here's what's happening on your store today. See the statistics at once.
                        </p>

                        {/* Button moved here for better mobile layout */}
                        <Button className="!bg-blue-500 hover:!bg-blue-600 !text-white">
                            <Plus className="text-white w-4 h-4 sm:w-5 mr-2" />
                            Add Product
                        </Button>
                    </div>

                    {/* Image - Hidden on mobile, visible on lg and up */}
                    <div className="flex-1 hidden lg:flex justify-center lg:justify-end">
                        <img
                            src="./images/shop-illustration.webp"
                            alt="Dashboard Illustration"
                            className="w-auto h-[180px] lg:h-[200px] xl:h-[240px] object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className="container shadow-md sm: rounded-lg px-3 py-2 bg-[#fcfffe] flex py-4 mx-auto my-4">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="bg-[#10b981] hover:bg-[#0f9c6e] cursor-pointer p-4 rounded-lg shadow-md flex items-center gap-4">
                            <Users className="text-white w-6 h-6" />
                            <div>
                                <h3 className="text-lg font-semibold text-white">Total Users</h3>
                                <p className="text-white">1,234</p>
                            </div>
                            <ChartNoAxesColumn className="text-white w-6 h-6" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-blue-600 hover:bg-blue-700 cursor-pointer p-4 rounded-lg shadow-md flex items-center gap-4">
                            <Gift className="text-white w-6 h-6" />
                            <div>
                                <h3 className="text-lg font-semibold text-white">Total Orders</h3>
                                <p className="text-white">$12,345</p>
                            </div>
                            <ChartPie className="text-white w-6 h-6" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-blue-800 p-4 hover:bg-blue-900 cursor-pointer rounded-lg shadow-md flex items-center gap-4">
                            <Package className="text-white w-6 h-6" />
                            <div>
                                <h3 className="text-lg font-semibold text-white">Total Products</h3>
                                <p className="text-white">567</p>
                            </div>
                            <ChartNoAxesColumn className="text-white w-6 h-6" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default DashboardBox;