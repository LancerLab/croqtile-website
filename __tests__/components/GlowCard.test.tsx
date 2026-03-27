import { render, screen, fireEvent } from "@testing-library/react";
import { GlowCard } from "@/components/landing/GlowCard";

describe("GlowCard", () => {
  it("renders children content", () => {
    render(<GlowCard><div>Card content</div></GlowCard>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <GlowCard className="custom-class"><div>test</div></GlowCard>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("handles mouse events without crashing", () => {
    const { container } = render(
      <GlowCard><div>hover me</div></GlowCard>
    );
    const card = container.firstChild as HTMLElement;
    fireEvent.mouseEnter(card);
    fireEvent.mouseMove(card, { clientX: 100, clientY: 100 });
    fireEvent.mouseLeave(card);
    expect(screen.getByText("hover me")).toBeInTheDocument();
  });
});
