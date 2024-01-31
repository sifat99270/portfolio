import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const message = await req.json();
        const prisma = new PrismaClient();
        if (message["secure"] === true) {
            const resp = await prisma.message.create({
                data: {
                    name: message["name"],
                    email: message["email"],
                    message: message["message"],
                    mobile: message["mobile"],
                    subject: message["subject"],
                },
            });
            if (resp["id"]) {
                return NextResponse.json(
                    { status: "success", data: "message successfully sent" },
                    { status: 200 }
                );
            } else {
                return NextResponse.json(
                    { status: "fail", dat: "there was an error" },
                    { status: 500 }
                );
            }
        } else {
            return NextResponse.json(
                { status: "fail", data: "you are not secure" },
                { status: 401 }
            );
        }
    } catch (e) {
        return NextResponse.json({ status: "fail", data: e }, { status: 500 });
    }
}
