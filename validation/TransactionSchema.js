import z from "zod";

/* export const TransactionSchema = z.object({
  //   password:z.coerce.number(),
  password: z.string().length(6, "Passcode must be 6 digits"),
  confirmPasscode: z.string().length(6, "Passcode must be 6 digits"),
}); */

export const TransactionSchema = z
  .object({
    password: z
      .string()
      .length(6, "Passcode must be exactly 6 digits"),
    confirmPasscode: z
      .string()
      .length(6, "Passcode must be exactly 6 digits"),
  })
  .refine((data) => data.password === data.confirmPasscode, {
    path: ["confirmPasscode"],
    message: "Passcodes do not match",
  });

// const TransactionSchema = z.object({
//   password: z.string().length(6, "Passcode must be 6 digits"),
// });
