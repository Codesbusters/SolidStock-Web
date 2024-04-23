'use client';
import ProductList from "@/components/productList/ProductList";
import {Button, Input, Select, SelectItem} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";

const genre = [{label:"Monsieur", value:"Monsieur"}, {label:"Madame", value:"Madame"}, {label:"Autre", value:"Autre"}]


export default function Contact() {
    return (
        <div className={"flex flex-col gap-4 w-1/2"}>
            <h1>Formulaire de contact</h1>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input type="text" label="Votre nom"/>
                <Input type="email" label="Email" placeholder="Entrez votre email"/>
            </div>
            <Select
                label="Vous êtes ?"
                fullWidth
            >
                {genre.map((genre) => (
                    <SelectItem key={genre.value} value={genre.value}>
                        {genre.label}
                    </SelectItem>
                ))}
            </Select>
            <Textarea
                label="Description"
                placeholder="Entrez votre message"
                fullWidth
                minRows={20}
            />
            <Button color="primary">
                Envoyer
            </Button>
        </div>
            );
            }
