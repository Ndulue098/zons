"use client";
import { Checkbox } from "./ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkSchema } from "@/validation/checkSchema";
import { useEffect } from "react";

export default function PreferenceForm() {
  // getting the data;
  
  const defaultValues = {
    email: true,
    sms: false,
    telegram: false,
    marketUpdates: false,
    betWins: false,
    betLosses: false,
    socialActivity: false,
    walletActivity: false,
  };

  const form = useForm({
    resolver: zodResolver(checkSchema),
    defaultValues: defaultValues,
  });
    
  const watched=form.watch()
  useEffect(function(){
    console.log("valus is selected", watched);
  },[watched])

  return (
    <Form {...form}>
      <form>
          <FormLabel className="text-2xl font-bold text-gray-900 mb-3">
            Preferences
          </FormLabel>
          
        <fieldset className="flex flex-col gap-2 mb-6  ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between gap-2">
                <FormLabel className="text-md">Email notification</FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* SMS */}
          <FormField
            control={form.control}
            name="sms"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between gap-2">
                <FormLabel className="text-md">SMS notification</FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Telegram notification */}
          <FormField
            control={form.control}
            name="telegram"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between gap-2">
                <FormLabel className="text-md">Telegram notification</FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        
        <FormLabel className="text-2xl font-bold text-gray-900 mb-3">
              Categories
          </FormLabel>
        <fieldset className="flex flex-col gap-2 ">
          <FormField
            control={form.control}
            name="marketUpdates"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between gap-2">
                <FormLabel className="text-md">Market Updates</FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="betWins"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between gap-2">
                <FormLabel className="text-md">Bet wins</FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="betLosses"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between gap-2">
                <FormLabel className="text-md">Bet losses</FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="socialActivity"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between gap-2">
                <FormLabel className="text-md">Bet/Social activity </FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="walletActivity"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between gap-2">
                <FormLabel className="text-md">Wallet activities</FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
      </form>
    </Form>
  );
}
