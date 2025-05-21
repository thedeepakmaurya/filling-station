import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Select from "@/ui/Select";
import TextArea from "@/ui/TextArea";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-2  lg:h-screen">
      <div className="border border-indigo-900 h-full">
        <header className="h-16 px-1 border-b flex items-center justify-between border-indigo-900">
          <Image
            className=" h-14 w-auto"
            src={"/logo.jpg"}
            alt="logo"
            width={200}
            height={100}
          />
          <Link
            className="text-sm text-indigo-900 border-b font-semibold"
            href={`/login`}
          >
            Log In
          </Link>
        </header>
        <main className="p-1">
          <section className="border border-indigo-900 ">
            <p className="text-sm font-semibold text-center text-indigo-900 border-b border-indigo-900">
              Tanker Transaction
            </p>
            <p className="text-sm px-1 font-semibold text-indigo-900 border-b border-indigo-900">
              Filling Details
            </p>
            <div className="grid lg:grid-cols-3 ">
              <div className="p-1 space-y-2">
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Branch Name : <Select />
                </p>
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Vehicle Reg No. : <Select options={['CG 07 C 8755', 'CG 07 C 8755', 'CG 07 C 8755', 'CG 07 C 8755']} />
                </p>
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Empty Weight : <Input />
                </p>
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Empty Pressure : <Input />
                </p>
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Entry Date : <Input />
                </p>
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Exit Date : <Input />
                </p>
              </div>
              <div className="p-1 space-y-2">
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Product Name : <Select options={["LAR", "LCO2", "LIN", "LOX"]} />
                </p>
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Vitt No. : <Select options={["100-01", "100-02", "100-03", "100-04"]} />
                </p>
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Filled Weight : <Input />
                </p>
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Filled Pressure : <Input />
                </p>
              </div>
              <div className="p-1 space-y-2">
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Transaction No. : <Input />
                </p>
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Transaction Data Date : <Input />
                </p>
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Filling Station : <Select  options={["Accident Site Musli D", "Accident Site Musli F"]}/>
                </p>
              </div>
            </div>
            <div className="flex p-1 w-full justify-center items-center gap-4">
              <Button label={"Refresh"} />
              <Button label={"Save"} />
              <Button label={"Delete"} />
              <Button label={"Search"} />
            </div>
          </section>

          <section className="border border-t-0 border-indigo-900 ">
            <p className="text-sm px-1 font-semibold text-indigo-900 border-b border-indigo-900">
              Dedancting Details
            </p>
            <div className="grid lg:grid-cols-3 ">
              <div className="p-1 space-y-2">
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Decanting Station : <Select />
                </p>
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Entry Date : <Input />
                </p>
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Exit Date : <Input />
                </p>
              </div>
              <div className="p-1 space-y-2">
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Filled Weight : <Select />
                </p>
              </div>
              <div className="p-1 space-y-2">
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Empty Weight : <Input />
                </p>
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Filled Pressure : <Input />
                </p>
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Empty Pressure : <Select />
                </p>
              </div>
            </div>
            <div className="flex p-1 w-full justify-center items-center gap-4">
              <Button label={"Add"} />
              <Button label={"Save"} />
              <Button label={"Cancel"} />
            </div>
          </section>

          <section className="border border-t-0 border-indigo-900 ">
            <p className="text-sm px-1 font-semibold text-indigo-900 border-b border-indigo-900">
              Reporting Station Details
            </p>
            <div className="grid lg:grid-cols-3 ">
              <div className="p-1 space-y-2">
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Reporting Date : <Input />
                </p>
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Empty Weight : <Input />
                </p>
              </div>
              <div className="p-1 space-y-2">
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Reporting Station : <Select options={["ACE Pipelines Rewari", "Aditya AIR"]} />
                </p>
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Remarks : <TextArea />
                </p>
                <p className="text-sm flex lg:w-[80%] justify-between  text-indigo-900 font-semibold">
                  Empty Pressure : <Input />
                </p>
              </div>
              <div className="p-1 flex items-end space-y-2">
                <span className="flex items-center gap-2 text-sm font-semibold text-indigo-900">
                  <input type="checkbox" />
                  Acknowledge Reciept
                </span>
              </div>
            </div>
            <div className="flex p-1 w-full justify-center items-center gap-4">
              <Button label={"Save Reporting Station"} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
