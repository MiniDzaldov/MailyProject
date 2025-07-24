import mongoose, { Document, Schema } from 'mongoose';

export interface IGroup extends Document {
  name: string;
  userId: mongoose.Types.ObjectId;
  contacts: mongoose.Types.ObjectId[];
}

const groupSchema = new Schema<IGroup>({
  name: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  contacts: [{ type: Schema.Types.ObjectId, ref: 'Contact' }]
}, { timestamps: true });

export default mongoose.model<IGroup>('Group', groupSchema);
