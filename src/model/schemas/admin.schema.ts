import mongoose,{Document,Model,Schema} from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const emailRegex:RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface IAdmin extends Document {
    name: string;
    email: string;
    password?: string;
    avatar: {
      public_id: string;
      url: string;
    };
    role: "User";
    isVerified: boolean;
    courses: Array<{ courseId: string }>;
    comparePassword: (password: string) => Promise<boolean>;
    // SignAccessToken: () => string;
    // SignRefreshToken: () => string;
  }

  const userSchema: Schema<IAdmin> = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Please enter your first name"],
      },
  
      email: {
        type: String,
        required: [true, "Please enter your email"],
        validate: {
          validator: function (value: string) {
            return emailRegex.test(value);
          },
          message: "Please enter a valid email.",
        },
        unique: true,
      },
  
      password: {
        type: String,
      },
  
      isVerified: {
        type: Boolean,
        default: false,
      },
  
      courses: [
        {
          courseId: String,
        },
      ],
    },
    {
      timestamps: true,
    }
  );

  // Hash password
userSchema.pre<IAdmin>("save", async function (next) {
    if (!this.isModified) {
      next();
    }
    this.password = await bcrypt.hash(this.password || "", 10);
    next();
  });

  // sign access token
userSchema.methods.SignAccessToken = function () {
    return jwt.sign(
      { id: this._id, role: this.role },
      process.env.ACCESS_TOKEN || "",
      {
        expiresIn: "5m",
      }
    );
  };

  // sign refresh token
userSchema.methods.SignRefreshToken = function () {
    return jwt.sign(
      { id: this._id, role: this.role },
      process.env.REFRESH_TOKEN || "",
      {
        expiresIn: "3d",
      }
    );
  };
  
  // compare password
  userSchema.methods.comparePassword = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  const UserModel: Model<IAdmin> = mongoose.model("User", userSchema);
  export default UserModel;