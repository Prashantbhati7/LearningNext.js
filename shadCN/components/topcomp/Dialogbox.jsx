import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogPortal } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";



const Dialogbox = ({title,desc,trigger}) => {
  return (
    <div>
       <Dialog>
        <DialogTrigger><Button size="lg" className={'outline-2  bg-linear-90 from-green-300 to-orange-300 cursor-pointer border-white/20 shadow  hover:shadow-blue-400 text-black outline-lime-600 rounded-2xl '}> Open  </Button></DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogPortal></DialogPortal>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    </div>
  )
}

export default Dialogbox;
