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
    // xử lý gửi data ở đây
  };

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1200px] mx-auto grid grid-cols-5 gap-6 px-8">
        {/* Cột trái */}
        <div className="flex flex-col justify-start col-span-2">
          <h2 className="text-3xl md:text-4xl leading-[60px] font-bold mb-4">
            Đăng ký nhận tư vấn ngay để có giải pháp tối ưu nhất!
          </h2>
          <p className="text-gray-600">{/* bạn có thể thêm mô tả nhỏ ở đây nếu muốn */}</p>
        </div>

        {/* Cột phải */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full pl-18 col-span-3 space-y-10">
          <div>
            <input
              type="text"
              placeholder="Họ và Tên*"
              {...register("name", { required: "Vui lòng nhập họ tên" })}
              className="w-full border-b text-gray-500 pl-6 border-gray-300 focus:border-[#2760A5] outline-none py-2"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email*"
              {...register("email", { required: "Vui lòng nhập email" })}
              className="w-full border-b text-gray-500 pl-6 border-gray-300 focus:border-[#2760A5] outline-none py-2"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Số điện thoại*"
              {...register("phone", { required: "Vui lòng nhập số điện thoại" })}
              className="w-full border-b text-gray-500 pl-6 border-gray-300 focus:border-[#2760A5] outline-none py-2"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-[#2760A5] hover:bg-white hover:text-[#2760A5] duration-300 border border-[#2760A5] cursor-pointer text-white font-semibold py-3 px-6 w-full"
          >
            Nhận Tư Vấn Ngay
          </button>
        </form>
      </div>
    </section>
  );
}
