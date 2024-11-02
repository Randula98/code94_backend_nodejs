import mongoose from "mongoose";
import bcrypt from "bcrypt";

// User Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
    timestamps: {
        createdAt: 'createdOn',
        updatedAt: 'updatedOn'
    }
});

// Hash the password before saving the user model
UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
      if (err) return next(err);
      this.password = passwordHash;
      next();
  });
});

// Hash the password before updating the user model
UserSchema.pre("findOneAndUpdate", function (next) {
  if (!this._update.password) return next();
  bcrypt.hash(this._update.password, 10, (err, passwordHash) => {
      if (err) return next(err);
      this._update.password = passwordHash;
      next();
  });
});

// Compare the password
UserSchema.methods.comparePassword = function (password) {
  return new Promise((resolve, reject) => {
      bcrypt.compare(password, this.password, (err, isMatch) => {
          if (err) {
              return reject(err);
          }
          if (!isMatch) {
              return resolve(false);
          }
          resolve(this);
      });
  });
}

const User = mongoose.model("User", UserSchema);

export default User;