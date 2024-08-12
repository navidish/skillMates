import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="h-screen bg-secondary-0 flex justify-center items-center overflow-hidden">
        <div className=" xl:max-w-screen-xl sm:max-w-sm flex flex-col justify-center items-center">
            <h1 className="text-[228px]  font-bold">404</h1>
            <h1 className="text-xl font-bold text-secondary-700">
              صفحه‌ی مورد نظر شما وجود ندارد.
            </h1>
            <button onClick={moveBack} className="btn btn--secondary max-w-20 flex items-center gap-x-2">
              <span> برگشت</span>
            </button>
          
        </div>
      </div>
 
  );
}
export default NotFound;
