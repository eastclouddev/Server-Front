import axios from 'axios'

export interface ZipCloudAddress {
  address1: string
  address2: string
  address3: string
  kana1: string
  kana2: string
  kana3: string
  prefcode: string
  zipcode: string
}

export const getAddressByPostalCode = async (
  postalCode: string
): Promise<ZipCloudAddress | null> => {
  try {
    const response = await axios.get(
      `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCode}`
    )
    if (response.data && response.data.results) {
      return response.data.results[0]
    } else {
      throw new Error('Address not found')
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
