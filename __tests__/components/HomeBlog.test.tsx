import { render, screen } from "@testing-library/react";
import { HomeBlog } from "@/components/landing/HomeBlog";

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

const mockPosts = [
  {
    title: "Introducing Croktile",
    description: "Our first blog post",
    date: "2026-03-27",
    author: "Team",
    slug: "introducing-croktile",
    tags: ["announcement"],
  },
];

describe("HomeBlog", () => {
  it("renders blog posts", () => {
    render(<HomeBlog posts={mockPosts} />);
    expect(screen.getByText("Introducing Croktile")).toBeInTheDocument();
  });

  it("renders the section title", () => {
    render(<HomeBlog posts={mockPosts} />);
    expect(screen.getByText("Recent highlights")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<HomeBlog posts={mockPosts} />);
    expect(screen.getByText("Our first blog post")).toBeInTheDocument();
  });

  it("renders tags", () => {
    render(<HomeBlog posts={mockPosts} />);
    expect(screen.getByText("announcement")).toBeInTheDocument();
  });

  it("renders 'view all' link", () => {
    render(<HomeBlog posts={mockPosts} />);
    expect(screen.getByText(/View all blog posts/)).toBeInTheDocument();
  });

  it("returns null when no posts", () => {
    const { container } = render(<HomeBlog posts={[]} />);
    expect(container.innerHTML).toBe("");
  });
});
