import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSchema, type typeSchema } from "../schemas/useSchema";
import Btn from "./Btn";

type Props = {
  setView: (v: boolean) => void;
};

export default function EmailInput({ setView }: Props) {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<typeSchema>({
    resolver: zodResolver(useSchema),
  });

  const onSubmit = handleSubmit(() => {
    setView(true);
    reset();
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="flex justify-between">
        <label className="textPreset3" htmlFor="email">
          Email address
        </label>
        {errors?.email?.message && (
          <p className="text-red textPreset3">{errors?.email?.message}</p>
        )}
      </div>
      <input
        {...register("email")}
        id="email"
        className={`${
          errors?.email?.message ? "text-red bg-red-100" : ""
        } textPreset2Regular mt-2 mb-4 w-full rounded-[.5rem] border-1 p-4 outline-0`}
        placeholder="email@company.com"
      />
      <Btn>Subscribe to monthly newsletter</Btn>
    </form>
  );
}
