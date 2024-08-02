import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const formData = await req.formData();
        const title = formData.get('title');
        const expiryDate = formData.get('expiryDate');
        const couponCode = formData.get('couponCode');
        const discount = formData.get('discount');
        const minAmount = formData.get('minAmount');
        const discountType = formData.get('discountType');
        const image = formData.get('image');
        console.log({ title, image, expiryDate, couponCode, discountType, discount, minAmount });
        return NextResponse.json({ id: "id" });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to create new Coupon",
            error
        }, {
            status: 500
        })
    }
}