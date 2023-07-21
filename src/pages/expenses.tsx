import { useEffect, useState } from "react";
import moment from "moment";

// import Button from "../components/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Card from "../components/card";
import MobileNav from "../components/mobile-nav";
import Sidebar from "../components/sidebar";
import axios from "axios";
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

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface ExpenseProps {
  _id: string;
  name: string;
  date: string;
  price: number;
  category: string;
  description: string;
}

const formSchema = z.object({
  name: z.string().min(3).max(50),
  price: z.string(),
  category: z.string().min(3).max(50),
  description: z.string().min(3).max(50),
});

const Expenses = () => {
  const [expenses, setExpenses] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "fdfddsdsdsdsddsd",
      price: "500",
      category: "dfdfdsdsdsdddsdsf",
      description: "dfddsdsdsdsddsf",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (values) {
      await axios.post("http://localhost:3000/api/v1/expenses", {
        data: {
          name: values.name,
          price: values.price,
          category: values.category,
          description: values.description,
          userId: "64b8c14935ef2e83200681bb",
        },
      });
    }

    //   {
    //     "name": "Burger King",
    //     "price": 49,
    //     "category": "Entertainment",
    //     "description": "Watch anime movies, series online",
    //     "userId": "64b8c14935ef2e83200681bb"
    // }
  };

  useEffect(() => {
    setIsLoading(true);
    const getExpenses = async () => {
      let res = await axios.get(
        "http://localhost:3000/api/v1/expenses/64b8c14935ef2e83200681bb",
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      );
      console.log(res.data.data.expenses);
      setExpenses(res.data.data.expenses);
    };
    getExpenses();
    // console.log(exp);
    // 64b8c14935ef2e83200681bb
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Sidebar />
      <MobileNav />
      <div className="md:ml-[306px] mx-4">
        <div className="flex items-center justify-between mt-4">
          <h1 className="font-bold text-xl md:text-4xl">EXPENSES</h1>
          {/* <Button text="Add Expense" onclick={() => {}} /> */}
          <Dialog>
            <DialogTrigger className="bg-custom-green rounded-full h-[44px] px-[5%] text-white">
              Add Expense
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Expense</DialogTitle>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Crunchyroll" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Price</FormLabel>
                          <FormControl>
                            <Input placeholder="49" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <FormControl>
                            <Input placeholder="Entertainment" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Watch anime online"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit</Button>
                  </form>
                </Form>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid items-center md:grid-cols-2 xl:grid-cols-3 gap-4">
          {expenses?.map((expense: ExpenseProps) => (
            <Card
              key={expense._id}
              title={expense.name}
              date={moment(expense.date).format("MMMM Do YYYY")}
              price={expense.price}
              category={expense.category}
              description={expense.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expenses;

{
}
