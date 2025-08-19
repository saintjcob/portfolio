import LinkAnimated from "./link-animated";

export default function AboutSection() {
  return (
    <div className="about-section max-w-[600px] leading-relaxed tracking-text text-foreground [perspective:400px]">
      <h1 className="text-2xl font-medium">Jakub Ziemba</h1>
      <p className="pt-4">Design Engineer based in Warsaw</p>
      <p className="text-sm text-foreground-dimmed">
        <span className="text-foreground-dimmed">Currently:</span> Design
        Engineer @{" "}
        <LinkAnimated href="https://www.blazity.com">Blazity</LinkAnimated>
      </p>
      {/* <p className="text-sm text-foreground-dimmed">
        <span className="text-foreground-dimmed">Previously:</span> Web
        Developer @{" "}
        <LinkAnimated href="https://www.monterail.com">Monterail</LinkAnimated>
      </p> */}
      <h2 className="pt-8 font-medium text-foreground-dimmed">About</h2>
      <p className="pt-4">
        I am an experienced web developer passionate about crafting beautiful
        and performant websites. I specialize in creating digital experiences
        that seamlessly blend functionality with aesthetics, always striving to
        deliver solutions that are emotionally engaging.
      </p>
    </div>
  );
}
