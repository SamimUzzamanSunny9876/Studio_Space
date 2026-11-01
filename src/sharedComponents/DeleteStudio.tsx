"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FiTrash2 } from "react-icons/fi";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const DeleteStudio = ({ id }: { id: string }) => {
  const router = useRouter();

  const handleDeleteStudio = async () => {
    try {
      const res = await fetch(`http://localhost:8000/studios/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      toast.success("Studio removed successfully", { theme: "colored" });
      router.push("/studios");
      router.refresh();
    } catch (error) {
      toast.error("Failed to delete studio", { theme: "colored" });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger >
        <Button variant="outline" className="gap-2 text-red-500 border-red-500 bg-white hover:bg-red-50 hover:text-red-600 shadow-sm">
          <FiTrash2 /> Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-[#222222]">Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your workspace listing and remove its data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleDeleteStudio}
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            Delete Listing
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteStudio;