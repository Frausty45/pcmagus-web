import Image from "next/image";

const services = [
  {
    title: "Diagnosztika",
    description:
      "Hibaokok feltárása, teljesítményproblémák, instabilitás, túlmelegedés és furcsa Windows-jelenségek. A gép nem varázslatból lassú. Általában.",
  },
  {
    title: "PC és laptop javítás",
    description:
      "Alkatrészcsere, tisztítás, pasztázás, SSD/RAM bővítés, rendszerhelyreállítás és megbízható állapotfelmérés.",
  },
  {
    title: "Egyedi gépépítés",
    description:
      "Gaming, tanulás, munka vagy kreatív feladatok: alkatrészválasztás, kompatibilitás-ellenőrzés, összeszerelés és tesztelés.",
  },
];

const processSteps = [
  "Megkeresel a hibával vagy az elképzeléssel.",
  "Átnézem a gépet vagy az igényeidet.",
  "Kapsz egy érthető javaslatot és árajánlatot.",
  "Javítás, bővítés vagy építés után tesztelve adom vissza.",
];

const highlights = [
  "Átlátható diagnózis",
  "Nincs felesleges alkatrészcsere",
  "Gaming és workstation szemlélet",
  "Windows és Linux tapasztalat",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05040a] text-zinc-100">
      <section className="relative isolate overflow-hidden">
        <Image
          src="/pcmagus-real-build.jpg"
          alt="Saját építésű PC konfiguráció blurple világítással"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center] opacity-[0.62]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,4,10,0.98)_0%,rgba(5,4,10,0.86)_42%,rgba(5,4,10,0.46)_72%,rgba(52,30,110,0.24)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,rgba(124,58,237,0.34),transparent_32%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#05040a] to-transparent" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between">
            <a href="#" className="text-lg font-semibold tracking-wide">
              PCMagus
            </a>
            <nav
              aria-label="Fő navigáció"
              className="hidden items-center gap-7 text-sm text-zinc-300 md:flex"
            >
              <a href="#services" className="transition hover:text-white">
                Szolgáltatások
              </a>
              <a href="#process" className="transition hover:text-white">
                Folyamat
              </a>
              <a href="#contact" className="transition hover:text-white">
                Kapcsolat
              </a>
            </nav>
          </header>

          <div className="flex flex-1 items-center py-20">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex border border-violet-300/25 bg-violet-400/10 px-3 py-1 text-sm font-medium text-violet-100">
                PC és laptop diagnosztika, javítás, gépépítés
              </p>
              <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                A géped kapjon rendes diagnózist, ne találgatást.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                PCMagus segít hibakeresésben, karbantartásban, bővítésben és
                egyedi PC építésben. Érthető magyarázat, tiszta munka,
                felesleges körök nélkül.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center bg-violet-400 px-6 text-sm font-semibold text-white shadow-[0_0_28px_rgba(139,92,246,0.35)] transition hover:bg-violet-300"
                >
                  Ajánlatot kérek
                </a>
                <a
                  href="#services"
                  className="inline-flex h-12 items-center justify-center border border-violet-200/[0.22] px-6 text-sm font-semibold text-white transition hover:border-violet-200/[0.45] hover:bg-violet-300/[0.10]"
                >
                  Szolgáltatások
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-medium text-zinc-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
            Szolgáltatások
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Javítás, bővítés és építés egy helyen.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="process"
        className="border-y border-violet-300/10 bg-violet-400/[0.04] px-6 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
              Folyamat
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Egyszerű, követhető, nem misztikus.
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-300">
              A cél, hogy pontosan tudd, mi történik a gépeddel, mennyibe kerül,
              és miért az a javasolt megoldás.
            </p>
          </div>

          <ol className="grid gap-4">
            {processSteps.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 border border-violet-300/10 bg-[#05040a] p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-violet-400 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <span className="pt-1 text-zinc-200">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-10"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
            Kapcsolat
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Írd le, mi a gond, vagy milyen gépet szeretnél.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
            A részletes űrlap és árkalkulátor később jön. Első körben elég egy
            rövid üzenet: milyen eszközről van szó, mi a tünet, és mennyire
            sürgős.
          </p>
        </div>

        <div className="border border-violet-300/20 bg-violet-400/10 p-6 shadow-[0_0_36px_rgba(124,58,237,0.12)]">
          <h3 className="text-xl font-semibold text-white">Induló kapcsolat</h3>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            Ide kerül majd az email, telefonszám vagy időpontfoglalás. Addig is
            ez a blokk jelzi, hogy a konverziós pont helye megvan.
          </p>
          <a
            href="mailto:hello@pcmagus.hu"
            className="mt-6 inline-flex h-12 items-center justify-center bg-white px-5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
          >
            hello@pcmagus.hu
          </a>
        </div>
      </section>
    </main>
  );
}
