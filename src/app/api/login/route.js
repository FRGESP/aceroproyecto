import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function POST(request) {
    const req = await request.json();
    try{
        const [response] = await conn.query("CALL LOGIN(?,?)", [req.user, req.password]);
        return NextResponse.json(response[0][0]);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error al iniciar sesión" }, { status: 500 });
    }
}