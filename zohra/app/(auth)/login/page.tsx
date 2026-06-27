import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DarkToggle } from "@/components/ui/darkToggle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, SaudiRiyalIcon } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    

    return(
        <div className="w-full h-screen flex justify-center items-center">
            <div className="absolute top-4 left-4">
                <Link href="/" className={buttonVariants({variant: "default"})}><ArrowLeft /> Go Back</Link>
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
                    <form>
                        <div className="flex flex-col gap-3">
                            
                                <Label htmlFor="email">Email</Label>
                                <Input 
                                    type="email" 
                                    placeholder="johndoe@example.com"
                                />

                                <Label htmlFor="password">Password</Label>
                                <Input 
                                    type="password"
                                    placeholder="********"
                                />

                                
                            </div>
                        <Button className="w-full max-w-sm mt-4">Sign Up</Button>
                        
                    </form>
                    
                </CardContent>

                <CardFooter className="flex flex-col">
                    <Separator />
                    <Button className="mt-4"> Or continue with Google</Button>
                </CardFooter>
            </Card>
        </div>
    );
}