import { render, screen } from "@testing-library/react";
import { CodeBlock } from "@/components/landing/CodeBlock";

describe("CodeBlock", () => {
  it("renders code content", () => {
    render(<CodeBlock code="const x = 1;" />);
    expect(screen.getByText("const x = 1;")).toBeInTheDocument();
  });

  it("renders filename when provided", () => {
    render(<CodeBlock code="hello" filename="test.co" />);
    expect(screen.getByText("test.co")).toBeInTheDocument();
  });

  it("renders line numbers", () => {
    render(<CodeBlock code={"line1\nline2\nline3"} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("renders window dots when filename is present", () => {
    const { container } = render(<CodeBlock code="x" filename="test.co" />);
    const dots = container.querySelectorAll(".rounded-full");
    expect(dots.length).toBe(3);
  });
});
