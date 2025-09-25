import { __ } from "../components/lang_handler";
import { getDominantEnneagram } from "../services/calculate_enneagram";

function TestEnneagramResults({points}) {
    return (
        <div className='grid grid-cols-8 justify-normal p-4 border rounded-lg bg-gray-50 mb-6'>
            <div className="col-span-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugiat, sapiente sit optio distinctio eius veniam quae consequatur impedit iste cupiditate quo tempore ipsum tenetur ut, excepturi tempora corporis voluptas.</div>
            <div className='mb-6 col-span-3'>
                <div className='text-xl font-bold mb-2'>{__("Enneagram Results")}</div>
                <div>
                    {getDominantEnneagram(points) ? (
                        <div>{__("Your dominant Enneagram type")}: <span className="font-bold">{getDominantEnneagram(points)}</span></div>
                    ) : (
                        <div>{__("You have not answered any questions yet. Or your points are all zeroes.")}</div>
                    )}
                </div>
                <div>{__("Points breakdown")}:</div>
                
                <ul className="list-inside">
                    {Object.entries(points).map(([type, point]) => (
                        <li key={type}>
                            <span className="font-bold">
                                {type + ": "}
                            </span> 
                            {point} 
                            <span className="italic">
                                {type === getDominantEnneagram(points) ? "(" + __("Dominant type") + ")" : ""}
                            </span>
                        </li>
                    ))}
                </ul> 
            </div>
        </div>
    )
}

export default TestEnneagramResults;