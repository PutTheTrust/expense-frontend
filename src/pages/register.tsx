import * as z from "zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useRegisterUserMutation } from "../apis/auth-api";
import jwt from "jwt-decode";
import { useDispatch } from "react-redux";
import { saveUser } from "../store/slice/auth-slice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const formSchema = z.object({
  email: z.string().min(3).max(50),
  name: z.string().min(3).max(50),
  password: z.string().min(3).max(50),
});

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "asta@clover.com",
      name: "Asta",
      password: "Password",
    },
  });
  const [registerUser] = useRegisterUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values) {
      // Error handling
      registerUser({
        email: values.email,
        name: values.name,
        password: values.password,
      })
        .unwrap()
        .then((response: any) => {
          // console.log(response);
          if (response.status === "fail") {
            toast.error(response.message);
            return;
          }
          const { token } = response;
          localStorage.setItem("token", token);
          const user = jwt(token);
          dispatch(saveUser(user));
          toast.success("Registration successfully");
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-semibold tracking-widest text-white mb-4">
        REGISTER
      </h1>
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
                    <Input placeholder="1@2.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Yami Sukehiro" type="text" {...field} />
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
                    <Input type="password" {...field} />
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
        <Link className="text-blue-400 pt-4 text-xs" to="/login">
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
