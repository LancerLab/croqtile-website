import { render, screen } from "@testing-library/react";
import { HomeChangelog } from "@/components/landing/HomeChangelog";

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useReducedMotion: () => false,
}));

jest.mock("@/i18n/routing", () => ({
  useRouter: () => ({ replace: jest.fn() }),
  usePathname: () => "/",
  Link: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

const mockEntries = [
  { title: "v0.1.0 Release", date: "2026-03-27", slug: "v0.1.0" },
  { title: "v0.0.9 Beta", date: "2026-03-20", slug: "v0.0.9" },
];

describe("HomeChangelog", () => {
  it("renders changelog entries", () => {
    render(<HomeChangelog entries={mockEntries} />);
    expect(screen.getByText("v0.1.0 Release")).toBeInTheDocument();
    expect(screen.getByText("v0.0.9 Beta")).toBeInTheDocument();
  });

  it("renders the section title", () => {
    render(<HomeChangelog entries={mockEntries} />);
    expect(screen.getByText("Changelog")).toBeInTheDocument();
  });

  it("renders 'see more' link", () => {
    render(<HomeChangelog entries={mockEntries} />);
    expect(screen.getByText(/See what's new/)).toBeInTheDocument();
  });

  it("returns null when no entries", () => {
    const { container } = render(<HomeChangelog entries={[]} />);
    expect(container.innerHTML).toBe("");
  });
});
