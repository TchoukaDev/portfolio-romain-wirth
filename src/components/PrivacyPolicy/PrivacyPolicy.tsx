import Button from "@/components/Button/Button";

export default function PolitiqueConfidentialite() {
    return (
        <section className="card spy p-6 md:p-16">
            <h1 className="mb-6 text-3xl font-bold">Politique de confidentialité</h1>

            <p className="mb-4">
                Votre vie privée est importante pour moi. Cette politique explique quelles données personnelles je collecte, pourquoi et comment je les utilise.
            </p>

            <h2 className="mt-6 mb-2 text-xl font-semibold">Données collectées</h2>
            <p className="mb-4">
                Lorsque vous remplissez le formulaire de contact, je collecte votre nom et votre adresse e-mail.
            </p>

            <h2 className="mt-6 mb-2 text-xl font-semibold">Utilisation des données</h2>
            <p className="mb-4">
                Ces informations sont utilisées uniquement pour répondre à vos demandes et ne sont pas partagées avec des tiers.
            </p>

            <h2 className="mt-6 mb-2 text-xl font-semibold">Durée de conservation</h2>
            <p className="mb-4">
                Les données sont conservées pendant une durée maximale d'un an à compter de votre dernier contact.
            </p>

            <h2 className="mt-6 mb-2 text-xl font-semibold">Vos droits</h2>
            <p className="mb-4">
                Vous pouvez demander à accéder à vos données, les rectifier ou les supprimer à tout moment en envoyant un email à <a href="mailto:contact@tonsite.com" className="text-blue-400">contact@tonsite.com</a>.
            </p>

            <h2 className="mt-6 mb-2 text-xl font-semibold">Cookies et traceurs</h2>
            <p className="mb-4">
                Ce site n'utilise pas de cookies de suivi ou de traceurs externes.
            </p>

            <div className="mt-8">
                <Button href="/" variant="primary">Retour à l'accueil</Button>
            </div>
        </section>
    );
}
