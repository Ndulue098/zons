"use client";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { settingsSchema } from "@/validation/settingsSchema";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserPlusIcon } from "lucide-react";


export default function ReactForm({handleSubmit}) {
  const defaultVal={
     firstname:"",
     lastname:"",
     username:"",
     email:"", 
     bio:"",
     age:0,
     location:""
  }

  const form=useForm({
    resolver:zodResolver(settingsSchema),
    defaultValues:defaultVal
  })
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl><Input {...field} type="number" /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-6">
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea {...field} rows={5} placeholder="Tell us about yourself..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-[#FF1A6C] text-white hover:bg-red-600 transition"
          >
            <UserPlusIcon className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </form>
    </Form>
  );
}
