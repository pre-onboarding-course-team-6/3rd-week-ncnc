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

// brand page type
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

// 상품상세페이지 타입
export interface ItemDetail {
  id: number
  name: string
  originalPrice: number
  minSellingPrice: number
  ncSellingPrice: number
  information: string
  tip: any
  warning: string
  discountRate: number
  info: any
  isOnlyAccount: number
  conCategory2Id: number
  imageUrl: string
  conCategory2: BrandDetail
  options: ItemOption[]
}

export interface BrandDetail {
  id: number
  name: string
  adminUserId: number
  priority: number
  createdAt: string
  conCategory1Id: number
  info: string
  imageUrl: string
  conCategory1: CategoryDetail
}

export interface CategoryDetail {
  id: number
  name: string
  createdAt: string
  priority: number
  discountRate: number
  info: string
  imageUrl: string
}

export interface ItemOption {
  expireAt: string
  count: number
  sellingPrice: number
}
