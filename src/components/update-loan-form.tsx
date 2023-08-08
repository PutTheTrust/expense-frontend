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
import { useUpdateLoanMutation } from "../apis/loan-api";
import toast from "react-hot-toast";

const formSchema = z.object({
  lender: z.string().min(3).max(50),
  borrowDate: z.string(),
  due: z.string().min(3).max(50),
  status: z.string().min(3).max(50),
  amount: z.string(),
});

interface UpdateLoanFormProps {
  id: string;
  lender: string;
  borrowDate: string;
  due: string;
  status: string;
  amount: string;
}

const UpdateLoanForm: React.FC<UpdateLoanFormProps> = ({
  id,
  lender,
  borrowDate,
  due,
  status,
  amount,
}) => {
  //   const userId = useSelector((state: any) => state.authStore.userId);
  const [updateLoan] = useUpdateLoanMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lender: lender,
      borrowDate: borrowDate,
      due: due,
      status: status,
      amount: amount,
    },
  });
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values) {
      updateLoan({
        lender: values.lender,
        borrowDate: values.borrowDate,
        due: values.due,
        status: values.status,
        amount: values.amount,
        id: id,
      })
        .unwrap()
        .then(async () => {
          toast.success("Loan updated successfully");
          await timeout(500);
          window.location.reload();
        })
        .catch((error) => toast.error(error.message));
    }
  };
  return (
    <Dialog>
      <DialogTrigger className="bg-custom-green rounded-lg h-[44px] px-[5%] text-white">
        Update
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update</DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="lender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lender</FormLabel>
                    <FormControl>
                      <Input placeholder="Shikamaru Nara" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="borrowDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Borrow Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="due"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Due Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <Input placeholder="Unpaid" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input placeholder="5600" {...field} />
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

export default UpdateLoanForm;
