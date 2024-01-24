import { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { rulesArr } from "../../Utils/RulesArray";

const HowWebsiteWork = () => {
    // add your array of object data 
    const array = [1, 2, 3, 4]

    // toggle state and function 
    const [isOpen, setIsOpen] = useState(null);
    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

    return (
        <div className=" container mx-auto">
            <SectionHeader big={'How Website Work'} small={"lets learn about our website"} />
            <div className=" grid grid-cols-1 lg:grid-cols-2 items-start mt-10">
                <div className=" flex justify-center items-start overflow-hidden">
                    <img className="max-w-lg -mt-16 object-cover" src="https://i.ibb.co/mSbjJSh/Pngtree-a-man-at-work-4463549.png" alt="" />
                </div>
                <div className="flex justify-center ">
                    <div className=" max-w-[550px] rounded-lg py-20 space-y-6 cursor-pointer">
                        {/* maping each accordion  */}
                        {rulesArr?.map((arr, idx) => (
                            <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center">
                                {/* the index div  */}
                                <div className="w-16 h-16 bg-[#355E72] flex justify-center items-center text-white text-2xl font-semibold rounded-xl font-sans">
                                    <span>0{idx + 1}</span>
                                </div>
                                <div className="w-10 h-[2px] bg-[#355E72] relative">
                                    <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-[#355E72]"></span>
                                    <span className="bg-[#355E72] w-10 h-1"></span>
                                </div>
                                {/* main accordion div  */}
                                <div>
                                    <div className="max-w-[450px] bg-sky-50 shadow-md border-t-[12px] p-3 border-[#355E72] relative">
                                        <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-[#355E72] absolute top-0 right-0"></span>
                                        <h1 className="text-[#355E72] text-xl text-center">{arr?.title}</h1>
                                    </div>
                                    <div
                                        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className=" max-w-[450px] rounded-br-xl rounded-bl-xl bg-[#355E72] text-white p-6 text-center text-sm">
                                                {arr?.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWebsiteWork;