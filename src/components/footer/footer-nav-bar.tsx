import Link from "next/link";
import { DiGithubAlt } from "react-icons/di";

export default function FooterNavBar() {
  return (
    <>
      <div className="flex items-center justify-between gap-4 text-xl md:gap-8">
        <p className="flex items-center gap-1">
          <Link
            target="_blank"
            href="https://github.com/xarielah/training-planner"
          >
            <DiGithubAlt size={24} />
          </Link>
          FOSS{" "}
        </p>
        <p>
          נוצר על ידי{" "}
          <Link target="_blank" href="https://xarielah.dev">
            xarielah.dev
          </Link>
        </p>
      </div>
    </>
  );
}
