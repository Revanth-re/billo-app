import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container-x py-24 text-center">
      <p className="text-6xl font-extrabold text-brand">404</p>
      <h1 className="mt-3 text-2xl font-bold">This page isn&apos;t on the menu</h1>
      <Link href="/" className="btn btn-primary mt-6">Back to home</Link>
    </section>
  );
}
