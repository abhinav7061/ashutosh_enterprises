import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const formData = await req.formData();
        const image = formData.get('image');
        const title = formData.get('title');
        const description = formData.get('description')
        const slug = formData.get('slug');

        console.log({ image, title, description, slug });

        return NextResponse.json({ id: "id" });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to create new Category",
            error
        }, {
            status: 500
        })
    }
}