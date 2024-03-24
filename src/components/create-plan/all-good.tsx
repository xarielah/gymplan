"use client";

import { useEffect, useState } from "react";

export default function AllGood() {
  return (
    <section>
      <div className="space-y-4 text-center ">
        <h1 className="md:text-4xl text-2xl lg:text-5xl font-bold relative">
          אתם בדרך, עוד כמה רגעים
          <Dots />
        </h1>
        <p className="text-xl">
          התכנית שיצרתם נכנסה לתנור וכרגע בתהליך אפייה, אתם בדרך אל היעד.
        </p>
      </div>
    </section>
  );
}

function Dots() {
  const [dots, setDots] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev === 3 ? 1 : prev + 1));
    }, 300);

    return () => clearInterval(interval);
  }, [dots]);

  return (
    <div className="absolute inline-block">
      {Array.from({ length: 3 }, () => ".").map((_, i) =>
        i < dots ? "." : ""
      )}
    </div>
  );
}
