import * as z from "zod";
import { useForm } from "react-hook-form";
import jwtDecode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

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
import { useLoginUserMutation } from "../apis/auth-api";
import { saveUser } from "../store/slice/auth-slice";
import { useDispatch } from "react-redux";

const formSchema = z.object({
  email: z.string().min(3).max(50),
  password: z.string().min(3).max(50),
});

const Login = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "asta@clover.com",
      password: "Password",
    },
  });
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values) {
      // Error handling
      const response: any = await loginUser({
        email: values.email,
        password: values.password,
      });
      console.log(response);
      const { token } = response.data;
      localStorage.setItem("token", token);
      const user = jwtDecode(token);
      dispatch(saveUser(user));
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-semibold tracking-widest text-white mb-4">
        Login
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
              Login
            </Button>
          </form>
        </Form>

        <Link className="text-blue-400 pt-4 text-xs" to="/register">
          No Account? Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
