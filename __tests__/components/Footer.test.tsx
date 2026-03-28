import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/layout/Footer";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../messages/en.json";

jest.mock("@/i18n/routing", () => ({
  useRouter: () => ({ replace: jest.fn() }),
  usePathname: () => "/",
  Link: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
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

describe("Footer", () => {
  it("renders the croktile brand", () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText("Crok")).toBeInTheDocument();
    expect(screen.getByText("Tile")).toBeInTheDocument();
  });

  it("renders footer navigation links", () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText("Tutorials")).toBeInTheDocument();
    expect(screen.getByText("Documentation")).toBeInTheDocument();
    expect(screen.getByText("Changelog")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
  });

  it("renders copyright with current year", () => {
    renderWithProviders(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(`© ${year} Croktile. All rights reserved.`)
    ).toBeInTheDocument();
  });

  it("renders GitHub link as external", () => {
    renderWithProviders(<Footer />);
    const githubLink = screen.getByText("GitHub");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
