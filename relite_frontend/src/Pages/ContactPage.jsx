import React from "react";

export default function Contact() {
    return (
        <>
            <style>
                {`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }

                    @keyframes slideUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .animate-fadeIn {
                        animation: fadeIn 1s ease-in-out;
                    }

                    .animate-slideUp {
                        animation: slideUp 0.8s ease-out;
                    }

                    .truncate-text {
                        word-wrap: break-word;
                        word-break: break-word;
                        overflow-wrap: break-word;
                        white-space: normal;
                    }
                `}
            </style>
            <section className="bg-gradient-to-b from-[#fffaf4] to-[#fffdf8] text-[#3e2c1c] py-12 px-4 sm:px-6 md:px-12 lg:px-24">
                <h2 className="text-5xl font-serif font-extrabold text-center mb-12 text-[#3e2c1c] animate-fadeIn">
                    Contact Us
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Contact Info Section */}
                    <div className="space-y-8">
                        {[
                            {
                                title: "Address",
                                content: "UG-01,Plot No 36,Shakti Khand III Indrapuram Ghaziabad,UP-201014, Uttar Pradesh, India",
                                iconBg: "bg-gradient-to-r from-[#bfa27a] to-[#d6b982]",
                                icon: (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 10h11M9 21l-6-6 6-6M21 10v11"
                                    />
                                ),
                            },
                            {
                                title: "Phone",
                                content: "9999708138",
                                iconBg: "bg-gradient-to-r from-[#bfa27a] to-[#d6b982]",
                                icon: (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 11h14M9 19l-6-6 6-6M19 11v6m0-6h4"
                                    />
                                ),
                            },
                            {
                                title: "Email",
                                content: "amit@relite.info",
                                iconBg: "bg-gradient-to-r from-[#bfa27a] to-[#d6b982]",
                                icon: (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 11h16M16 21l-8-8 8-8M23 11v8m0-8H2"
                                    />
                                ),
                            },
                        ].map(({ title, content, iconBg, icon }, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-4 p-6 rounded-xl shadow-md bg-gradient-to-r from-[#f9f3eb] to-[#eaddc8] border border-[#eaddc8]/50 hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 animate-slideUp"
                            >
                                <div className={`${iconBg} p-4 rounded-full`}>
                                    <svg
                                        className="w-6 h-6 text-[#fff9f0]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        {icon}
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif font-semibold text-[#3e2c1c]">{title}</h3>
                                    <p className="text-base text-[#5c4633] truncate-text">{content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Map Section */}
                    <div className="animate-fadeIn">
                        <iframe
                            className="w-full h-64 sm:h-80 rounded-xl shadow-lg border-4 border-[#eaddc8]"

                           src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56015.243558425434!2d77.3374113887069!3d28.661134232236435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUG-01%2CPlot%20No%2036%2CShakti%20Khand%20III%20Indrapuram%20Ghaziabad%2CUP-201014%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1761068861340!5m2!1sen!2sin" 
                            
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
}