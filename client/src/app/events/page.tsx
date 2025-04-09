import { ContentList } from "@/components/layout/ContentList";
import { Card, type CardProps } from "@/components/card";

import { getContentBySlug } from "@/data/loaders";
import { EventProps } from "@/types";
import { notFound } from "next/navigation";
import { EventSignupForm } from "@/components/EventSignUpForm";

async function loader(slug: string) {
  const { data } = await getContentBySlug(slug, "/api/events");
  const event = data[0];
  if (!event) throw notFound();
  return { event: event as EventProps, blocks: event?.blocks };
}

interface ParamsProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string; query?: string }>;
}

const EventCard = (props: Readonly<CardProps>) => (
  <Card {...props} basePath="events" />
);

export default async function AllEventsRoute({
  //   params,
  searchParams,
}: ParamsProps) {
  const { query, page } = await searchParams;
  const { event, blocks } = await loader("stay-in-touch");

  return (
    <div className="container">
      <div className="event-page">
        <EventSignupForm blocks={blocks} eventId={event.id.toString()} />
      </div>

      <ContentList
        headline="All Events"
        path="/api/events"
        query={query}
        page={page}
        showSearch
        showPagination
        component={EventCard}
      />
    </div>
  );
}
