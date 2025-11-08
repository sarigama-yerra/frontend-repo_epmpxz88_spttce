export default function Footer() {
  return (
    <footer className="w-full bg-[#070b1a] py-8 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <p className="text-xs text-white/60">© {new Date().getFullYear()} Moh. Iqbal Fatoni. All rights reserved.</p>
        <div className="text-xs text-white/50">
          Built with passion • Crafted in motion
        </div>
      </div>
    </footer>
  );
}
