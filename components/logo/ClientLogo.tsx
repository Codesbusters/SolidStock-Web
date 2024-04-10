import Image from "next/image";

export default function ClientLogo() {
    return (
        <div>
        <Image
            src="/negosud.png"
            alt="Logo"
            width="180"
            height="180"
        />
        </div>
    );
}