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
  conCategory2: {
    id: number,
    name: string
  }
}
