import { z } from "zod";

export const useSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Valid email required" })
    .email({ message: "This is not a valid email" }),
});

export type typeSchema = z.infer<typeof useSchema>;
