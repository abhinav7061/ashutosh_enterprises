import { Banknote, Slack, PieChart, Boxes, LayoutList, ScanSearch, SendToBack, Settings, Truck, User, Users } from 'lucide-react';
export const sidebarLinks = [{
    name: "Dashboard",
    icon: <PieChart height={20} />,
    link: "/dashboard"
}, {
    name: "Catalogs",
    icon: <Slack height={20} />,
    isSubLink: true,
    subLinks: [{
        name: "Products",
        icon: <Boxes height={14} />,
        link: '/dashboard/products'
    }, {
        name: "Categories",
        icon: <LayoutList height={14} />,
        link: '/dashboard/categories'
    }, {
        name: "Coupons",
        icon: <ScanSearch height={14} />,
        link: '/dashboard/coupons'
    }, {
        name: "Attributes",
        icon: <SendToBack height={14} />,
        link: '/dashboard/attributes'
    }, {
        name: "Banners",
        icon: <Banknote height={14} />,
        link: '/dashboard/banners'
    },]
}, {
    name: "Customers",
    icon: <Users height={20} />,
    link: "/dashboard/customers"
}, {
    name: "Staff",
    icon: <User height={20} />,
    link: "/dashboard/staff"
}, {
    name: "Orders",
    icon: <Truck height={20} />,
    link: "/dashboard/orders"
}, {
    name: "Settings",
    icon: <Settings height={20} />,
    link: "/dashboard/settings"
}]
