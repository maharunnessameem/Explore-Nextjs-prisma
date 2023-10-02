import Link from "next/link";


const AboutPage = () => {
    return (
        <div>
            <h1 className="text-4xl">AboutPage</h1 >
            <p className="py-10">This is our about page.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In incidunt nisi repellat eligendi reiciendis autem fugiat rerum! Sint dignissimos voluptate quasi eum doloremque est magnam. Excepturi eligendi et soluta dolores?</p>
            <Link href="/">Home Page</Link>
        </div>
    );
};

export default AboutPage;