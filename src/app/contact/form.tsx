// "use client";

// import { useForm } from "react-hook-form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner";

// type FormData = {
//   full_name: string;
//   phone_number: string;
//   email: string;
//   message: string;
// };

// export default function ContactForm() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<FormData>();

//   const onSubmit = async (data: FormData) => {
//     // Submit the data here
//     reset();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//       <Input placeholder="Full Name *" {...register("full_name", { required: "Please enter your full name" })} />
//       {errors.full_name && <p className="text-sm text-red-500">{errors.full_name.message}</p>}

//       <Input placeholder="Phone Number" {...register("phone_number")} />
//       {errors.phone_number && <p className="text-sm text-red-500">{errors.phone_number.message}</p>}

//       <Input
//         placeholder="Email *"
//         {...register("email", {
//           required: "Please enter your email",
//           pattern: {
//             value: /^\S+@\S+$/i,
//             message: "Invalid email address",
//           },
//         })}
//       />
//       {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

//       <Textarea
//         placeholder="Message *"
//         className="min-h-[120px]"
//         {...register("message", { required: "Please enter your message" })}
//       />
//       {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}

//       <Button
//         type="submit"
//         className="w-full bg-[#124D9B] py-6 hover:bg-white hover:text-[#124d9b] border border-transparent hover:border-[#124d9b] transition-all duration-300 text-white"
//       >
//         SEND MESSAGE
//       </Button>
//       {/*
//       <a
//         href="https://www.mygreatbookkeeper.com.au"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="w-full mt-1 block text-center rounded-lg font-medium text-[16px] bg-[#124D9B] py-3 hover:bg-white hover:text-[#124d9b] border border-transparent hover:border-[#124d9b] transition-all duration-300 text-white"
//       >
//         SEND MORE
//       </a> */}
//     </form>
//   );
// }

"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { useState } from "react";

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
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      await emailjs.send(
        "service_9z9r11f", // thay bằng Service ID của bạn
        "template_rhi77b5", // thay bằng Template ID của bạn
        // data, // dữ liệu form
        {
          to_email: "beluckyy1@gmail.com",
          subject: `New message from ${data.full_name}`,
          full_name: data.full_name,
          email: data.email,
          phone_number: data.phone_number,
          message: data.message,
        },
        "Wd5uYbhW16toZL3G0" // public key từ EmailJS
      );
      toast.success("Message sent!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input placeholder="Full Name *" {...register("full_name", { required: "Please enter your full name" })} />
      {errors.full_name && <p className="text-sm text-red-500">{errors.full_name.message}</p>}

      <Input placeholder="Phone Number" {...register("phone_number")} />
      {errors.phone_number && <p className="text-sm text-red-500">{errors.phone_number.message}</p>}

      <Input
        placeholder="Email *"
        {...register("email", {
          required: "Please enter your email",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
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
        disabled={isLoading}
        type="submit"
        className="w-full bg-[#124D9B] py-6 hover:bg-white hover:text-[#124d9b] border border-transparent hover:border-[#124d9b] transition-all duration-300 text-white"
      >
        SEND MESSAGE
      </Button>
    </form>
  );
}
