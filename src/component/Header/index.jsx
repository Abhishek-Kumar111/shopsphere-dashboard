import React, { useState } from 'react';

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useContext } from 'react';
import { MyContext } from '../../App';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { VscBell } from "react-icons/vsc";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";

import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Header = () => {
  const [anchorMyacc, setAnchorMyacc] = useState(null);
  const openMyacc = Boolean(anchorMyacc);
  const handleClickMyacc = (event) => {
    setAnchorMyacc(event.currentTarget);
  };
  const handleCloseMyacc = () => {
    setAnchorMyacc(null);
  };

  const [showProfile, setShowProfile] = useState(false);
  const context = useContext(MyContext);
  return (
    <header className= {`w-full h-[auto] py-1 ${context.isOpenSidebar === true ? 'pl-55' : 'pl-5'} transition-all duration-300 pr-5 bg-[#fff] shadow-md flex items-center justify-between sticky top-0 z-3`}>
     
      <div className="part1">
        <button className="!w-[40px] !h-[40px]  rounded-full flex justify-center items-center !min-w-[40px] hover:bg-gray-100 cursor-pointer !text-[rgba(0,0,0,0.8)]"
          onClick={() => context.setIsOpenSidebar(!context.isOpenSidebar)}
        >
          <HiOutlineMenuAlt2 className="w-6 h-6 text-[rgba(0,0,0,0.8)]" />
        </button>
      </div>

      {/*Search Bar */}
       <div className="flex-1 max-w-md mx-4 hidden md:block ">
          <div className="relative">
            <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products, orders, customers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-gray-50 focus:bg-white"
            />
          </div>
        </div>

      <div className='part2 w-[40%] flex items-center justify-end gap-4 '>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <VscBell className="w-6 h-6 text-[rgba(0,0,0,0.8)]" />
          </StyledBadge>
        </IconButton>
        {context.isLogin === true ? <div className='menu relative'>
          <div className='rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer' onClick={handleClickMyacc}>
            <img src='./images/shop-illustration.webp' className='w-full h-full object-cover' alt='Shop Illustration' />
          </div>
          <Menu
            anchorEl={anchorMyacc}
            id="account-menu"
            open={openMyacc}
            onClose={handleCloseMyacc}
            onClick={handleCloseMyacc}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleCloseMyacc}>
              <div className="flex items-center gap-3">
                <div className='rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer'>
                  <img src='./image/shop-illustration.webp' className='w-full h-full object-cover' alt='Shop Illustration' />
                </div>
                <div className="info">
                  <h1 className='text-[15px] font-[500]'>name</h1>
                  <p className='text-[13px] text-gray-500 font-[400] opacity-70'>email@example.com</p>
                </div>
              </div>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleCloseMyacc}>
              <FaRegUser className="mr-2 text-[17px]" /> <span className='text-[15spx]'>Profile</span>
            </MenuItem>
            <MenuItem onClick={handleCloseMyacc}>
              <AiOutlineLogout className="mr-2 text-[17px]" /> <span className='text-[15spx]'>Logout</span>
            </MenuItem>


          </Menu>

        </div>
        :   <Button className='!btn !btn-small !rounded-full !bg-blue-500 !text-white !w-[70px] h-[30px]'>Login</Button>}

      </div>
   </header>
  );
};

export default Header;