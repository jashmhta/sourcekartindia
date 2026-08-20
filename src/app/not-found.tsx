import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-alethia-dark px-6 py-24 text-center">
      <div className="max-w-lg">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-alethia-lime">
          Error 404
        </p>
        <h1 className="display-lg mt-6 text-white">
          That page is not in our catalogue.
        </h1>
        <p className="body-lg mt-6 text-white/60">
          The page you are looking for may have moved. Browse our product
          families or reach out, we will point you to the right grade.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="filled">
            Back to home
          </Button>
          <Button href="/products">Browse products</Button>
        </div>
      </div>
    </section>
  );
}
