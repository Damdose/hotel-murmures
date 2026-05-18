import { FooterMenu } from "./FooterMenu";
import { FooterInfo } from "./FooterInfo";
import { FooterCta } from "./FooterCta";

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-dark-chocolate pt-20 font-sans text-xs">
      <div className="flex w-full items-center justify-center px-10">
        <div className="w-full max-w-screen-xl" />
      </div>

      <div className="flex w-full items-start justify-center overflow-hidden border-t border-white/15 bg-dark-chocolate py-px">
        <div className="flex w-full max-w-screen-xl flex-col overflow-hidden md:flex-row md:items-center md:justify-center">
          <FooterMenu />
          <FooterInfo />
        </div>
      </div>

      <FooterCta />
    </footer>
  );
}
