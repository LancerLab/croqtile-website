import { render, screen } from "@testing-library/react";
import { FeatureAI } from "@/components/landing/FeatureAI";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../messages/en.json";

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {ui}
    </NextIntlClientProvider>
  );
}

describe("FeatureAI", () => {
  it("renders the title", () => {
    renderWithProviders(<FeatureAI />);
    expect(screen.getByText("Born for AI Tuning")).toBeInTheDocument();
  });

  it("renders stat cards", () => {
    renderWithProviders(<FeatureAI />);
    expect(screen.getByText("12")).toBeInTheDocument();
    expect(screen.getByText("Lines of code")).toBeInTheDocument();
    expect(screen.getByText("340")).toBeInTheDocument();
    expect(screen.getByText("Characters total")).toBeInTheDocument();
  });

  it("renders compiler output demo", () => {
    renderWithProviders(<FeatureAI />);
    expect(screen.getByText("AI-friendly compiler output")).toBeInTheDocument();
  });

  it("renders all 4 AI points", () => {
    renderWithProviders(<FeatureAI />);
    expect(screen.getByText(messages.features.ai.point1)).toBeInTheDocument();
    expect(screen.getByText(messages.features.ai.point4)).toBeInTheDocument();
  });
});
