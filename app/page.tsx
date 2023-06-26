import { BannerStrip, Carousel, Details, Hero } from "@/components";

export default function Home() {
  return (
    <main>
      <section className="max-w-[1440px] flex flex-col justify-center items-center my-0 mx-auto gap-12">
        <Hero />
        <BannerStrip />
        <Carousel />
        <Details />
        <Details />
      </section>
    </main>
  );
}
