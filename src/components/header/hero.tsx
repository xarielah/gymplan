import gym from "~/assets/gym.jpg";

export default function Hero() {
  return (
    <section
      className="relative mb-12 flex min-h-72 items-center justify-center bg-zinc-950/70 text-white"
      style={{
        backgroundImage: `url(${gym.src})`,
        backgroundSize: "cover",
        backgroundPositionY: "40%",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="z-50 space-y-4 bg-zinc-950/50 px-16 py-6 text-center">
        <h1 className="text-5xl font-bold lg:text-6xl">הכן תכניתך!</h1>
        <p className="max-w-3xl text-xl">
          GymPlan מאפשר לכם להזין את התכנית אימונים שלכם בצורה נוחה
          ואינטואטיבית, ולהפיק מכך קובץ PDF שניתן להדפיסו. וכל זה{" "}
          <span className="text-2xl font-bold italic underline">בחינם</span>!
        </p>
      </div>
    </section>
  );
}
