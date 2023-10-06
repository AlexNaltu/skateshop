import EventsGrid from "@/components/EventsGrid";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export const revalidate = 900;

const page = () => {
  return (
    <div className="bg-slate-800 min-h-screen">
      <EventsGrid />
    </div>
  );
};

export default page;
