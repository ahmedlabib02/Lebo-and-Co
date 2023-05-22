import React from "react";
import { FaArrowDown, FaDollarSign, FaGlobe } from "react-icons/fa";
import ButtonCard from "../../Components/ButtonCard";




function TransferType({dataEntry, setDataEntry, setPage}) {
        const handleInternalClick = () => {
            setDataEntry({...dataEntry, TransferType: 'Internal'});
            setPage(1);
        };

        const handleDomesticClick = () => {
            setDataEntry({...dataEntry, TransferType: 'Domestic'});
            setPage(1);
        };

        const handleInternationalClick = () => {
            setDataEntry({...dataEntry, TransferType: 'International'});
            setPage(1);
        };

        return(
            <div className="flex space-x-8">
                <ButtonCard
                 title="Internal"
                 icon={FaDollarSign}
                 onClick={handleInternalClick}
                 className="p-4 bg-blue-500 text-white rounded-lg"
                 />
                 <ButtonCard
                 title="Domestic"
                 icon={FaArrowDown}
                 onClick={handleDomesticClick}
                 className="p-4 bg-blue-500 text-white rounded-lg"
                 />
                 <ButtonCard
                 title="International"
                 icon={FaGlobe}
                 onClick={handleInternationalClick}
                 className="p-4 bg-blue-500 text-white rounded-lg"
                 />

            </div>
        );

}

export default TransferType;