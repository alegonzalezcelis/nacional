import AddButton from "./AddButton";

const Balance = () => {
  return (
    <>
      <div className="flex flex-col text-start m-5 p-5 rounded-lg bg-night text-white">
        <p className="bg-transparent text-xs font-light">Balance general</p>
        <div className="flex justify-between bg-transparent mt-5">
          <p className="text-3xl bg-transparent">$ 120.000</p>
          <AddButton />
        </div>
      </div>
    </>
  );
};

export default Balance;
