import * as z from "zod";

export const signupValidation = z.object({
    name : z.string().min(2, {message: 'too short'}),
    username: z.string().min(2, {message: 'too short'}),
    email:z.string().min(2, {message: 'too short'}),
    password:z.string().min(8, {message: 'password should be of 8 letters'}),
});