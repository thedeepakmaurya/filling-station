import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Select from "@/ui/Select";
import TextArea from "@/ui/TextArea";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="p-2 lg:h-screen">
      <div className="border-style h-full">
        <header className="flex h-16 items-center justify-between border-b border-indigo-900 px-1">
          <Image
            className="h-14 w-auto"
            src={"/logo.jpg"}
            alt="logo"
            width={200}
            height={100}
          />
          <Link
            className="border-b text-sm font-semibold text-indigo-900"
            href={`/login`}
          >
            Log In
          </Link>
        </header>
        <main className="p-1">
          <section className="border-style">
            <p className="p-style text-center">Tanker Transaction</p>
            <p className="p-style">Filling Details</p>
            <div className="grid lg:grid-cols-3">
              <div className="space-y-2 p-1">
                <p className="input-style">
                  Branch Name : <Select />
                </p>
                <p className="input-style">
                  Vehicle Reg No. :{" "}
                  <Select
                    options={[
                      "CG 07 C 8755",
                      "CG 07 C 8755",
                      "CG 07 C 8755",
                      "CG 07 C 8755",
                    ]}
                  />
                </p>
                <p className="input-style">
                  Empty Weight : <Input />
                </p>
                <p className="input-style">
                  Empty Pressure : <Input />
                </p>
                <p className="input-style">
                  Entry Date : <Input />
                </p>
                <p className="input-style">
                  Exit Date : <Input />
                </p>
              </div>
              <div className="space-y-2 p-1">
                <p className="input-style">
                  Product Name :{" "}
                  <Select options={["LAR", "LCO2", "LIN", "LOX"]} />
                </p>
                <p className="input-style">
                  Vitt No. :{" "}
                  <Select options={["100-01", "100-02", "100-03", "100-04"]} />
                </p>
                <p className="input-style">
                  Filled Weight : <Input />
                </p>
                <p className="input-style">
                  Filled Pressure : <Input />
                </p>
                <p className="input-style">
                  Entry Time : 
                </p>
                <p className="input-style">
                  Exit Time : 
                </p>
              </div>
              <div className="space-y-2 p-1">
                <p className="input-style">
                  Transaction No. : <Input />
                </p>
                <p className="input-style">
                  Transaction Data Date : <Input />
                </p>
                <p className="input-style">
                  Filling Station :{" "}
                  <Select
                    options={["Accident Site Musli D", "Accident Site Musli F"]}
                  />
                </p>
                <p className="input-style">
                  <input className="file:border file:font-normal file:border-gray-400 file:px-2 file:rounded" type="file" />
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-4 p-1">
              <Button label={"Refresh"} />
              <Button label={"Save"} />
              <Button label={"Delete"} />
              <Button label={"Search"} />
            </div>
          </section>

          <section className="border border-t-0 border-indigo-900">
            <p className="p-style">Dedancting Details</p>
            <div className="grid lg:grid-cols-3">
              <div className="space-y-2 p-1">
                <p className="input-style">
                  Decanting Station : <Select />
                </p>
                <p className="input-style">
                  Entry Date : <Input />
                </p>
                <p className="input-style">
                  Exit Date : <Input />
                </p>
                <p className="input-style">
                  <input className="file:border file:font-normal file:border-gray-400 file:px-2 file:rounded" type="file" />
                </p>
              </div>
              <div className="space-y-2 p-1">
                <p className="input-style">
                  Filled Weight : <Select />
                </p>
                <p className="input-style">
                  Entry Time : 
                </p>
                <p className="input-style">
                  Exit Time : 
                </p>
              </div>
              <div className="space-y-2 p-1">
                <p className="input-style">
                  Empty Weight : <Input />
                </p>
                <p className="input-style">
                  Filled Pressure : <Input />
                </p>
                <p className="input-style">
                  Empty Pressure : <Select />
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-4 p-1">
              <Button label={"Add"} />
              <Button label={"Save"} />
              <Button label={"Cancel"} />
            </div>
          </section>

          <section className="border border-t-0 border-indigo-900">
            <p className="p-style">Reporting Station Details</p>
            <div className="grid lg:grid-cols-3">
              <div className="space-y-2 p-1">
                <p className="input-style">
                  Reporting Date : <Input />
                </p>
                <p className="input-style">
                  Empty Weight : <Input />
                </p>
                <p className="input-style">
                  Entry Time : 
                </p>
              </div>
              <div className="space-y-2 p-1">
                <p className="input-style">
                  Reporting Station :{" "}
                  <Select options={["ACE Pipelines Rewari", "Aditya AIR"]} />
                </p>
                <p className="input-style">
                  Remarks : <TextArea />
                </p>
                <p className="input-style">
                  Empty Pressure : <Input />
                </p>
              </div>
              <div className="flex items-end space-y-2 p-1">
                <span className="flex items-center gap-2 text-sm font-semibold text-indigo-900">
                  <input type="checkbox" />
                  Acknowledge Reciept
                </span>
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-4 p-1">
              <Button label={"Save Reporting Station"} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
