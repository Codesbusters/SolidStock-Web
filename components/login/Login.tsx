import React, {useState} from 'react';
import {Card, CardBody, CardFooter} from "@nextui-org/card";
import {Button, Checkbox, Image, Input, Tab, Tabs} from "@nextui-org/react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {MailIcon} from "@nextui-org/shared-icons";
import {Link} from "@nextui-org/link";

export default function Login() {

    return (
        <div className="w-full flex justify-center h-screen">
            <div className="w-full">
                <Card className="w-full h-[500px] p-5">
                    <CardBody>
                        <div className={"flex justify-center items-center mb-5"}>
                            {/*<Logo/>*/}
                        </div>
                        <Tabs
                            fullWidth
                            size="md"
                            aria-label="Tabs form"
                            // selectedKey={selected}
                            // onSelectionChange={() => {
                            //     setError("")
                            //     setSelected(selected === "login" ? "signup" : "login")
                            // }}
                        >
                            <Tab className={"h-full"} key="login" title="Se connecter">
                                <form id={"login"} className={"h-full"} /*onSubmit={loginFormik.handleSubmit}*/>
                                    <div
                                        className={"gap-3 flex justify-center items-center flex-col h-full"}>
                                        {/*<p className={"text-center text-red-600"}>{error}</p>*/}
                                        <Input
                                            isRequired
                                            autoFocus
                                            endContent={
                                                <MailIcon
                                                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                                            }
                                            label="Email"
                                            variant="bordered"
                                            name="email"
                                            type={"email"}
                                            // value={loginFormik.values.email}
                                            // onChange={loginFormik.handleChange}
                                        />
                                        <Input
                                            isRequired
                                            // endContent={
                                            //     <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                                            // }
                                            name="password"
                                            // value={loginFormik.values.password}
                                            // onChange={loginFormik.handleChange}
                                            label="Mot de passe"
                                            type="password"
                                            variant="bordered"
                                        />

                                        <div className="flex py-2 full px-1 w-full justify-between">

                                            <Checkbox
                                                name="keepSignedIn"
                                                // value={loginFormik.values.keepSignedIn}
                                                // onChange={loginFormik.handleChange}
                                                classNames={{
                                                    label: "text-small mr-4",
                                                }}
                                            >
                                                Se souvenir de moi
                                            </Checkbox>
                                            <Link color="primary" href="#" size="sm">
                                                Mot de passe oublié ?
                                            </Link>

                                        </div>


                                        <Button
                                            color="primary"
                                            // isLoading={loginFormik.isSubmitting}
                                            // onClick={loginFormik.handleSubmit}
                                            className={"w-full"}
                                        >
                                            Se Connecter
                                        </Button>
                                    </div>
                                </form>
                            </Tab>
                            <Tab className={"h-full"} key="signup" title="S'inscrire">
                                <form id={"register"} className={"h-full"} /*onSubmit={registerFormik.handleSubmit}*/>
                                    <div
                                        className={"gap-3 flex justify-center items-center flex-col h-full"}>
                                        {/*<p className={"text-center text-red-600"}>{error}</p>*/}
                                        <div className={"flex items-center w-full gap-3"}>
                                            <Input
                                                isRequired
                                                autoFocus
                                                label="Nom"
                                                variant="bordered"
                                                name="firstName"
                                                // value={registerFormik.values.firstName}
                                                // onChange={registerFormik.handleChange}
                                            />
                                            <Input
                                                isRequired
                                                name="lastName"
                                                // value={registerFormik.values.lastName}
                                                // onChange={registerFormik.handleChange}
                                                label="Prénom"
                                                variant="bordered"
                                            />
                                        </div>
                                        <Input
                                            isRequired
                                            autoFocus
                                            endContent={
                                                <MailIcon
                                                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                                            }
                                            label="Email"
                                            variant="bordered"
                                            name="email"
                                            type={"email"}
                                            // value={registerFormik.values.email}
                                            // onChange={registerFormik.handleChange}
                                        />
                                        <Input
                                            isRequired
                                            // endContent={
                                            //     <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                                            // }
                                            name="password"
                                            // value={registerFormik.values.password}
                                            // onChange={registerFormik.handleChange}
                                            label="Mot de passe"
                                            type="password"
                                            variant="bordered"
                                        />

                                        <Checkbox
                                            isRequired={true}
                                            name="accept"
                                            // value={registerFormik.values.accept}
                                            // onChange={registerFormik.handleChange}
                                            classNames={{
                                                label: "text-small",
                                            }}
                                        >
                                            J'accèpte les conditions générales d'utilisation
                                        </Checkbox>

                                        <Button
                                            color="primary"
                                            // isLoading={registerFormik.isSubmitting}
                                            // onClick={registerFormik.handleSubmit}
                                            className={"w-full"}
                                        >
                                            S'inscrire
                                        </Button>
                                    </div>
                                </form>
                            </Tab>
                        </Tabs>
                    </CardBody>
                </Card>

            </div>
        </div>
    );
}