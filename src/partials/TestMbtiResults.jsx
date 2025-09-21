import { __ } from "../components/lang_handler";
import { nameMbtiCodeParts, showMbtiCode } from "../services/calculate_mbti";

function TestMbtiResults(params) {
    let mbtiCodeParts = nameMbtiCodeParts(params.points)
    return (
        <div className='grid grid-cols-8 justify-normal p-4 border rounded-lg bg-gray-50 mb-6'>
            <div className="col-span-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugiat, sapiente sit optio distinctio eius veniam quae consequatur impedit iste cupiditate quo tempore ipsum tenetur ut, excepturi tempora corporis voluptas.</div>
            <div className='mb-6 col-span-3'>
                <div className='text-xl font-bold mb-2'>MBTI Results</div>
                <div>
                    <p className='inline font-bold text-xl'>
                        Your MBTI type is: 
                    </p>
                    <p className='inline font-mono text-2xl ml-2'>
                        { showMbtiCode(params.points) }
                    </p>
                </div>
                <div>Points breakdown:</div>
                <ul className='list-inside'>
                    <li>{__("Introversion")} (I) vs. {__("Extraversion")} (E): {params.points['IE']}</li>
                    <li>{mbtiCodeParts['IE']}</li>
                    <li>{__("Sensing")} (S) vs. {__("Intuition")} (N): {params.points['SN']}</li>
                    <li>{mbtiCodeParts['SN']}</li>
                    <li>{__("Thinking")} (T) vs. {__("Feeling")} (F): {params.points['TF']}</li>
                    <li>{mbtiCodeParts['TF']}</li>
                    <li>{__("Judging")} (J) vs. {__("Perceiving")} (P): {params.points['JP']}</li>
                    <li>{mbtiCodeParts['JP']}</li>
                </ul>
            </div>
        </div>
    )
}

export default TestMbtiResults;