import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client=sanityClient({
    projectId:"d72u8wmk",
    dataset:"production",
    apiVersion:"2022-09-06",
    useCdn:true
})
const builder=imageUrlBuilder(client);
export const urlFor=(source)=> builder.image(source);
