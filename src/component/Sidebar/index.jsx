import Button from "@mui/material/Button";
import React, { useContext, useState } from "react";
import { Collapse } from 'react-collapse';
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { RiProductHuntLine } from "react-icons/ri";
import { SlLogout } from "react-icons/sl";
import { TbLayoutDashboard } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";
import { MdOutlineBrandingWatermark, MdOutlineManageAccounts } from "react-icons/md";
import { BsBagCheck } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MyContext } from "../../App";

const Sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const context = useContext(MyContext);

  const SubMenuFunct = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const isAddOrUpload = (name) => {
    return name.startsWith("Add") || name.startsWith("Upload");
  };

  const sidebarItems = [
    {
      name: "Dashboard",
      icon: <TbLayoutDashboard className="w-5 h-5" />,
      isDropdown: false,
      link: "/"
    },
    {
      name: "Home Slides",
      icon: <AiOutlineHome className="w-5 h-5" />,
      isDropdown: true,
      submenu: [
        { name: "Home Banner List", link: "/home-banner-list" },
        { name: "Add Home Banner", link: "/add-home-banner" }
      ]
    },
    {
      name: "Category",
      icon: <BiCategoryAlt className="w-5 h-5" />,
      isDropdown: true,
      submenu: [
        { name: "Category List", link: "/category-list" },
        { name: "Add Category", link: "/add-category" },
        { name: "Sub Category List", link: "/sub-category-list" },
        { name: "Add Sub Category", link: "/add-sub-category" }
      ]
    },
    {
      name: "Products",
      icon: <RiProductHuntLine className="w-5 h-5" />,
      isDropdown: true,
      submenu: [
        { name: "Product List", link: "/product" },
        { name: "Upload Product", link: "/upload-product" },
        { name: "Add Product Size", link: "/add-product-size" },
        { name: "Add Product Weight", link: "/add-product-weight" }
      ]
    },
    {
      name: "User",
      icon: <AiOutlineUser className="w-5 h-5" />,
      isDropdown: false,
      link: "/user"
    },
    {
      name: "Orders",
      icon: <BsBagCheck className="w-5 h-5" />,
      isDropdown: false,
      link: "/orders"
    },
    {
      name: "Banner",
      icon: <MdOutlineBrandingWatermark className="w-5 h-5" />,
      isDropdown: true,
      submenu: [
        { name: "Home Banner List", link: "/home-banner-list" },
        { name: "Add Home Banner", link: "/add-home-banner" },
        { name: "Home Banner List 2", link: "/home-banner-list-2" },
        { name: "Add Home Banner 2", link: "/add-home-banner-2" }
      ]
    },
    {
      name: "Blog",
      icon: <CgNotes className="w-5 h-5" />,
      isDropdown: true,
      submenu: [
        { name: "Blog List", link: "/blog-list" },
        { name: "Add Blog", link: "/add-blog" }
      ]
    },
    {
      name: "Manage Logo",
      icon: <MdOutlineManageAccounts className="w-5 h-5" />,
      isDropdown: false,
      link: "/manage-logo"
    },
    {
      name: "Log Out",
      icon: <SlLogout className="w-5 h-5" />,
      isDropdown: false,
      link: "/logout"
    }
  ];

  return (
    <div className="fixed top-0 left-0 w-[20%] h-full !bg-[#f1f1f1] border-r border-[rgba(0,0,0,0.1)] py-2 px-4 z-5 overflow-y-auto">
      <div className="logo w-full">
        <img src="./images/logo1.png" alt="Logo" className="!w-[240px] h-[40px] pb-1 rounded-md" />
      </div>
      <ul className="mt-4">
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <Button
              className="w-full !capitalize !justify-start flex gap-4 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[400] items-center !py-2 hover:!bg-[#e0e0e0] !transition-colors !duration-200"
              onClick={() => item.isDropdown ? SubMenuFunct(index) : null}
              href={!item.isDropdown ? item.link : "#"}
            >
              {item.icon}
              <span>{item.name}</span>
              {item.isDropdown && (
                <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                  {openSubMenu === index ? <IoIosArrowUp className="!text-[20px]" /> : <IoIosArrowDown className="!text-[20px]" />}
                </span>
              )}
            </Button>
            {item.isDropdown && (
              <Collapse isOpened={openSubMenu === index}>
                <ul className="w-full pl-5">
                  {item.submenu.map((subItem, subIndex) => {
                    const isAddBtn = isAddOrUpload(subItem.name);
                    return (
                      <li key={subIndex} className="w-full">
                        {isAddBtn ? (
                          <Button
                            onClick={() => context.setIsOpenUploadPage({ open: true, model: subItem.name })}
                            className="!text-[rgba(0,0,0,0.5)] !capitalize !font-[400] !text-[12px] !pl-4 flex gap-3 !justify-start !py-2 !w-full hover:!bg-gray-200"
                          >
                            <span className="block w-[8px] h-[6px] rounded-full bg-[rgba(0,0,0,0.1)]"></span>
                            {subItem.name}
                          </Button>
                        ) : (
                          <Button
                            className="!text-[rgba(0,0,0,0.5)] !capitalize !font-[400] !text-[12px] !pl-4 flex gap-3 !justify-start !py-2 !w-full hover:!bg-gray-200 "
                            href={subItem.link}
                          >
                            <span className="block w-[8px] h-[6px] rounded-full bg-[rgba(0,0,0,0.1)]"></span>
                            {subItem.name}
                          </Button>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </Collapse>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;