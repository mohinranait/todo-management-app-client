/* eslint-disable react/prop-types */


const SectionHeader = ({text,bg,count}) => {
    return (
        <>
            <div className={`w-full py-3 px-4  rounded ${bg} `}>
                <span className="text-white flex gap-2 items-center">{text} <span className="px-1 py-1 inline-block bg-white text-pink-500 leading-3">{count}</span> </span>
            </div>
        </>
    );
};

export default SectionHeader;