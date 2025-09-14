"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

type FormData = {
  full_name: string;
  phone_number: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Submit the data here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input placeholder="Full Name *" {...register("full_name", { required: "Please enter your full name" })} />
      {errors.full_name && <p className="text-sm text-red-500">{errors.full_name.message}</p>}

      <Input
        placeholder="Phone Number *"
        {...register("phone_number", { required: "Please enter your phone number" })}
      />
      {errors.phone_number && <p className="text-sm text-red-500">{errors.phone_number.message}</p>}

      <Input
        placeholder="Email *"
        {...register("email", {
          required: "Please enter your email",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

      <Textarea
        placeholder="Message *"
        className="min-h-[120px]"
        {...register("message", { required: "Please enter your message" })}
      />
      {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}

      <Button
        type="submit"
        className="w-full bg-[#124D9B] py-6 hover:bg-white hover:text-[#124d9b] border border-transparent hover:border-[#124d9b] transition-all duration-300 text-white"
      >
        SEND MESSAGE
      </Button>
    </form>
  );
}
