import Link from "next/link";

export default function Main() {
  return(
    <div className="p-3">
      <h1 className="font-extrabold text-4xl">Hello from Home page</h1>
      <Link 
        href="/login"
        className="text-3xl"
      >Login</Link>
      <Link href="/sign-up" className="text-3xl">Sign Up</Link>
    </div>
  );
}