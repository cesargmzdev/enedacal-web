import Menu from "../components/Menu";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <Menu />
      <main className="grid h-[95dvh] place-items-center text-center text-white">
        <div className="flex flex-col gap-10">
          <h1 className="text-8xl">404!</h1>
          <h2 className="text-xl">
            Ey! We didn&apos;t find what you&apos;re looking for
          </h2>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
