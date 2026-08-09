const proofItems = ["20 articles", "4 categories", "Written by AL", "3–6 min reads", "Zero fluff"];

export default function TrustRow() {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center"
      aria-label="About Sharpline"
    >
      {proofItems.map((item, i) => (
        <span key={item} className="flex items-center gap-5">
          <span className="text-[13px] font-medium text-ink-muted">{item}</span>
          {i < proofItems.length - 1 && (
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" aria-hidden="true" />
          )}
        </span>
      ))}
    </div>
  );
}
