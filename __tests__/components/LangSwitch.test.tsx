import { render, screen } from "@testing-library/react";
import { LangSwitch } from "@/components/layout/LangSwitch";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../messages/en.json";

jest.mock("@/i18n/routing", () => ({
  useRouter: () => ({ replace: jest.fn() }),
  usePathname: () => "/",
  Link: ({ children, ...props }: any) => <a {...props}>{children}</a>,
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

describe("LangSwitch", () => {
  it("renders the alternate language name", () => {
    renderWithProviders(<LangSwitch />);
    expect(screen.getByText("中文")).toBeInTheDocument();
  });

  it("has correct aria-label", () => {
    renderWithProviders(<LangSwitch />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "Switch to 中文");
  });
});
