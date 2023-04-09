import axios from "../../utils/axios"
// tags_like=javascript&tags_like=react&id_ne=4&_limit=1

export const getRelatedVideos =async ({tags , id}) => {
    const limit = 5
    const relatedVideos = tags.map((tag) => `tags_like=${tag}`).join('&')+`&id_ne=${id}&_limit=${limit}`
  const response = await axios.get(`/videos/?${relatedVideos}`)
  return response.data
} 