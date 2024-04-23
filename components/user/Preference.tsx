import { SetStateAction, useState} from 'react';
import {Card, CardBody, CardFooter} from "@nextui-org/card";
import {Button, Image, Input} from "@nextui-org/react";

export default function Preference() {

    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [password, setPassword] = useState('password');
    const [personalPhone, setPersonalPhone] = useState('123-456-7890');
    const [professionalPhone, setProfessionalPhone] = useState('987-654-3210');
    const [workPhone, setWorkPhone] = useState('555-555-5555');
    const [adress, setAdress] = useState('55 rue du loire');
    const [city, setCity] = useState('Lyon');
    const [country, setCountry] = useState('France');
    const [siren, setSiren] = useState('123456789');
    const [siret, setSiret] = useState('987654321');
    const [rib, setRib] = useState('123456789');

    const handleFocus = (setter: { (value: SetStateAction<string>): void; (value: SetStateAction<string>): void; (value: SetStateAction<string>): void; (value: SetStateAction<string>): void; (value: SetStateAction<string>): void; (value: SetStateAction<string>): void; (value: SetStateAction<string>): void; (value: SetStateAction<string>): void; (value: SetStateAction<string>): void; (value: SetStateAction<string>): void; (value: SetStateAction<string>): void; (value: SetStateAction<string>): void; (value: SetStateAction<string>): void; (value: SetStateAction<string>): void; (arg0: string): void; }) => {
            setter('');
        };

        return (
            <div className="max-w-lg mx-auto">
                <h1 className="text-2xl font-semibold mb-6">Mon compte</h1>
                <form className="grid grid-cols-4 gap-60">
                    <div className="col-span-1">
                        <Input
                            type="text"
                            placeholder="Prénom"
                            value={firstName}
                            onFocus={() => handleFocus(setFirstName)}
                            onChange={(e) => setFirstName(e.target.value)}
                            size="lg"
                            className="w-[200px]"
                        />
                        <Input
                            type="text"
                            placeholder="Nom"
                            value={lastName}
                            onFocus={() => handleFocus(setLastName)}
                            onChange={(e) => setLastName(e.target.value)}
                            size={"lg"}
                            className="w-[200px]"
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onFocus={() => handleFocus(setEmail)}
                            onChange={(e) => setEmail(e.target.value)}
                            size={"lg"}
                            className="w-[200px]"
                        />
                        <Input
                            type="password"
                            placeholder="Mot de passe"
                            value={password}
                            onFocus={() => handleFocus(setPassword)}
                            onChange={(e) => setPassword(e.target.value)}
                            size={"lg"}
                            className="w-[200px]"
                        />
                    </div>
                    <div className="col-span-1">
                        <Input
                            type="text"
                            placeholder="Téléphone personnel"
                            value={personalPhone}
                            onFocus={() => handleFocus(setPersonalPhone)}
                            onChange={(e) => setPersonalPhone(e.target.value)}
                            size={"lg"}
                            className="w-[200px]"
                        />
                        <Input
                            type="text"
                            placeholder="Téléphone professionnel"
                            value={professionalPhone}
                            onFocus={() => handleFocus(setProfessionalPhone)}
                            onChange={(e) => setProfessionalPhone(e.target.value)}
                            size={"lg"}
                            className="w-[200px]"
                        />
                        <Input
                            type="text"
                            placeholder="Téléphone fixe travail"
                            value={workPhone}
                            onFocus={() => handleFocus(setWorkPhone)}
                            onChange={(e) => setWorkPhone(e.target.value)}
                            size={"lg"}
                            className="w-[200px]"
                        />
                        <Input
                            type="text"
                            placeholder="Adresse"
                            value={workPhone}
                            onFocus={() => handleFocus(setWorkPhone)}
                            onChange={(e) => setWorkPhone(e.target.value)}
                            size={"lg"}
                            className="w-[200px]"
                        />
                    </div>
                    <div className="col-span-1">
                        <Input
                            type="text"
                            placeholder="Adresse"
                            value={adress}
                            onFocus={() => handleFocus(setAdress)}
                            onChange={(e) => setAdress(e.target.value)}
                            size={"lg"}
                            className="w-[200px]"
                        />
                        <Input
                            type="text"
                            placeholder="Ville"
                            value={city}
                            onFocus={() => handleFocus(setCity)}
                            onChange={(e) => setCity(e.target.value)}
                            size={"lg"}
                            className="w-[200px]"
                        />
                        <Input
                            type="text"
                            placeholder="Pays"
                            value={country}
                            onFocus={() => handleFocus(setCountry)}
                            onChange={(e) => setCountry(e.target.value)}
                            size={"lg"}
                            className="w-[200px]"
                        />
                    </div>
                    <div className="col-span-1">
                        <Input
                            type="text"
                            placeholder="Siren"
                            value={siren}
                            onFocus={() => handleFocus(setSiren)}
                            onChange={(e) => setSiren(e.target.value)}
                            size={"lg"}
                            className="w-[200px]"
                        />
                        <Input
                            type="text"
                            placeholder="Siret"
                            value={siret}
                            onFocus={() => handleFocus(setSiret)}
                            onChange={(e) => setSiret(e.target.value)}
                            size={"lg"}
                            className="w-[200px]"
                        />
                        <Input
                            type="text"
                            placeholder="Rib"
                            value={rib}
                            onFocus={() => handleFocus(setRib)}
                            onChange={(e) => setRib(e.target.value)}
                            size={"lg"}
                            className="w-[200px]"
                        />
                    </div>
                    <Button type="submit" auto className="col-span-1">
                        Valider
                    </Button>
                </form>
            </div>
        );
    }