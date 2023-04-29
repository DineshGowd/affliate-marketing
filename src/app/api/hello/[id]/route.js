import { connection } from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(request, params) {
    const dealId = await params.params.id; // 'a', 'b', or 'c'
    const data = await connection.promise().query(`SELECT * FROM deals WHERE id=?`, [dealId])
        .then(([rows, fields]) => {
            console.log('rows', rows)
            return rows;
        })
        .catch(console.log)
    // .then(() => connection.end());'
    // console.log(data)
    return NextResponse.json({ data })
}
