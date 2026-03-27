import { getLocale } from "next-intl/server";
import { serialize } from "next-mdx-remote/serialize";
import { getContentBySlug, getSidebarItems } from "@/lib/mdx";
import { MdxContent } from "@/components/mdx/MdxContent";
import { Sidebar } from "@/components/mdx/Sidebar";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function TutorialsPage({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const currentSlug = slug?.[0] ?? "index";
  const sidebarItems = getSidebarItems("tutorials", locale);
  const content = getContentBySlug("tutorials", currentSlug, locale);

  if (!content) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-12">
          <Sidebar items={sidebarItems} basePath="/tutorials" title="Tutorials" />
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-bold mb-4">Tutorials</h1>
            <p className="text-[var(--muted-foreground)]">
              Learn Croktile step by step with hands-on tutorials.
            </p>
            {sidebarItems.length > 0 && (
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {sidebarItems.map((item) => (
                  <a
                    key={item.slug}
                    href={`/tutorials/${item.slug}`}
                    className="block p-4 rounded-xl border hover:border-mint-500/50 hover:bg-[var(--muted)] transition-colors"
                  >
                    <span className="font-medium">{item.title}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  const mdxSource = await serialize(content.content);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex gap-12">
        <Sidebar items={sidebarItems} basePath="/tutorials" title="Tutorials" />
        <article className="flex-1 min-w-0">
          <h1 className="text-3xl font-bold mb-2">{content.meta.title}</h1>
          {content.meta.description && (
            <p className="text-[var(--muted-foreground)] mb-8 text-lg">
              {content.meta.description}
            </p>
          )}
          <MdxContent source={mdxSource} />
        </article>
      </div>
    </div>
  );
}
