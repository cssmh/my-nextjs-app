interface Props {
  params: {
    id: string;
  };
  searchParams?: {
    category: string;
  };
}
const Product: React.FC<Props> = ({ params, searchParams }) => {
  // console.log(params.id);
  return (
    <div className="text-2xl text-center py-10">
      Params: {params?.id} <br />
      SearchParams: {searchParams?.category}
    </div>
  );
};

export default Product;
