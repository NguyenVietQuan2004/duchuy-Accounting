import ContactClient from "./contact-client";
import { notFound } from "next/navigation";

export default async function Contact() {
  try {
    // const [poster, addresses] = await Promise.all([posterApi.getPoster(), homeApi.getAddresses()]);

    // const isEmpty =
    //   (!poster?.images_contact || poster.images_contact.length === 0) && (!addresses || addresses.length === 0);

    // if (isEmpty) {
    //   notFound();
    // }

    // return <ContactClient img={poster.images_contact} address={addresses} />;
    return <ContactClient />;
  } catch (error) {
    console.error("Failed to fetch contact data:", error);
    notFound();
  }
}
