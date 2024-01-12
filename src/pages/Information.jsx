import Menu from "../components/Menu";
import BERLIN from "../assets/projects/BERLIN.jpg";

const Information = () => {
  return (
    <div className="bg-black text-white h-screen font-Montreal">
      <Menu />
      <div className="grid h-screen items-center">
        <div className="flex">
          <section className="w-full">
            <p className="text-balance text-7xl font-MontrealLight">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est aperiam, deleniti velit saepe ab veritatis eos facilis enim,
            </p>
            <p className="grid grid-cols-3 grid-rows-2 mt-28 gap-20 text-pretty">
              <p><a href="http://" target="_blank" rel="noopener noreferrer">WHYBRAND</a><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eligendi temporibus neque illum necessitatibus aperiam error incidunt quo, molestiae, voluptas est a officia distinctio culpa molestias voluptate alias magni aliquid.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, harum tempora! Qui doloremque maxime voluptates magnam. Quos fuga quas nemo quisquam atque beatae voluptas, sit, dolores ex cum excepturi expedita!</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia blanditiis odio adipisci temporibus quibusdam enim quidem nostrum dolorum excepturi nam! Similique fuga quaerat veritatis ex suscipit assumenda repudiandae laboriosam alias?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia blanditiis odio adipisci temporibus quibusdam enim quidem nostrum dolorum excepturi nam! Similique fuga quaerat veritatis ex suscipit assumenda repudiandae laboriosam alias?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia blanditiis odio adipisci temporibus quibusdam enim quidem nostrum dolorum excepturi nam! Similique fuga quaerat veritatis ex suscipit assumenda repudiandae laboriosam alias?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia blanditiis odio adipisci temporibus quibusdam enim quidem nostrum dolorum excepturi nam! Similique fuga quaerat veritatis ex suscipit assumenda repudiandae laboriosam alias?</p>
            </p>
          </section>
          <section className="w-3/4 pl-14">
            <img src={BERLIN} alt="profile img" />
            <caption className="absolute right-0 text-right">
              <a href="http://" target="_blank" rel="noopener noreferrer">Linkedin</a><br />
              <a href="http://" target="_blank" rel="noopener noreferrer">Instagram</a><br />
              <a href="mailto:">Mail</a>
            </caption>
          </section>
        </div>
      </div>
      <section>

      </section>
    </div>
  );
};

export default Information;