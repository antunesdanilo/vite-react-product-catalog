import React, { ReactNode } from "react";
import * as Dialog from '@radix-ui/react-dialog';

interface DialogConfirmProps {
  open: boolean;
  title?: string;
  children?: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  buttonConfirmText?: string;
  buttonCancelText?: string;
}

const DialogConfirm: React.FC<DialogConfirmProps> = ({
  open,
  title,
  children,
  onConfirm,
  onCancel,
  buttonConfirmText,
  buttonCancelText
}) => {
  return (
    <Dialog.Root modal={true} open={open}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="DialogOverlay"
          onClick={onCancel}
        />
        <Dialog.Content className="DialogContent" data-testid="modal-signin">
          <Dialog.Title className="flex flex-row items-center justify-between pt-0 pb-2 DialogHeader">
            <div>{title}</div>
            <Dialog.Close className="close" onClick={onCancel}>
              <span aria-hidden="true">&times;</span>
            </Dialog.Close>
          </Dialog.Title>
          <div className="DialogDescription">
            <div className="scrollable">
              {children}
              <div className="flex flex-col gap-2 sm:flex-row justify-evenly mb-12">
                <button
                  onClick={onCancel}
                  className="border border-danger rounded-2xl sm:w-[160px] h-[44px] px-5 text-[18px] text-danger bg-white mt-3 hover:bg-danger hover:text-white"
                >{buttonCancelText || 'Cancelar'}</button>
                <button 
                  onClick={onConfirm}
                  className="border border-primary rounded-2xl sm:w-[160px] h-[44px] px-5 text-[18px] bg-primary text-white mt-3 hover:opacity-80"
                >{buttonConfirmText || 'Confirmar'}</button>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export { DialogConfirm };
