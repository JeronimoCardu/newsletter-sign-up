import Btn from "./Btn";

type Props = {
  view: boolean;
  setView: (v: boolean) => void;
};

export default function Modal({ view, setView }: Props) {
  return (
    <div
      className={`${!view && "hidden"} tablet:animate-start linear desktop:w-3/10 tablet:shadow-[0px_15px_60px_rgba(0,0,0,.25)] tablet:h-fit tablet:w-7/10 tablet:rounded-[2rem] tablet:p-[4rem] flex h-screen flex-col justify-around gap-[2rem] bg-white px-4 transition-all duration-300`}
    >
      <div className="flex flex-col gap-4">
        <img
          className="w-[4rem]"
          src="assets/images/icon-success.svg"
          alt="success"
        />
        <h1 className="textPreset1Mobile tablet:text-[3.5rem]">
          Thanks for subscribing!
        </h1>
        <p className="textPreset2Regular">
          A confirmation email has been sent to{" "}
          <strong>ash@loremcompany.com</strong>. Please open it and click the
          button inside to confirm your subscription.
        </p>
      </div>
      <Btn setView={setView}>Dismiss message</Btn>
    </div>
  );
}
