"use strict";

const { user } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "applepen@gmail.com",
          name: "John Doe",
          password: "applesweet",
          birth: "20000314",
          sex: "male",
          promise: "전지현이 될꺼야",
          profile: "https://i.ibb.co/wMjpgvr/profile.jpg",
          type: "nomal",
          custom1: "head",
          custom2: "arm",
          custom3: "forearm",
          custom4: "hight",
          custom5: "neck",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    const newuser = await user.findOne({
      where: {
        email: "applepen@gmail.com",
      },
    });

    await queryInterface.bulkInsert(
      "shoulder",
      [
        {
          value: 30,
          user_id: newuser.id,
          schedule: "20201130",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 32,
          user_id: newuser.id,
          schedule: "20201201",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 33,
          user_id: newuser.id,
          schedule: "20201202",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 37,
          user_id: newuser.id,
          schedule: "20201203",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 38,
          user_id: newuser.id,
          schedule: "20201204",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "body_fat",
      [
        {
          value: 20,
          user_id: newuser.id,
          schedule: "20201130",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 19.9,
          user_id: newuser.id,
          schedule: "20201201",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 19.6,
          user_id: newuser.id,
          schedule: "20201202",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 19.3,
          user_id: newuser.id,
          schedule: "20201203",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 19,
          user_id: newuser.id,
          schedule: "20201204",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "chest",
      [
        {
          value: 100,
          user_id: newuser.id,
          schedule: "20201130",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 101,
          user_id: newuser.id,
          schedule: "20201201",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 101.5,
          user_id: newuser.id,
          schedule: "20201202",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 102,
          user_id: newuser.id,
          schedule: "20201203",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 102.5,
          user_id: newuser.id,
          schedule: "20201204",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "thigh",
      [
        {
          value: 70,
          user_id: newuser.id,
          schedule: "20201130",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 71,
          user_id: newuser.id,
          schedule: "20201201",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 71.5,
          user_id: newuser.id,
          schedule: "20201202",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 72,
          user_id: newuser.id,
          schedule: "20201203",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 72.5,
          user_id: newuser.id,
          schedule: "20201204",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "weight",
      [
        {
          value: 70,
          user_id: newuser.id,
          schedule: "20201130",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 71,
          user_id: newuser.id,
          schedule: "20201201",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 71.5,
          user_id: newuser.id,
          schedule: "20201202",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 72,
          user_id: newuser.id,
          schedule: "20201203",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 72.5,
          user_id: newuser.id,
          schedule: "20201204",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "hip",
      [
        {
          value: 100,
          user_id: newuser.id,
          schedule: "20201130",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 101,
          user_id: newuser.id,
          schedule: "20201201",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 101.5,
          user_id: newuser.id,
          schedule: "20201202",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 102,
          user_id: newuser.id,
          schedule: "20201203",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 102.5,
          user_id: newuser.id,
          schedule: "20201204",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "waist",
      [
        {
          value: 70,
          user_id: newuser.id,
          schedule: "20201130",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 71,
          user_id: newuser.id,
          schedule: "20201201",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 71.5,
          user_id: newuser.id,
          schedule: "20201202",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 72,
          user_id: newuser.id,
          schedule: "20201203",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 72.5,
          user_id: newuser.id,
          schedule: "20201204",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "custom1",
      [
        {
          value: 50,
          user_id: newuser.id,
          schedule: "20201130",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 51,
          user_id: newuser.id,
          schedule: "20201201",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 49,
          user_id: newuser.id,
          schedule: "20201202",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 47,
          user_id: newuser.id,
          schedule: "20201203",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 53,
          user_id: newuser.id,
          schedule: "20201204",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "custom2",
      [
        {
          value: 50,
          user_id: newuser.id,
          schedule: "20201130",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 51,
          user_id: newuser.id,
          schedule: "20201201",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 53,
          user_id: newuser.id,
          schedule: "20201202",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 54,
          user_id: newuser.id,
          schedule: "20201203",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 55,
          user_id: newuser.id,
          schedule: "20201204",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "custom3",
      [
        {
          value: 15,
          user_id: newuser.id,
          schedule: "20201130",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 15.5,
          user_id: newuser.id,
          schedule: "20201201",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 15.7,
          user_id: newuser.id,
          schedule: "20201202",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 14,
          user_id: newuser.id,
          schedule: "20201203",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 13.5,
          user_id: newuser.id,
          schedule: "20201204",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "custom4",
      [
        {
          value: 170,
          user_id: newuser.id,
          schedule: "20201130",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 171,
          user_id: newuser.id,
          schedule: "20201201",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 173,
          user_id: newuser.id,
          schedule: "20201202",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 175,
          user_id: newuser.id,
          schedule: "20201203",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 180,
          user_id: newuser.id,
          schedule: "20201204",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "custom5",
      [
        {
          value: 25,
          user_id: newuser.id,
          schedule: "20201130",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 24,
          user_id: newuser.id,
          schedule: "20201201",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 24.5,
          user_id: newuser.id,
          schedule: "20201202",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 23.5,
          user_id: newuser.id,
          schedule: "20201203",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 23,
          user_id: newuser.id,
          schedule: "20201204",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "goal",
      [
        {
          shoulder: 40,
          body_fat: 15,
          chest: 105,
          hip: 105,
          waist: 75,
          thigh: 75,
          custom1: 50,
          custom2: 57,
          custom3: 12,
          custom4: 185,
          custom5: 40,
          user_id: newuser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("shoulder", null, {});
    await queryInterface.bulkDelete("body_fat", null, {});
    await queryInterface.bulkDelete("chest", null, {});
    await queryInterface.bulkDelete("thigh", null, {});
    await queryInterface.bulkDelete("weight", null, {});
    await queryInterface.bulkDelete("hip", null, {});
    await queryInterface.bulkDelete("waist", null, {});
    await queryInterface.bulkDelete("custom1", null, {});
    await queryInterface.bulkDelete("custom2", null, {});
    await queryInterface.bulkDelete("custom3", null, {});
    await queryInterface.bulkDelete("custom4", null, {});
    await queryInterface.bulkDelete("custom5", null, {});
    await queryInterface.bulkDelete("goal", null, {});
  },
};
