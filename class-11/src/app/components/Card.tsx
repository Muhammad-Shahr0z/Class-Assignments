import Image from "next/image";

export default function ProductCard() {

    const products = [
      { id: 1, name: "Product 1", price: "$100", description: "Whey Protein-01", src:"/img-1.webp" },
      { id: 2, name: "Product 2", price: "$200", description: "Whey Protein-02" ,src:"/img-2.webp" },
      { id: 3, name: "Product 3", price: "$250", description: "Whey Protein-01",src:"/img-3.webp"  },
    ];
  
    return (
        <>
        <h1 className="text-center text-4xl font-semibold my-5 bg-slate-500 p-4">Muhammad Shahroz Sunday 2 To 5 Roll Number 453242</h1>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
            <div
            className="rounded-lg border border-gray-300 bg-white shadow-md p-4 text-center hover:shadow-lg transition-shadow flex flex-col justify-center items-center"
            key={product.id}
            >
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <Image src={product.src} alt={"imgs"} height={200} width={200}/>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="mt-2 text-green-600 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
      </>
    );
  }
  