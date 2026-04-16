/*
Component to make input more dinamic to use in other files
*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FormButton } from "@/components/ui/forms/FormButton"

interface Props {
  imageSrc: string;
  lecturer: string;
  raiting: number;
  title: string;
  content: string;
  prise: number;
  form?: string;
  loading?: boolean;
  onClick?: () => void;
}


export function FeaturedCard({ imageSrc, lecturer, raiting, title, content, prise,  loading, form, onClick }: Props) {
  return (
     <div
        className="flex flex-col rounded-[12px] cursor-pointer"
        style={{
            width: "506px",
            height: "576px",
            padding: "20px",
            border: "1px solid #F5F5F5",
            background: "#FFFFFF",
        }}
        >
        {/* frame 373 */}
        <div className="flex flex-col w-[466px] gap-[16px]">
            {/* frame 13 */}
            <img
                src={imageSrc}
                alt={title}
                className="w-[466px] h-[262px] rounded-[10px] gap-[10px]"
            />
            {/* frame 372 */}
             <div className="flex flex-col w-[466px] w-[88px] gap-[16px]">
                {/* frame 374 */}
                 <div className="flex flex-col gap-[12px]">
                    {/* frame 371 */}
                    <div className="flex flex-row justify-between w-full gap-[12px]">
                        {/* frame 530 */}
                        <div className="flex flex-row w-[159px] w-[17px] gap-[8px]">
                            {/* Text */}
                            <p className="w-[159px] h-[17px] font-inter font-medium text-[14px]"
                                style={{ color: "#666666" }}
                                >
                               Lecturer { lecturer } 
                            </p>
                        </div>

                        {/* frame 39 */}
                        <div className="flex flex-row justify-between w-[44px] h-[18px] gap-[4px]">
                            {/* Icon set */}
                            <div className="w-[18px] h-[18px]">
                               {/* Star */} 
                               <div className="w-[16.62px] h-[16.62px] top-[0.69px] left-[1.25px]">
                                {/* Union */}
                                  <div className="w-[14.47px] h-[14.39px] top-[1.19px] left-[1.07px]">
                                    {/* Star */}
                                       <FontAwesomeIcon
                                            icon={faStar}
                                            style={{ color: "#DFB300", width: "18px", height: "18px" }}
                                        />
                                  </div>
                               </div>
                            </div>
                            {/* raiting */}
                             <p className="w-[22px] h-[17px] font-inter font-medium text-[14px]"
                                style={{ color: "#525252" }}
                                >
                                { raiting }
                            </p>
                        </div>
                    </div>
                    {/* frame 46 */}
                    <p className="w-[466px] h-[58px] font-inter font-medium text-[24px] leading-[24px]"
                        style={{ color: "#141414" }}
                        >
                        { title }
                    </p>
                 </div>
             </div>
            {/* Content text */}
             <p className="w-[412px] h-[72px] font-inter font-medium text-[16px] leading-[24px]"
                style={{ color: "#666666" }}
                >
                { content }
             </p>
        </div>

        {/*  frame 371 */}
        <div className="flex flex-row w-[466px] w-[58px] justify-between">
            {/* frame 45 */}
            <div className="flex flex-row items-center w-[167px] h-[39px] gap-[8px]">
                <p className="w-[76px] h-[15px] font-inter font-medium text-[12px] "
                style={{ color: "#8A8A8A" }}>Starting from</p>
                <p className="flex w-[83px] h-[39px] font-inter font-medium font-semibold text-[32px] text-center"
                style={{ color: "#141414" }}>${prise}</p>
            </div>
                
             {/* Button */}
                <FormButton
                  form="login-form"
                  label="Details"
                  loading={loading}
                  loadingLabel="Details..."
                  disabled={loading}
                  className="h-[58px] rounded-[8px] gap-[10px] pt-[17px] pr-[25px] pl-[25px] pb-[17px]"
                  textClassName="flex justify-center w-[66px] h-[24px]"
                />
        </div>
    </div>
  );
}