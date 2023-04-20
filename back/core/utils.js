const { Muffler, Outer, Pant, Shirt, Shoe, Top } = require("../../back/models");

const getCatagori = {
  Top: {
    post: async function (cloth, req) {
      const top = await Top.postTopbyReq(req);
      await cloth.setTop(top);
    },
    postWithId: async function (req, clothId) {
      await Top.postTopWithClothId(req, clothId);
    },
    update: async function (req, clothId) {
      await Top.updateTopbyReq(req, clothId);
    },
  },
  Outer: {
    post: async function (cloth, req) {
      const outer = await Outer.postOuterbyReq(req);
      await cloth.setOuter(outer);
    },
    postWithId: async function (req, clothId) {
      await Outer.postOuterWithClothId(req, clothId);
    },
    update: async function (req, clothId) {
      await Outer.updateOuterbyReq(req, clothId);
    },
  },

  Shirt: {
    post: async function (cloth, req) {
      const shirt = await Shirt.postShirtbyReq(req);
      await cloth.setShirt(shirt);
    },
    postWithId: async function (req, clothId) {
      await Shirt.postShirtWithClothId(req, clothId);
    },
    update: async function (req, clothId) {
      await Shirt.updateShirtbyReq(req, clothId);
    },
  },
  Pant: {
    post: async function (cloth, req) {
      const pant = await Pant.postPantbyReq(req);
      await cloth.setPant(pant);
    },
    postWithId: async function (req, clothId) {
      await Pant.postPantWithClothId(req, clothId);
    },
    update: async function (req, clothId) {
      await Pant.updatePantbyReq(req, clothId);
    },
  },

  Shoe: {
    post: async function (cloth, req) {
      const shoe = await Shoe.postShoesbyReq(req);
      await cloth.setShoe(shoe);
    },
    postWithId: async function (req, clothId) {
      await Shoe.postShoesWithClothId(req, clothId);
    },
    update: async function (req, clothId) {
      await Shoe.updateShoesbyReq(req, clothId);
    },
  },

  Muffler: {
    post: async function (cloth, req) {
      const muffler = await Muffler.postMufflerbyReq(req);
      await cloth.setMuffler(muffler);
    },
    postWithId: async function (req, clothId) {
      await Muffler.postMufflerWithClothId(req, clothId);
    },
    update: async function (req, clothId) {
      await Muffler.updateMufflerbyReq(req, clothId);
    },
  },
};

module.exports = getCatagori;
