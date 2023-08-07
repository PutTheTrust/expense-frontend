import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  useCreateExpenseMutation,
  useUpdateExpenseMutation,
} from "../apis/expense-api";
import { useSelector } from "react-redux";

const formSchema = z.object({
  name: z.string().min(3).max(50),
  price: z.string(),
  category: z.string().min(3).max(50),
  description: z.string().min(3).max(50),
});

interface UpdateExpenseFormProps {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
}

const UpdateExpenseForm: React.FC<UpdateExpenseFormProps> = ({
  id,
  name,
  price,
  category,
  description,
}) => {
  //   const userId = useSelector((state: any) => state.authStore.userId);
  const [updateExpense] = useUpdateExpenseMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name,
      price: price,
      category: category,
      description: description,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values) {
      updateExpense({
        name: values.name,
        price: values.price,
        category: values.category,
        description: values.description,
        id: id,
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger className="bg-custom-green rounded-full h-[44px] px-[5%] text-white">
        Update Expense
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Expense</DialogTitle>
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

export default UpdateExpenseForm;
