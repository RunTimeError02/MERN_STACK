const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name:'dwfoosd7a',
  api_key:'671684898121751',
  api_secret:'rvelEBASSYzdpF1jePKZMi0j3sA',
});

const cloudinaryUploadImg = async (fileToUploads) => {
    return new Promise((resolve) => {
      cloudinary.uploader.upload(fileToUploads, (result) => {
        resolve(
          {
            url: result.secure_url,
            asset_id : result.asset_id,
            public_id: result.public_id,
          },
          {
            resource_type: "auto",
          }
        );
      });
    });
  };

  const cloudinaryDeleteImg = async (fileToUploads) => {
    return new Promise((resolve) => {
      cloudinary.uploader.destroy(fileToUpDelete, (result) => {
        resolve(
          {
            url: result.secure_url,
            asset_id : result.asset_id,
            public_id: result.public_id,
          },
          {
            resource_type: "auto",
          }
        );
      });
    });
  };


  module.exports={cloudinaryUploadImg, cloudinaryDeleteImg};