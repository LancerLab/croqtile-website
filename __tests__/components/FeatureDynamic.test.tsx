import { render, screen } from "@testing-library/react";
import { FeatureDynamic } from "@/components/landing/FeatureDynamic";
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

describe("FeatureDynamic", () => {
  it("renders the title", () => {
    renderWithProviders(<FeatureDynamic />);
    expect(screen.getByText("Dynamic Shapes")).toBeInTheDocument();
  });

  it("renders the symbolic dimension badges", () => {
    renderWithProviders(<FeatureDynamic />);
    expect(screen.getByText("M")).toBeInTheDocument();
    expect(screen.getByText("N")).toBeInTheDocument();
    expect(screen.getByText("K")).toBeInTheDocument();
  });

  it("renders the code example file tab", () => {
    renderWithProviders(<FeatureDynamic />);
    expect(screen.getByText("dynamic_matmul.co")).toBeInTheDocument();
  });
});
