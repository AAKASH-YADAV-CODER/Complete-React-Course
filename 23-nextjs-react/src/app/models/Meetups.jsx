import mongoose from 'mongoose';

const meetupSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required:true
        },
        image: {
            type: String,
            required:true
        },
        address: {
            type: String,
            required:true
        },
        description: {
            type: String,
            required:true
        },
    }, {
        timestamps:true,
    }
)
const Meetups = mongoose.models.Meetups || mongoose.model('Meetups', meetupSchema);
export default Meetups;