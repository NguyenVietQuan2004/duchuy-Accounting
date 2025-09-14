"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RequestCallback() {
  const img = "https://w.ladicdn.com/s1440x350/57b167c9ca57d39c18a1c57c/7ajql-z520231021041833.jpg";
  return (
    <section
      className="w-full bg-cover bg-center py-8 lg:py-16"
      style={{
        backgroundImage: `url('${img}')`, // 🔥 Replace with your image here
      }}
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left text */}
        <div className="text-[#084ea4]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Request a Free Callback</h2>
          <p className="text-sm opacity-90">Provide your details and we will get back to you as soon as possible.</p>
        </div>

        {/* Right form */}
        <form className="bg-white/90 p-6 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Full Name*" required />
          <Input placeholder="Email*" type="email" required />
          <Input placeholder="Phone Number" />
          <Input placeholder="Website*" required />
          <div className="md:col-span-2">
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2">
              SUBMIT
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
