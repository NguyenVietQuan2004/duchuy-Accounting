import ServiceClient from "./service-client";
import { notFound } from "next/navigation";

export default async function Service() {
  try {
    return <ServiceClient />;
  } catch (error) {
    console.error("Failed to fetch service data:", error);
    notFound();
  }
}
