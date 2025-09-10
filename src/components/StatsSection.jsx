import React from "react";
import { FaCircleNotch, FaVial, FaAward, FaGem } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsSection()
{
    const { ref, inView } = useInView({
        triggerOnce: true, // runs only once
        threshold: 0.3, // trigger when 30% visible
    });

    return (
        <section ref={ref} className="max-w-7xl  font-serif border-t border-gray-300 w-full py-12 px-6">
            <div className="   mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
                {/* Item 1 */}
                <div className="flex flex-col items-center">
                    <FaCircleNotch className="text-4xl text-[#B77A5D] mb-3" />
                    <h3 className="text-3xl font-semibold text-[#B77A5D]">
                        {inView && <CountUp end={98} duration={2} />}%
                    </h3>
                    <p className="text-gray-600">Patient Satisfaction Rate</p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center">
                    <FaVial className="text-4xl text-[#B77A5D] mb-3" />
                    <h3 className="text-3xl font-semibold text-[#B77A5D]">
                        {inView && <CountUp end={10} duration={2} />}+
                    </h3>
                    <p className="text-gray-600">Years Of Experience</p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center">
                    <FaAward className="text-4xl text-[#B77A5D] mb-3" />
                    <h3 className="text-3xl font-semibold text-[#B77A5D]">
                        {inView && <CountUp end={10000} duration={3} separator="," />}+
                    </h3>
                    <p className="text-gray-600">Satisfied Patients</p>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-center">
                    <FaGem className="text-4xl text-[#B77A5D] mb-3" />
                    <h3 className="text-3xl font-semibold text-[#B77A5D]">
                        {inView && <CountUp end={5000} duration={3} separator="," />}+
                    </h3>
                    <p className="text-gray-600">
                        Skin, Hair & Laser <br /> Treatments
                    </p>
                </div>

            </div>
        </section>
    );
}
