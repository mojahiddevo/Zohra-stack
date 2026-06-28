"use client"

import { LoginSchema } from "@/app/schemas/auth";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DarkToggle } from "@/components/ui/darkToggle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import z from "zod";


type LoginForm = z.infer<typeof LoginSchema>;
export default function LoginPage() {
    const form = useForm<LoginForm>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: zodResolver(LoginSchema)
    });

    const onSubmit = async (data: LoginForm) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        form.reset();
    }



    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="absolute top-4 left-4">
                <Link href="/" className={buttonVariants({ variant: "default" })}><ArrowLeft /> Go Back</Link>
            </div>
            <div className="absolute right-4 top-5">
                <DarkToggle />
            </div>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Create your <Link href="/" className="underline font-bold">ZOHRA</Link> account</CardTitle>
                    <CardDescription>Create your Account by entering your email and password</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                placeholder="johndoe@example.com"
                                {...form.register("email")}
                            />
                            <p className="text-red-600">{form.formState.errors.email?.message}</p>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="********"
                                {...form.register("password")}
                            />
                            <p className="text-red-600">{form.formState.errors.password?.message}</p>
                        </div>
                        <Button type="submit" disabled={form.formState.isSubmitting} className="w-full max-w-sm mt-4">{form.formState.isSubmitting ? <Spinner className="animate-spin" /> : "Sign In"}</Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col">
                    <Separator />
                    <Button className="mt-4 w-full max-w-full"><FcGoogle size={20} /> Or continue with Google</Button>
                </CardFooter>
            </Card>
        </div>
    );
}