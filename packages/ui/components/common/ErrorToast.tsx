import * as Toast from "@radix-ui/react-toast";

type ErrorToastProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  errorMessage: string | null;
};

export const ErrorToast = ({
  open,
  setOpen,
  errorMessage,
}: ErrorToastProps) => {
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className="bg-red-500 text-white p-4 rounded-lg shadow-lg"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="font-bold">오류 발생</Toast.Title>
        <Toast.Description>{errorMessage}</Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 p-4" />
    </Toast.Provider>
  );
};
