'use client';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Input,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
    NavbarMenuToggle, NavbarMenu, NavbarMenuItem
} from "@nextui-org/react";
import ClientLogo from "@/components/logo/ClientLogo";
import React, {useState} from "react";
import {SearchIcon} from "@nextui-org/shared-icons";
import CartIcon from "@/components/buttons/CartIcon";
import {ThemeSwitcher} from "@/components/switches/ThemeSwitcher";

export default function ShopNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
       <>
           <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth={"xl"} >
               <NavbarContent>
                   <NavbarMenuToggle
                       aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                       className="sm:hidden"
                   />
                   <NavbarBrand>
                       <ClientLogo />
                   </NavbarBrand>
               </NavbarContent>
               <NavbarContent as="div" className="items-center" justify="end">
                   <Input
                       classNames={{
                           base: "max-w-full w-full h-10",
                           mainWrapper: "h-full",
                           input: "text-small",
                           inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 ",
                       }}
                       placeholder="Rechercher un produit..."
                       size="sm"
                       startContent={<SearchIcon />}
                       type="search"
                   />
               </NavbarContent>
               <NavbarContent as="div" className="items-center" justify="end">
                   <ThemeSwitcher />
                   <CartIcon />
                   <Dropdown placement="bottom-end">
                       <DropdownTrigger>
                           <Avatar
                               isBordered
                               as="button"
                               className="transition-transform"
                               color="secondary"
                               name="Jason Hughes"
                               size="sm"
                               src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                           />
                       </DropdownTrigger>
                       <DropdownMenu aria-label="Profile Actions" variant="flat" >
                           <DropdownItem key="profile" className="h-14 gap-2">
                               <p className="font-semibold">Jean Lasalle</p>
                           </DropdownItem>
                           <DropdownItem key="settings">Mon compte</DropdownItem>
                           <DropdownItem key="help_and_feedback">Besoin d'aide</DropdownItem>
                           <DropdownItem key="logout" color="danger">
                               Se déconnecter
                           </DropdownItem>
                       </DropdownMenu>
                   </Dropdown>
               </NavbarContent>
               <NavbarMenu>
                   {menuItems.map((item, index) => (
                       <NavbarMenuItem key={`${item}-${index}`}>
                           <Link
                               color={
                                   index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                               }
                               className="w-full"
                               href="#"
                               size="lg"
                           >
                               {item}
                           </Link>
                       </NavbarMenuItem>
                   ))}
               </NavbarMenu>
           </Navbar>
       </>
    );
}