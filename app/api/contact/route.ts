import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, message } = await req.json();

    // api/contact/route.ts
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,  // Usa la variable del .env
    pass: process.env.EMAIL_PASS,  // Usa la variable del .env
  },
});


    await transporter.sendMail({
      from: "maquinasdepago.temuco2@gmail.com",
      to: "maquinasdepago.temuco2@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nTeléfono: ${phone}\nMensaje: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
