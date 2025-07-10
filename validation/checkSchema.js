import { z } from "zod";

export const checkSchema = z.object({
  email: z.boolean(),
  sms: z.boolean(),
  telegram: z.boolean(),
  marketUpdates: z.boolean(),
  betWins: z.boolean(),
  betLosses: z.boolean(),
  socialActivity: z.boolean(),
  walletActivity: z.boolean(),
});