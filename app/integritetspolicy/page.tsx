import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Integritetspolicy & Cookiepolicy – Projektgaranti Stockholm AB',
  description:
    'Läs om hur Projektgaranti Stockholm AB behandlar personuppgifter och använder cookies enligt GDPR.',
}

export default function IntegritetspolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple header */}
      <header className="bg-dark-bg text-white py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
          >
            ← Tillbaka till startsidan
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold">Integritetspolicy &amp; Cookiepolicy</h1>
          <p className="text-gray-400 mt-2 text-sm">Senast uppdaterad: mars 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 prose prose-gray max-w-none">
        {/* 1. Personuppgiftsansvarig */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Personuppgiftsansvarig</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Personuppgiftsansvarig för behandlingen av dina personuppgifter är:
          </p>
          <address className="not-italic bg-gray-50 rounded-xl p-5 text-gray-700 text-sm leading-loose border border-gray-200">
            <strong>Projektgaranti Stockholm AB</strong><br />
            {/* TODO: Ersätt 559XXXXX-XXXX med faktiskt organisationsnummer innan publicering */}
            Organisationsnummer: 559XXXXX-XXXX<br />
            Ekerövägen 51, 178 37 Ekerö<br />
            Telefon:{' '}
            <a href="tel:+46707401383" className="text-primary hover:underline">
              +46 70 740 1383
            </a>
            <br />
            E-post:{' '}
            <a href="mailto:info@projektgarantiab.se" className="text-primary hover:underline">
              info@projektgarantiab.se
            </a>
          </address>
        </section>

        {/* 2. Vilka uppgifter vi samlar in */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Vilka uppgifter vi samlar in</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Vi samlar in personuppgifter som du frivilligt lämnar till oss via kontaktformuläret på
            webbplatsen. Det kan röra sig om:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Namn</li>
            <li>E-postadress</li>
            <li>Telefonnummer (valfritt)</li>
            <li>Meddelande/projektbeskrivning</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-3">
            Vi samlar inte in känsliga personuppgifter och behandlar inga uppgifter om barn utan
            vårdnadshavares samtycke.
          </p>
        </section>

        {/* 3. Ändamål och rättslig grund */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Ändamål och rättslig grund</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-600 border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border border-gray-200">Ändamål</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border border-gray-200">Rättslig grund</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border border-gray-200">Besvara förfrågningar via kontaktformuläret</td>
                  <td className="py-3 px-4 border border-gray-200">Samtycke (artikel 6.1 a GDPR)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border border-gray-200">Upprätta och fullgöra avtal</td>
                  <td className="py-3 px-4 border border-gray-200">Avtal (artikel 6.1 b GDPR)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border border-gray-200">Uppfylla rättsliga skyldigheter (t.ex. bokföring)</td>
                  <td className="py-3 px-4 border border-gray-200">Rättslig förpliktelse (artikel 6.1 c GDPR)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Lagring och radering */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Lagring och radering</h2>
          <p className="text-gray-600 leading-relaxed">
            Uppgifter som lämnats via kontaktformuläret sparas under den tid som krävs för att
            hantera din förfrågan, och raderas senast 24 månader efter sista kontakten om inget
            avtal ingåtts. Uppgifter kopplade till avtal och fakturering sparas i enlighet med
            bokföringslagen (7 år).
          </p>
        </section>

        {/* 5. Delning med tredje part */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Delning med tredje part</h2>
          <p className="text-gray-600 leading-relaxed">
            Vi säljer aldrig dina personuppgifter. Uppgifterna kan delas med underleverantörer som
            hjälper oss att driva verksamheten (t.ex. e-posttjänst) under förutsättning att dessa
            parter behandlar uppgifterna i enlighet med GDPR och ingått personuppgiftsbiträdesavtal
            med oss. Uppgifterna överförs inte utanför EU/EES utan lämpliga skyddsåtgärder.
          </p>
        </section>

        {/* 6. Dina rättigheter */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Dina rättigheter</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Enligt GDPR har du rätt att:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><strong>Få tillgång</strong> till de uppgifter vi behandlar om dig.</li>
            <li><strong>Begära rättelse</strong> av felaktiga uppgifter.</li>
            <li><strong>Begära radering</strong> (&quot;rätten att bli glömd&quot;) när uppgifterna inte längre behövs.</li>
            <li><strong>Begära begränsning</strong> av behandlingen under vissa omständigheter.</li>
            <li><strong>Invända</strong> mot behandling som grundas på berättigat intresse.</li>
            <li><strong>Återkalla samtycke</strong> när som helst, utan att det påverkar lagenligheten av tidigare behandling.</li>
            <li><strong>Dataportabilitet</strong> – att få ut dina uppgifter i ett strukturerat, maskinläsbart format.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            För att utöva dina rättigheter kontaktar du oss på{' '}
            <a href="mailto:info@projektgarantiab.se" className="text-primary hover:underline">
              info@projektgarantiab.se
            </a>
            . Du har även rätt att lämna klagomål till{' '}
            <a
              href="https://www.imy.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Integritetsskyddsmyndigheten (IMY)
            </a>
            .
          </p>
        </section>

        {/* 7. Cookiepolicy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Cookiepolicy</h2>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Vad är cookies?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cookies är små textfiler som lagras i din webbläsare när du besöker en webbplats. De
            används för att webbplatsen ska fungera korrekt, komma ihåg dina inställningar och
            förbättra din upplevelse.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Vilka cookies använder vi?</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-gray-600 border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border border-gray-200">Cookie</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border border-gray-200">Syfte</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border border-gray-200">Varaktighet</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border border-gray-200 font-mono text-xs">cookie_consent</td>
                  <td className="py-3 px-4 border border-gray-200">Sparar ditt cookiesamtycke</td>
                  <td className="py-3 px-4 border border-gray-200">Nödvändig</td>
                  <td className="py-3 px-4 border border-gray-200">365 dagar</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Vi använder för närvarande inga spårnings-, analys- eller marknadsföringscookies.
            Om detta förändras kommer denna policy att uppdateras och du kommer att tillfrågas om
            samtycke på nytt.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Hantera cookies</h3>
          <p className="text-gray-600 leading-relaxed">
            Du kan när som helst ändra eller återkalla ditt cookiesamtycke genom att klicka på{' '}
            <strong>Hantera cookies</strong> i sidfoten på webbplatsen. Du kan även stänga av
            cookies i din webbläsares inställningar, men det kan påverka webbplatsens funktionalitet.
          </p>
        </section>

        {/* 8. Säkerhet */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Säkerhet</h2>
          <p className="text-gray-600 leading-relaxed">
            Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina
            personuppgifter mot obehörig åtkomst, förlust eller förstörelse i enlighet med GDPR
            artikel 32.
          </p>
        </section>

        {/* 9. Ändringar */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Ändringar i denna policy</h2>
          <p className="text-gray-600 leading-relaxed">
            Vi kan uppdatera denna policy vid behov. Senaste versionen publiceras alltid på denna
            sida med uppdateringsdatum angivet längst upp. Vid väsentliga förändringar meddelas du
            via cookiebanderollen på webbplatsen.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Kontakta oss</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Har du frågor om hur vi hanterar dina personuppgifter är du välkommen att kontakta oss:
          </p>
          <ul className="mt-3 space-y-1 text-sm text-gray-600">
            <li>
              E-post:{' '}
              <a href="mailto:info@projektgarantiab.se" className="text-primary hover:underline">
                info@projektgarantiab.se
              </a>
            </li>
            <li>
              Telefon:{' '}
              <a href="tel:+46707401383" className="text-primary hover:underline">
                +46 70 740 1383
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
