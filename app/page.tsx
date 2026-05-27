import Image from "next/image";

const machines = [
  {
    name: "Comptoir mobile 1 bec",
    image: "/images/machine-mobile.png",
    description:
      "Solution mobile autonome pour servir de la bière pression avec terminal de paiement intégré.",
    points: ["1 bec de distribution", "Paiement intégré", "Mobile et autonome"],
  },
  {
    name: "Comptoir intégré 4 becs",
    image: "/images/machine-integree.png",
    description:
      "Solution intégrée sur remorque pour déployer plusieurs points de service automatisés.",
    points: ["4 becs de distribution", "4 terminaux de paiement", "Idéal événements"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#100c09] text-white">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/logo-beerobot.png" alt="Beerobot" width={54} height={54} />
            <span className="text-xl font-semibold">Les Comptoirs Modernes</span>
          </div>
          <a href="#contact" className="rounded-full bg-amber-500 px-5 py-2 font-semibold text-black">
            Demander un devis
          </a>
        </nav>

        <div className="grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-400">
              Distribution automatisée de boissons
            </p>
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Des solutions innovantes au service de vos idées
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-300">
              Nous concevons des machines de distribution de bière pression automatisées,
              mobiles ou intégrées, disponibles à la vente, à la location ou en prêt avec
              partage de recette.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#machines" className="rounded-full bg-white px-6 py-3 font-semibold text-black">
                Découvrir les machines
              </a>
              <a href="https://wa.me/33663980334" className="rounded-full border border-amber-400 px-6 py-3 font-semibold text-amber-300">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <Image
              src="/images/machine-mobile.png"
              alt="Machine mobile Beerobot"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section id="machines" className="bg-[#18110d] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold">Nos machines</h2>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Des comptoirs automatisés pensés pour les événements, lieux de restauration,
            espaces professionnels et installations temporaires.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {machines.map((machine) => (
              <article key={machine.name} className="overflow-hidden rounded-3xl bg-[#241914]">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  width={1000}
                  height={700}
                  className="h-72 w-full object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold">{machine.name}</h3>
                  <p className="mt-3 text-zinc-300">{machine.description}</p>
                  <ul className="mt-5 space-y-2 text-zinc-200">
                    {machine.points.map((point) => (
                      <li key={point}>✓ {point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {["Vente", "Location", "Prêt avec partage de recette"].map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold text-amber-400">{item}</h3>
              <p className="mt-3 text-zinc-300">
                Une formule adaptable selon votre projet, votre lieu et votre volume de service.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#f4eadf] px-6 py-20 text-black">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold">Parlons de votre projet</h2>
          <p className="mt-4 text-lg text-zinc-700">
            Contactez-nous pour une demande de devis, une location ou une étude d’installation.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a className="rounded-2xl bg-black px-6 py-4 font-semibold text-white" href="mailto:contact@les-comptoirs-modernes.com">
              contact@les-comptoirs-modernes.com
            </a>
            <a className="rounded-2xl bg-amber-500 px-6 py-4 font-semibold text-black" href="tel:+33663980334">
              +33 6 63 98 03 34
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}