import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
    }

    const { name, email, company, message } = parsed.data;

    const { error } = await resend.emails.send({
      // Após verificar o domínio willythorpe.com no Resend:
      // 1. Troque from para: "Thorpe Innovation <contato@thorpeinnovation.com>"
      // 2. Troque to para: "thorpe@willythorpe.com"
      from: "Thorpe Innovation <onboarding@resend.dev>",
      to: "midias@drwillythorpe.com.br",
      replyTo: email,
      subject: `[Site] Nova mensagem de ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <body style="font-family: Arial, sans-serif; color: #323334; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="border-left: 4px solid #009FC0; padding-left: 16px; margin-bottom: 24px;">
            <h2 style="margin: 0 0 4px; color: #009FC0;">Nova mensagem via site</h2>
            <p style="margin: 0; color: #878889; font-size: 13px;">Thorpe Innovation — Formulário de contato</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 110px; color: #555658;">Nome</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555658;">E-mail</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">
                <a href="mailto:${email}" style="color: #009FC0;">${email}</a>
              </td>
            </tr>
            ${
              company
                ? `<tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555658;">Empresa</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${company}</td>
            </tr>`
                : ""
            }
          </table>

          <div style="margin-top: 20px;">
            <p style="font-weight: bold; color: #555658; margin-bottom: 8px;">Mensagem</p>
            <div style="background: #F7F7F8; border-radius: 8px; padding: 16px; line-height: 1.6;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>

          <p style="margin-top: 32px; font-size: 12px; color: #aaa;">
            Enviado via formulário de contato do site da Thorpe Innovation.
            Responda diretamente a este e-mail para contatar ${name}.
          </p>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Falha ao enviar a mensagem. Tente novamente." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}
