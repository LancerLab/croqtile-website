import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/landing/Hero";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../messages/en.json";

jest.mock("@/i18n/routing", () => ({
  useRouter: () => ({ replace: jest.fn() }),
  usePathname: () => "/",
  Link: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
  redirect: jest.fn(),
  getPathname: jest.fn(),
}));

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
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

describe("Hero", () => {
  it("renders the tagline", () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText(messages.hero.tagline)).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText(messages.hero.subtitle)).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText(messages.hero.cta)).toBeInTheDocument();
    expect(screen.getByText(messages.hero.learnMore)).toBeInTheDocument();
  });

  it("renders the code demo", () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText("matmul.co")).toBeInTheDocument();
  });

  it("renders TileFlow badge", () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText("TileFlow Programming Paradigm")).toBeInTheDocument();
  });
});
