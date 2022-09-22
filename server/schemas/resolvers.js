const { AuthenticationError } = require("apollo-server-express");
const { User, Resume, Education, Project } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //get all resumes by a user
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("resumes")
          .populate("educations")
          .populate("projects");

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },

    //get single resume by id
    resume: async (parent, { _id }) => {
      return Resume.findOne({ _id });
    },

    resumes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Resume.find(params);
    },

    //get single education by id
    education: async (parent, { _id }) => {
      return Education.findOne({ _id });
    },

    educations: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Education.find(params);
    },

    //get single project by id
    project: async (parent, { _id }) => {
      return Project.findOne({ _id });
    },

    projects: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Project.find(params);
    },

    //get All users
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("resumes")
        .populate("educations")
        .populate("projects");
    },

    //get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("resumes")
        .populate("educations")
        .populate("projects");
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
          { $push: { resumes: resume._id } },
          { new: true }
        );

        return resume;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    updateEducation: async (parent, args, context) => {
      if (context.user) {
        const education = await Education.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { educations: education._id } },
          { new: true }
        );

        return education;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    updateProject: async (parent, args, context) => {
      if (context.user) {
        const project = await Project.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { projects: project._id } },
          { new: true }
        );

        return project;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
