import react from "react";

export default function UserInfo( {question}) {
    return (
        <div className="flex items-center self-stretch ml-10 ">
            <img
                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/4rhb9pqa_expires_30_days.png"} 
                className="w-10 h-10 mr-[15px] object-fill"
            />
            <div className="flex flex-col shrink-0 items-start gap-[5px] ">
                <span className="text-black text-[13px] mr-10" >
                    {"@Golanginya"}
                </span>
                <span className="text-[#808080] text-[10px]" >
                    {"12 November 2020 19:35"}
                </span>
            </div>
            <div className="flex-1 self-stretch ">
            </div>
            {/* <img
                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/a2lww5bx_expires_30_days.png"} 
                className="w-6 h-6 object-fill "
            /> */}
            <div className="flex items-center gap-3">
  
  <span className="text-sm font-medium text-gray-700">
    AI Version
  </span>

  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1" />
  </div>

</div>


            
        </div>

    )
}