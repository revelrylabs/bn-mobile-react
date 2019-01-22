import {cloudinaryCloud, cloudinaryUploadPreset} from './constants/config'

const uploadURL = `https://api.cloudinary.com/v1_1/${cloudinaryCloud}/image/upload`

function encodeBody(object) {
  const formData = new FormData()

  Object.keys(object).forEach(key => formData.append(key, object[key]))

  return formData
}

export async function uploadImageToCloudinary(file) {
  const response = await fetch(uploadURL, {method: 'post', body: encodeBody({
    file,
    upload_preset: cloudinaryUploadPreset,
  })})

  return (await response.json()).secure_url
}
