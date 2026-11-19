import { getTranslations } from "next-intl/server";
import { paperGroups } from "@/lib/papers";

export async function HomePapers() {
  const t = await getTranslations("papers");
  const linkClass = "text-sm text-mint-600 dark:text-mint-400 hover:underline break-all";

  return (
    <section id="papers" className="py-20 border-t" aria-labelledby="papers-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="papers-heading" className="text-2xl font-bold mb-8">{t("title")}</h2>
        <div className="grid gap-10 lg:grid-cols-2">
          {paperGroups.map((group) => (
            <div key={group.key}>
              <h3 className="text-lg font-semibold mb-4">{t(group.key)}</h3>
              <ul className="space-y-4">
                {group.papers.map((paper) => (
                  <li key={paper.title} className="p-6 rounded-xl border bg-[var(--card)]">
                    <h4 className="font-semibold mb-2">{paper.title}</h4>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {paper.authors} · {paper.venue}
                    </p>
                    {paper.nomination && (
                      <p className="text-sm text-[var(--muted-foreground)] mt-2">{t("nomination")}</p>
                    )}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3">
                      {paper.doi && (
                        <a href={`https://doi.org/${paper.doi}`} className={linkClass}>
                          DOI: {paper.doi}
                        </a>
                      )}
                      {paper.artifact && (
                        <a href={`https://doi.org/${paper.artifact}`} className={linkClass}>
                          {t("artifact")}: {paper.artifact}
                        </a>
                      )}
                      {paper.arxiv && (
                        <a href={`https://arxiv.org/abs/${paper.arxiv}`} className={linkClass}>
                          arXiv: {paper.arxiv}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
