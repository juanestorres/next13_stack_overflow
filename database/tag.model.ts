
import mongoose, { Schema, Document, model, models } from 'mongoose';

interface ITag extends Document {
    name: string;
    explanation: string;
    questions: Schema.Types.ObjectId[];
    followers: Schema.Types.ObjectId[];
    createdAt: Date;
}

const TagSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    explanation: {
        type: String,
        required: true,
    },
    questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Question',
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const Tag = models.Tag || model<ITag>('Tag', TagSchema);

export default Tag;