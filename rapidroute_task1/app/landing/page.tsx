import React from "react"
import { AppSidebar } from "./app-sidebar";
import { LineChartCalls } from "./linechart";
import { ProfitLost } from "./ProfitLost";
import { PaginationDemo } from "./pagination";

export default function Page() {
    return (
        <div className="flex">
            <AppSidebar />
        
            <div className="flex flex-col items-center justify-center gap-6 p-6 md:p-10">
                <div className="w-[750px]">
                    <ProfitLost />
                </div>

                <div className="w-[500px]">
                    <LineChartCalls />
                </div>

                <div className="w-[500px]">
                    <PaginationDemo/>
                </div>
            </div>


        </div>
    );
}
