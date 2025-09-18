import AboutClient from "./about-client";
import { notFound } from "next/navigation";

export default async function Service() {
  try {
    return <AboutClient />;
  } catch (error) {
    console.error("Failed to fetch service data:", error);
    notFound();
  }
}
