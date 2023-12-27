import { SignIn } from "@/models/signIn";
import { mongooseConnection } from "@/lib/mongoose";

export default async function handle(req: any, res: any) {
  const { method } = req;
  await mongooseConnection();

  if (method === "POST") {
    const { userName, email, phone, password, wpassword, inviteCode } =
      req.body;
    const SignInDoc = await SignIn.create({
      userName,
      email,
      phone,
      password,
      wpassword,
      inviteCode,
    });
    res.json(SignInDoc);
  }
}
