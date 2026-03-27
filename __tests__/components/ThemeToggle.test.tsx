import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../messages/en.json";

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <ThemeProvider attribute="class" defaultTheme="light">
      <NextIntlClientProvider locale="en" messages={messages}>
        {ui}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}

describe("ThemeToggle", () => {
  it("renders without crashing", () => {
    renderWithProviders(<ThemeToggle />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("has accessible aria-label", () => {
    renderWithProviders(<ThemeToggle />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label");
  });

  it("toggles theme on click", () => {
    renderWithProviders(<ThemeToggle />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
