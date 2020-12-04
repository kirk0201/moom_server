"use strict";

const { user, body_part } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "applepen@gmail.com",
          name: "John Doe",
          password:
            "3e03ab6d0588bf2eff59dcf1791c8ec4c432b259f95cf6475d15d2836983c8ab",
          birth: "20000314",
          sex: "male",
          promise: "전지현이 될꺼야",
          profile: "https://i.ibb.co/wMjpgvr/profile.jpg",
          type: "nomal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    // 방금 만든 유저의 아이디값 가져오기
    const newuser = await user.findOne({
      where: {
        email: "applepen@gmail.com",
      },
    });

    await queryInterface.bulkInsert(
      "body_part",
      [
        {
          body_part: "body_fat",
          goal: 15,
          user_id: newuser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          body_part: "chest",
          goal: 80,
          user_id: newuser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          body_part: "hip",
          goal: 80,
          user_id: newuser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          body_part: "shoulder",
          goal: 50,
          user_id: newuser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          body_part: "thigh",
          goal: 40,
          user_id: newuser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          body_part: "waist",
          goal: 50,
          user_id: newuser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          body_part: "weight",
          goal: 70,
          user_id: newuser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          body_part: "head",
          goal: 50,
          user_id: newuser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          body_part: "arm",
          goal: 20,
          user_id: newuser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          body_part: "height",
          goal: 170,
          user_id: newuser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          body_part: "neck",
          goal: 25,
          user_id: newuser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    // 방금 만든 body_part의 id 가져오기
    const body_fat = await body_part.findOne({
      where: {
        body_part: "body_fat",
        user_id: newuser.id,
      },
    });

    const chest = await body_part.findOne({
      where: {
        body_part: "chest",
        user_id: newuser.id,
      },
    });

    const hip = await body_part.findOne({
      where: {
        body_part: "hip",
        user_id: newuser.id,
      },
    });

    const shoulder = await body_part.findOne({
      where: {
        body_part: "shoulder",
        user_id: newuser.id,
      },
    });

    const thigh = await body_part.findOne({
      where: {
        body_part: "thigh",
        user_id: newuser.id,
      },
    });

    const waist = await body_part.findOne({
      where: {
        body_part: "waist",
        user_id: newuser.id,
      },
    });

    const weight = await body_part.findOne({
      where: {
        body_part: "weight",
        user_id: newuser.id,
      },
    });

    const head = await body_part.findOne({
      where: {
        body_part: "head",
        user_id: newuser.id,
      },
    });

    const arm = await body_part.findOne({
      where: {
        body_part: "arm",
        user_id: newuser.id,
      },
    });

    const height = await body_part.findOne({
      where: {
        body_part: "height",
        user_id: newuser.id,
      },
    });

    const neck = await body_part.findOne({
      where: {
        body_part: "neck",
        user_id: newuser.id,
      },
    });

    await queryInterface.bulkInsert(
      "body_data",
      [
        {
          value: 18,
          schedule: "20201130",
          user_id: newuser.id,
          body_part_id: body_fat.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 17.8,
          schedule: "20201201",
          user_id: newuser.id,
          body_part_id: body_fat.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 17.5,
          schedule: "20201202",
          user_id: newuser.id,
          body_part_id: body_fat.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 17.2,
          schedule: "20201203",
          user_id: newuser.id,
          body_part_id: body_fat.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 16.9,
          schedule: "20201204",
          user_id: newuser.id,
          body_part_id: body_fat.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 75,
          schedule: "20201130",
          user_id: newuser.id,
          body_part_id: chest.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 75,
          schedule: "20201201",
          user_id: newuser.id,
          body_part_id: chest.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 75.5,
          schedule: "20201202",
          user_id: newuser.id,
          body_part_id: chest.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 75.6,
          schedule: "20201203",
          user_id: newuser.id,
          body_part_id: chest.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 75.7,
          schedule: "20201204",
          user_id: newuser.id,
          body_part_id: chest.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 75,
          schedule: "20201130",
          user_id: newuser.id,
          body_part_id: hip.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 75,
          schedule: "20201201",
          user_id: newuser.id,
          body_part_id: hip.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 75.5,
          schedule: "20201202",
          user_id: newuser.id,
          body_part_id: hip.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 75.6,
          schedule: "20201203",
          user_id: newuser.id,
          body_part_id: hip.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 75.8,
          schedule: "20201204",
          user_id: newuser.id,
          body_part_id: hip.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 40,
          schedule: "20201130",
          user_id: newuser.id,
          body_part_id: shoulder.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 40,
          schedule: "20201201",
          user_id: newuser.id,
          body_part_id: shoulder.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 41,
          schedule: "20201202",
          user_id: newuser.id,
          body_part_id: shoulder.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 41.2,
          schedule: "20201203",
          user_id: newuser.id,
          body_part_id: shoulder.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 42,
          schedule: "20201204",
          user_id: newuser.id,
          body_part_id: shoulder.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 38,
          schedule: "20201130",
          user_id: newuser.id,
          body_part_id: thigh.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 38.5,
          schedule: "20201201",
          user_id: newuser.id,
          body_part_id: thigh.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 38.5,
          schedule: "20201202",
          user_id: newuser.id,
          body_part_id: thigh.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 38.4,
          schedule: "20201203",
          user_id: newuser.id,
          body_part_id: thigh.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 38.7,
          schedule: "20201204",
          user_id: newuser.id,
          body_part_id: thigh.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 53,
          schedule: "20201130",
          user_id: newuser.id,
          body_part_id: waist.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 52,
          schedule: "20201201",
          user_id: newuser.id,
          body_part_id: waist.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 52.2,
          schedule: "20201202",
          user_id: newuser.id,
          body_part_id: waist.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 52,
          schedule: "20201203",
          user_id: newuser.id,
          body_part_id: waist.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 51.8,
          schedule: "20201204",
          user_id: newuser.id,
          body_part_id: waist.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 77,
          schedule: "20201130",
          user_id: newuser.id,
          body_part_id: weight.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 76,
          schedule: "20201201",
          user_id: newuser.id,
          body_part_id: weight.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 76.3,
          schedule: "20201202",
          user_id: newuser.id,
          body_part_id: weight.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 75.9,
          schedule: "20201203",
          user_id: newuser.id,
          body_part_id: weight.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 75.8,
          schedule: "20201204",
          user_id: newuser.id,
          body_part_id: weight.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 52,
          schedule: "20201130",
          user_id: newuser.id,
          body_part_id: head.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 52.1,
          schedule: "20201201",
          user_id: newuser.id,
          body_part_id: head.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 51.8,
          schedule: "20201202",
          user_id: newuser.id,
          body_part_id: head.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 51.7,
          schedule: "20201203",
          user_id: newuser.id,
          body_part_id: head.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 51.5,
          schedule: "20201204",
          user_id: newuser.id,
          body_part_id: head.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 52,
          schedule: "20201130",
          user_id: newuser.id,
          body_part_id: head.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 52.1,
          schedule: "20201201",
          user_id: newuser.id,
          body_part_id: head.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 51.8,
          schedule: "20201202",
          user_id: newuser.id,
          body_part_id: head.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 51.7,
          schedule: "20201203",
          user_id: newuser.id,
          body_part_id: head.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 51.5,
          schedule: "20201204",
          user_id: newuser.id,
          body_part_id: head.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 18,
          schedule: "20201130",
          user_id: newuser.id,
          body_part_id: arm.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 18.2,
          schedule: "20201201",
          user_id: newuser.id,
          body_part_id: arm.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 18.2,
          schedule: "20201202",
          user_id: newuser.id,
          body_part_id: arm.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 18.3,
          schedule: "20201203",
          user_id: newuser.id,
          body_part_id: arm.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 18.5,
          schedule: "20201204",
          user_id: newuser.id,
          body_part_id: arm.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 169,
          schedule: "20201130",
          user_id: newuser.id,
          body_part_id: height.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 169.1,
          schedule: "20201201",
          user_id: newuser.id,
          body_part_id: height.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 169.3,
          schedule: "20201202",
          user_id: newuser.id,
          body_part_id: height.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 169.2,
          schedule: "20201203",
          user_id: newuser.id,
          body_part_id: height.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 169.4,
          schedule: "20201204",
          user_id: newuser.id,
          body_part_id: height.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 24,
          schedule: "20201130",
          user_id: newuser.id,
          body_part_id: neck.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 24.2,
          schedule: "20201201",
          user_id: newuser.id,
          body_part_id: neck.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 24.5,
          schedule: "20201202",
          user_id: newuser.id,
          body_part_id: neck.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 24.4,
          schedule: "20201203",
          user_id: newuser.id,
          body_part_id: neck.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 24.6,
          schedule: "20201204",
          user_id: newuser.id,
          body_part_id: neck.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("body_part", null, {});
    await queryInterface.bulkDelete("body_data", null, {});
  },
};
