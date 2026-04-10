import { render, screen } from "@testing-library/react";
import { BottomCTA } from "@/components/landing/BottomCTA";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../messages/en.json";

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useReducedMotion: () => false,
}));

jest.mock("@/i18n/routing", () => ({
  useRouter: () => ({ replace: jest.fn() }),
  usePathname: () => "/",
  Link: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
  redirect: jest.fn(),
  getPathname: jest.fn(),
}));

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {ui}
    </NextIntlClientProvider>
  );
}

describe("BottomCTA", () => {
  it("renders the Try CroqTile heading", () => {
    renderWithProviders(<BottomCTA />);
    expect(screen.getByText("CroqTile")).toBeInTheDocument();
  });

  it("renders CTA button", () => {
    renderWithProviders(<BottomCTA />);
    expect(screen.getByText(messages.hero.cta)).toBeInTheDocument();
  });

  it("renders GitHub link", () => {
    renderWithProviders(<BottomCTA />);
    const ghLink = screen.getByText("View on GitHub");
    expect(ghLink.closest("a")).toHaveAttribute("href", "https://github.com/LancerLab/croqtile");
    expect(ghLink.closest("a")).toHaveAttribute("target", "_blank");
  });
});
