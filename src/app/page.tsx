import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Article from "@/components/Article";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";


export default function Page() {
return (
<div className="min-h-dvh">
<Navbar />
<main>
<Hero />
<Events />
<Article />
<ContactUs />
</main>
<Footer />
</div>
);
}