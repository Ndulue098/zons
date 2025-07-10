import z from "zod";

export const settingsSchema=z.object({
    firstname:z.string().min(3,"user name must be at least 3 characters"),
    lastname:z.string().min(3,"user name must be at least 3 characters"),
    username:z.string().min(3,"user name must be at least 3 characters"),
    email:z.string().refine((val)=>{
        const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(val);
    },"invalid email address"),
    bio:z.string().optional(),
    age:z.coerce.number().min(18,"must be up to 18"),
    location: z.string().min(2, "location must be at least 2 characters"),
})

