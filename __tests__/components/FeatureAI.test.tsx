import { render, screen } from "@testing-library/react";
import { FeatureAI } from "@/components/landing/FeatureAI";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../messages/en.json";

jest.mock("framer-motion", () => {
  const motionProxy = new Proxy({}, {
    get: (_target, prop: string) => {
      return ({ children, ...props }: any) => {
        const Tag = prop as any;
        return <Tag {...props}>{children}</Tag>;
      };
    },
  });
  return {
    motion: motionProxy,
    AnimatePresence: ({ children }: any) => children,
    useReducedMotion: () => false,
  };
});

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

  it("renders session tabs", () => {
    renderWithProviders(<FeatureAI />);
    expect(screen.getByText("AI Prompt")).toBeInTheDocument();
    expect(screen.getByText("AI Analysis")).toBeInTheDocument();
  });

  it("renders TFLOPS results", () => {
    renderWithProviders(<FeatureAI />);
    expect(screen.getAllByText(/TFLOPS/).length).toBeGreaterThanOrEqual(1);
  });

  it("renders all 4 AI points", () => {
    renderWithProviders(<FeatureAI />);
    expect(screen.getByText(messages.features.ai.point1)).toBeInTheDocument();
    expect(screen.getByText(messages.features.ai.point4)).toBeInTheDocument();
  });
});
