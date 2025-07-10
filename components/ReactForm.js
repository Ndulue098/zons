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
        <div className="grid md:grid-cols-2 grid-col-1 gap-4">
          <fieldset className="flex flex-col gap-3">
            {/* first name*/}
            <FormField
            control={form.control}
              name="firstname"
              render={({field}) => <FormItem className="w-full">
                <FormLabel>Frist Name</FormLabel>
                <FormControl>
                    <Input {...field}></Input>
                </FormControl>
                <FormMessage/>
              </FormItem>}
            /> 
            {/* user name*/}
            <FormField
            control={form.control}
              name="username"
              render={({field}) => <FormItem className="w-full">
                <FormLabel>User Name</FormLabel>
                <FormControl>
                    <Input {...field}></Input>
                </FormControl>
                <FormMessage/>
              </FormItem>}
            />
            
            {/* email */}
            <FormField
            control={form.control}
              name="email"
              render={({field}) => <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input {...field}></Input>
                </FormControl>
                <FormMessage/>
              </FormItem>}
            />
            {/* text area */}
            <FormField
            control={form.control}
              name="bio"
              render={({field}) => <FormItem rows={10} className="w-full flex-1 col-span-2 =">
                <FormLabel>Bio</FormLabel>
                <FormControl>
                    <Textarea {...field}/>
                </FormControl>
                <FormMessage/>
              </FormItem>}
            />
          </fieldset>
          <fieldset className="flex flex-col gap-3">
            {/* last name */}
            <FormField
            control={form.control}
              name="lastname"
              render={({field}) => <FormItem className="w-full">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                    <Input {...field}></Input>
                </FormControl>
                <FormMessage/>
              </FormItem>}
            />
            
            {/* location */}
             <FormField
             control={form.control}
              name="location"
              render={({field}) => <FormItem className="w-full">
                <FormLabel>Location</FormLabel>
                <FormControl>
                    <Input {...field}></Input>
                </FormControl>
                <FormMessage/>
              </FormItem>}
            />
            {/* age */}
             <FormField
             control={form.control}
              name="age"
              render={({field}) => <FormItem className="w-full">
                <FormLabel>Age</FormLabel>
                <FormControl>
                    <Input {...field} type={"number"}></Input>
                </FormControl>
                <FormMessage/>
              </FormItem>}
            />

          </fieldset>
        </div>
        <button  type="submit" className="max-w-md mx-auto mt-4 w-full flex items-center justify-center gap-2 p-3 text-sm font-semibold bg-[#FF1A6C] text-white rounded-full hover:bg-red-600 transition">
            <UserPlusIcon/>
            <span>Enter the Zon</span>
        </button> 
      </form>
    </Form>
  );
}
