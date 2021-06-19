import { Schema, model, models } from 'mongoose';


interface ONGSchema {
  name: string;
  email: string;
  since?: Date;
}

var ONGSchema = new Schema<ONGSchema>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }, 
  since: {
    type: Date,
    default: Date.now
  }
});

var ONG;

if (!models['ONG']) {
    ONG = model('ONG', ONGSchema);
}
else {
    ONG = models['ONG'];
}

export default ONG;