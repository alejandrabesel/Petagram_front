import ButtonMd from "../../buttons/button-md/ButtonMd";

export default function ModalLayout({
  handleClickClose,
  handleClick,
  title,
  children,
  textButton,
  subtitle,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
      <div className="relative flex h-[500px] w-[450px] flex-col items-center justify-between rounded-lg bg-white p-4">
        <div className="absolute top-2 right-2">
          <button onClick={handleClickClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-7 w-7 cursor-pointer rounded-full bg-red-500 text-white transition-all hover:h-8 hover:w-8"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-2 py-2 text-center">
          <h1 className="text-3xl font-bold text-primary_500">{title}</h1>
          <p className="text-xl ">{subtitle}</p>
        </div>

        <main className="flex h-3/5 w-5/6 items-center justify-center rounded-xl">
          {children}
        </main>

        <div className="flex w-full justify-around p-6 text-white">
          <ButtonMd danger text={"Cancelar"} md onClick={handleClickClose} />

          <ButtonMd md onClick={handleClick} text={textButton} />
        </div>
      </div>
    </div>
  );
}
