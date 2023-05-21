import { NFTMetaData } from "../interfaces/NftMetadata";

export async function getNFTMetadata(
  ipfsUrl: string
): Promise<NFTMetaData | undefined> {
  try {
    const response = await fetch(ipfsUrl);
    const data = await response.json();

    const description: string = data.description;
    const imageUrl: string = data.image;
    const name: string = data.name;

    // Use the retrieved description and image URL as needed
    const metadata = {
      name,
      description,
      image: imageUrl,
    };
    return metadata;
  } catch (error) {
    console.error("Error retrieving NFT metadata:", error);
  } 

  return undefined
}
