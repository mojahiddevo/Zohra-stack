import z from "zod";

export const LoginSchema = z.object({
    email: z.string().email("Please enter valid email"),
    password: z.string().min(8, "Password must be at least 8 characters").max(32)
})

export const SignUpSchema = z.object({
    fullname: z.string().min(3, "Full name must be at least 3 characters").max(32),
    email: z.string().email("Please enter valid email"),
    password: z.string().min(8, "Password must be at least 8 characters").max(32),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters").max(32)
})

.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Error will appear under confirmPassword
  });