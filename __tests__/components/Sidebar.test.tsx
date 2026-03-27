import { render, screen } from "@testing-library/react";
import { Sidebar } from "@/components/mdx/Sidebar";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../messages/en.json";

jest.mock("@/i18n/routing", () => ({
  useRouter: () => ({ replace: jest.fn() }),
  usePathname: () => "/docs/shapes",
  Link: ({ children, href, className, ...props }: any) => (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  ),
  redirect: jest.fn(),
  getPathname: jest.fn(),
}));

const mockItems = [
  { title: "Getting Started", slug: "index" },
  { title: "Shaped Data", slug: "shapes" },
  { title: "Parallel Execution", slug: "parallel" },
];

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {ui}
    </NextIntlClientProvider>
  );
}

describe("Sidebar", () => {
  it("renders all sidebar items", () => {
    renderWithProviders(
      <Sidebar items={mockItems} basePath="/docs" title="Documentation" />
    );
    expect(screen.getByText("Getting Started")).toBeInTheDocument();
    expect(screen.getByText("Shaped Data")).toBeInTheDocument();
    expect(screen.getByText("Parallel Execution")).toBeInTheDocument();
  });

  it("renders the section title", () => {
    renderWithProviders(
      <Sidebar items={mockItems} basePath="/docs" title="Documentation" />
    );
    expect(screen.getByText("Documentation")).toBeInTheDocument();
  });

  it("generates correct links", () => {
    renderWithProviders(
      <Sidebar items={mockItems} basePath="/docs" title="Documentation" />
    );
    const shapesLink = screen.getByText("Shaped Data");
    expect(shapesLink.closest("a")).toHaveAttribute("href", "/docs/shapes");
  });

  it("highlights active item", () => {
    renderWithProviders(
      <Sidebar items={mockItems} basePath="/docs" title="Documentation" />
    );
    const activeLink = screen.getByText("Shaped Data").closest("a");
    expect(activeLink?.className).toContain("mint");
  });
});
