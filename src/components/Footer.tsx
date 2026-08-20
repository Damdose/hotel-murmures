import { FooterMenu } from "./FooterMenu";
import { FooterInfo } from "./FooterInfo";
import { FooterCta } from "./FooterCta";
import { StarMark } from "./StarMark";

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-dark-chocolate pt-20 pb-[env(safe-area-inset-bottom)] font-sans text-xs">
      {/* Cette bande était vide : elle sert maintenant de seuil au pied de
          page, avec l'astérisque du logotype pour marquer le passage. */}
      <div className="flex w-full items-center justify-center px-6 md:px-10">
        <div className="flex w-full max-w-screen-xl items-center gap-6">
          <span className="rule-draw h-px flex-1 bg-white/10" />
          <StarMark className="h-3 w-auto shrink-0 text-antique-white/40" />
          <span className="rule-draw h-px flex-1 bg-white/10" />
        </div>
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
