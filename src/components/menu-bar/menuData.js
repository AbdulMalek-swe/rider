import { RxDashboard } from "react-icons/rx";
import { IoColorPaletteOutline } from "react-icons/io5";
import { RiGalleryFill, RiProductHuntLine } from "react-icons/ri";
import { FaUnity } from "react-icons/fa";
import { CgAttribution } from "react-icons/cg";
import { HiBars3 } from "react-icons/hi2";
import {
  MdOutlineProductionQuantityLimits,
  MdBrandingWatermark,
  MdSettingsAccessibility,
  MdOutlineCategory,
} from "react-icons/md";

export const menuData = [
    {
      title: "Dashboard",
      icon: <RxDashboard></RxDashboard>, 
      path: "/dashboard",
    },
    {
      title: "Category",
      icon: MdOutlineCategory,
      path: "/dashboard/category",
    },
    {
      title: "Banner",
      icon: RiGalleryFill,
      path: "/dashboard/banner",
    },
    {
      title: "Brand",
      icon: MdBrandingWatermark,
      path: "/dashboard/brand",
    },
    {
      title: "Product",
      icon: MdOutlineProductionQuantityLimits,
      path: "/dashboard/product",
    },
    {
      title: "Product Variant",
      icon: RiProductHuntLine,
      childrens: [
        {
          title: "Color",
          icon: IoColorPaletteOutline,
          path: "/dashboard/color",
        },
        {
          title: "Unit",
          icon: FaUnity,
          path: "/dashboard/unit",
        },
        {
          title: "Attribute",
          icon: CgAttribution,
          path: "/dashboard/attribute",
        },
        {
          title: "Product Variant",
          icon: RiProductHuntLine,
          path: "/dashboard/product-variant",
        },
      ],
    },
    {
      title: "WebSetting",
      icon: MdSettingsAccessibility,
      path: "/dashboard/web-setting",
    },
  ];
  