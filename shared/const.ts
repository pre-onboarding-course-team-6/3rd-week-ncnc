export interface BoxProps {
  name: string;
}

export interface ProductProps{
  id: number,
  name: string,
  originalPrice: number,
  minSellingPrice: number,
  count: number,
  conCategory2Id:number,
  conCategory2: {
    id: number,
    name: string
  }
}