"use client";

export default function ThankYou({ close }: { close: () => void }) {
  return (
    <div className="fixed w-screen h-screen top-0 bg-black/20 backdrop-blur-sm right-0 flex items-center justify-center">
      <div className="bg-zinc-800 p-8 rounded-md text-2xl">
        <div className="flex justify-end">
          <button onClick={close} className="self-end">
            &#10005;
          </button>
        </div>
        <h1 className="text-4xl font-bold">תודה!</h1>
        <p className="max-w-lg">
          תודה רבה על שיתוף הפעולה. ננסה להתייחס לפניה במידת הצורך בהקדם האפשרי.
        </p>
      </div>
    </div>
  );
}
