import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const formSchema = z.object({
  email: z.string().min(3).max(50),
  password: z.string().min(3).max(50),
});

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "hiemer@atomic.boom",
      password: "Password",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values) {
      await axios.post("http://localhost:3000/api/v1/auth/signup", {
        data: {
          email: values.email,
          password: values.password,
        },
      });
    }
    // console.log(values);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-semibold tracking-widest">REGISTER</h1>
      <div className="w-[80%] max-w-[500px] bg-dark p-8 rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Crunchyroll" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="49" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant={"secondary"} type="submit">
              Register
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Register;
