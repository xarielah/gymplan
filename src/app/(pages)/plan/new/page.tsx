import ProtectedRoute from "~/components/auth/auth-wrappers/protected-route";
import PlanForm from "~/components/create-plan/plan-form";

export default function NewPlanPage() {
  return (
    <section id="container">
      <ProtectedRoute>
        <PlanForm />
      </ProtectedRoute>
    </section>
  );
}
