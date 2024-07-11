import { BiHomeAlt2 } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"
import { PiChatCircleBold } from "react-icons/pi"
import { IoPricetagsOutline } from "react-icons/io5"

export const routes = [
    {
        title: "Market Place",
        href: "/market",
        Icon: FiSearch,
    },
    {
        title: "Rankings",
        href: "/ranking",
        Icon: IoPricetagsOutline,
    },
    {
        title: "User Profile",
        href: "/user-profile",
        Icon: PiChatCircleBold,
    },
    {
        title: "Connect To Wallet",
        href: "/wallet",
        Icon: PiChatCircleBold,
    },
]
