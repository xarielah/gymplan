import cn from "~/utils/cn";

export default function BannerHeader({
  title,
  description,
  size,
}: BannerHeaderProps) {
  return (
    <div className="mb-4 flex flex-col justify-center">
      <h1 className={cn("text-[1.1em] font-bold", size ? `text-${size}` : "")}>
        {title}
      </h1>
      {description ? (
        <p
          className="text-sm text-gray-600"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></p>
      ) : (
        ""
      )}
    </div>
  );
}

interface BannerHeaderProps {
  title: string;
  size?: "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  description?: string;
}
