

export const Header = () => {
  return (
    <header className="w-full py-6 px-8 flex justify-between items-center bg-[#2C2C3E] shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-[#E0E0E0]">Michael Deyvi</h1>
      <nav className="space-x-6">
        <a href="#projects" className="text-[#E0E0E0] hover:text-[#4F98CA] transition">Proyectos</a>
        <a href="#about" className="text-[#E0E0E0] hover:text-[#4F98CA] transition">Sobre mí</a>

      </nav>
    </header>
  );
};