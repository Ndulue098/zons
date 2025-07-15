import { useForm, useWatch } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "./ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionSchema } from "@/validation/TransactionSchema";

export default function TransactionForm({ handleSubmit,setShowPassCode}) {
  const form = useForm({
    resolver: zodResolver(TransactionSchema),
    defaultValues: {
    //   password: "",
    },
  });

  const password = useWatch({
    control: form.control,
    name: "password",
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data)=>{
        handleSubmit(data);
        setShowPassCode(false)
      })}>
        <FormLabel className="text-lg font-semibold mb-4 text-gray-800 text-center">
          Create Transaction Passcode
        </FormLabel>
        <FormLabel className="flex flex-col mb-4 w-full ">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700 mb-1">
                  New Passcode
                </FormLabel>
                <FormControl>
                  {/* <Input {...field} /> */}
                  <div>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} style={{ WebkitTextSecurity: "disc", textSecurity: "disc" }} />
                        <InputOTPSlot index={1} style={{ WebkitTextSecurity: "disc", textSecurity: "disc" }} />
                        <InputOTPSlot index={2} style={{ WebkitTextSecurity: "disc", textSecurity: "disc" }} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} style={{ WebkitTextSecurity: "disc", textSecurity: "disc" }} />
                        <InputOTPSlot index={4} style={{ WebkitTextSecurity: "disc", textSecurity: "disc" }} />
                        <InputOTPSlot index={5} style={{ WebkitTextSecurity: "disc", textSecurity: "disc" }} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Confirm Passcode */}
          <FormField
            control={form.control}
            name="confirmPasscode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Passcode
                </FormLabel>
                <FormControl>
                  {/* <Input {...field} /> */}
                  <div>
                    <InputOTP
                      maxLength={6}
                      {...field}
                      disabled={!password }
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} style={{ WebkitTextSecurity: "disc", textSecurity: "disc" }} />
                        <InputOTPSlot index={1} style={{ WebkitTextSecurity: "disc", textSecurity: "disc" }} />
                        <InputOTPSlot index={2} style={{ WebkitTextSecurity: "disc", textSecurity: "disc" }} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} style={{ WebkitTextSecurity: "disc", textSecurity: "disc" }} />
                        <InputOTPSlot index={4} style={{ WebkitTextSecurity: "disc", textSecurity: "disc" }} />
                        <InputOTPSlot index={5} style={{ WebkitTextSecurity: "disc", textSecurity: "disc" }} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormLabel>
        <button
          type="submit"
        //   onClick={()=>setShowPassCode(false)}
          className="w-full rounded-full bg-[#FF1A6C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
        >
          Create Passcode
        </button>
      </form>
    </Form>
  );
}
