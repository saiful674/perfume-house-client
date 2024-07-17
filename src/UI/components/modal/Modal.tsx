import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { RiCloseFill } from "react-icons/ri";

type TDialog = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ children, isOpen, onClose }: TDialog) => {
  return (
    <>
      <Dialog defaultOpen={true} open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-xl  md:max-w-4xl w-full h-full flex flex-col justify-center items-center">
          <DialogHeader>
            <DialogDescription>{children}</DialogDescription>
          </DialogHeader>
          <DialogFooter
            className="absolute top-2 right-2 z-50 bg-main p-1 rounded-full w-max flex justify-center items-center text-white text-xl"
            onClick={onClose}
          >
            <button className="">
              <RiCloseFill />
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
