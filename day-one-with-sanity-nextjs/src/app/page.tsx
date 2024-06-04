import Image from "next/image";
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";

const EVENTS_QUERY = `*[_type == "event"]{_id, name, slug, date}|order(date desc)`;

export default async function Home() {
  const events = await sanityFetch<SanityDocument[]>({ query: EVENTS_QUERY });

  return (
    <main>
      <div
        style={{
          margin: "200px auto",
          justifyContent: "center",
          maxWidth: "500px",
          backgroundColor: "#FFE8C8",
          padding: "10px",
          border: "1px black solid",
        }}
      >
        <h1
          style={{
            margin: "10px 10px",
            borderBottom: "1px black solid",
            padding: "10px",
            fontWeight: "bold",
          }}
        >
          Events
        </h1>
        {events?.map((event) => (
          <div key={event.id} style={{ display: "flex" }}>
            <Link
              className="hover:underline"
              href={`/events/${event.slug.current}`}
              style={{ margin: "20px 10px 15px 20px" }}
            >
              <h2 className="text-xl font-semibold">{event?.name}</h2>
              <p className="text-gray-500">
                {new Date(event?.date).toLocaleDateString()}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
