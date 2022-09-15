const { AuthenticationError } = require("apollo-server-express");
const { User, Resume } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //get all resumes by a user
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("savedResume");

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },

    //get single resume by id
    resume: async (parent, { _id }) => {
      return Resume.findOne({ _id });
    },

    //get All users
    users: async () => {
        return User.find()
         .select('-__v -password')
         .populate('savedResume')
    },

    //get a user by username
    user: async (parent, { username }) => {
        return User.findOne({ username })
         .select('-__v -password')
         .populate('savedResume')
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    updateResume: async (parent, args, context) => {
      if (context.user) {
        const resume = await Resume.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedResume: resume._id } },
          { new: true }
        );

        return resume;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
