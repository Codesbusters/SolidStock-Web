import {Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import cartManager from "../../functions/cart";
import {CiShoppingCart} from "react-icons/ci";
import {Badge} from "@nextui-org/badge";
import cart from "../../functions/cart";


export default function CartIcon() {

    const [cartSize, setCartSize] = useState(cartManager.getCartSize());

    useEffect(() => {
        const handleCartChange = () => {
            setCartSize(cartManager.getCartSize());
        };

        // Listen for the custom event
        window.addEventListener('cartChanged', handleCartChange);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('cartChanged', handleCartChange);
        };
    }, []);

    return (
        <Badge content={cartSize} size={"lg"} color="primary">
        <Dropdown placement="bottom-end">
            <DropdownTrigger>

                <Button isIconOnly={true} variant="light" >
                <CiShoppingCart size={32} />
                </Button>

            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="logout" color="danger">
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </Badge>
    );
}