import { render, screen } from "@testing-library/react";
import { FeatureCard } from "@/components/landing/FeatureCard";

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => children,
  useReducedMotion: () => false,
}));

describe("FeatureCard", () => {
  const defaultProps = {
    icon: <span data-testid="icon">icon</span>,
    title: "Test Title",
    subtitle: "Test Subtitle",
    description: "Test description text",
  };

  it("renders title, subtitle, and description", () => {
    render(<FeatureCard {...defaultProps} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByText("Test description text")).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(
      <FeatureCard {...defaultProps}>
        <div>Child content</div>
      </FeatureCard>
    );
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("renders the icon", () => {
    render(<FeatureCard {...defaultProps} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
