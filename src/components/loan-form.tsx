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
import { useCreateLoanMutation } from "../apis/loan-api";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const formSchema = z.object({
  lender: z.string().min(3).max(50),
  borrowDate: z.string(),
  due: z.string().min(3).max(50),
  status: z.string().min(4).max(50),
  amount: z.string().min(1),
});

interface LoanProps {
  text: string;
  data?: any;
}

const LoanForm: React.FC<LoanProps> = ({ text, data }) => {
  const userId = useSelector((state: any) => state.authStore.userId);
  if (data) {
    console.log(data);
  }
  const [createLoan] = useCreateLoanMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      lender: "",
      borrowDate: "",
      due: "",
      status: "Unpaid",
      amount: "",
    },
  });
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values) {
      createLoan({
        lender: values.lender,
        borrowDate: values.borrowDate,
        due: values.due,
        status: values.status,
        amount: values.amount,
        userId: userId,
      })
        .unwrap()
        .then(async () => {
          toast.success("Loan created successfully");
          await timeout(500);
          window.location.reload();
        })
        .catch((error) => toast.error(error.message));
    }
  };
  return (
    <Dialog>
      <DialogTrigger className="bg-custom-green rounded-full h-[44px] px-[5%] text-white">
        {text}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{text}</DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="lender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lender</FormLabel>
                    <FormControl>
                      <Input placeholder="Marshall D. Teach" {...field} />
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
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
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

export default LoanForm;
