export default function ApplyNowButton({
  href = "/admissions",
  label = "Apply Now",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      className="fixed bottom-10 right-10 z-40 rounded-md bg-rose-700 px-7 py-3 text-sm font-bold text-white shadow-lg hover:bg-rose-600"
    >
      {label}
    </a>
  );
}
