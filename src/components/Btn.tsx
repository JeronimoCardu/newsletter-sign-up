type Props = {
  children: string;
  setView?: (v: boolean) => void;
};

export default function Btn({ setView, children }: Props) {
  return (
    <button
      onClick={() => children.includes("Dismiss") && setView && setView(false)}
      className="textPreset2Bold w-full cursor-pointer rounded-[.5rem] bg-blue-800 py-4 text-white hover:bg-gradient-to-r hover:from-[#FF6A3A] hover:to-[#FF527B] hover:shadow-[0px_16px_32px_rgba(255,97,85,0.5)]"
    >
      {children}
    </button>
  );
}
