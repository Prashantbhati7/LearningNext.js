import Dialogbox from "@/components/topcomp/Dialogbox.jsx";

export default function Home() {
  return (
    <div className="min-h-screen  text-white  bg-[#212121]">
      <h1>This is the Demo of using shadCN in react  </h1>
      <div className="h-full w-full flex justify-center items-center ">
         <Dialogbox trigger={'open the dialog box '} desc={'this is the description of this dialog box '} title='this is a demo dialog box '/>
      </div>
    </div>
  );
}
