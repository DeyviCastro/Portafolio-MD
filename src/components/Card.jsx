

export const Card = ({ title, description, image, link, demo }) => {
    return (
        <div className="bg-[#2C2C3E] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-[#E0E0E0]">{title}</h3>
                <p className="text-[#CFCFCF] mb-4">{description}</p>
                <div className="flex justify-between">
                    <a href={link} target="_blank" className="text-[#4F98CA] hover:underline text-sm">
                        GitHub
                    </a>
                    {demo && (
                        <a href={demo} target="_blank" className="text-[#4F98CA] hover:underline text-sm">
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
