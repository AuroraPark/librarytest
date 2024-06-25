import { Button } from "../../../@/components/ui/button";
import { DialogClose, DialogTrigger } from "../../../@/components/ui/dialog";
import { useDialog } from "../../hook/useDialog";

export function Dialog() {
  const { isOpen, onClose } = useDialog();
  return (
    <Dialog
      onOpenChange={onClose}
      open={isOpen}
      modal
      defaultOpen={isOpen}
    ></Dialog>
  );
}
