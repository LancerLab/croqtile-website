import { render, screen } from "@testing-library/react";
import { MdxContent } from "@/components/mdx/MdxContent";

jest.mock("next-mdx-remote", () => ({
  MDXRemote: ({ compiledSource }: any) => (
    <div data-testid="mdx-content">{compiledSource || "rendered"}</div>
  ),
}));

describe("MdxContent", () => {
  const mockSource = {
    compiledSource: "test content rendered",
    scope: {},
    frontmatter: {},
  } as any;

  it("renders MDXRemote with source", () => {
    render(<MdxContent source={mockSource} />);
    expect(screen.getByTestId("mdx-content")).toBeInTheDocument();
  });

  it("wraps content in prose container", () => {
    const { container } = render(<MdxContent source={mockSource} />);
    expect(container.querySelector(".prose-custom")).toBeInTheDocument();
  });

  it("passes source to MDXRemote", () => {
    render(<MdxContent source={mockSource} />);
    expect(screen.getByText("test content rendered")).toBeInTheDocument();
  });
});
