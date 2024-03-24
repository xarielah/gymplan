import Image from "next/image";
import Link from "next/link";
import muscle from "~/assets/muscle.png";

export default function GymplanLogo() {
  return (
    <Link href="/" aria-label="Navigate to homepage">
      <div className="mx-auto flex items-center justify-center gap-2 border-b-2 border-b-purple-400 bg-zinc-800 px-2 text-center">
        <h1
          className="text-2xl font-bold"
          style={{
            textShadow: "2px 1px 0px rgba(100,100,100, 0.5)",
          }}
        >
          <span className="text-white">Gym</span>
          <span className="text-purple-400">Plan</span>
        </h1>
        <Image width={30} height={30} src={muscle.src} alt="logo" />
      </div>
    </Link>
  );
}
