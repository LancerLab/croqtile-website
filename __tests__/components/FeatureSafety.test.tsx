import { render, screen } from "@testing-library/react";
import { FeatureSafety } from "@/components/landing/FeatureSafety";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../messages/en.json";

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => children,
  useReducedMotion: () => false,
}));

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {ui}
    </NextIntlClientProvider>
  );
}

describe("FeatureSafety", () => {
  it("renders the title", () => {
    renderWithProviders(<FeatureSafety />);
    expect(screen.getByText("Compile-Time Safety")).toBeInTheDocument();
  });

  it("renders compile check toggle", () => {
    renderWithProviders(<FeatureSafety />);
    expect(screen.getByText(/Compile-time/)).toBeInTheDocument();
  });

  it("renders runtime check toggle", () => {
    renderWithProviders(<FeatureSafety />);
    expect(screen.getByText(/Runtime/)).toBeInTheDocument();
  });

  it("renders all 3 safety points", () => {
    renderWithProviders(<FeatureSafety />);
    expect(screen.getByText(messages.features.safety.point1)).toBeInTheDocument();
    expect(screen.getByText(messages.features.safety.point2)).toBeInTheDocument();
    expect(screen.getByText(messages.features.safety.point3)).toBeInTheDocument();
  });
});
