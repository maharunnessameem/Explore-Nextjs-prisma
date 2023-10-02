import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl">HomePage</h1 >
      <p className="py-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In incidunt nisi repellat eligendi reiciendis autem fugiat rerum! Sint dignissimos voluptate quasi eum doloremque est magnam. Excepturi eligendi et soluta dolores?</p>
      <Link href="/about">About Page</Link>
    </div>
  );
};

export default HomePage;