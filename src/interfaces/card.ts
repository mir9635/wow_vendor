interface ICard {
    id: number;
    previewImg: string;
    category: string;
    title: string;
    rating: number;
    ratingCount: number;
    info: string;
    price: number;
    oldPrice: number;
    noReleased?: boolean;
}

export default ICard;