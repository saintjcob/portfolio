import AboutSection from "./_components/about-section";
import RecentWork from "./_components/recent-work";
import SocialList from "./_components/social-list";

export default function Home() {
  return (
    <section className="relative z-10 mx-auto max-w-screen-sm px-4 py-20 lg:px-0">
      <AboutSection />
      {/* <RecentWork /> */}
      <SocialList />
    </section>
  );
}
