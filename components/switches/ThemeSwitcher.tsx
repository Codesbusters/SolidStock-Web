'use client';
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {Switch} from "@nextui-org/switch";
import {MoonIcon, SunIcon} from "@nextui-org/shared-icons";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null

    return (
        <div>
            <Switch
                defaultSelected={theme === 'dark'}
                size="lg"
                color="primary"
                startContent={<SunIcon />}
                endContent={<MoonIcon />}
                onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
            </Switch>
        </div>
    )
};