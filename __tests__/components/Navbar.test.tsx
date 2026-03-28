import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "@/components/layout/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import messages from "../../messages/en.json";

jest.mock("next/navigation", () => ({
  usePathname: () => "/en",
}));

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
    <ThemeProvider attribute="class" defaultTheme="light">
      <NextIntlClientProvider locale="en" messages={messages}>
        {ui}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}

describe("Navbar", () => {
  it("renders all navigation links", () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText("Product")).toBeInTheDocument();
    expect(screen.getByText("Tutorials")).toBeInTheDocument();
    expect(screen.getByText("Docs")).toBeInTheDocument();
    expect(screen.getByText("Changelog")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
  });

  it("renders the GitHub button", () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText("GitHub")).toBeInTheDocument();
  });

  it("renders the logo", () => {
    renderWithProviders(<Navbar />);
    const logo = screen.getByAltText("Croktile");
    expect(logo).toBeInTheDocument();
  });

  it("toggles mobile menu", () => {
    renderWithProviders(<Navbar />);
    const menuButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(menuButton);
    const mobileLinks = screen.getAllByText("Product");
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2);
  });
});
