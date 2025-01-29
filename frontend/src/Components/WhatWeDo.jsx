import { FaBook, FaHeartbeat, FaFistRaised, FaFileAlt, FaParachuteBox, FaHandsHelping } from 'react-icons/fa';

const WhatWeDo = () => {
    const mission = [
        {
            title: "Primary Education",
            description: "Evaluate the Current State of Girls' Primary Education in Bihar",
            color: "text-[#2c3e50]",
            bgColor: "bg-[#2c3e50]/10",
            bgColorHover: "shadow-lg shadow-[#2c3e50]",
            icon: <FaBook className="w-12 h-12 text-[#2c3e50]" />,
        },
        {
            title: "Recommendations",
            description: "Provide Recommendations for Improving Girls' Education",
            color: "text-[#2acb83]",
            bgColor: "bg-[#2acb83]/10",
            bgColorHover: "shadow-lg shadow-[#2acb83]",
            icon: <FaFileAlt className="w-12 h-12 text-[#2acb83]" />,
        },
        {   
            title: "Access Factors",
            description: "Identify Factors Affecting Girls' Access to Education",
            color: "text-[#2980b9]",
            bgColor: "bg-[#2980b9]/10",
            bgColorHover: "shadow-lg shadow-[#2980b9]",
            icon: <FaBook className="w-12 h-12 text-[#2980b9]" />,
        },
        {
            title: "Community Perspective",
            description: "Capture Community and Parental Perspectives",
            color: "text-[#e2406e]",
            bgColor: "bg-[#e2406e]/10",
            bgColorHover: "shadow-lg shadow-[#e2406e]",
            icon: <FaHandsHelping className="w-12 h-12 text-[#e2406e]" />,
        },
    ];

    const thematicAreas = [
        {
            title: "HEALTHCARE",
            description: "Improving health condition of women & children",
            color: "text-[#f4d03f]",
            bgColor: "bg-[#f4d03f]/10",
            bgColorHover: "shadow-lg shadow-[#f4d03f]",
            icon: <FaHeartbeat className="w-12 h-12 text-[#f4d03f]" />,
        },
        {
            title: "CHILD PROTECTION",
            description: "Protection and shelter for missing, abused and special needs children",
            color: "text-[#af7ac5]",
            bgColor: "bg-[#af7ac5]/10",
            bgColorHover: "shadow-lg shadow-[#af7ac5]",
            icon: <FaHandsHelping className="w-12 h-12 text-[#af7ac5]" />,
        },
        {
            title: "LIVELIHOOD",
            description: "Securing Livelihood through providing skilled training to women",
            color: "text-[#75b5c4]",
            bgColor: "bg-[#75b5c4]/10",
            bgColorHover: "shadow-lg shadow-[#75b5c4]",
            icon: <FaFistRaised className="w-12 h-12 text-[#75b5c4]" />,
        },
        {
            title: "CLIMATE CHANGE",
            description: "Climate Change Adaptation and improving sanitation",
            color: "text-[#e8b4a9]",
            bgColor: "bg-[#e8b4a9]/10",
            bgColorHover: "shadow-lg shadow-[#e8b4a9]",
            icon: <FaParachuteBox className="w-12 h-12 text-[#e8b4a9]" />,
        },
        {
            title: "CHILD RIGHTS",
            description: "Rights of child labour, Small, Marginal, Landless Farmers",
            color: "text-[#82e0aa]",
            bgColor: "bg-[#82e0aa]/10",
            bgColorHover: "shadow-lg shadow-[#82e0aa]",
            icon: <FaHandsHelping className="w-12 h-12 text-[#82e0aa]" />,
        },
        {
            title: "GENDER EQUALITY",
            description: "Gender equality and Poverty Reduction",
            color: "text-[#f1948a]",
            bgColor: "bg-[#f1948a]/10",
            bgColorHover: "shadow-lg shadow-[#f1948a]",
            icon: <FaFistRaised className="w-12 h-12 text-[#f1948a]" />,
        },
    ];

    return (
        <section className="py-16 px-10 md:px-4">
            <div className="max-w-7xl mx-auto">
                {/* What We Do Section */}
                <div className="mb-20">
                    <p className="text-orange-500 font-medium mb-2" data-aos="fade-up">
                        MAA PREMA FOUNDATION
                    </p>
                    <h2 className="text-5xl font-bold text-[#1e3a8a] mb-8" data-aos="fade-up" data-aos-delay="100">
                        What we do<span className="text-orange-500">.</span>
                    </h2>
                    <p className="text-lg text-gray-600 w-full mb-20" data-aos="fade-up" data-aos-delay="200">
                        Maa Prema Foundation is a giving platform that allows you to support a cause of your choice from the NGOs that have been evaluated for transparency and credibility. We tell you exactly where your money went and also give you proof of it through donation reports. We have reviewed hundreds of non - profit organizations from all over India to identify and list the ones that meet our Give assured criteria. We work for a host of causes ranging from child welfare and education, blood donation, and women&apos;s empowerment and many others.
                    </p>

                    {/* Mission Section */}
                    <h2 className="text-4xl font-bold text-[#1e3a8a] mb-8">
                        Our Mission<span className="text-orange-500">.</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {mission.map((item, index) => (
                            <div 
                                key={index} 
                                className={`${item.bgColor} p-6 rounded-xl transition-transform duration-300 hover:scale-105 ${item.bgColorHover}`}
                                data-aos="fade-up"
                                data-aos-delay={300 + (index * 100)}
                            >
                                <div className="mb-4">
                                    {item.icon}
                                </div>
                                <h3 className={`${item.color} text-xl font-bold mb-2`}>
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Thematic Areas Section */}
                    <h2 className="text-4xl font-bold text-[#1e3a8a] mb-8">
                        Thematic Areas<span className="text-orange-500">.</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {thematicAreas.map((area, index) => (
                            <div 
                                key={index} 
                                className={`${area.bgColor} p-6 rounded-xl transition-transform duration-300 hover:scale-105 ${area.bgColorHover}`}
                                data-aos="fade-up"
                                data-aos-delay={300 + (index * 100)}
                            >
                                <div className="mb-4">
                                    {area.icon}
                                </div>
                                <h3 className={`${area.color} text-xl font-bold mb-2`}>
                                    {area.title}
                                </h3>
                                <p className="text-gray-600">
                                    {area.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo; 