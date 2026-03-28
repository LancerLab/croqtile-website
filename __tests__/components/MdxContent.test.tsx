import { render, screen } from "@testing-library/react";
import { MdxContent } from "@/components/mdx/MdxContent";

jest.mock("next-mdx-remote/rsc", () => ({
  MDXRemote: ({ source }: any) => (
    <div data-testid="mdx-content">{source}</div>
  ),
}));

jest.mock("@/components/mdx/CodeBlock", () => ({
  CodeBlock: ({ code, lang }: any) => (
    <pre data-testid="code-block" data-lang={lang}>
      {code}
    </pre>
  ),
}));

jest.mock("@/components/mdx/MdxLink", () => ({
  MdxLink: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

describe("MdxContent", () => {
  it("renders MDXRemote with source", () => {
    render(<MdxContent source="test content rendered" />);
    expect(screen.getByTestId("mdx-content")).toBeInTheDocument();
  });

  it("wraps content in prose container", () => {
    const { container } = render(<MdxContent source="test" />);
    expect(container.querySelector(".prose-custom")).toBeInTheDocument();
  });

  it("passes source to MDXRemote", () => {
    render(<MdxContent source="test content rendered" />);
    expect(screen.getByText("test content rendered")).toBeInTheDocument();
  });
});
