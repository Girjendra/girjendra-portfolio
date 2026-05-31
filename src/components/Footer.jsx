function Footer() {
  return (
    <footer className="border-t border-slate-700 py-8 text-center">
      <p className="text-slate-400">
                © {new Date().getFullYear()} Girjendra Lodha • Built with React & Tailwind CSS
      </p>
    </footer>
  );
}

export default Footer;