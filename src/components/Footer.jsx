export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-6">
      <div className="container-page flex flex-col gap-2 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Cleopatra Samwel Andrea · Tanzania</p>
        <p>Hosted on Vercel</p>
      </div>
    </footer>
  );
}
