import { getAllContent } from "@/lib/mdx";
import { MdxContent } from "@/components/mdx/MdxContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ChangelogPage({ params }: Props) {
  const { locale } = await params;
  const entries = getAllContent("changelog", locale);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Changelog</h1>
      <p className="text-[var(--muted-foreground)] mb-4">
        What&apos;s new in CroqTile. Latest updates, improvements, and fixes.
      </p>
      <a
        href="https://github.com/LancerLab/croqtile/commits/main"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--accent)] hover:underline mb-10"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        View full commit history on GitHub
      </a>

      {entries.length === 0 ? (
        <div className="text-center py-20 text-[var(--muted-foreground)]">
          <p className="text-lg">No changelog entries yet. Check back soon!</p>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border)]" />
          <div className="space-y-12">
            {entries.map((entry) => (
                <div key={entry.meta.slug} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-mint-500 bg-[var(--background)]" />
                  <div className="text-sm text-[var(--muted-foreground)] mb-1">
                    {entry.meta.date &&
                      new Date(entry.meta.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                  </div>
                  <h2 className="text-xl font-semibold mb-3">
                    {entry.meta.title}
                  </h2>
                  <MdxContent source={entry.content} />
                </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
