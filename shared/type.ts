export interface BoxProps {
  name: string;
}

export interface ProductProps{
  id: number,
  name: string,
  imageUrl: string,
  originalPrice: number,
  minSellingPrice: number,
  count: number,
  conCategory2Id:number,
  conCategory2: {
    id: number,
    name: string
  }
}

export interface ProductIntroProps{
  imageUrl: string,
  name: string,
  originalPrice: number,
  minSellingPrice: number,
  id: number,
  conCategory2?: {
    id: number,
    name: string
  }
}

export interface ICategory {
  id: number
  name: string
  discountRate: number
  imageUrl: string
  conCategory2s: CategoryInfo[]
}

export interface CategoryInfo {
  id: number
  name: string
  conCategory1Id: number
  imageUrl: string
  conItems: Item[]
}

export interface Item {
  id: number
  name: string
  originalPrice: number
  minSellingPrice: number
  count: number
  imageUrl: string
}

export interface ConCategory {
  id: number,
  name: string,
  imageUrl: string
}

export interface FAQType {
  id: number,
  question: string,
  answer: string
}
