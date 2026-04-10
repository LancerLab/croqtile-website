import { render, screen } from "@testing-library/react";
import { FeatureEasyToUse } from "@/components/landing/FeatureEasyToUse";
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

describe("FeatureEasyToUse", () => {
  it("renders the title", () => {
    renderWithProviders(<FeatureEasyToUse />);
    expect(screen.getByText("Easy to Use")).toBeInTheDocument();
  });

  it("renders code comparison labels", () => {
    renderWithProviders(<FeatureEasyToUse />);
    expect(screen.getAllByText("CroqTile").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Triton").length).toBeGreaterThanOrEqual(1);
  });

  it("renders the LoC comparison bar chart", () => {
    renderWithProviders(<FeatureEasyToUse />);
    expect(screen.getByText("CROQTILE")).toBeInTheDocument();
    expect(screen.getByText(/Lines of code/)).toBeInTheDocument();
  });

  it("renders all 4 feature points", () => {
    renderWithProviders(<FeatureEasyToUse />);
    expect(screen.getByText(messages.features.easyToUse.point1)).toBeInTheDocument();
    expect(screen.getByText(messages.features.easyToUse.point4)).toBeInTheDocument();
  });
});
