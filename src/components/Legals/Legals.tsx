import Button from "@/components/Button/Button";

export default function MentionsLegales() {
    return (
        <section className="card spy p-6 md:p-16">
            <h1 className="mb-6 text-3xl font-bold">Mentions légales</h1>

            <p className="mb-4">
                Romain Wirth – Développeur web freelance
            </p>
            <p className="mb-4">
                Adresse : 12 rue Exemple, 75000 Paris
            </p>
            <p className="mb-4">
                Email : <a href="mailto:contact@tonsite.com" className="text-blue-400">contact@tonsite.com</a>
            </p>
            <p className="mb-4">
                SIRET : 123 456 789 00012
            </p>
            <p className="mb-4">
                Hébergeur : Vercel, 3400 Hillview Ave, Palo Alto, CA 94304, USA
            </p>
            <p className="mb-4">
                Responsable de publication : Romain Wirth
            </p>

            <p className="mt-6">
                Ces informations sont fournies conformément à la législation française et européenne sur les sites web professionnels.
            </p>

            <div className="mt-8">
                <Button href="/" variant="primary">Retour à l'accueil</Button>
            </div>
        </section>
    );
}
