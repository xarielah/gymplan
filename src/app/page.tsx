import Hero from "~/components/header/hero";
import CommonQuestions from "~/components/q-and-a/common-questions";
import ReportBugForm from "~/components/report-bug/report-bug-form";

export default function Home() {
  return (
    <section className="space-y-12">
      <Hero />
      <article className="space-y-12" id="container">
        <CommonQuestions />
      </article>
      <ReportBugForm />
    </section>
  );
}
