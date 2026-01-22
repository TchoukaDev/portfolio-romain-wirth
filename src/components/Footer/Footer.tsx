export default function Footer() {
  const date = new Date();
  const dateFr = date.toLocaleDateString("Fr-fr", { year: "numeric" });
  return (
    <footer className="bg-secondary p-10">
      <p className="w-8/10 mx-auto text-center">
        © {dateFr} Romain WIRTH . Tous droits réservés
      </p>
    </footer>
  );
}
