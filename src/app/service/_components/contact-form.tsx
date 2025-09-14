"use client";

import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  phone: string;
};

export default function ContactFormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // handle form submission here
  };

  return (
    <section className="bg-white py-16 lg:py-32">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 px-8">
        {/* Left Column */}
        <div className="flex flex-col justify-start col-span-2">
          <h2 className="text-3xl leading-10 text-center md:text-4xl lg:leading-[60px] font-bold mb-4">
            Sign Up for a Consultation Now to Get the Best Solution!
          </h2>
          <p className="text-gray-600">{/* optional small description here */}</p>
        </div>

        {/* Right Column */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full lg:pl-18 lg:col-span-3 space-y-10">
          <div>
            <input
              type="text"
              placeholder="Full Name*"
              {...register("name", { required: "Please enter your full name" })}
              className="w-full border-b text-gray-500 pl-6 border-gray-300 focus:border-[#2760A5] outline-none py-2"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email*"
              {...register("email", { required: "Please enter your email" })}
              className="w-full border-b text-gray-500 pl-6 border-gray-300 focus:border-[#2760A5] outline-none py-2"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Phone Number*"
              {...register("phone", { required: "Please enter your phone number" })}
              className="w-full border-b text-gray-500 pl-6 border-gray-300 focus:border-[#2760A5] outline-none py-2"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-[#2760A5] hover:bg-white hover:text-[#2760A5] duration-300 border border-[#2760A5] cursor-pointer text-white font-semibold py-3 px-6 w-full"
          >
            Get Consultation Now
          </button>
        </form>
      </div>
    </section>
  );
}
