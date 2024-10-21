import { IoLibraryOutline ,IoCarSportOutline } from "react-icons/io5";
import { PiSecurityCameraDuotone ,PiWarehouseLight ,PiSwimmingPoolLight  } from "react-icons/pi";
import { LiaBedSolid } from "react-icons/lia";
import { TbPlayBasketball } from "react-icons/tb";
import { CiMedicalCase } from "react-icons/ci";

const AmenitiesData = [
    {
        id: 1,
        title: "Parking Space",
        cover: <IoCarSportOutline />,
        color:"white"
    },
    {
        id: 2,
        title: "Library Area",
        cover: <IoLibraryOutline />,
        color:"#e0e4cb"
    },
    {
        id: 3,
        title: "Private Security",
        cover: <PiSecurityCameraDuotone />,
        color:"white"
    },
    {
        id: 4,
        title: "Smart House",
        cover: <PiWarehouseLight   />,
        color:"#e0e4cb"
    },
    {
        id: 5,
        title: "Swimming Pool",
        cover: <PiSwimmingPoolLight  />,
        color:"#e0e4cb"
    },
    {
        id: 6,
        title: "King Size Beds",
        cover: <LiaBedSolid />,
        color:"white"
    },
    {
        id: 7,
        title: "Kids Play",
        cover: <TbPlayBasketball />,
        color:"#e0e4cb"
    },
    {
        id: 8,
        title: "Medical Center",
        cover: <CiMedicalCase />,
        color:"white"
    },
]

export default AmenitiesData