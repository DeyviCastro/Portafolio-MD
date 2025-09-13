
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { proyectos } from "../data/proyectos.js";

export const Home = () => {
    return (
        <div className="bg-[#1E1E2F] min-h-screen">
            <Header />

            {/* Hero */}
            <section className="text-center py-20 px-4 space-y-4">
                <img className="h-40 w-40 rounded-full mx-auto " src={"/foto.jpg"} alt="" />
                <h2 className="text-4xl font-bold mb-4 text-[#E0E0E0] ">Hola, soy Michael Deyvi</h2>
                <p className="text-[#CFCFCF] max-w-xl mx-auto">
                    Desarrollador web con experiencia en proyectos frontend y backend utilizando React, Tailwind, Node.js y TypeScript. Me motiva crear aplicaciones eficientes con interfaces claras y aportar valor en cada proyecto.
                </p>
            </section>


            {/* Proyectos */}
            <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-[#E0E0E0]">Mis Proyectos</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {proyectos.map((project) => (
                        <Card key={project.id} {...project} />
                    ))}
                </div>
            </section>

            {/* Sobre mí */}
            <section id="about" className="py-16 px-4 max-w-4xl mx-auto text-center bg-[#1E1E2F] rounded-xl shadow-lg mb-16">
                <h2 className="text-3xl font-bold mb-4 text-[#E0E0E0]">Sobre mí</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    <p className="text-[#CFCFCF] text-lg">
                        Desarrollador web con experiencia construyendo aplicaciones completas usando React, Tailwind, Node.js y TypeScript. Disfruto transformar ideas en soluciones funcionales, combinando un diseño limpio con un backend eficiente. Mi objetivo es seguir creciendo profesionalmente y aportar innovación en cada proyecto.

                    </p>
                    <img className="h-30 w-30 sm:h-40 sm:w-40 rounded-full mx-auto " src={"/foto.jpg"} alt="" />
                </div>
            </section>


            {/* Footer */}
            <footer id="contact" className="bg-[#2C2C3E] py-10 mt-20 text-center">
                <p className="text-[#CFCFCF]">
                    © {new Date().getFullYear()} Michael Deyvi. Todos los derechos reservados.
                </p>
            </footer>
        </div>
    );
};
