import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, company, email, phone, subject, serviceType, message } = data;

    const brevoApiKey = process.env.BREVO_API_KEY;

    if (!brevoApiKey) {
      console.error("BREVO_API_KEY is not configured.");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const emailContent = `
      Novo orçamento recebido pelo site Atlas:

      Nome: ${name}
      Empresa: ${company || "Não informada"}
      E-mail: ${email}
      Telefone: ${phone || "Não informado"}
      Tipo de Serviço: ${serviceType}
      Assunto: ${subject}
      
      Mensagem:
      ${message}
    `;

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "api-key": brevoApiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "Site Atlas (Contato)",
          email: "atlasupi@gmail.com", // Usando o e-mail verificado na conta Brevo para evitar bloqueios de SPAM
        },
        to: [
          {
            email: "atlasupi@gmail.com",
            name: "Equipe Atlas",
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `[Novo Orçamento] ${subject} - ${name}`,
        textContent: emailContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo Error:", errorData);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
