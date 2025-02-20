import React from "react"
import { AppSidebar } from "./app-sidebar";
import { LineChartCalls } from "./linechart";

export default function Page () {
    return (
        <div className="flex"> 
            <AppSidebar /> 
            
            <div className="h-screen flex items-center justify-center">
                <div className="w-[500px]">
                    <LineChartCalls />
                </div>
            </div>

            
        </div>    
    );
    
}
 