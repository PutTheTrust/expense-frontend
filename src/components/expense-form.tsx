import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useCreateExpenseMutation } from "../apis/expense-api";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(3).max(50),
  price: z.string(),
  category: z.string().min(3).max(50),
  description: z.string().min(3).max(50),
});

const ExpenseForm = () => {
  const userId = useSelector((state: any) => state.authStore.userId);
  const [createExpense] = useCreateExpenseMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
      category: "",
      description: "",
    },
  });

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values) {
      createExpense({
        name: values.name,
        price: values.price,
        category: values.category,
        description: values.description,
        userId: userId,
      })
        .unwrap()
        .then(async () => {
          toast.success("Expense created successfully");
          await timeout(500);
          window.location.reload();
        })
        .catch((error) => toast.error(error.message));
      // console.log(response);
    }
  };
  return (
    <Dialog>
      <DialogTrigger className="bg-custom-green rounded-full h-[44px] px-[5%] text-white">
        Add Expense
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                      <Input placeholder="Watch anime online" {...field} />
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
  );
};

export default ExpenseForm;
