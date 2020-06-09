import { User } from '../../models/users/User';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as EmailValidator from 'email-validator';
import { config } from '../../config/config'

 const generatePassword = async (plainTextPassword: string): Promise<string> => {
  //@TODO Use Bcrypt to Generated Salted Hashed Passwords
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds)
  // const hash = await bcrypt.hash(plainTextPassword, salt)
  // console.log('hash', hash)
  return await bcrypt.hash(plainTextPassword, salt)
}

async function comparePasswords(plainTextPassword: string, hash: string): Promise<boolean> {
  //@TODO Use Bcrypt to Compare your password to your Salted Hashed Password
  return await bcrypt.compare(plainTextPassword, hash)
  // return Promise.resolve(true)
}

function generateJWT(user: User): string {
  return jwt.sign(user.short(), config.dev.jwt_secret)
}

// router.get('/verification', 
//   requireAuth, 
//   async (req: Request, res: Response) => {
//       return res.status(200).send({ auth: true, message: 'Authenticated.' });
// });

export const login = async (parent: any, args: any, ctx) => {
  const email = args.email;
  const password = args.password;
  // check email is valid
  if (!email || !EmailValidator.validate(email)) {
      return { auth: false, message: 'Email is required or malformed' };
  }

  // check email password valid
  if (!password) {
      return { auth: false, message: 'Password is required' };
  }

  const user = await User.findByPk(email);
  // check that user exists
  if(!user) {
      return { auth: false, message: 'Unauthorized' };
  }

  // check that the password matches
  const authValid = await comparePasswords(password, user.password_hash)

  if(!authValid) {
      return { auth: false, message: 'Unauthorized' };
  }

  // Generate JWT
  const jwt = generateJWT(user);

  return { auth: true, token: jwt, user: user.short()};
};

//register a new user
export const register = async (parent: any, args: any, ctx) => {
  const email = args.email;
  const plainTextPassword = args.password;
  // check email is valid
  if (!email || !EmailValidator.validate(email)) {
      return { auth: false, message: 'Email is required or malformed' };
  }

  // check email password valid
  if (!plainTextPassword) {
      return { auth: false, message: 'Password is required' };
  }

  // find the user
  const user = await User.findByPk(email);
  
  // check that user doesnt exists
  if(user) {
      return { auth: false, message: 'User may already exist' };
  }

  const password_hash = await generatePassword(plainTextPassword);

  const newUser = await new User({
      email: email,
      password_hash: password_hash
  });
  let savedUser;
  try {
      savedUser = await newUser.save();
  } catch (e) {
      throw e;
  }

  // Generate JWT
  const jwt = generateJWT(savedUser);

  return {token: jwt, user: savedUser.short()};
};

