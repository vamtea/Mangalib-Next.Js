import React from "react";
import { FiltersFooterButton } from ".";

interface Props {
  className?: string;
}

export const FiltersFooter: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex gap-3 px-3 pt-2 pb-[10px] bg-white">
        <FiltersFooterButton
          className=" border-[#dcdee2] border-[1px] rounded-[6px]  text-[#000000cc]"
          text={"Сбросить"}
        />
        <FiltersFooterButton
          className="bg-[#ff9100] rounded-[6px] text-white"
          text={"Применить"}
        />
        <div className="h-[30px] w-[30px] border-[1px] rounded-[6px] items-start flex justify-center">
          <svg
          className="w-[17px] flex m-auto"
            id="Capa_1"
            enable-background="new 0 0 508.101 508.101"
            viewBox="0 0 508.101 508.101"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="XMLID_531_"
              d="m504.901 327.406-95.68-217.003c-4.057-9.2-11.452-16.269-20.822-19.905-9.374-3.636-19.603-3.402-28.8.658l-27.311 12.057v72.61l12.516-5.518 14.559 33.02-27.074 11.937v89.641c0 22.83-12.894 42.696-31.776 52.725l10.538 23.9-27.451 12.104-12.814-29.063h-90.764l39.161 88.964c4.056 9.2 11.451 16.269 20.822 19.904 4.416 1.713 9.021 2.568 13.618 2.567 5.162 0 10.316-1.077 15.182-3.225l216.861-95.743c18.979-8.377 27.607-30.642 19.235-49.63zm-102.199-25.789 14.559 33.02-27.451 12.104-14.559-33.02z"
            ></path>
            <path
              id="XMLID_535_"
              d="m272.623 334.569c16.357 0 29.666-13.309 29.666-29.667v-243.14c0-16.358-13.309-29.667-29.666-29.667h-242.956c-16.358.001-29.667 13.309-29.667 29.667v243.141c0 16.358 13.309 29.667 29.667 29.667h242.956zm-68.434-241.045h30v36.09h-30zm0 143.526h30v36.09h-30zm-68.044-72.89h30v36.091h-30zm-68.045-70.636h30v36.09h-30zm0 143.526h30v36.09h-30z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
