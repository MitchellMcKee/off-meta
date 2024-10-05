export interface CardInfo {
    id: number;
    // name is array to also represent partners
    card: string[];
    relatedItems: string[];
    imageLinks: string[];
    totalEntries: number;
}