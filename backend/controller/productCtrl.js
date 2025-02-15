const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const slugify = require('slugify');
const User = require("../models/userModel");
// const { cloudinaryUploadImg, cloudinaryDeleteImg } = require("../utils/cloudinary");
const validateMongoDbId = require("../utils/validateMongodbId");
const fs = require('fs');

const createProduct = asyncHandler(async (req,res) => {
    try {
        if(req.body.title){
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct)
    } catch(error){
        throw new Error(error);
    }
    // try {
    //     if (req.body.title) {
    //       req.body.slug = slugify(req.body.title);
    //     }
    //     const newProduct = await Product.create(req.body);
    //     res.json(newProduct);
    //   } catch (error) {
    //     throw new Error(error);
    //   }
});
const updateProduct = asyncHandler(async (req, res) => {
    const {id} = req.params;
    // validateMongoDbId(id);
    try {
      if (req.body.title) {
        req.body.slug = slugify(req.body.title);
      }
      const updateProduct = await Product.findOneAndUpdate({ _id: { $eq: id } } , req.body, {
        new: true,
      });
      if (!updateProduct) {
                return res.status(404).json({ message: 'Product not found' });
              }
      res.json(updateProduct);
    } catch (error) {
      throw new Error(error);
    }
  });
// const updateProduct = asyncHandler(async (req, res) => {
//     const { productId } = req.params;
//     console.log('Product ID:', productId);
//     console.log('Request Body:', req.body);
//     try {
//       if (req.body.title) {
//         req.body.slug = slugify(req.body.title);
//       }
//       const updatedProduct = await Product.findOneAndUpdate({ _id: productId }, req.body, {
//         new: true,
//       });
//       console.log('Updated Product:', updatedProduct);
//       if (!updatedProduct) {
//         return res.status(404).json({ message: 'Product not found' });
//       }
//       res.json(updatedProduct);
//     } catch (error) {
//       console.error('Error updating product:', error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
// });

const deleteProduct = asyncHandler(async (req, res) => {
    const {id} = req.params;
    // validateMongoDbId(id);
    try {
      const deleteProduct1 = await Product.findOneAndDelete(id);
      res.json(deleteProduct1);
    } catch (error) {
      throw new Error(error);
    }
  });

const getaProduct = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try{
        const findProduct = await Product.findById(id);
        res.json(findProduct);
    } catch(error){
        throw new Error(error);
    }
})

const getAllProduct = asyncHandler(async (req,res)=>{
    try{
      //filtering
      const queryObj = {...req.query};
      const excludeFields = ["page","sort","limit","fields"];
      excludeFields.forEach(el=> delete queryObj[el]);
      console.log(queryObj);
      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
      
      let query = Product.find(JSON.parse(queryStr));

      //sorting
      if(req.query.sort){
        const sortBy = req.query.sort.split(",").join(" ");
        query = query.sort(sortBy);
      }else{
        query = query.sort("-createdAt");
      }

       //limiting the fields 
       if(req.query.fields){
        const fields = req.query.fields.split(",").join(" ");
        query = query.select(fields);
      }else{
        query = query.select("-__v");
      }
      // pagination
      const page = req.query.page; 
      const limit = req.query.limit;
      const skip = (page - 1)* limit;
      query = query.skip(skip).limit(limit);
      if(req.query.page){
        const productCount = await Product.countDocuments();
        if(skip >= productCount) throw new Error("This page does not exists");
      }
      console.log(page, limit, skip);

      const product = await query;
      res.json(product);
    } catch(error){
      throw new Error(error);
    }
});

const addToWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { prodId } = req.body;
  try {
    const user = await User.findById(_id);
    const alreadyadded = user.wishlist.find((id) => id.toString() === prodId);
    if (alreadyadded) {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});

// const rating = asyncHandler(async (req, res) => {
//   const { _id } = req.user;
//   const { star, prodId} = req.body;
//  try{
//   const product = await Product.findById(prodId);
//   let alreadyRated = product.ratings.find(
//     (userId) => userId.postedby.toString() === _id.toString()
//   );
//   if (alreadyRated) {
//     const updateRating = await Product.updateOne(
//       {
//         ratings: { $elemMatch: alreadyRated },
//       },
//       {
//         $set: { "ratings.$.star": star },
//         // "ratings.$.comment": comment
//       },
//       {
//         new: true,
//       }
//     );
//     res.json(updateRating);
//   }else{
//     const rateProduct = await Product.findByIdAndUpdate(
//       prodId,
//       {
//         $push: {
//           ratings: {
//             star: star,
//             // comment: comment,
//             postedby: _id,
//           },
//         },
//       },
//       {
//         new: true,
//       }
//     );
//     res.json(rateProduct);
//   }
//  }catch(error){
//   throw new Error(error);
//  }

// });
const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, prodId, comment } = req.body;
  try {
    const product = await Product.findById(prodId);
    let alreadyRated = product.ratings.find(
      (userId) => userId.postedby.toString() === _id.toString()
    );
    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: { "ratings.$.star": star, "ratings.$.comment": comment },
        },
        {
          new: true,
        }
      );
    } else {
      const rateProduct = await Product.findByIdAndUpdate(
        prodId,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedby: _id,
            },
          },
        },
        {
          new: true,
        }
      );
    }
    const getallratings = await Product.findById(prodId);
    let totalRating = getallratings.ratings.length;
    let ratingsum = getallratings.ratings
      .map((item) => item.star)
      .reduce((prev, curr) => prev + curr, 0);
    let actualRating = Math.round(ratingsum / totalRating);
    let finalproduct = await Product.findByIdAndUpdate(
      prodId,
      {
        totalrating: actualRating,
      },
      { new: true }
    );
    res.json(finalproduct);
  } catch (error) {
    throw new Error(error);
  }
});

// const uploadImages = asyncHandler(async (req, res) => {
//   try {
//     const uploader = (path) => cloudinaryUploadImg(path, "images");
//     const urls = [];
//     const files = req.files;
//     for (const file of files) {
//       const { path } = file;
//       const newpath = await uploader(path);
//       console.log(newpath);
//       urls.push(newpath);
//       // fs.unlinkSync(path);
//     }
//     const images = urls.map((file) => {
//       return file;
//     });
//     res.json(images);
//   } catch (error) {
//     throw new Error(error);
//   }
// });

// const deleteImages = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deleted = cloudinaryDeleteImg(id, "images");
//     res.json({ message: "Deleted" });
//   } catch (error) {
//     throw new Error(error);
//   }
// });

module.exports = {createProduct, getaProduct,getAllProduct,updateProduct,deleteProduct,
addToWishlist, rating};
