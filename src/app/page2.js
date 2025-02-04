import Image from "next/image";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const paddingBottom = "pb-8";
  return (
    <>
      <div className="grid min-h-screen">
        <div className="flex items-end justify-center pt-20 pb-8">
          <Image
            src="/gfx/logo.png"
            alt="Logo"
            width={180}
            height={38}
            priority
            className="mb-4"
          />
        </div>
        <div className="flex items-center justify-center gap-8 pb-8">
          <button className="px-8 py-2 text-lg border border-black/10 rounded-full hover:bg-black/5 transition-colors">
            Kontakt
          </button>
          <button className="px-8 py-2 text-lg border border-black/10 rounded-full hover:bg-black/5 transition-colors">
            Service
          </button>
        </div>
        <div className="flex flex-col items-center px-4">
          <div className="max-w-2xl w-full">
            <h1 className=" text-pretty text-xl font-bold mb-2">OM EYESEC</h1>
            <p className="text-lg leading-relaxed mb-5">
              Sedan 2000 har Eyesec Larmteknik levererat projekt, installation
              och service inom säkerhet. Med gedigen branschkunskap,
              certifieringar och godkännanden från polis erbjuder vi lösningar
              anpassade för både företag och privatpersoner. Vårt fokus ligger
              på att leverera högkvalitativa produkter och upprätthålla teknisk
              expertis för att du ska känna dig trygg.
            </p>
            <p className="px-5 text-lg font-semibold text-green-700 mb-5">
              Investera i trygghet med Eyesec Larmteknik – vi hjälper dig att
              skapa säkra miljöer med moderna lösningar och personlig service.
            </p>
            <h1 className=" text-pretty text-xl font-bold mb-2">VI KAN..</h1>
            <h2 className="text-lg font-bold mb-2 mt-6  text-right pr-10">
              Inbrottslarm & Brandsäkerhet
            </h2>
            <p>
              Vi erbjuder ett komplett utbud av larm – från grundläggande system
              till avancerade lösningar. Vår certifierade kompetens (klass 1 och
              2) säkerställer att du får den bästa lösningen för att skydda din
              fastighet och dina tillgångar.
            </p>
            <h2 className="text-lg font-bold mb-2 mt-6  text-right pr-10">
              Kameraövervakning
            </h2>
            <p>
              Våra system för kameraövervakning kombinerar modern teknik med
              anpassade lösningar. Vi erbjuder allt från projektering och
              linsberäkningar till installation och service, så att du snabbt
              kan få tillgång till bilder via dator eller mobil.
            </p>
            <h2 className="text-lg font-bold mb-2 mt-6  text-right pr-10">
              Passagesystem, Lås & Nycklar
            </h2>
            <p>
              Genom att erbjuda IP-baserade passagesystem och moderna
              låslösningar minskar vi behovet av fysiska nycklar. Detta ger ökad
              kontroll över åtkomsten och förbättrad säkerhet i dina lokaler.
            </p>
            <h2 className="text-lg font-bold mb-2 mt-6  text-right pr-10">
              Digital Tvättstugebokning & Smarta Hem
            </h2>
            <p>
              Vi erbjuder även digitala lösningar för att underlätta vardagen.
              Med vår digitala bokning av tvättstugan ökar trivseln för de
              boende, medan våra smarta hem-lösningar bidrar till att skapa en
              säker och bekväm miljö.
            </p>
            <h2 className="text-lg font-bold mb-2 mt-6  text-right pr-10">
              Personlarm & Rörelseaktiverat Ljud
            </h2>
            <p className="mb-5">
              För att öka säkerheten i riskfyllda situationer erbjuder vi
              personlarm som snabbt kopplar upp dig mot larmcentralen vid behov.
              Dessutom erbjuder vi rörelseaktiverade ljudlösningar som kan
              användas både för att väcka uppmärksamhet vid obehörig närvaro och
              för andra praktiska tillämpningar.
            </p>
            <h1 className=" text-pretty text-xl font-bold mb-2">
              Säker Drift – Serviceavtal
            </h1>
            <p className="mb-5">
              Med vårt "Säker Drift"-avtal får du regelbunden service av
              utbildade tekniker som testar, kontrollerar och underhåller dina
              säkerhetssystem. Detta bidrar till ökad trygghet och minskar
              risken för felaktiga larm – en viktig del av både försäkringskrav
              och din egen sinnesro.
            </p>
            <h1 className=" text-pretty text-xl font-bold mb-2">
              Integritet & GDPR
            </h1>
            <p>
              Vi hanterar dina personuppgifter med största omsorg och i enlighet
              med EU:s GDPR. Uppgifterna används enbart för att leverera våra
              tjänster och för att skicka relevant information, med möjlighet
              att enkelt avanmäla sig från framtida utskick.
            </p>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}
