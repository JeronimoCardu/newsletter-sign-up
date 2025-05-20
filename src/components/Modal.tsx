import Btn from "./Btn";

export default function Modal() {
  return (
    <div className="flex px-4 h-screen justify-around tablet:p-[4rem] flex-col gap-[2rem]">
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
      <Btn>Dismiss message</Btn>
    </div>
  );
}
