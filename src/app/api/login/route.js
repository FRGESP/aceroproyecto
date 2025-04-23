import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET(request) {
    try{
        const response = await conn.query("SELECT NOW();")
        const data = response[0][0]["NOW()"];
        return NextResponse.json({ data });
    } catch (error) {
        console.error("Error executing query:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}