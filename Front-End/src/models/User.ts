import { Schema, model, models } from 'mongoose';


interface UserSchema {
  name: string;
  email: string;
  since?: Date;
}


var UserSchema = new Schema<UserSchema>({
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

var User;

if (!models['User']) {
  User = model('User', UserSchema);
}
else {
  User = models['User'];
}

export default User;