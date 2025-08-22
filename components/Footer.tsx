export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl p-4 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Next15 Products
      </div>
    </footer>
  );
}
