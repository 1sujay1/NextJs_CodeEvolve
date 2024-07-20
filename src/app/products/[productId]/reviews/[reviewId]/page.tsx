import { notFound } from "next/navigation"
export default function Reviews({ params }: { params: { productId: string, reviewId: string } }) {
    if (parseInt(params.reviewId) > 1000) {
        notFound()
    }
    return <>
        <h1>Reviews {params.reviewId} of Product {params.productId}</h1>
    </>
}