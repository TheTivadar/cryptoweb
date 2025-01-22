import { NextResponse } from 'next/server';
import Email from "@/emails/Welcome";
import { Resend } from "resend";

const resend = new Resend("re_BH22Bmx3_CmqFchdDpUKWiyog5TXaK8At");

export async function POST(request: Request) {
    const { email, name,phone,help,additional} = await request.json();
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'tivadar.simon01@gmail.com',
            subject: 'Welcome!',
            react: Email({email, name,phone,help,additional }),
        });


        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, message: 'Failed to send email', error }, { status: 500 });
    }
}
