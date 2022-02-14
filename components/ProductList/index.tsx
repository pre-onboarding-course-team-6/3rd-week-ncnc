import {ProductProps} from "shared/const"

type Props = {
  ProductList: ProductProps[]
}

const ProductList: React.FC<Props> = ({ProductList}) => {
  console.log(ProductList)
  return (
    <div>
      Enter
    </div>
  );
}

export default ProductList;
