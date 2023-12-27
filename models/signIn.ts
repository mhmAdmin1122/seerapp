import { model, Schema, models } from "mongoose";

const SignInSchema = new Schema({
    userName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    password: {type: String, required: true},
    wpassword: {type: String, required: true},
    inviteCode: {type: String, required: false},
})

export const SignIn = models.SignIn || model('SignIn', SignInSchema);