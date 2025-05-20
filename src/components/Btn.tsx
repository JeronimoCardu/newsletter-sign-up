type Props = {
  children: string;
};

export default function Btn({ children }: Props) {
  return (
    <button className="bg-blue-800 hover:shadow-[0px_16px_32px_rgba(255,97,85,0.5)] cursor-pointer hover:bg-gradient-to-r hover:from-[#FF6A3A] hover:to-[#FF527B] textPreset2Bold py-4 w-full rounded-[.5rem] text-white">
      {children}
    </button>
  );
}
