import { useState } from 'react';
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import {Button, Image, Input} from "@nextui-org/react";

    export default function Preference() {

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Mon compte</h1>
            <form className="gap-4 grid grid-cols-10 sm:grid-cols-6">
                {/* Champs d'entrée pour le nom et le prénom */}
                <Input
                    type="text"
                    placeholder="Prénom"
                    value={"firstName"}/>
                <Input
                    type="text"
                    placeholder="Nom"
                    value={"lastName"}/>
                {/* Champs d'entrée pour l'email et le mot de passe */}
                <Input
                    type="email"
                    placeholder="Email"
                    value={"email"}/>
                <Input
                    type="password"
                    placeholder="Mot de passe"
                    value={"password"}/>
                <Button type="submit">Valider</Button>
            </form>
        </div>
    );
    }