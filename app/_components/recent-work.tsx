import LinkWithPreview from "./link-with-preview";

export default function RecentWork() {
  return (
    <div className="pt-8">
      <h2 className="font-medium text-foreground-dimmed">Recent Work</h2>
      <ul className="mt-4 space-y-1">
        <li>
          <LinkWithPreview href="https://acceltec.de">Acceltec</LinkWithPreview>
        </li>
        {/* <li>
          <LinkWithPreview href="https://natimakeupik.com">
            Nati Makeupik
          </LinkWithPreview>
        </li> */}
        {/* <li>
          <LinkWithPreview href="https://www.monterail.com">
            Monterail
          </LinkWithPreview>
        </li> */}
      </ul>
    </div>
  );
}
