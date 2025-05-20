import Btn from "./components/Btn";
import EmailInput from "./components/EmailInput";

export default function App() {
  return (
    <>
      <article className="desktop:grid tablet:h-fit desktop:w-fit desktop:grid-cols-2 tablet:rounded-[2.25rem] h-screen bg-white">
        <img
          className="desktop:hidden tablet:rounded-[2.5rem] tablet:p-6 w-full"
          src="/assets/images/illustration-sign-up-mobile.svg"
          alt="sign up"
        />
        <img
          className="desktop:block desktop:col-start-2 desktop:py-6 desktop:pr-6 desktop:justify-self-end desktop:row-start-1 hidden"
          src="/assets/images/illustration-sign-up-desktop.svg"
          alt="sign up"
        />
        <section className="desktop:col-start-1 desktop:pb-0 desktop:self-center desktop:row-start-1 tablet:pt-0 flex flex-col gap-[1.5rem] px-[1.5rem] py-[2.5rem]">
          <h1 className="textPreset1Mobile tablet:text-[3.5rem]">
            Stay updated!
          </h1>
          <p className="textPreset2Regular">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul>
            <li className="textPreset2Regular relative flex list-none gap-4 before:content-[url(assets/images/icon-list.svg)]">
              Product discovery and building what matters
            </li>
            <li className="textPreset2Regular relative flex list-none gap-4 before:content-[url(assets/images/icon-list.svg)]">
              Measuring to ensure updates are a success
            </li>
            <li className="textPreset2Regular relative flex list-none gap-4 before:content-[url(assets/images/icon-list.svg)]">
              And much more!
            </li>
          </ul>
          <div>
            <label className="textPreset3" htmlFor="email">
              Email address
            </label>
            <EmailInput />
          </div>
          <Btn>Subscribe to monthly newletter</Btn>
        </section>
      </article>
    </>
  );
}
