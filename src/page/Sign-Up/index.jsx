import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const SignUp = () => {
    const [loadingGoogle, setLoadingGoogle] = useState(false);
    function handleClickGoogle() {
        setLoadingGoogle(true);
    }

    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(!checked);

    };


    return (
        <section className="flex items-center justify-center h-auto">
            <header className=" w-full fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-10">
                <Link to='/'>
                    <img src="./images/logo.jpg" alt="Logo" />
                </Link>
                <div className="flex items-center gap-4">
                    <Button className="!rounded-full !bg-[#DDD8EB] !text-[rgba(0,0,0,0.8)] !px-2">
                        Login
                    </Button>
                    <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-2">
                        Sign Up
                    </Button>
                </div>

            </header>

            <div className=" h-auto">
                <h1 className="text-center text-2xl font-[600] text-[40px] mt-20">Join us today! Get special <br />
                    benefits and stay up-to-date.</h1>


                <div className="flex items-center justify-center w-full mt-10">
                    <Button
                        size="small"
                        onClick={handleClickGoogle}
                        endIcon={<FcGoogle />}
                        loading={loadingGoogle}
                        loadingPosition="end"
                        variant="outlined"
                        className="bg-none !text-[20px] !capitalize !px-5 !text-[rgba(0, 0, 0, 0.7)]"
                    >
                        Signin with Google
                    </Button>

                </div>
                <br /><br />
                <div className="w-full flex items-center justify-center gap-3">
                    <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
                    <span className="text-[rgba(0,0,0,0.5)] text-[14px] font-[500]">OR, Sign in with your email</span>
                    <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
                </div>
                <br />
                <form className="w-full px-2 mt-3 flex flex-col items-center justify-center">
                     <div className="form-group mb-7 w-full">
                        <h4 className="text-[rgba(0,0,0,0.7)] text-[16px] font-[500] mb-2">Name</h4>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="form-group mb-7 w-full">
                        <h4 className="text-[rgba(0,0,0,0.7)] text-[16px] font-[500] mb-2">Email</h4>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="form-group mb-4 w-full relative">
                        <h4 className="text-[rgba(0,0,0,0.7)] text-[16px] font-[500] mb-2">Password</h4>
                        <div className="relative">

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <Button className="!absolute top-[6px] !rounded-full right-[6px] z-10  !w-[20px] h-[30px] !min-w-[35px] !bg-white !text-[rgba(0,0,0,0.7)] !p-0">
                                <FaRegEye />
                            </Button>
                        </div>
                    </div>
                    <br />
                    <div className="w-full form-group flex items-center justify-between mb-6">
                        <p className="opacity-50">Already have an account?</p>
                        <Link to="/login" className="!text-blue-600 text-[16px] font-[500]">Sign In</Link>

                    </div>
                    <br />
                    <Button type="submit" variant="contained" color="primary" className="w-full mt-4">
                        Sign Up
                    </Button>

                </form>

            </div>
            {/* <img src="./images/loginBg.avif" alt="Login Background" className="w-full fixed top-0 left-0 opacity-50" /> */}
        </section>
    )
}

export default SignUp;