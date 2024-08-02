import { generateSlug } from "@/lib/generateSlug"
const arrayToOptions = (arr) => {
    return arr.map((item) => {
        return {
            value: generateSlug(item),
            title: item,
        }
    })
}

export default arrayToOptions