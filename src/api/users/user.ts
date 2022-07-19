import { Schema, model } from 'mongoose';
import { IUser } from './interfaces';

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    avatar:  { type: String, required: false },
}, {
    timestamps: true
});

export default model<IUser>('User', userSchema);


